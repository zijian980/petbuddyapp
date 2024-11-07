import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

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

const eventDetails = ({ route }) => {
  const navigation = useNavigation();
  const { id } = route.params; // Assuming id is passed as a route parameter
  const event = events.find(event => event.id === parseInt(id));

  if (!event) {
    return <Text>Event not found</Text>;
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('upcomingEvents')}>
        <Text style={styles.backLink}>←</Text>
      </TouchableOpacity>
      <Text style={styles.title}>{event.name}</Text>
      <View style={styles.detailsContainer}>
        <Image source={event.avatarUrl} style={styles.avatar} />
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
    padding: 16,
    alignItems: 'center',
  },
  backLink: {
    color: '#FF8C00',
    fontSize: 40,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  detailsContainer: {
    alignItems: 'center',
  },
  avatar: {
    width: 128,
    height: 128,
    borderRadius: 64,
    marginBottom: 16,
  },
  detailText: {
    color: '#4A4A4A',
    marginBottom: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 16,
  },
  button: {
    backgroundColor: '#FF8C00',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  buttonText: {
    color: '#FFFFFF',
  },
});

export default eventDetails;
