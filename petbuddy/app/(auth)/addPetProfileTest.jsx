import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, StatusBar, KeyboardAvoidingView, Platform, ScrollView, Alert, Pressable } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const AddPetProfileTest = () => {
  const [formData, setFormData] = useState({
    petName: '',
    species: '',
    breed: '',
    age: '',
    healthConditions: '',
    preferences: '',
  });

  const [image, setImage] = useState(null); // State to store the selected image
  const [isFormValid, setIsFormValid] = useState(false); // State to track form validity

  // Handle form input changes
  const handleInputChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  // Check if all required fields are filled
  useEffect(() => {
    const requiredFieldsFilled =
      formData.petName !== '' &&
      formData.species !== '' &&
      formData.breed !== '' &&
      formData.age !== '';

    setIsFormValid(requiredFieldsFilled);
  }, [formData]);

  // Handle form submission
  const handleSubmit = () => {
    if (isFormValid) {
      // Perform form submission logic here
      console.log(formData);
      Alert.alert("Success", "Pet profile saved successfully!");
    } else {
      Alert.alert("Error", "Please fill out all required fields.");
    }
  };

  // Function to open image picker
  const pickImage = async () => {
    // Request permission to access media
    /*const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      Alert.alert("Permission Required", "Permission to access the camera roll is required!");
      return;
    }

    // Open image picker
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.uri);
    }*/
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
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={10} // Adjust this offset as needed
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Status Bar */}
          <StatusBar barStyle="dark-content" />

          {/* Title */}
          <Text style={styles.title}>Create Profile</Text>

          {/* Image Upload */}
          <View style={styles.imageUploadContainer}>
            {image ? (
              <Image source={{ uri: image }} style={styles.petImage} />
            ) : (
              <Image source={require('../../assets/images/whitepuppy.png')} style={styles.petImage} />
            )}
            <TouchableOpacity onPress={pickImage}>
              <Text style={styles.addPhotoText}>Add profile picture</Text>
            </TouchableOpacity>
          </View>

          {/* Form fields */}
          <View style={styles.form}>
            {/* Pet Name */}
            <View style={styles.formGroup}>
              <Text style={styles.label}>Pet Name*</Text>
              <TextInput
                style={styles.input}
                placeholder="Your pet's name"
                value={formData.petName}
                onChangeText={(text) => handleInputChange('petName', text)}
              />
            </View>

            {/* Species */}
            <View style={styles.formGroup}>
              <Text style={styles.label}>Species*</Text>
              <TextInput
                style={styles.input}
                placeholder="Dog, Cat, etc."
                value={formData.species}
                onChangeText={(text) => handleInputChange('species', text)}
              />
            </View>

            {/* Breed */}
            <View style={styles.formGroup}>
              <Text style={styles.label}>Breed*</Text>
              <TextInput
                style={styles.input}
                placeholder="Chihuahua, British Short Hair, etc."
                value={formData.breed}
                onChangeText={(text) => handleInputChange('breed', text)}
              />
            </View>

            {/* Age */}
            <View style={styles.formGroup}>
              <Text style={styles.label}>Age*</Text>
              <TextInput
                style={styles.input}
                placeholder="6 months, 1 year, etc."
                value={formData.age}
                onChangeText={(text) => handleInputChange('age', text)}
              />
            </View>

            {/* Health Conditions (Optional) */}
            <View style={styles.formGroup}>
              <Text style={styles.label}>Health Conditions (optional)</Text>
              <TextInput
                style={styles.input}
                placeholder="Healthy, breathing difficulty, etc."
                value={formData.healthConditions}
                onChangeText={(text) => handleInputChange('healthConditions', text)}
              />
            </View>

            {/* Preferences (Optional) */}
            <View style={styles.formGroup}>
              <Text style={styles.label}>Preferences (optional)</Text>
              <TextInput
                style={styles.input}
                placeholder="If any."
                value={formData.preferences}
                onChangeText={(text) => handleInputChange('preferences', text)}
              />
            </View>
          </View>

          {/* Save Button */}
          <TouchableOpacity
            style={[styles.button, !isFormValid && styles.buttonDisabled]} // Disable button if form is invalid
            onPress={handleSubmit}
            disabled={!isFormValid} // Disable interaction if form is invalid
          >
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
  title: {
    fontSize: 32,
    fontFamily: 'Jua-Regular',
    color: 'black',
    textAlign: 'center',
    marginVertical: 10,
  },
  imageUploadContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  petImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#ffa154',
  },
  addPhotoText: {
    color: '#007BFF',
    marginTop: 10,
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
  },
  form: {
    marginVertical: 20,
  },
  formGroup: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderRadius: 6,
    borderStyle: 'solid',
    borderColor: '#ffa154',
    padding: 10,
  },
  button: {
    backgroundColor: '#ffa154',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Jua-Regular',
  },
  buttonDisabled: {
    backgroundColor: '#ccc', // Change button color when disabled
  },
});

export default AddPetProfileTest;
