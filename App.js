import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './page/home';
import Upgrade from './page/upgrade';
import Context from './Context';
import Navbar from './components/navbar';

const Stack = createNativeStackNavigator();

export default function App() {

  const [money, setMoney] = useState(1);
  const [moneyClick, setMoneyClick] = useState(1);
  const [language, setLanguage] = useState('en');

  return (
    <NavigationContainer>
      <Context.Provider value={{ money, setMoney, moneyClick, setMoneyClick, language, setLanguage }}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Upgrade" component={Upgrade} options={{ headerShown: false }} />
        </Stack.Navigator>
      <Navbar />
      </Context.Provider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
});