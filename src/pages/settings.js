import React from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";

const Settings = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>SETTINGS Coming soon</Text>
    </SafeAreaView>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
