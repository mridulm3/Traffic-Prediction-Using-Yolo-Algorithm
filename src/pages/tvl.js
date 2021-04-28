import React, { useState } from "react";

import {
  StyleSheet,
  Text,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { Video } from "expo-av";
import vid from "../images/2.mp4";

const Output = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="black" />
      <Text style={styles.textSign}> Location :Thiruvalla</Text>

      <Video
        source={vid}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="STRETCH"
        shouldPlay
        isLooping
        style={{ width: 300, height: 300 }}
      />

      <Text style={styles.textContent}>
        Real-time Traffic is being displayed
      </Text>
      <TouchableOpacity
        style={[
          styles.signIn,
          {
            borderColor: "#009387",
            borderWidth: 2,
            marginTop: 15,
          },
        ]}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.textSign}>Return</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
export default Output;

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
    alignSelf: "center",
  },
  textContent: {
    fontSize: 18,
    fontWeight: "bold",
    fontStyle: "italic",
    color: "black",
    alignSelf: "center",
  },
  signIn: {
    width: 100,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#009387",
  },
});
