import React from 'react';
import { 
  StyleSheet, 
  View, 
} from 'react-native';
import LoginPage from './src/components/LoginPage';

const App = () =>{
  return (
    <View style={styles.container}>
      <LoginPage/>
    </View>
  )
}

const styles = StyleSheet.create ({
  container: {
    flex: 1
  }
})

export default  App;
