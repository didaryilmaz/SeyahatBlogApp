import React, { useState } from 'react';
import { 
  StyleSheet, 
  View, 
} from 'react-native';
import LoginPage from './src/components/LoginPage';
import SignUpPage from './src/components/SignUpPage';
import MainPage from './src/components/MainPage';
import MenuBtn from 'src/components/MenuBtn.js';

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
      <div>
        <MenuBtn />
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
