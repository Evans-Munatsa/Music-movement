import React from 'react';

import { ColorSchemeName, Dimensions } from 'react-native';

//colors
import { Colors } from '../components/styles';
const { darkLight, brand, primary, tertiary, secondary } = Colors;

// React Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';


// screens imports
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import Welcome from '../screens/Welcome';
import Classes from '../screens/Classes'; 
import Streaming from '../screens/Stream'; 
import Videos from '../screens/Videos'; 
import Grades from '../screens/Grades';

const fullScreenWidth = Dimensions.get('window').width;

const Stack = createStackNavigator();

// credentials context
import { CredentialsContext } from '../components/CredentialsContext';
import { Tab } from 'react-native-elements/dist/tab/Tab';

// function HomeStackScreen() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Profile" component={Welcome}/>
//     </Stack.Navigator>
//   )
// }

function AboutStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="About" component={Welcome}/>
    </Stack.Navigator>
  )
}

function HomeStackScreen() {
  return (
    <Stack.Navigator screenOptions={{headerTitleAlign: 'center', headerTitleStyle: {fontWeight: "200", fontSize: 30}}}>
      <Stack.Screen name="Grades" component={Grades}/>
    </Stack.Navigator>
  )
}

function ClassromStackScreen() {
  return (
    <Stack.Navigator screenOptions={{headerTitleAlign: 'center', headerTitleStyle: {fontWeight: "200", fontSize: 30}}}>
      <Stack.Screen name="Themes" component={Classes}/>
    </Stack.Navigator>
  )
}

function VideoStackScreen() {
  return (
    <Stack.Navigator screenOptions={{headerTitleAlign: 'center', headerTitleStyle: {fontWeight: "200", fontSize: 30}}}>
      <Stack.Screen name="Videos" component={Videos}/>
    </Stack.Navigator>
  )
}

function ProfileStackScreen() {
  return (
    <Stack.Navigator screenOptions={{headerTitleAlign: 'center', headerTitleStyle: {fontWeight: "200", fontSize: 30}}}>
      <Stack.Screen name="Profile" component={Welcome}/>
    </Stack.Navigator>
  )
}


{/* Bottom Tabs navigation */}
const Tabs = createBottomTabNavigator();
export default function TabsNavigation(props) {
// const TabsNavigation = () => {
  return (
    <NavigationContainer style={{ backgroundColor: 'red' }}>
      <Tabs.Navigator
        screenOptions={({ route }) => ({
          headerTitle: () => <Text>Header</Text>,
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === 'Grades') {
              return (
                <Ionicons
                  name={ focused ? 'home' : 'home-outline' }
                  size={size}
                  color={color}    
                />
              );
            } else if (route.name === 'Themes') {
              return (
                <Ionicons
                  name={focused ? 'ios-film' : 'ios-film'}
                  size={size}
                  color={color}
                />
              );
            }else if (route.name === 'Videos') {
              return (
                <Ionicons
                  name={focused ? 'ios-videocam' : 'ios-videocam'}
                  size={size}
                  color={color}
                />
              );
            }
             else if (route.name === 'Stream') {
              return (
                <Ionicons
                  name={focused ? 'ios-film' : 'ios-film'}
                  size={size}
                  color={color}
                />
              );
            } else if (route.name === 'Profile') {
              return (
                <Ionicons
                  name={focused ? 'ios-person' : 'person'}
                  size={size}
                  color={color}
                />
              );
            }
          },
      })}
      tabBarOptions={{
        activeTintColor: 'blue',
        inactiveTintColor: 'black',
        labelStyle: {fontSize: 14},
        style: {width: fullScreenWidth}
      }}>

      <Tabs.Screen name="Grades" component={HomeStackScreen}/>    
      <Tabs.Screen name="Themes" component={ClassromStackScreen} />
      {/* <Tabs.Screen name="Videos" component={VideoStackScreen}/> */}
      {/* <Tabs.Screen name="About" component={AboutStackScreen}/> */}
      

      <Tabs.Screen name="Profile" component={ProfileStackScreen} />
            
      </Tabs.Navigator>
    </NavigationContainer>
    
  );
};


