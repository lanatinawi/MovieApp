//libraries
import React from "react"; 
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, View} from "react-native";
import styles from "./Stylesheets/navstyles.js";

//trying to import the pages to link them to respective nav tab
import Feed from "./Screens/HomePage.js";
import ProfilePage from "./Screens/ProfilePage.js";
import FriendsPage from "./Screens/Friends.js";
import SettingsPage from "./Screens/Settings.js";

//import { SafeAreaView } from "react-native-safe-area-context"; // import safe area view where necessary
//*TODO: import nav bar styles here


//creating the tab navigator
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#0818A8',
      }}
      
    >
    
      <Tab.Screen
        name="Box Office"
        component={Feed}
        options={{
          tabBarLabel: 'Box Office',
          
         
        }}
      />
      <Tab.Screen
        name="Friends"
        component={FriendsPage}
        options={{
          tabBarLabel: 'Friends',
         
        }}
      />
  
      <Tab.Screen
        name="Profile"
        component={ProfilePage}
        options={{
          tabBarLabel: 'Profile',
         
        }}
      />

      <Tab.Screen
              name="Settings"
              component={SettingsPage}
              options={{
                tabBarLabel: 'Settings',
              
              }}
              />
      
    </Tab.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}



//import { NavigationContainer } from '@react-navigation/native';
//import MyTabs from "./Nav/bottomnavbar";


//Navigation Container
/*
export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
*/

/*
import React from "react";
import styles from "./Styles/bottomnavbarstyles"; // Import the styles from the stylesheet file
import { View, Text } from 'react-native';

//testing what goes here--- might delete what is below 
const MyComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, React Native!</Text>
    </View>
  );
};

export default MyComponent;
*/