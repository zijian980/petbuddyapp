import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons'; // For the back arrow icon

const caretakers = [
  {
    id: 1,
    name: 'Caretaker 1',
    experience: '5 years',
    servicesOffered: [
      {
        name: 'Walking',
        availability: 'Weekdays',
        rates: '$20/hour',
        reviews: [
          { reviewer: 'John Doe', comment: 'Great walking service!', rating: 5 },
          { reviewer: 'Jane Smith', comment: 'Very reliable walker.', rating: 4 },
        ],
      },
      {
        name: 'Grooming',
        availability: 'Weekends',
        rates: '$25/hour',
        reviews: [
          { reviewer: 'Alice Brown', comment: 'Excellent grooming!', rating: 5 },
          { reviewer: 'Bob Johnson', comment: 'Very professional.', rating: 4 },
        ],
      },
    ],
    location: 'Location 1',
    imageUrl: require('./../../assets/images/dog.png'), // Adjust the path as needed
    introduction: 'I am Caretaker 1, with 5 years of experience in pet care.',
  },
  {
    id: 2,
    name: 'Caretaker 2',
    experience: '3 years',
    servicesOffered: [
      {
        name: 'Walking',
        availability: 'Weekends',
        rates: '$30/hour',
        reviews: [
          { reviewer: 'Alice Brown', comment: 'Excellent walking service!', rating: 5 },
          { reviewer: 'Bob Johnson', comment: 'Good with pets.', rating: 4 },
        ],
      },
      {
        name: 'Training',
        availability: 'Weekdays',
        rates: '$35/hour',
        reviews: [
          { reviewer: 'Charlie Davis', comment: 'Great trainer!', rating: 5 },
          { reviewer: 'Dana Evans', comment: 'Very effective training.', rating: 4 },
        ],
      },
    ],
    location: 'Location 2',
    imageUrl: require('./../../assets/images/dog.png'), // Adjust the path as needed
    introduction: 'I am Caretaker 2, specializing in pet training.',
  },
  {
    id: 3,
    name: 'Caretaker 3',
    experience: '7 years',
    servicesOffered: [
      {
        name: 'Walking',
        availability: 'Weekdays and Weekends',
        rates: '$25/hour',
        reviews: [
          { reviewer: 'Eve Foster', comment: 'Great walking service!', rating: 5 },
          { reviewer: 'Frank Green', comment: 'Very reliable walker.', rating: 4 },
        ],
      },
      {
        name: 'Sitting',
        availability: 'Weekdays',
        rates: '$40/hour',
        reviews: [
          { reviewer: 'Grace Hill', comment: 'Excellent sitting service!', rating: 5 },
          { reviewer: 'Hank Ives', comment: 'Very professional sitter.', rating: 4 },
        ],
      },
    ],
    location: 'Location 3',
    imageUrl: require('./../../assets/images/dog.png'), // Adjust the path as needed
    introduction: 'I am Caretaker 3, with 7 years of experience in pet care.',
  },
];

export default function EventDetails() {
  const navigation = useNavigation();
  const route = useRoute();
  const caretakerId = parseInt(route.params.caretakerId, 10);
  const serviceName = route.params.serviceName.toLowerCase();
  const caretaker = caretakers.find(c => c.id === caretakerId);

  if (!caretaker) {
    return (
      <View style={styles.container}>
        <Text>Caretaker not found</Text>
      </View>
    );
  }

  const service = caretaker.servicesOffered.find(s => s.name.toLowerCase() === serviceName);

  if (!service) {
    return (
      <View style={styles.container}>
        <Text>Service not found</Text>
      </View>
    );
  }

  const averageRating = service.reviews.reduce((acc, review) => acc + review.rating, 0) / service.reviews.length;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesome name="arrow-left" size={24} color="#FF8C00" />
        </TouchableOpacity>
        <Image source={caretaker.imageUrl} style={styles.image} />
        <View style={styles.info}>
          <Text style={styles.name}>{caretaker.name}</Text>
          <Text style={styles.rating}>{'⭐'.repeat(Math.round(averageRating))} ({averageRating.toFixed(1)})</Text>
        </View>
      </View>
      <View style={styles.details}>
        <Text style={styles.serviceName}>{service.name}</Text>
        <Text>Availability: {service.availability}</Text>
        <Text>Rates: {service.rates}</Text>
        <Text>Location: {caretaker.location}</Text>
      </View>
      <View style={styles.reviews}>
        <Text style={styles.reviewsHeader}>Reviews</Text>
        {service.reviews.map((review, index) => (
          <View key={index} style={styles.review}>
            <Text style={styles.reviewer}>{review.reviewer}</Text>
            <Text>{review.comment}</Text>
            <Text>{'⭐'.repeat(review.rating)}</Text>
          </View>
        ))}
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('bookingPage', { caretakerId: caretaker.id, serviceName: service.name })}>
        <Text style={styles.bookButton}>Book Now</Text>
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
    width: 180,
    height: 180,
    borderRadius: 90,
    marginLeft: 16,
  },
  info: {
    marginLeft: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  rating: {
    fontSize: 18,
  },
  details: {
    marginTop: 16,
  },
  serviceName: {
    backgroundColor: '#FF8C00',
    color: '#fff',
    padding: 16,
    borderRadius: 8,
    fontSize: 20,
  },
  reviews: {
    marginTop: 16,
  },
  reviewsHeader: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  review: {
    marginTop: 8,
  },
  reviewer: {
    fontWeight: 'bold',
  },
  bookButton: {
    backgroundColor: '#FF8C00',
    color: '#fff',
    padding: 12,
    borderRadius: 5,
    textAlign: 'center',
    marginTop: 16,
  },
});
