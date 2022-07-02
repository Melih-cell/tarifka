import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Member from './src/components/pages/member/Member';
import Profile from './src/components/pages/profile/Profile';
import MemberDetail from './src/components/pages/member/MemberDetail';
import MemberUpdate from './src/components/pages/member/MemberUpdate';
import ProfileEdit from './src/components/pages/profile/ProfileEdit';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

//Nesting Navigation
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='Profile' screenOptions={{headerShown: false}}>
        <Tab.Screen name="Member" component={MemberStack} />
        <Tab.Screen name="Profile" component={ProfileStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const MemberStack = () => { 
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="MemberScreen" component={Member}></Stack.Screen>
      <Stack.Screen name="MemberDetail" component={MemberDetail}></Stack.Screen>
      <Stack.Screen name="MemberUpdate" component={MemberUpdate}></Stack.Screen>
    </Stack.Navigator>
  )
}

function ProfileStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="ProfileScreen" component={Profile}></Stack.Screen>
      <Stack.Screen name="ProfileEdit" component={ProfileEdit}></Stack.Screen>
    </Stack.Navigator>
  )
}