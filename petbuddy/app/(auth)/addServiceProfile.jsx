// app/addpetprofile.js
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, StatusBar, KeyboardAvoidingView, Platform, ScrollView, Image, Alert } from 'react-native';
import { Link } from 'expo-router';
import * as ImagePicker from 'expo-image-picker';

const AddServiceProfile = () => {
  const [formData, setFormData] = useState({
    services: '',
    rates: '',
    availability: '',
    location: '',
  });

  const [image, setImage] = useState(null); // State to store the selected image
  const [isFormValid, setIsFormValid] = useState(false);

  const handleInputChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  useEffect(() => {
    const requiredFieldsFilled =
      (formData.services !== '') && 
      (formData.rates !== '') && 
      (formData.availability !== '') && 
      (formData.location !== '');
      
    setIsFormValid(requiredFieldsFilled);
  }, [formData]);

  // Handle form submission
  const handleSubmit = () => {
    if (isFormValid) {
      // Perform form submission logic here
      console.log(formData);
      Alert.alert("Success", "Services saved successfully!");
    } else {
      Alert.alert("Error", "Please fill out all required fields.");
    }
  };

  const pickImage = async () => {
    
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  }

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={10} // Adjust this offset as needed
      >
        <ScrollView showsVerticalScrollIndicator={false}>

          {/* Status Bar */}
          <StatusBar barStyle="dark-content" />

          {/* App name and greeting */}
          <View style={styles.headerContainer}>
            <Text style={styles.appName}>PetBuddy</Text>
            <Text style={styles.greeting}>Hi, John!</Text>
          </View>

          {/* Title and pet image */}
          <Text style={styles.title}>Create a Service</Text>
          <Text style={styles.subtitle}>Services</Text>
         {/* Signup Link */}
          <View style={styles.imageUploadContainer}>
            {image ? (
              <Image source={{ uri: image }} style={styles.image} />
            ) : (
              <Image source={require('../../assets/images/doggrooming.png')} style={styles.image} />
            )}
            <TouchableOpacity onPress={pickImage}>
              <Text style={styles.addServicePictureLink}>Add service picture</Text>
            </TouchableOpacity>
          </View>

          {/* Form fields */}
          <View style={styles.form}>
            {/* Services */}
            <View style={styles.formGroup}>
              <Text style={styles.label}>Type of Service*</Text>
              <TextInput
                style={styles.input}
                placeholder="Pet walking, Grooming, etc."
                value={formData.services}
                onChangeText={(text) => handleInputChange('services', text)}
              />
            </View>

            {/* rates */}
            <View style={styles.formGroup}>
              <Text style={styles.label}>Service Rates*</Text>
              <TextInput
                style={styles.input}
                placeholder="$50/hr, etc."
                value={formData.rates}
                onChangeText={(text) => handleInputChange('rates', text)}
              />
            </View>

            {/* Breed */}
            <View style={styles.formGroup}>
              <Text style={styles.label}>Availability*</Text>
              <TextInput
                style={styles.input}
                placeholder="Saturday afternoons, etc."
                value={formData.availability}
                onChangeText={(text) => handleInputChange('availability', text)}
              />
            </View>

            {/* Age */}
            <View style={styles.formGroup}>
              <Text style={styles.label}>Location*</Text>
              <TextInput
                style={styles.input}
                placeholder="Your location"
                value={formData.location}
                onChangeText={(text) => handleInputChange('location', text)}
              />
            </View>

          </View>

          {/* Save Button */}
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 25,
  },
  appName: {
    fontSize: 20,
    fontFamily: 'Jua-Regular',
    color: '#FFA154',
  },
  greeting: {
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    color: '#FFA154',
  },
  title: {
    fontSize: 32,
    fontFamily: 'Jua-Regular',
    color: 'black',
    textAlign: 'center',
    marginVertical: 10,
  },
  subtitle: {
    fontSize: 24,
    fontFamily: 'Jua-Regular',
    color: '#FFA154',
    textAlign: 'center',
  },
  image: {
    width: 300,
    height: 150,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ffa154',
    marginTop: 10,
  },
  addServicePictureLink: {
    color: 'blue',
    textDecorationLine: 'underline',
    fontFamily: 'Poppins-Regular',
    marginTop: 20
  },
  imageUploadContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  form: {
    marginVertical: 20,
  },
  formGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    width: 140, // Increased to accommodate longer labels
    fontWeight: 'bold',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 6,
    borderStyle: "solid",
    borderColor: "#ffa154",
    padding: 10,
  },
  button: {
    backgroundColor: 'orange',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
    marginHorizontal: 90,
  
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Jua-Regular',
  },
});

export default AddServiceProfile;
