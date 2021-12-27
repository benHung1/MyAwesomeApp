import React from 'react';
import { Text, Button, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionic from 'react-native-vector-icons/Ionicons';

const Profile = ({ navigation }) => {
  const [ user, setUser ] = React.useState( "ben" )
  return (
    <View style={{ padding: 100, justifyContent:'center', backgroundColor: '#FF99CC', }}>
      <Text style={{ padding: 10, }}>You have to sign in ({ user })</Text>
      <Button 
        title="SignIn"  
      onPress={() => {
          navigation.navigate("SignIn", { user });
        }} 
      />
      <Button 
        title="SignUp" 
      onPress={() => {
          navigation.navigate( "SignUp" );        
        }} 
      />
    </View>
  )
};

const SignIn = ({ navigation, route }) => {
  return <Text>SignIn {route.params.user}</Text>
};

const SignUp = () => {
  return <Text>SignUp</Text>
};

const Stack = createNativeStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={ Profile } />
      <Stack.Screen name="SignIn" 
        component={ SignIn } 
        options={({ route }) => ({ title: `Sign In (${ route.params.user })` })}
      />
      <Stack.Screen name="SignUp" 
        component={ SignUp } 
        options={{ title: "Sign Up" }}
      />
    </Stack.Navigator>
  );
};

const Home = () => {
  return (
    <View style={{ 
        height: '100%',
        backgroundColor: '#33E6FA',
        justifyContent: 'center',
        alignItems:'center',
      }}>
      <Text style={{ fontSize:40, fontWeight:'bold' }}>Hello,My Name Is Ben,Greeting!</Text>
    </View>
  );
};

const Tabs = createBottomTabNavigator();

const Main = () => {
  return(
    <Tabs.Navigator>
      <Tabs.Screen 
        name="HOME" 
        component={ Home } 
        options={{ 
          tabBarIcon: (props) => <Ionic name="home" {...props} />,
        }}
      />
      <Tabs.Screen 
        name="ProfileStack" 
        component={ ProfileStack }
        options={{ 
          title:"Profile",
          headerShown: false,
          tabBarIcon: (props) => <Ionic name="person" {...props} />,
        }} 
      />
  </Tabs.Navigator>
  );
};

const  About = () => {
  return (
    <Text>About</Text>
  )
};

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Main" component={ Main } />
        <Drawer.Screen name="About" component={ About } />
      </Drawer.Navigator>
  </NavigationContainer>
  );
};

export default App;


