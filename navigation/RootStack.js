import React from 'react';

import { ColorSchemeName } from 'react-native';

//colors
import { Colors } from '../components/styles';
const { darkLight, brand, primary, tertiary, secondary } = Colors;

// React Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';


// screens
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import Welcome from '../screens/Welcome';
import Classes from '../screens/Classes'; 
import Streaming from '../screens/Stream'; 
import Videos from '../screens/Videos'; 


const Tabs = createBottomTabNavigator();
const Stack = createStackNavigator();

// credentials context
import { CredentialsContext } from '../components/CredentialsContext';
import { Tab } from 'react-native-elements/dist/tab/Tab';

const RootStack = () => {
  return (
    <CredentialsContext.Consumer>
      {({ storedCredentials }) => (
        <NavigationContainer style={{ backgroundColor: 'red' }}>
          <Tabs.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                if (route.name === 'Classroom') {
                  return (
                    <Ionicons
                      name={ focused ? 'ios-home' : 'ios-home' }
                      size={size}
                      color={color}
                      
                    />
                  );
                } else if (route.name === 'Videos') {
                  return (
                    <Ionicons
                      name={focused ? 'ios-videocam' : 'ios-videocam'}
                      size={size}
                      color={color}
                    />
                  );
                } else if (route.name === 'Stream') {
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
          >
            {storedCredentials ? (
              <Tabs.Screen options={{ headerTintColor: primary, }}name="Classroom" component={Classes}/>
            ) : (
              <>
                {/* <Tabs.Screen name="Login" component={Login} /> */}
                {/* <Tabs.Screen name="Signup" component={Signup} /> */}
              </>
            )}
            {/* <Tabs.Screen name="Classroom" component={Classes} /> */}
            <Tabs.Screen name="Stream" component={Streaming}/>
            <Tabs.Screen name="Videos" component={Videos}/>
            {/* <Tabs.Screen name="Profile" component={Welcome} /> */}
            
          </Tabs.Navigator>
        </NavigationContainer>
      )}
    </CredentialsContext.Consumer>
  );
};

export default RootStack;

