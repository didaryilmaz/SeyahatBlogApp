import React, { useState } from 'react';
import { 
  StyleSheet, 
  View, 
} from 'react-native';
import LoginPage from './src/components/LoginPage';
import SignUpPage from './src/components/SignUpPage';
const App = () =>{
  return (
    <View style={styles.container}>
      <LoginPage/>
      <SignUpPage/>
    </View>
  )
}

const styles = StyleSheet.create ({
  container: {
    flex: 1
  }
})

export default  App;
