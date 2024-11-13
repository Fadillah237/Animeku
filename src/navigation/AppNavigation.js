import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Text, View } from 'react-native';

// Import screens
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailScreen';
import AddEditScreen from '../screens/AddEditScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import HistoryScreen from '../screens/HistoryScreen';
import SearchScreen from '../screens/SearchScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Stack Navigator for Home
const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen 
      name="Animeku" 
      component={HomeScreen} 
      options={{
        headerTitle: () => (
          <View style={{ flexDirection: 'row' }}>
            <Text style={{
              color: 'red', 
              fontSize: 24, 
              fontWeight: 'bold',
              textShadowColor: 'gray',  
              textShadowOffset: { width: 1, height: 1 },
              textShadowRadius: 5,
            }}>Anime</Text>
            <Text style={{
              color: 'blue', 
              fontSize: 24, 
              fontWeight: 'bold',
              textShadowColor: 'gray',  
              textShadowOffset: { width: 1, height: 1 },
              textShadowRadius: 5,
            }}>Ku</Text>
          </View>
        ),
      }}
    />
    <Stack.Screen name="Details" component={DetailsScreen} />
    <Stack.Screen name="AddEdit" component={AddEditScreen} />
  </Stack.Navigator>
);

// Main App Navigation with Tabs
const AppNavigation = () => (
  <NavigationContainer>
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Favorites') {
            iconName = 'heart';
          } else if (route.name === 'History') {
            iconName = 'time';
          } else if (route.name === 'Search') {
            iconName = 'search';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeStack} 
        options={{ headerShown: false, title: '' }} 
      />
      <Tab.Screen name="Favorites" component={FavoritesScreen} />
      <Tab.Screen name="History" component={HistoryScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
    </Tab.Navigator>
  </NavigationContainer>
);

export default AppNavigation;
