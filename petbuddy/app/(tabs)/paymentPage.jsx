import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const caretakers = [
  {
    id: 1,
    name: 'Caretaker 1',
    experience: '5 years',
    servicesOffered: [
      {
        name: 'Walking',
        availableTimeslots: ['14:00', '15:00', '16:00', '17:00'],
        rates: 20,
      },
      {
        name: 'Grooming',
        availableTimeslots: ['13:00', '14:00', '15:00', '16:00', '17:00'],
        rates: 25,
      },
    ],
    location: 'Location 1',
    imageUrl: require('./../../assets/images/dog.png'), // Adjust path as necessary
    introduction: 'I am Caretaker 1, with 5 years of experience in pet care.',
  },
  {
    id: 2,
    name: 'Caretaker 2',
    experience: '3 years',
    servicesOffered: [
      {
        name: 'Walking',
        availableTimeslots: ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00'],
        rates: 30,
      },
      {
        name: 'Training',
        availableTimeslots: ['11:00', '12:00', '13:00', '14:00', '15:00'],
        rates: 35,
      },
    ],
    location: 'Location 2',
    imageUrl: require('./../../assets/images/dog.png'), // Adjust path as necessary
    introduction: 'I am Caretaker 2, specializing in pet training.',
  },
  {
    id: 3,
    name: 'Caretaker 3',
    experience: '7 years',
    servicesOffered: [
      {
        name: 'Walking',
        availableTimeslots: ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00'],
        rates: 25,
      },
      {
        name: 'Sitting',
        availableTimeslots: ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00'],
        rates: 40,
      },
    ],
    location: 'Location 3',
    imageUrl: require('./../../assets/images/dog.png'), // Adjust path as necessary
    introduction: 'I am Caretaker 3, with 7 years of experience in pet care.',
  },
];

const paymentPage = () => {
  const navigation = useNavigation();
  const [bookingData, setBookingData] = useState(null);

  useEffect(() => {
    const fetchBookingData = async () => {
      try {
        const data = await AsyncStorage.getItem('bookingData');
        if (data) {
          setBookingData(JSON.parse(data));
        }
      } catch (error) {
        console.error('Error fetching booking data', error);
      }
    };

    fetchBookingData();
  }, []);

  if (!bookingData) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  const { caretakerName, serviceType, location, petName, timeslots } = bookingData;
  const caretaker = caretakers.find(c => c.name === caretakerName);

  if (!caretaker) {
    return (
      <View style={styles.container}>
        <Text>Caretaker not found</Text>
      </View>
    );
  }

  const service = caretaker.servicesOffered.find(s => s.name.toLowerCase() === serviceType.toLowerCase());

  if (!service) {
    return (
      <View style={styles.container}>
        <Text>Service not found</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>←</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Payment</Text>
      </View>
      <View style={styles.details}>
        <Text><Text style={styles.boldText}>Caretaker:</Text> {caretakerName}</Text>
        <Text><Text style={styles.boldText}>Service:</Text> {serviceType}</Text>
        <Text><Text style={styles.boldText}>Location:</Text> {location}</Text>
        <Text><Text style={styles.boldText}>Pet’s name:</Text> {petName}</Text>
        <Text><Text style={styles.boldText}>Timeslots chosen:</Text> {timeslots.join(', ')}</Text>
      </View>
      <View style={styles.fee}>
      <Text><Text style={styles.boldText}>Service Fee:</Text> ${service.rates * timeslots.length}</Text>
        <Text>Please make your payment via the QR code</Text>
      </View>
      <Image source={require('./../../assets/images/qr-code.png')} style={styles.qrCode} />
      <TouchableOpacity style={styles.payButton}>
        <Text style={styles.payButtonText}>Pay</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  backButton: {
    color: '#FF8C00',
    fontSize: 24,
    marginRight: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  details: {
    marginBottom: 16,
  },
  fee: {
    marginBottom: 16,
  },
  qrCode: {
    width: 200,
    height: 200,
    marginBottom: 16,
  },
  payButton: {
    backgroundColor: '#FF8C00',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  payButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  boldText: {
    fontWeight: 'bold',
  },
});

export default paymentPage;
