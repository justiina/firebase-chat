import { StyleSheet, Text, TextInput, Button, SafeAreaView, 
  View } from "react-native";
import { useState } from "react";
import { auth, signInWithEmailAndPassword } from "../firebase/Config";
import Constants from "expo-constants";

export default function Login({ setLogin }) {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    signInWithEmailAndPassword(auth, user, password)
      .then((userCredential) => {
        console.log(userCredential.user);
        setLogin(true);
      })
      .catch((error) => {
        if (
          error.code === "auth/wrong-password" ||
          error.code == "auth/user-not-found"
        ) {
          console.log("Invalid credentials");
        } else if (error.code === "auth/too-many-requests") {
          console.log("Too many attempts to login");
        } else {
          console.log(error.code + " " + error.message);
        }
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.heading}>Login</Text>
        <Text style={styles.field}>Username</Text>
        <TextInput
          style={styles.input}
          placeholder="Type email here"
          value={user}
          onChangeText={(text) => setUser(text)}
        />
        <Text style={styles.field}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Type password here"
          value={password}
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        />
        <Button title="Login" type="button" onPress={login} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    paddingLeft: 24,
    paddingRight: 24,
    justifyContent: "center",
    flex: 1,
    backgroundColor: "#fff",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
  },
  field: {
    fontSize: 16,
    paddingTop: 8,
  },
  input: {
    fontSize: 16,
    paddingBottom: 8,
  },
});
