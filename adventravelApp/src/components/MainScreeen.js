import 'react-native-gesture-handler';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StatusBar
} from "react-native";
import React, { useState } from "react";
import { Stack } from "expo-router";
import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";


const Page = ({ navigation }) => {

  return (
    <>
      <Stack.Screen
        options={{
          headerTransparent: true,
          headerTitle: "",
          headerLeft: () => (
            
              <TouchableOpacity 
                style={styles.icons}
                onPress={() => {}} 
              >
                <Ionicons name="menu" size={45} color={Colors.primaryColor} />
              </TouchableOpacity>
          ),
          headerRight: () => (
            <View style={styles.buttonContainer}>
              <TouchableOpacity
              style={styles.icons}
              onPress={() => {}}
            >
              <Ionicons name="person" size={25} color={Colors.primaryColor} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.icons }
              onPress={() => {}}
              
            >
              <Ionicons name="notifications" size={25} color={Colors.primaryColor} />
            </TouchableOpacity>
            </View>
            
          ),
        }}
      />
      <View style={[styles.container]}>
        <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
      <ImageBackground 
        style={{flex:1}}
        source={require('@/src/assets/images/background.png')}>
      
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.headingTxt}>Yeni yerler keşfedin</Text>

          <View style={styles.searchSectionWrapper}>
            <View style={styles.searchBar}>
              <Ionicons
                name="search"
                size={20}
                style={{ marginRight: 5 }}
                color={Colors.black}
              />
              <TextInput placeholder="Şimdi keşfet..." />
            </View>
          </View>
          <View style={styles.cards}>
            <TouchableOpacity onPress={() => {}} style={styles.cards}>
              <ImageBackground
                source={require('@/src/assets/images/turlar.jpg')}
                style={styles.image}
              >
                <Text style={styles.buttonText}>Turlar</Text>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}} style={styles.cards}>
              <ImageBackground
                source={require('@/src/assets/images/yapılacaklar.jpeg')}
                style={styles.image}
              >
                <Text style={styles.buttonText}>Yapılacaklar</Text>
              </ImageBackground>
            </TouchableOpacity>
          </View>
        </ScrollView>
        </ImageBackground>
      </View>
    </>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 0,
    paddingVertical:0,
    backgroundColor: Colors.bgColor,
  },
  headingTxt: {
    color: Colors.white,
    left:20,
    fontSize: 25,
    fontWeight: "800",
    marginTop: 150,
  },
  buttonContainer:{
    flexDirection: 'row', 
    justifyContent: 'space-between',
  },
  icons:{
    top:22,
    padding: 10,
    borderRadius: 10,
    shadowColor: "#171717",
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    marginHorizontal: 2,
  },
  searchSectionWrapper: {
    left: 20,
    right:20,
    flexDirection: "row",
    marginVertical: 20,
  },
  searchBar: {
    flex: 0.9,
    flexDirection: "row",
    backgroundColor: Colors.white,
    padding: 16,
    borderRadius: 10,
  },
  cards:{
    flex:1,
    fontSize: 200,
    marginTop:20,
  },
  buttonText:{
    color: Colors.white,
    fontSize: 25,
    fontWeight: "800",
    marginTop: 40,
    marginBottom:110,
    marginLeft:20,
  }
});