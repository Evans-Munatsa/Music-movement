// // import { StatusBar } from 'expo-status-bar';
// // import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// import React, { useState } from 'react';

// // React navigation stack
// import RootStack from './navigators/RootStack';

// // apploading
// import AppLoading from 'expo-app-loading';

// // async-storage
// import AsyncStorage from '@react-native-async-storage/async-storage';

// // credentials context
// // import { CredentialsContext } from './components/CredentialsContext';

// import Login from './screens/Login';
// import Signup from './screens/Signup';
// import Welcome from './screens/Welcome';
// import Classes from './screens/Classes';

// export default function App() {
  
//    return <Signup />;
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });


import React, { useState } from 'react';

// React navigation stack
import RootStack from './navigators/RootStack';

// apploading
import AppLoading from 'expo-app-loading';

// async-storage
import AsyncStorage from '@react-native-async-storage/async-storage';

// credentials context
import { CredentialsContext } from './components/CredentialsContext';

export default function App() {
  const [appReady, setAppReady] = useState(false);
  const [storedCredentials, setStoredCredentials] = useState("");

  const checkLoginCredentials = () => {
    AsyncStorage.getItem('flowerCribCredentials')
      .then((result) => {
        if (result !== null) {
          setStoredCredentials(JSON.parse(result));
        } else {
          setStoredCredentials(null);
        }
      })
      .catch((error) => console.log(error));
  };

  if (!appReady) {
    return <AppLoading startAsync={checkLoginCredentials} onFinish={() => setAppReady(true)} onError={console.warn} />;
  }

  return (
    <CredentialsContext.Provider value={{ storedCredentials, setStoredCredentials }}>
      <RootStack />
    </CredentialsContext.Provider>
  );
}