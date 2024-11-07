import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // For the map icon
import { useNavigation, useRoute } from '@react-navigation/native';

const caretakers = [
  {
    id: 1,
    name: 'Caretaker 1',
    experience: '5 years',
    servicesOffered: ['Walking', 'Grooming'],
    availability: 'Weekdays',
    imageUrl: require('./../../assets/images/dog.png'), // Adjust the path to your image
  },
  {
    id: 2,
    name: 'Caretaker 2',
    experience: '3 years',
    servicesOffered: ['Walking', 'Training'],
    availability: 'Weekends',
    imageUrl: require('./../../assets/images/dog.png'), // Adjust the path to your image
  },
  {
    id: 3,
    name: 'Caretaker 3',
    experience: '7 years',
    servicesOffered: ['Walking', 'Sitting'],
    availability: 'Weekdays and Weekends',
    imageUrl: require('./../../assets/images/dog.png'), // Adjust the path to your image
  },
];

export default function upcomingEvents() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>←</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Caretakers</Text>
      </View>
      <View style={styles.caretakersList}>
        {caretakers.map(caretaker => (
          <TouchableOpacity
            key={caretaker.id}
            onPress={() => navigation.navigate('caretakerDetail', { id: caretaker.id })}
            style={styles.caretakerCard}
          >
            <View style={styles.cardContent}>
              <Image
                source={caretaker.imageUrl}
                style={styles.image}
              />
              <View style={styles.info}>
                <Text style={styles.caretakerName}>{caretaker.name}</Text>
                <Text style={styles.text}>{`Experience: ${caretaker.experience}`}</Text>
                <Text style={styles.text}>{`Services offered: ${caretaker.servicesOffered.join(', ')}`}</Text>
                <Text style={styles.text}>{`Availability: ${caretaker.availability}`}</Text>
              </View>
            </View>
            <View style={styles.border} />
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity
        style={styles.mapButton}
        onPress={() => navigation.navigate('maps')}
      >
        <FontAwesome name="map" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    //backgroundColor: '#fff'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  backButton: {
    fontSize: 40,
    color: '#FF8C00', // Orange color
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caretakersList: {
    flex: 1,
  },
  caretakerCard: {
    marginBottom: 16,
  },
  cardContent: {
    flexDirection: 'row',
    padding: 16,
  },
  image: {
    width: 64,
    height: 64,
    borderRadius: 32,
  },
  info: {
    marginLeft: 16,
  },
  caretakerName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  text: {
    color: '#666',
  },
  border: {
    borderTopWidth: 4,
    borderColor: '#FF8C00', // Orange color
    marginTop: 8,
  },
  mapButton: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    backgroundColor: '#FF8C00', // Orange color
    padding: 16,
    borderRadius: 50,
    elevation: 5, // Shadow for Android
  },
});
