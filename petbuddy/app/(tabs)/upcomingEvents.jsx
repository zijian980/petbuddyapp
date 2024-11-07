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

const upcomingEvents = () => {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('homepage')}>
          <Text style={styles.backLink}>←</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Upcoming Events</Text>
      </View>
      <View style={styles.eventsContainer}>
        {events.map(event => (
          <TouchableOpacity 
            key={event.id} 
            onPress={() => navigation.navigate('upcomingEventDetails', { id: event.id })}
            style={styles.eventCard}
          >
            <View style={styles.eventContent}>
              <Image source={event.avatarUrl} style={styles.eventImage} />
              <View style={styles.eventDetails}>
                <Text style={styles.eventName}>{event.name}</Text>
                <Text style={styles.eventText}>{event.date}</Text>
                <Text style={styles.eventText}>{event.location}</Text>
                <Text style={styles.eventText}>{event.time}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'left',
    marginBottom: 16,
  },
  backLink: {
    color: '#FF8C00',
    fontSize: 30,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  eventsContainer: {
    spaceBetween: 16,
  },
  eventCard: {
    borderTopWidth: 4,
    borderTopColor: '#FF8C00',
    marginBottom: 16,
    backgroundColor: '#FFF3E0',
  },
  eventContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  eventImage: {
    width: 64,
    height: 64,
    borderRadius: 32,
  },
  eventDetails: {
    marginLeft: 16,
  },
  eventName: {
    fontSize: 18,
    fontWeight: '600',
  },
  eventText: {
    color: '#4A4A4A',
  },
});

export default upcomingEvents;
