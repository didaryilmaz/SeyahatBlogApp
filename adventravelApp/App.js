import React, { useState } from 'react';
import { 
  StyleSheet, 
  View, 
} from 'react-native';
import LoginPage from './src/components/LoginPage';
import SignUpPage from './src/components/SignUpPage';
import MainPage from './src/components/MainPage';

const App = () =>{
  return (
    <View style={styles.container}>
      <div>
        <LoginPage/>
      </div>
      <div>
        <SignUpPage />
      </div>
      <div>
        <MainPage />
      </div>
    </View>
  )
}

const styles = StyleSheet.create ({
  container: {
    flex: 1
  }
})

export default  App;
