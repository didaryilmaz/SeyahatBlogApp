import React from "react";
import { View, StyleSheet, ImageBackground } from "react-native";

const OnBoardScreen = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <ImageBackground style ={{flex: 1}}
      source={require('C:\Users\Didar\OneDrive\Masaüstü\adventravelApp\.expo\src\assets\firsPage.jpg')}>
      </ImageBackground>
    </View>
  );
};

const style = StyleSheet.create({});
export default OnBoardScreen;