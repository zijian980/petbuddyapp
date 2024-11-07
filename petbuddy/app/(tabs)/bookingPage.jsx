import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Button, } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
//import DateTimePicker from '@react-native-community/datetimepicker';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { Picker } from '@react-native-picker/picker'
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
        rates: '$20/hour',
        reviews: [
          { reviewer: 'John Doe', comment: 'Great walking service!', rating: 5 },
          { reviewer: 'Jane Smith', comment: 'Very reliable walker.', rating: 4 },
        ],
      },
      {
        name: 'Grooming',
        availableTimeslots: ['13:00', '14:00', '15:00', '16:00', '17:00'],
        rates: '$25/hour',
        reviews: [
          { reviewer: 'Alice Brown', comment: 'Excellent grooming!', rating: 5 },
          { reviewer: 'Bob Johnson', comment: 'Very professional.', rating: 4 },
        ],
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
        rates: '$30/hour',
        reviews: [
          { reviewer: 'Alice Brown', comment: 'Excellent walking service!', rating: 5 },
          { reviewer: 'Bob Johnson', comment: 'Good with pets.', rating: 4 },
        ],
      },
      {
        name: 'Training',
        availableTimeslots: ['11:00', '12:00', '13:00', '14:00', '15:00'],
        rates: '$35/hour',
        reviews: [
          { reviewer: 'Charlie Davis', comment: 'Great trainer!', rating: 5 },
          { reviewer: 'Dana Evans', comment: 'Very effective training.', rating: 4 },
        ],
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
        rates: '$25/hour',
        reviews: [
          { reviewer: 'Eve Foster', comment: 'Great walking service!', rating: 5 },
          { reviewer: 'Frank Green', comment: 'Very reliable walker.', rating: 4 },
        ],
      },
      {
        name: 'Sitting',
        availableTimeslots: ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00'],
        rates: '$40/hour',
        reviews: [
          { reviewer: 'Grace Hill', comment: 'Excellent sitting service!', rating: 5 },
          { reviewer: 'Hank Ives', comment: 'Very professional sitter.', rating: 4 },
        ],
      },
    ],
    location: 'Location 3',
    imageUrl: require('./../../assets/images/dog.png'), // Adjust path as necessary
    introduction: 'I am Caretaker 3, with 7 years of experience in pet care.',
  },
];

export default function bookingPage() {
  const navigation = useNavigation();
  const route = useRoute();
  const { caretakerId, serviceName } = route.params;

  const caretaker = caretakers.find(c => c.id === caretakerId);

  if (!caretaker) {
    return (
      <View style={styles.container}>
        <Text>Caretaker not found</Text>
      </View>
    );
  }

  const service = caretaker.servicesOffered.find(s => s.name.toLowerCase() === serviceName.toLowerCase());

  if (!service) {
    return (
      <View style={styles.container}>
        <Text>Service not found</Text>
      </View>
    );
  }

  const [selectedPet, setSelectedPet] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedTimeslots, setSelectedTimeslots] = useState([]);

  const showDatePicker = () => setDatePickerVisibility(true);

  const hideDatePicker = () => setDatePickerVisibility(false);

  const handleConfirm = (date) => {
    setSelectedDate(date);
    hideDatePicker();
  };
  const handlePetChange = (value) => {
    setSelectedPet(value);
  };

  const handleAddTimeslot = () => {
    const timeString = selectedDate.toTimeString().slice(0, 5);
    if (service.availableTimeslots.includes(timeString)) {
      setSelectedTimeslots([...selectedTimeslots, selectedDate]);
    }
  };

  const handleTimeslotCancel = (index) => {
    setSelectedTimeslots(prev => prev.filter((_, i) => i !== index));
  };

  const handleSaveAndProceedToPayment = async () => {
    const dataToSave = {
      caretakerName: caretaker.name,
      serviceType: service.name,
      location: caretaker.location,
      petName: selectedPet,
      timeslots: selectedTimeslots,
    };

    try {
      // Save to AsyncStorage
      await AsyncStorage.setItem('bookingData', JSON.stringify(dataToSave));

      // Navigate to payment page
      navigation.navigate('paymentPage');
    } catch (error) {
      console.error('Error saving data', error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Image source={caretaker.imageUrl} style={styles.image} />
        <View style={styles.info}>
          <Text style={styles.name}>{caretaker.name}</Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.backButton}>← Back</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.details}>
        <Text style={styles.boldText}>Experience: </Text><Text>{caretaker.experience}</Text>
        <Text style={styles.boldText}>Service: </Text><Text>{service.name}</Text>
        <Text style={styles.boldText}>Rates: </Text><Text>{service.rates}</Text>
        <Text style={styles.boldText}>Location: </Text><Text>{caretaker.location}</Text>
      </View>
      <View style={styles.petSelection}>
        <Text>Choose Pet</Text>
        <Picker
          selectedValue={selectedPet}
          onValueChange={handlePetChange}
        >
          <Picker.Item label="Select a pet" value="" />
          <Picker.Item label="Pet 1" value="Pet 1" />
          <Picker.Item label="Pet 2" value="Pet 2" />
          <Picker.Item label="Pet 3" value="Pet 3" />
        </Picker>
      </View>
      <View style={styles.dateSelection}>
        <Text>Choose Date and Time</Text>
        <Button title="Select Date and Time" onPress={showDatePicker} />
          <DateTimePicker
            isVisible={isDatePickerVisible}
            mode="datetime"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
        
        <Button title="Add Timeslot" onPress={handleAddTimeslot} />
      </View>
      <View style={styles.selectedTimeslots}>
        <Text>Selected Timeslots:</Text>
        {selectedTimeslots.map((timeslot, index) => (
          <View key={index} style={styles.timeslot}>
            <Text>{timeslot.toLocaleString()}</Text>
            <TouchableOpacity onPress={() => handleTimeslotCancel(index)}>
              <Text style={styles.cancelButton}>Cancel</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
      <TouchableOpacity onPress={handleSaveAndProceedToPayment} style={styles.bookButton}>
        <Text style={styles.bookButtonText}>Book Now</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

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
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 16,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  backButton: {
    color: '#FF8C00',
    fontSize: 18,
    marginTop: 8,
  },
  details: {
    marginBottom: 16,
  },
  petSelection: {
    marginBottom: 16,
  },
  dateSelection: {
    marginBottom: 16,
  },
  selectedTimeslots: {
    marginBottom: 16,
  },
  timeslot: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cancelButton: {
    color: 'red',
  },
  bookButton: {
    backgroundColor: '#FF8C00',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  bookButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  boldText: {
    fontWeight: 'bold',
  },
});
