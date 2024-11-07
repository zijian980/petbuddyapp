import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const messages = [
  {
    id: 1,
    name: 'John Smith',
    lastMessage: 'Hi, can I confirm whether you’re avai...',
    timeStamp: '9:27',
    imgUrl: require('../../assets/images/johndoe.png'), // Adjust the path accordingly
  },
  {
    id: 2,
    name: 'Jane Doe',
    lastMessage: 'Yes, I’m waiting here!',
    timeStamp: 'Mon, 16:57',
    imgUrl: require('../../assets/images/johndoe.png'), // Adjust the path accordingly
  },
];

const Messages = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>My Chats</Text>
      </View>
      <ScrollView style={styles.messagesList}>
        {messages.map(message => (
          <TouchableOpacity key={message.id} onPress={() => navigation.navigate('chatroom', { id: message.id })}>
            <View style={styles.messageContainer}>
              <View style={styles.borderTop} />
              <View style={styles.messageContent}>
                <Image source={message.imgUrl} style={styles.profileImage} />
                <View style={styles.messageInfo}>
                  <View style={styles.messageHeader}>
                    <Text style={styles.senderName}>{message.name}</Text>
                    <Text style={styles.timeStamp}>{message.timeStamp}</Text>
                  </View>
                  <Text style={styles.lastMessage}>{message.lastMessage}</Text>
                </View>
              </View>
              <View style={styles.borderBottom} />
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#fff',
    paddingVertical: 12,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  messagesList: {
    paddingHorizontal: 16,
  },
  messageContainer: {
    width: '100%',
    cursor: 'pointer',
  },
  borderTop: {
    borderTopWidth: 4,
    borderColor: '#f0f0f0',
  },
  messageContent: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  messageInfo: {
    marginLeft: 16,
    flexGrow: 1,
  },
  messageHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  senderName: {
    fontSize: 18,
  },
  timeStamp: {
    color: '#606060',
    fontSize: 12,
  },
  lastMessage: {
    color: '#606060',
    fontSize: 14,
  },
  borderBottom: {
    borderBottomWidth: 4,
    borderColor: '#FFA500',
  },
});

export default Messages;
