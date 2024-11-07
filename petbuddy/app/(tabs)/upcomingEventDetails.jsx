import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const events = [
  {
    id: 1,
    name: 'Event 1',
    date: '2023-10-01',
    location: 'Location 1',
    time: '10:00 AM',
    avatarUrl: require('./../../assets/images/dog.png'), // Adjust the path as needed
  },
  {
    id: 2,
    name: 'Event 2',
    date: '2023-10-02',
    location: 'Location 2',
    time: '11:00 AM',
    avatarUrl: require('./../../assets/images/dog.png'),
  },
  {
    id: 3,
    name: 'Event 3',
    date: '2023-10-03',
    location: 'Location 3',
    time: '12:00 PM',
    avatarUrl: require('./../../assets/images/dog.png'),
  },
];

const upcomingEventDetails = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { id } = route.params; // Assuming ID is passed as a parameter

  const event = events.find(event => event.id === parseInt(id, 10));

  if (!event) {
    return (
      <View style={styles.container}>
        <Text>Event not found</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('upcomingEvents')}>
          <Text style={styles.backLink}>←</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Manage Booking</Text>
      </View>
      <View style={styles.eventInfo}>
        <Image source={event.avatarUrl} style={styles.avatar} />
        <Text style={styles.eventName}>{event.name}</Text>
      </View>
      <View style={styles.details}>
        <Text style={styles.detailText}>Date: {event.date}</Text>
        <Text style={styles.detailText}>Location: {event.location}</Text>
        <Text style={styles.detailText}>Time: {event.time}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Change Time</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Cancel Booking</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  backLink: {
    color: '#FF8C00',
    fontSize: 24,
    marginRight: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  eventInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  avatar: {
    width: 128,
    height: 128,
    borderRadius: 64,
    marginRight: 16,
  },
  eventName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  details: {
    alignItems: 'center',
  },
  detailText: {
    color: '#4A4A4A',
    marginBottom: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 16,
    gap: 16,
  },
  button: {
    backgroundColor: '#FF8C00',
    padding: 12,
    borderRadius: 4,
  },
  buttonText: {
    color: '#FFFFFF',
  },
});

export default upcomingEventDetails;
