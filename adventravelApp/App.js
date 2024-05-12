import React, { useState } from 'react';
import { 
  SafeAreaView,
  StyleSheet, 
  ScrollView
} from 'react-native';
import LoginPage from './src/components/LoginPage';
import Hakkimizda from './src/components/Hakkimizda';
import SignUpPage from './src/components/SignUpPage';
import MainPage from './src/components/MainPage';
import MenuBtn from './src/components/MenuBtn';

const App = () =>{
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <LoginPage/>
        <Hakkimizda/>
      </ScrollView>
    </SafeAreaView>
    
  )
}

const styles = StyleSheet.create ({
  container: {
    flex: 1
  }
})

export default  App;
