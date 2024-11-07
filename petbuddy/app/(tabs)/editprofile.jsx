import React from 'react';
import { View, Text, TextInput, Button, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const role = "caretaker";
// const role = "petowner";

const editprofile = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('profilePetOwner')}>
          <Text style={styles.link}>←</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Edit Profile</Text>
      </View>

      <View style={styles.imageContainer}>
        <Image
          source={require('./../../assets/images/johndoe.png')} // Adjust the path according to your assets structure
          style={styles.profileImage}
        />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('EditProfilePicture')}>
        <Text style={styles.editLink}>Edit profile picture</Text>
      </TouchableOpacity>

      <View style={styles.form}>
        <Text style={styles.label}>
          Name
          <Text style={styles.required}>*</Text>
        </Text>
        <TextInput
          style={styles.input}
          defaultValue="John Smith"
        />

        <Text style={styles.label}>
          Date of Birth
          <Text style={styles.required}>*</Text>
        </Text>
        <TextInput
          style={styles.input}
          defaultValue="02/12/99"
        />

        <Text style={styles.label}>
          Gender
          <Text style={styles.required}>*</Text>
        </Text>
        <TextInput
          style={styles.input}
          defaultValue="Male"
        />

        {role === "caretaker" && (
          <View>
            <Text style={styles.label}>
              Work Experience
              <Text style={styles.required}>*</Text>
            </Text>
            <TextInput
              style={styles.input}
              defaultValue="2 years pet grooming"
            />
          </View>
        )}

        <View style={styles.buttonContainer}>
          <Button title="Save Changes" color="#FF8C00" onPress={() => { /* Handle save logic */ }} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    //marginBottom: 10,
    marginRight: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    //marginBottom: 32,
  },
  link: {
    color: '#FFA500',
    fontSize: 40,
    marginBottom: 15,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  profileImage: {
    width: 128,
    height: 128,
    borderRadius: 64,
    borderColor: '#FFA500',
    borderWidth: 2,
  },
  editLink: {
    color: '#0000FF',
  },
  form: {
    marginBottom: 24,
  },
  label: {
    marginBottom: 8,
    color: '#4A4A4A',
  },
  required: {
    color: '#FF0000',
  },
  input: {
    borderWidth: 1,
    borderColor: '#FFA500',
    borderRadius: 4,
    padding: 8,
    marginBottom: 16,
  },
  buttonContainer: {
    marginTop: 12,
  },
});

export default editprofile;
