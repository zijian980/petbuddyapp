import React from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, Image, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const chatMessages = [
  { id: 1, text: "Hi, can I confirm whether you're available on Monday afternoon at 5pm?", sender: "user", timestamp: "Fri, 19:18" },
  { id: 2, text: "Hello! Yes, I am available. Where exactly should I meet you?", sender: "other", timestamp: "Fri, 19:31" },
  { id: 3, text: "We can meet at the dog park near the MRT. See you!", sender: "user", timestamp: "Fri, 20:11" },
  { id: 4, text: "Hi, I'm on my way there.", sender: "user", timestamp: "Mon, 16:56" },
  { id: 5, text: "Yes, I am waiting here!", sender: "other", timestamp: "Mon, 16:57" },
];

const ChatRoom = () => {
  const navigation = useNavigation();
  const [message, setMessage] = React.useState('');

  const handleSend = () => {
    // Logic to send the message can be added here
    console.log("Message sent:", message);
    setMessage(''); // Clear input after sending
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Messages')}>
          <Text style={styles.backLink}>←</Text>
        </TouchableOpacity>
        <Image
          source={require('./../../assets/images/johndoe.png')} // Adjust the path according to your assets structure
          style={styles.profileImage}
        />
        <Text style={styles.headerText}>John Smith</Text>
        <Text style={styles.callIcon}>📞</Text>
      </View>

      <ScrollView style={styles.chatContainer} contentContainerStyle={styles.chatContent}>
        {chatMessages.map((message) => (
          <View key={message.id} style={[styles.messageContainer, message.sender === 'user' ? styles.userMessage : styles.otherMessage]}>
            <View style={message.sender === 'user' ? styles.userBubble : styles.otherBubble}>
              <Text style={styles.messageText}>{message.text}</Text>
              <Text style={styles.timestamp}>{message.timestamp}</Text>
            </View>
          </View>
        ))}
      </ScrollView>

      <View style={styles.inputContainer}>
        <Text style={styles.clipIcon}>📎</Text>
        <TextInput
          style={styles.input}
          placeholder="Write your message here..."
          value={message}
          onChangeText={setMessage}
        />
        <TouchableOpacity onPress={handleSend}>
          <Text style={styles.sendButton}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
  header: {
    backgroundColor: '#fff',
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backLink: {
    color: '#FFA500',
    fontSize: 24,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginHorizontal: 8,
  },
  headerText: {
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
  callIcon: {
    fontSize: 24,
    color: '#FFA500',
  },
  chatContainer: {
    flex: 1,
    padding: 16,
  },
  chatContent: {
    paddingBottom: 16,
  },
  messageContainer: {
    marginBottom: 8,
    flexDirection: 'row',
  },
  userMessage: {
    justifyContent: 'flex-end',
  },
  otherMessage: {
    justifyContent: 'flex-start',
  },
  userBubble: {
    maxWidth: '70%',
    padding: 10,
    borderRadius: 20,
    backgroundColor: '#FFEDD5', // light orange
    alignSelf: 'flex-end',
  },
  otherBubble: {
    maxWidth: '70%',
    padding: 10,
    borderRadius: 20,
    backgroundColor: '#fff',
    alignSelf: 'flex-start',
  },
  messageText: {
    fontSize: 14,
  },
  timestamp: {
    fontSize: 10,
    color: '#777',
    marginTop: 4,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 8,
  },
  clipIcon: {
    fontSize: 24,
    marginRight: 8,
    color: '#777',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginRight: 8,
  },
  sendButton: {
    color: '#FFA500',
    fontSize: 16,
  },
});

export default ChatRoom;
