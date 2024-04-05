import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  Button, 
  DatePicker 
} from 'react-native';

const SignUpPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [birthday, setBirthday] = useState('');

  const handleSignUp = () => {
  };

  return (
    <View>
      <Text>Adınız</Text>
      <TextInput
        value={name}
        onChangeText={setName}
      />
      <Text>E-posta</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
      />
      <Text>Şifre</Text>
      <TextInput
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Text>Doğum Gününüz</Text>
      <DatePicker
        value={birthday}
        onDateChange={setBirthday}
      />
      <Button
        title="Üye Ol"
        onPress={handleSignUp}
      />
    </View>
  );
};

export default SignUpPage;

