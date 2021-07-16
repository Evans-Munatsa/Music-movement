import React from 'react';

import { ColorSchemeName } from 'react-native';

//colors
import { Colors } from '../components/styles';
const { darkLight, brand, primary, tertiary, secondary } = Colors;

// React Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import BottomTabNavigator from './BottonNavigation';

// screens
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import Welcome from '../screens/Welcome';
import Classes from '../screens/Classes'; 
import Streaming from '../screens/Stream'; 
import Videos from '../screens/Videos'; 


// export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
//   return (
//     <NavigationContainer
//       linking={LinkingConfiguration}
//       theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
//       <RootNavigator />
//     </NavigationContainer>
//   );
// }

const Tabs = createBottomTabNavigator();
const Stack = createStackNavigator();

// credentials context
import { CredentialsContext } from '../components/CredentialsContext';

const RootStack = () => {
  return (
    <CredentialsContext.Consumer>
      {({ storedCredentials }) => (
        <NavigationContainer style={{ backgroundColor: 'red' }}>
          <Tabs.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: 'transparent',
              },
              headerTintColor: tertiary,
              headerTransparent: true,
              headerTitle: '',
              headerLeftContainerStyle: {
                paddingLeft: 20,
              },
            }}
          >
            {storedCredentials ? (
              <Tabs.Screen options={{ headerTintColor: primary, }}name="Classroom" component={Classes}/>
            ) : (
              <>
                <Tabs.Screen name="Login" component={Login} />
                <Tabs.Screen name="Signup" component={Signup} />
              </>
            )}
            <Tabs.Screen name="Stream" component={Streaming}/>
            <Tabs.Screen name="Videos" component={Videos}/>
            <Tabs.Screen name="Profile" component={Welcome}/>
          </Tabs.Navigator>
        </NavigationContainer>
      )}
    </CredentialsContext.Consumer>
  );
};

export default RootStack;