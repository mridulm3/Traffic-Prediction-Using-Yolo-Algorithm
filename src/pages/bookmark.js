import React from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";

const Bookmark = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Notifications</Text>
    </SafeAreaView>
  );
};

export default Bookmark;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
