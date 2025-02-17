import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, Text } from 'react-native';
import details1 from './details1';
import details2 from './details2';

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarLabel: ({ color }) => (
          <Text style={{ 
            fontSize: 15, 
            fontFamily: 'CircularLight', 
            textAlign: 'center', 
            color 
          }}>
            {route.name.replace("  ", "\n")} 
          </Text>
        ),
        tabBarStyle: { backgroundColor: '#000' },
        tabBarActiveTintColor: '#00FFAA',
        tabBarInactiveTintColor: '#888',
        tabBarIndicatorStyle: { backgroundColor: '#00FFAA', height: 3 },
      })}
    >
      <Tab.Screen name="INTRO TO  WEB DEV" component={details1} />
      <Tab.Screen name="INTRO TO  AI PYTHON" component={details2} />
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
