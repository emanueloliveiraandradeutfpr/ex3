import { View, TextInput, StyleSheet, Button } from "react-native";
import React from "react";

export default function Login() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const login = () => {
    console.log(username);
    console.log(password);
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setUsername}
        placeholder="Username"
        value={username}
      />
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        placeholder="password"
        value={password}
        secureTextEntry
      />

      <Button title="Logar" color="#841584" onPress={login} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    gap: 8,
  },
  input: {
    backgroundColor: "#ddd",
    height: 40,
    width: 150,
    padding: 10,
    margin: 12,
    borderColor: "#000",
    borderWidth: 1,
  },
});
