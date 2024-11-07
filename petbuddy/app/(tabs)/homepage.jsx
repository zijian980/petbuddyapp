import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const homepage = () => {
  const navigation = useNavigation();

  const events = [
    { id: 1, title: 'Event 1', imageUrl: require('./../../assets/images/dog.png') },
    { id: 2, title: 'Event 2', imageUrl: require('./../../assets/images/dog.png') },
    { id: 3, title: 'Event 3', imageUrl: require('./../../assets/images/dog.png') },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Upcoming Events</Text>

      <View style={styles.eventsContainer}>
        {events.map(event => (
          <View key={event.id} style={styles.eventCard}>
            <Image
              source={event.imageUrl}
              style={styles.eventImage}
              resizeMode="cover"
            />
            <View style={styles.eventTitleContainer}>
              <Text style={styles.eventTitle}>{event.title}</Text>
            </View>
          </View>
        ))}
      </View>

      <Text style={styles.header}>Services</Text>

      <View style={styles.servicesContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('upcomingEvents')} style={styles.serviceCard}>
          <Image
            source={require('./../../assets/images/bookings.png')} // Adjust the path according to your assets structure
            style={styles.serviceImage}
            resizeMode="cover"
          />
          <Text style={styles.serviceText}>Upcoming Bookings</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('viewEvents')} style={styles.serviceCard}>
          <Image
            source={require('./../../assets/images/events.png')} // Adjust the path according to your assets structure
            style={styles.serviceImage}
            resizeMode="cover"
          />
          <Text style={styles.serviceText}>View Events</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    borderLeftWidth: 4,
    borderLeftColor: '#FFA500',
    paddingLeft: 8,
    marginBottom: 16,
    width: '100%',
    textAlign: 'left',
  },
  eventsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  eventCard: {
    position: 'relative',
    width: '100%',
    maxWidth: 180,
    marginBottom: 16,
  },
  eventImage: {
    width: '100%',
    height: 120,
    borderRadius: 10,
  },
  eventTitleContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 8,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  eventTitle: {
    color: '#FFFFFF',
  },
  servicesContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
  },
  serviceCard: {
    width: 128,
    height: 128,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
  },
  serviceImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  serviceText: {
    marginTop: 8,
    color: '#000000',
    textAlign: 'center',
  },
});

export default homepage;
