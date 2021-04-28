import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  StatusBar,
  Picker,
} from "react-native";

import Tvl from "./tvl";
import Cgnr from "./cgnr";
import Ekm from "./ekm";
import Klm from "./klm";
import Tvm from "./tvm";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome5";

const RootStack = createStackNavigator();

const HS = ({ navigation }) => {
  const [selectedValue, setSelectedValue] = React.useState("TVM");

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="black" />
      <Text style={styles.textSign}>
        {" "}
        Select the required traffic location{" "}
      </Text>

      {/*  <Picker
        selectedValue={selectedValue}
        style={{
          height: 50,
          width: 150,

          transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }],
        }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Trivandrum" value="TVM" />
        <Picker.Item label="Kollam" value="KLM" />
        <Picker.Item label="Thiruvalla" value="TVLA" />
        <Picker.Item label="Chengannur" value="CGNR" />
        <Picker.Item label="Kottayam" value="KTM" />
        <Picker.Item label="Ernakulum" value="EKM" />
      </Picker> 

      */}
      <TouchableOpacity
        style={[
          styles.signIn,
          {
            borderColor: "#009387",
            borderWidth: 2,
            marginTop: 15,
          },
        ]}
        onPress={() => {
          navigation.push("Tvm");
        }}
      >
        <Text style={styles.textSign}>Trivandrum</Text>
        <Icon name="map-marker-alt" size={18} color="black" />
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.signIn,
          {
            borderColor: "#009387",
            borderWidth: 2,
            marginTop: 15,
          },
        ]}
        onPress={() => {
          navigation.push("Klm");
        }}
      >
        <Text style={styles.textSign}>Kollam</Text>
        <Icon name="map-marker-alt" size={18} color="black" />
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.signIn,
          {
            borderColor: "#009387",
            borderWidth: 2,
            marginTop: 15,
          },
        ]}
        onPress={() => {
          navigation.push("Tvl");
        }}
      >
        <Text style={styles.textSign}>Thiruvalla</Text>
        <Icon name="map-marker-alt" size={18} color="black" />
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.signIn,
          {
            borderColor: "#009387",
            borderWidth: 2,
            marginTop: 15,
          },
        ]}
        onPress={() => {
          navigation.push("Cgnr");
        }}
      >
        <Text style={styles.textSign}>Chengannur</Text>
        <Icon name="map-marker-alt" size={18} color="black" />
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.signIn,
          {
            borderColor: "#009387",
            borderWidth: 2,
            marginTop: 15,
          },
        ]}
        onPress={() => {
          navigation.push("Ekm");
        }}
      >
        <Text style={styles.textSign}>Ernakulam</Text>
        <Icon name="map-marker-alt" size={18} color="black" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};
export default HS;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  textSign: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    alignSelf: "flex-start",
    flexDirection: "row",
  },
  textContent: {
    fontSize: 18,
    fontWeight: "bold",
    fontStyle: "italic",
    color: "black",
    alignSelf: "center",
  },
  signIn: {
    width: 150,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#009387",
  },
});
