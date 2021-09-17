import React from "react";
import { View } from "react-native";
import IconIonicons from "react-native-vector-icons/Ionicons";
import IconFoundation from "react-native-vector-icons/Foundation";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Mno from "./job";
import Pqr from "./Settings";
import Xyz from "./first";
import Providers from "./providers";
const Tab = createBottomTabNavigator();
export default class Home extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          tabBarOptions={{
            style: {
              height: 65,
              backgroundColor: "#ace5ee",
            },
            labelStyle: {
              marginBottom: 10,
              color: "black",
            },
          }}
          screenOptions={({ route }) => ({
            tabBarIcon: () => {
              if (route.name == "My-Job")
                return <IconFoundation name="shopping-bag" size={25} />;
              if (route.name == "home")
                return <IconIonicons name="home" size={25} />;
              if (route.name == "Settings")
                return <IconIonicons name="md-settings" size={25} />;
            },
          })}
        >
          <Tab.Screen name="home" component={Xyz} />
          <Tab.Screen name="My-Job" component={Mno} />
          <Tab.Screen name="Settings" component={Pqr} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
