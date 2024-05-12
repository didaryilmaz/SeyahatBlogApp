import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  TextInput, 
  View, 
  Button,
  Checkbox
} from 'react-native';

function LoginPage () {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState('');
  const handleLogin = () => {
  };
  const handleForgotPassword = () => {
  };
  const handleCreateAccount = () => {
  };
  
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Şifre"
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <View style={styles.rememberMe}>
        <Checkbox
          value={rememberMe}
          onValueChange={setRememberMe}
        />
        <Text style={styles.rememberMeText}>Beni Hatırla</Text>
      </View>
      <Button title="Giriş" onPress={handleLogin} />
      <View style={styles.forgotPassword}>
        <Text style={styles.forgotPasswordText} onPress={handleForgotPassword}>
          Şifreni mi Unuttun?
        </Text>
      </View>
      <View style={styles.createAccount}>
        <Text style={styles.createAccountText} onPress={handleCreateAccount}>
          Yeni Hesap Oluştur
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: 300,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  rememberMe: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  rememberMeText: {
    fontSize: 12,
    color: '#888',
  },
  forgotPassword: {
    fontSize: 12,
    color: '#888',
    marginTop: 10,
  },
  forgotPasswordText: {
    color: "#000",
    textDecorationLine: "underline",
  },
  createAccount: {
    fontSize: 12,
    color: '#888',
    marginTop: 10,
  },
  createAccountText: {
    color: "#000",
    textDecorationLine: "underline",
  }
});
export default LoginPage;
