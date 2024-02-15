import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView, ToastAndroid, LogBox, View } from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import axios from 'axios';
import 'react-native-gesture-handler';

import Xhibit from './screens/Xhibit';
import FastImage from 'react-native-fast-image';
import CreatePost from './screens/CreatePost';
import CreatePost2 from './screens/CreatePost2';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const Stack = createNativeStackNavigator();

// Ignore all logs including red warnings
LogBox.ignoreAllLogs();

const showToast = (type, text1, text2 = null, duration = ToastAndroid.SHORT, position = ToastAndroid.CENTER) => {
  ToastAndroid.showWithGravityAndOffset(
    `${text1}${text2 ? `\n${text2}` : ''}`,
    duration,
    position,
    25,
    50
  );
};

const fetchData = async () => {
  try {
    const response = await axios.post("https://n7ueuw1x6f.execute-api.ap-southeast-1.amazonaws.com/default/API_Testing");
    showToast('success', 'Internet Connection Restored', `API Response: ${response.data}`);
  } catch (error) {
    console.error('Error fetching data from API:', error.message);
  }
};

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const handleConnectivityChange = async (state) => {
      if (!state.isConnected) {
        showToast('error', 'No Internet Connection');
      } else if (state.isInternetReachable === false) {
        showToast('info', 'Internet is slow');
      } else {
        fetchData();
      }
    };

    const checkInitialConnection = async () => {
      try {
        const connectionInfo = await NetInfo.fetch();
        handleConnectivityChange(connectionInfo);
        NetInfo.addEventListener(handleConnectivityChange);
      } catch (error) {
        console.error("Error checking initial connection:", error);
      }
    };

    checkInitialConnection();

    // Display splash screen for 2 seconds (adjust as needed)
    const splashTimeout = setTimeout(() => {
      // Remove splash screen after the timeout
      setShowSplash(false);
    }, 2000);

    // Clear timeout when component unmounts
    return () => {
      clearTimeout(splashTimeout);
      // NetInfo.removeEventListener(handleConnectivityChange);
    };
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <SafeAreaView style={{ flex: 1 }}>
          {showSplash ? (
            <View style={styles.container}>
              <FastImage
                source={require('./assets/undgif.gif')} // Replace with the actual path to your GIF
                style={{ width: 200, height: 200 }}
              />
            </View>
          ) : (
            <Stack.Navigator initialRouteName="Xhibit">
              <Stack.Screen
                name="Xhibit"
                component={Xhibit}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="CreatePost"
                component={CreatePost}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="CreatePost2"
                component={CreatePost2}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          )}
        </SafeAreaView>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black'
  },
  splashImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
};


export default App;
