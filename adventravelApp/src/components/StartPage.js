import React from "react";
import { 
  SafeAreaView,
  StyleSheet, 
  Text, 
  ImageBackground
} from "react-native";

const StartPage = () =>{
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground 
      source={require('../../assets/firsPage.jpg')}
      style={styles.image}
      >
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: 'royalblue'
  },
  image: {
    flex: 1
  }
})

export default  StartPage;