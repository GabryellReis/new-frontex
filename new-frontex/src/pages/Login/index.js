import React, { useState } from "react";
import { View, Button, StyleSheet, ActivityIndicator } from "react-native";
import { FloatingLabelInput } from "react-native-floating-label-input";
import { signInWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../../config'


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleLogin() {
    await signInWithEmailAndPassword(auth, email, password)
    .then(() => setIsLoading(true))
    .catch((e) => console.log(e))
  } 

  return (
    <View style={styles.container}>
      <FloatingLabelInput
        label="email"
        value={email}
        onChangeText={(value) => setEmail(value)}
      />
      <FloatingLabelInput
        label="password"
        value={password}
        isPassword
        onChangeText={(value) => setPassword(value)}
      />
      <Button title="Entrar" onPress={() => handleLogin()}/>
      {
        isLoading && <ActivityIndicator size='small' />
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  }
})
