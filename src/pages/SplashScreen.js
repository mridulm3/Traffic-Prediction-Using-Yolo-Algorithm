import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Button,
  StatusBar,
  Dimensions,
  View,
  Image,
} from "react-native";

import * as Animatable from "react-native-animatable";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const SplashScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Animatable.Image
          animation="tada"
          duraton="15000"
          source={require("../images/logo2.png")}
          style={styles.logo}
        />
        <Text style={styles.welcome}>Welcome To CAMS</Text>
      </View>
      <Animatable.View style={styles.footer} animation="fadeInUpBig">
        <Text style={styles.title}>Know the Traffic!</Text>
        <Text style={styles.text}>Sign in with an account</Text>
        <View style={styles.button}>
          <TouchableOpacity onPress={() => navigation.navigate("SignInScreen")}>
            <Text style={styles.textSign}>
              Get Started
              <MaterialIcons name="navigate-next" color="#fff" size={20} />
            </Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </SafeAreaView>
  );
};

export default SplashScreen;

const { height } = Dimensions.get("screen");
const height_logo = height * 0.25;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#009387",
  },
  header: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  logo: {
    width: height_logo,
    height: height_logo,
  },
  title: {
    color: "#05375a",
    fontSize: 30,
    fontWeight: "bold",
  },
  welcome: {
    color: "white",
    fontStyle: "italic",
    fontSize: 27,
    fontWeight: "bold",
  },
  text: {
    color: "black",
    marginTop: 5,
  },
  button: {
    alignItems: "center",
    marginTop: 30,
    width: 150,
    borderRadius: 25,
    marginLeft: 180,
    borderColor: "white",
    backgroundColor: "#009387",
    borderWidth: 2,
  },
  signIn: {
    width: 150,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    flexDirection: "row",
  },
  textSign: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
});
