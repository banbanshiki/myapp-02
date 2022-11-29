import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
 
export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  return (
    <View style={styles.container}>
      <Image style={styles.back} source={require("./assets/image/left-arrow.png")} />
      <Image style={styles.image} source={require("./assets/image/longpha.png")} />
      <Text style={styles.textshow}>Let’s sign up </Text>
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput1}
          placeholder="Email."
          placeholderTextColor="#D0D0D0"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
 
      <View style={styles.inputView2}>
        <TextInput
          style={styles.TextInput2}
          placeholder="Password."
          placeholderTextColor="#D0D0D0"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <View style={styles.inputView3}>
        <TextInput
          style={styles.TextInput3}
          placeholder="Confirm."
          placeholderTextColor="#D0D0D0"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
 
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>Let’s go</Text>
      </TouchableOpacity>

    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
 
  back: {
    width: 25,
    height: 25,
    top: 30,
    left: -145,
  },

  image: {
    width: 360,
    height: 318,
    marginBottom: 125,
  },
 
  textshow: {
    fontSize: 34,
    lineHeight: 41,
    top: -100,
  },

  inputView: {
    backgroundColor: "#EEEBEB",
    borderRadius: 10,
    width: "90%",
    height: 45,
    top: -80,
    alignItems: "center",
  },

  inputView2: {
    backgroundColor: "#EEEBEB",
    borderRadius: 10,
    width: "90%",
    height: 45,
    top: -60,
    alignItems: "center",
  },

  inputView3: {
    backgroundColor: "#EEEBEB",
    borderRadius: 10,
    width: "90%",
    height: 45,
    top: -40,
    alignItems: "center",
  },
 
  TextInput1: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: -250,
  },

  TextInput2: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: -220,
  },

  TextInput3: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: -235,
  },
 
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
 
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    top: -20,
    backgroundColor: "#2F6D30",
  },
  loginText: {
    fontSize: 20,
    color: "#fff",
  },
});