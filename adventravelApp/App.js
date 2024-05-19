import React, { useState } from 'react';
import { 
  SafeAreaView,
  StyleSheet, 
  ScrollView
} from 'react-native';

const App = () =>{
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
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
