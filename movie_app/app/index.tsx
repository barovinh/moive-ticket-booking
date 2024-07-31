import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from '../app/navigatiors/TabNavigatior'; // Đường dẫn đúng tới TabNavigator
import MovieDetailsScreen from './screens/MovieDetailsScreen';
import SeatBookingScreen from './screens/SeatBookingScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{ headerShown:false }}>
        <Stack.Screen name="Tab" component={TabNavigator} options={{ animation:'default' }}/>
        <Stack.Screen name="MovieDetails" component={MovieDetailsScreen} options={{ animation:'slide_from_bottom' }} />
        <Stack.Screen name="SeatBooking" component={SeatBookingScreen}  options={{ animation:'slide_from_bottom' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
