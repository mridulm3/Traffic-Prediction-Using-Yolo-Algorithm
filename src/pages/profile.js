import React from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";

const Profile = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>PROFILE</Text>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
