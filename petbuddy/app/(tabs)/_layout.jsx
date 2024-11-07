import { StatusBar } from "expo-status-bar";
import { Redirect, Tabs } from "expo-router";
import { Image, Text, View, StyleSheet } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';




const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View className="flex items-center justify-center gap-2">
      <Image
        source={require('../../assets/images/addIcon.png')}
        resizeMode="contain"
        tintColor={color}
        className="w-6 h-6"
      />
      <Text
        className={`${focused ? "font-psemibold" : "font-pregular"} text-xs`}
        style={{ color: color }}
      >
        {name}
      </Text>
    </View>
  );
};

const TabLayout = () => {

  return (
    <>
     <View style={styles.headerContainer}>
            <Text style={styles.appName}>PetBuddy</Text>
            <Text style={styles.greeting}>Hi, John!</Text>
      </View>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "#FFA001",
          tabBarInactiveTintColor: "#CDCDE0",
          tabBarShowLabel: true,
          tabBarStyle: {
            backgroundColor: "white",
            borderTopWidth: 1,
            borderTopColor: "#232533",
            height: 70,
          },
        }}
        
      >
        
        <Tabs.Screen
          name="homepage"
          options={{
            title: "Home",
            tabBarIcon: ({ color, focused }) => (
              <FontAwesome
                color={color}
                name="home"
                size= {34}
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="search"
          options={{
            title: "Search",
            tabBarIcon: ({ color, focused }) => (
              <FontAwesome
                color={color}
                name="search"
                size= {34}
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="profileCaretaker"
          options={{
            href: null,
            title: "profileCaretaker",
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                source={require('../../assets/images/addIcon.png')}
                color={color}
                name="profileCaretaker"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="profilePetOwner"
          options={{
            title: "Profile",
            tabBarIcon: ({ color, focused }) => (
              <FontAwesome
                color={color}
                name="user-o"
                size= {34}
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="viewEvents"
          options={{
            href: null,
          }}
        />
        <Tabs.Screen
          name="Messages"
          options={{
            title: "Messages",
            tabBarIcon: ({ color, focused }) => (
              <Ionicons
                color={color}
                name="chatbox"
                size= {35}
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="chatroom"
          options={{
            href: null,
            
          }}
        />
        <Tabs.Screen
          name="editprofile"
          options={{
            href: null,
            
          }}
        />
        <Tabs.Screen
          name="eventDetails"
          options={{
            href: null,
          }}
        />
        <Tabs.Screen
          name="upcomingEvents"
          options={{
            href: null,
          }}
        />
        <Tabs.Screen
          name="upcomingEventDetails"
          options={{
            href: null,
          }}
        />
        <Tabs.Screen
          name="maps"
          options={{
            href: null,
          }}
        />
        <Tabs.Screen
          name="caretakerDetail"
          options={{
            href: null,
          }}
        />
        <Tabs.Screen
          name="service"
          options={{
            href: null,
          }}
        />
        <Tabs.Screen
          name="bookingPage"
          options={{
            href: null,
          }}
        />
        <Tabs.Screen
          name="paymentPage"
          options={{
            href: null,
          }}
        />
      </Tabs>

    </>
  );
};
const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
    marginHorizontal: 18,
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
});

export default TabLayout;