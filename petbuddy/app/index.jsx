import { View, Text, Image, StyleSheet, TouchableOpacity, StatusBar, SafeAreaView } from "react-native";
import { Redirect, Link, router } from 'expo-router';
import { useFonts } from "expo-font";
import { Video, ResizeMode } from 'expo-av'
import * as React from "react";

const WelcomeScreen = () => {
  const video = React.useRef(null);
  return (
    <SafeAreaView style={styles.container}>
      <Video
        ref={video}
        style={styles.video}
        source={require('./../assets/images/dogrunwithowner.mp4')}
        resizeMode={ResizeMode.COVER}
        shouldPlay
        isLooping
      />
      <SafeAreaView style={styles.overlay}>
      {/* Status Bar */}
      <StatusBar barStyle="dark-content" />

      {/*Title*/}
      <Text style={styles.pretitle}>Welcome to</Text>
      <Text style={styles.title}>PetBuddy!</Text>
      
      {/* Mascot Image */}
      <Image 
        source={require('./../assets/images/corgi.png')} // Add the image to the assets folder
        style={styles.image}
      />
      
     {/* Description */}
      <Text style={styles.description}>
        Where you can connect with trusted caretakers for personalized pet care services. Let your pet get the love and attention they deserve!
      </Text>

      {/* Get Started Button */}
      <TouchableOpacity 
        style={styles.button}
        onPress={() => router.push('./(auth)/loginscreen')}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  video: {
    ...StyleSheet.absoluteFillObject,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  pretitle: {
    color: 'white',
    fontSize: 32,
    fontFamily: 'Jua-Regular',
    fontWeight: '400',
  },
  title: {
    color: '#FFA154',
    fontSize: 64,
    fontFamily: 'Jua-Regular',
    fontWeight: '400',
  },
  image: {
    height: 210,
    width: 200,
    marginBottom: 20,
  },
  description: {
    color: 'white',
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    fontWeight: '400',
    marginHorizontal: 51,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#FFA154',
    padding: 15,
    borderRadius: 6,
    marginTop: 20,
    paddingHorizontal: 30,
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    fontWeight: '400',
    borderRadius: 6,
    border: '1px #FFA154 solid',
    
  },
});

export default WelcomeScreen;


