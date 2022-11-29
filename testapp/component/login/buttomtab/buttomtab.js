import * as React from 'react';
import { Text, View ,Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="สถานที่" component={HomeScreen} options={{
            title: 'สถานที่',
            tabBarIcon: ({size,focused,color}) => {
              return (
                <Image
                  style={{ width: size, height: size }}
                  source={require('./assets/image/icforest.png')}
                />
              );
            },
          }}/>
      <Tab.Screen name="คู่มือ" component={SettingsScreen}options={{
            title: 'คู่มือ',
            tabBarIcon: ({size,focused,color}) => {
              return (
                <Image
                  style={{ width: size, height: size }}
                  source={require('./assets/image/icbook.png')}
                />
              );
            },
          }} />
      <Tab.Screen name="ตำแหน่ง" component={HomeScreen}options={{
            title: 'ตำแหน่ง',
            tabBarIcon: ({size,focused,color}) => {
              return (
                <Image
                  style={{ width: size, height: size }}
                  source={require('./assets/image/location.png')}
                />
              );
            },
          }} />
      <Tab.Screen name="สถิติ" component={SettingsScreen} options={{
            title: 'สถิติ',
            tabBarIcon: ({size,focused,color}) => {
              return (
                <Image
                  style={{ width: size, height: size }}
                  source={require('./assets/image/annual-report.png')}
                />
              );
            },
          }}/>
      <Tab.Screen name="อุปกรณ์" component={SettingsScreen}options={{
            title: 'อุปกรณ์',
            tabBarIcon: ({size,focused,color}) => {
              return (
                <Image
                  style={{ width: size, height: size }}
                  source={require('./assets/image/briefcase.png')}
                />
              );
            },
          }} />
    </Tab.Navigator>
  );
}

export default function Buttomtab() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}