import React from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";

const Support = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>For Feedback and Support needs,contact CAMS helpline</Text>
    </SafeAreaView>
  );
};

export default Support;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
