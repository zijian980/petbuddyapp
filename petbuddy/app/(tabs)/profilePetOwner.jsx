import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ProfileCard = ({ name, email, username, imgUrl }) => {
  const navigation = useNavigation();
  return (
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

const PetCard = ({ name, age, imgUrl }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.petCard}>
      <Image source={imgUrl} style={styles.petImage} />
      <View>
        <Text style={styles.petName}>{name}</Text>
        <Text style={styles.text}>{age}</Text>
        <TouchableOpacity onPress={() => navigation.navigate('EditPet')}>
          <Text style={styles.editPetLink}>Edit pet profile {'>'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const AddPetButton = () => (
  <TouchableOpacity style={styles.addPetButton}>
    <Text style={styles.addPetText}>+</Text>
  </TouchableOpacity>
);

const GeneralItem = ({ text, link, isDelete = false }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate(link)} style={styles.generalItem}>
      <Text style={[styles.text, isDelete && styles.deleteText]}>{text}</Text>
      <Text style={styles.arrow}>&gt;</Text>
    </TouchableOpacity>
  );
};

const profilePetOwner = () => {
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
        
        <Text style={styles.sectionTitle}>My Pets</Text>
        <View style={styles.petsContainer}>
          <PetCard 
            name="Kimmy" 
            age="2 Years 1 Month" 
            imgUrl={require('./../../assets/images/kimmydog.png')} 
          />
          <AddPetButton />
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
    backgroundColor: '#fff',
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
  petCard: {
    backgroundColor: '#FFEDD5',
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  petImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 16,
  },
  petName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  editPetLink: {
    color: '#FF8C00',
    fontSize: 14,
  },
  addPetButton: {
    backgroundColor: '#FF8C00',
    borderRadius: 50,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 16,
  },
  addPetText: {
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
  petsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
});

export default profilePetOwner;
