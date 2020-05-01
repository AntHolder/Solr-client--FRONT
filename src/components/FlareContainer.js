import React from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Image,
  ImageBackground,
} from "react-native";
import {
  Input,
  ThemeProvider,
  Button,
  Text,
  Card,
} from "react-native-elements";
import Flare from "./Flare.js";
import {
  createMaterialBottomTabNavigator,
  NavigationContainer,
} from "@react-navigation/material-bottom-tabs";
import { Icon } from "native-base";

import Login from "./Login";
import Explore from "./Explore";

function FlareContainer(props) {
  return <ScrollView>{renderFlares(props)}</ScrollView>;
}

export default FlareContainer;

const renderFlares = (props) => {
  return props.flares.map((flare) => <Flare key={flare.id} flare={flare} />);
};
