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
      <Stack.Navigator>
        <Stack.Screen name="Tab" component={TabNavigator}/>
        <Stack.Screen name="SeatBooking" component={SeatBookingScreen} />
        <Stack.Screen name="MovieDetails" component={MovieDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
