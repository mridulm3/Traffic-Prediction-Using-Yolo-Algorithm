import "react-native-gesture-handler";
import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import Icon from "react-native-vector-icons/FontAwesome5";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import HomeScreen from "../pages/homescreen";
import Profile from "../pages/profile";
import Bookmark from "../pages/bookmark";
import Settings from "../pages/settings";
import Support from "../pages/support";

const HomeStack = createStackNavigator();
const BookmarkStack = createStackNavigator();
const SettingStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const SupportStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
  <Tab.Navigator
    initialRouteName="Home"
    activeColor="white"
    barStyle={{ backgroundColor: "#009387" }}
  >
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: "Home",
        tabBarColor: "#009387",

        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Bookmark"
      component={BookmarkStackScreen}
      options={{
        tabBarLabel: "Bookmark",

        tabBarColor: "#009387",
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons
            name="bookmark-outline"
            color={color}
            size={26}
          />
        ),
      }}
    />

    <Tab.Screen
      name="Profile"
      component={ProfileStackScreen}
      options={{
        tabBarLabel: "Profile",

        tabBarColor: "#009387",
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Settings"
      component={SettingsStackScreen}
      options={{
        tabBarLabel: "Settings",

        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons
            name="settings-outline"
            color={color}
            size={26}
          />
        ),
      }}
    />

    <Tab.Screen
      name="Support"
      component={SupportStackScreen}
      options={{
        tabBarLabel: "Support",

        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons
            name="account-check-outline"
            color={color}
            size={26}
          />
        ),
      }}
    />
  </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = ({ navigation }) => (
  <HomeStack.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerStyle: {
        backgroundColor: "#009387",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        headerLeft: () => (
          <Icon.Button
            name={"align-justify"}
            size={25}
            color="black"
            backgroundColor="#009387"
            onPress={() => navigation.openDrawer()}
          />
        ),
      }}
    />
  </HomeStack.Navigator>
);

const BookmarkStackScreen = ({ navigation }) => (
  <BookmarkStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#009387",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <BookmarkStack.Screen
      name="Bookmark"
      component={Bookmark}
      options={{
        headerLeft: () => (
          <Icon.Button
            name={"align-justify"}
            size={25}
            color="black"
            backgroundColor="#009387"
            onPress={() => navigation.openDrawer()}
          />
        ),
      }}
    />
  </BookmarkStack.Navigator>
);

const ProfileStackScreen = ({ navigation }) => (
  <ProfileStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#009387",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <ProfileStack.Screen
      name="Profile"
      component={Profile}
      options={{
        headerLeft: () => (
          <Icon.Button
            name={"align-justify"}
            size={25}
            color="black"
            backgroundColor="#009387"
            onPress={() => navigation.openDrawer()}
          />
        ),
      }}
    />
  </ProfileStack.Navigator>
);

const SettingsStackScreen = ({ navigation }) => (
  <SettingStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#009387",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <SettingStack.Screen
      name="Settings"
      component={Settings}
      options={{
        headerLeft: () => (
          <Icon.Button
            name={"align-justify"}
            size={25}
            color="black"
            backgroundColor="#009387"
            onPress={() => navigation.openDrawer()}
          />
        ),
      }}
    />
  </SettingStack.Navigator>
);

const SupportStackScreen = ({ navigation }) => (
  <SupportStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#009387",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <SupportStack.Screen
      name="Support"
      component={Support}
      options={{
        headerLeft: () => (
          <Icon.Button
            name={"align-justify"}
            size={25}
            color="black"
            backgroundColor="#009387"
            onPress={() => navigation.openDrawer()}
          />
        ),
      }}
    />
  </SupportStack.Navigator>
);
