import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
//importar paginas
import Home from "../screens/home";
import Insertion from "../screens/insertion";
import Saved from "../screens/saved";

const Tab = createBottomTabNavigator();
const icons = {
  Home: {
    lib: Ionicons,
    IconName: "md-home",
  },
  Insertion: {
    lib: Ionicons,
    iconName: "add",
  },
  Saved: {
    lib: Ionicons,
    iconName: "bookmarks",
  },
};

export default function Navigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Insertion" component={Insertion} />
      <Tab.Screen name="Saved" component={Saved} />
    </Tab.Navigator>
  );
}
