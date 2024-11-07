import React, { useEffect, useState, useRef } from 'react';
import { View, Button, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';

const caretakers = [
  {
    id: 1,
    name: 'Caretaker 1',
    location: { latitude: -33.8567844, longitude: 151.213108 },
    avatar: require('./../../assets/images/dog.png'), // Adjust the path as necessary
    starRating: 4.5,
    services: ['Walking', 'Sitting'],
    availability: 'Weekdays',
    rates: '$30/hour',
  },
  {
    id: 2,
    name: 'Caretaker 2',
    location: { latitude: -33.8472767, longitude: 151.2188164 },
    avatar: require('./../../assets/images/dog.png'),
    starRating: 4.0,
    services: ['Walking'],
    availability: 'Weekends',
    rates: '$25/hour',
  },
  {
    id: 3,
    name: 'Caretaker 3',
    location: { latitude: -33.8209738, longitude: 151.2563253 },
    avatar: require('./../../assets/images/dog.png'),
    starRating: 4.7,
    services: ['Walking', 'Sitting'],
    availability: 'Weekdays and Weekends',
    rates: '$50/hour',
  },
];

export default function Mapper() {
  const navigation = useNavigation();
  const [mapRegion, setMapRegion] = useState({
    latitude: -33.860664,
    longitude: 151.208138,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  });

  useEffect(() => {
    console.log('Map component loaded');
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>←</Text>
      </TouchableOpacity>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={mapRegion}
        onRegionChangeComplete={region => setMapRegion(region)}
      >
        {caretakers.map(caretaker => (
          <Marker
            key={caretaker.id}
            coordinate={caretaker.location}
            title={caretaker.name}
            onPress={() => {
              navigation.navigate('caretakerDetail', { id: caretaker.id });
            }}
          >
            <View style={styles.marker}>
              <Image source={caretaker.avatar} style={styles.avatar} />
              <Text style={styles.markerText}>{caretaker.starRating} ⭐</Text>
            </View>
          </Marker>
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  backButton: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    backgroundColor: '#FF8C00', // Orange color
    padding: 10,
    borderRadius: 50,
    elevation: 5, // Shadow for Android
  },
  backButtonText: {
    color: 'white',
    fontSize: 24,
  },
  marker: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  markerText: {
    color: 'black',
    fontSize: 12,
    textAlign: 'center',
  },
});
