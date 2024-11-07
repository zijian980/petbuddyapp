import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ProfileCard = ({ name, email, username, imgUrl }) => {
  const navigation = useNavigation();
  return(
    <View style={styles.profileCard}>
      <View>
        <Text style={styles.welcomeText}>Welcome, {name}!</Text>
        <Text style={styles.text}>{email}</Text>
        <Text style={styles.text}>{username}</Text>
        <TouchableOpacity onPress={() => navigation.navigate('editprofile')}>
          <Text style={styles.editProfileLink}>Edit profile {'>'}</Text>
        </TouchableOpacity>
      </View>
      <Image source={imgUrl} style={styles.profileImage} />
    </View>
  );
};

const BookingCard = ({ name, age, date, location, imgUrl }) => (
  <View style={styles.bookingCard}>
    <View style={styles.bookingContent}>
      <Image source={imgUrl} style={styles.bookingImage} />
      <View>
        <Text style={styles.bookingName}>{name} <Text style={styles.ageText}>{age}</Text></Text>
        <Text style={styles.text}>{date}</Text>
        <Text style={styles.text}>{location}</Text>
      </View>
    </View>
  </View>
);

const ServiceCard = ({ serviceName, rate, availability, imgUrl }) => (
  <View style={styles.serviceCard}>
    <View style={styles.serviceContent}>
      <Image source={imgUrl} style={styles.serviceImage} />
      <View>
        <Text style={styles.serviceName}>{serviceName}</Text>
        <Text style={styles.text}>{rate}</Text>
        <Text style={styles.text}>{availability}</Text>
      </View>
    </View>
  </View>
);

const AddServiceButton = () => (
  <TouchableOpacity style={styles.addServiceButton}>
    <Text style={styles.addServiceText}>+</Text>
  </TouchableOpacity>
);

const GeneralItem = ({ text, link, isDelete = false }) => {
  const navigation = useNavigation();
  
  return (
    <TouchableOpacity onPress={() => navigation.navigate(link)} style={styles.generalItem}>
      <Text style={isDelete ? styles.deleteText : styles.generalText}>{text}</Text>
      <Text style={styles.arrow}>&gt;</Text>
    </TouchableOpacity>
  );
};

const profileCaretaker = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.sectionTitle}>Profile</Text>
        <ProfileCard 
          name="John" 
          email="johnsmith@gmail.com" 
          username="@johnsmith" 
          imgUrl={require('./../../assets/images/johndoe.png')} 
        />
        
        <Text style={styles.sectionTitle}>My Bookings</Text>
        <BookingCard 
          name="Kimmy" 
          age="2Y 1M" 
          date="31/10/2024 14:00"
          location="Buona Vista"
          imgUrl={require('./../../assets/images/kimmydog.png')} 
        />

        <Text style={styles.sectionTitle}>My Services</Text>
        <View style={styles.serviceContainer}>  
          <ServiceCard 
            serviceName="Pet Grooming" 
            rate="$50/hr" 
            availability="Mon, Tue"
            imgUrl={require('../../assets/images/kimmydog.png')} 
          />
          <AddServiceButton />
        </View>
        
        <Text style={styles.sectionTitle}>General</Text>
        <View style={styles.generalContainer}>
          <GeneralItem text="Booking History" link="BookingHistory" />
          <GeneralItem text="Payment History" link="PaymentHistory" />
          <GeneralItem text="Payment Settings" link="PaymentSettings" />
          <GeneralItem text="Change Password" link="ChangePassword" />
          <GeneralItem text="Emergency Contact Update" link="EmergencyContact" />
          <GeneralItem text="Delete Account" link="DeleteAccount" isDelete={true} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#fff',
  },
  scrollContainer: {
    padding: 16,
  },
  profileCard: {
    backgroundColor: '#FFEDD5',
    borderRadius: 10,
    padding: 16,
    marginBottom: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  text: {
    color: '#4A4A4A',
    fontSize: 14,
  },
  editProfileLink: {
    color: '#FF8C00',
    fontSize: 14,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  bookingCard: {
    backgroundColor: '#FFEDD5',
    borderRadius: 20,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  bookingContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bookingImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 16,
  },
  bookingName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  ageText: {
    fontWeight: 'normal',
    fontSize: 14,
  },
  serviceCard: {
    backgroundColor: '#FFEDD5',
    borderRadius: 20,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  serviceContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  serviceImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 16,
  },
  serviceName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  addServiceButton: {
    backgroundColor: '#FF8C00',
    borderRadius: 50,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 16,
  },
  addServiceText: {
    color: '#fff',
    fontSize: 24,
  },
  generalContainer: {
    backgroundColor: '#fff',
  },
  generalItem: {
    paddingVertical: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  generalText: {
    color: '#4A4A4A',
  },
  deleteText: {
    color: '#FF0000',
  },
  arrow: {
    fontSize: 18,
    color: '#4A4A4A',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

export default profileCaretaker;
