import { Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Pressable, } from 'react-native'
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import Color from "@/constants/Color";
import { Stack } from "expo-router";
import { useHeaderHeight } from "@react-navigation/elements";
import CategoryButtons from "@/components/CategoryButtons";
import Listings from "@/components/Listings";
import listingData from "@/data/destinations.json";
import GroupListings from "@/components/GroupListings";
import groupData from "@/data/groups.json";
import { useAuth } from '../../context/authContext'
import HomeHeader from "../../components/HomeHeader";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function Home() {

  const headerHeight = useHeaderHeight();
  const [category, setCategory] = useState("All");
  
  const {logout, user} = useAuth();
  const handleLogout = async ()=>{
  await logout();
  }
  console.log('uesr data: user');
  const onCatChanged = (category) => {
    
    console.log("Categori: ", category);
    setCategory(category);
  };
  return(
    <>
    <Stack.Screen
        options={{
        header: ()=> <HomeHeader/>
        }}
    />
    <View style={[styles.container, { paddingTop: hp(1) }]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.headingTxt}>Dünyanın Güzelliklerini Keşfedin!</Text>

        <View style={styles.searchSectionWrapper}>
          <View style={styles.searchBar}>
            <Ionicons
              name="search"
              size={18}
              style={{ marginRight: 5 }}
              color={Color.black}
            />
            <TextInput placeholder="Şimdi Keşfet..." />
          </View>
          <TouchableOpacity onPress={() => {}} style={styles.filterBtn}>
            <Ionicons name="options" size={28} color={Color.white} />
          </TouchableOpacity>
        </View>

        <CategoryButtons onCagtegoryChanged={onCatChanged} />

        <Listings listings={listingData} category={category} />

        <GroupListings listings={groupData} />
      </ScrollView>
    </View>
  </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: Color.bgColor,
  },
  headingTxt: {
    fontSize: 28,
    fontWeight: "800",
    color: Color.black,
    marginTop: 10,
  },
  searchSectionWrapper: {
    flexDirection: "row",
    marginVertical: 20,
  },
  searchBar: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: Color.white,
    padding: 16,
    borderRadius: 10,
  },
  filterBtn: {
    backgroundColor: Color.primaryColor,
    padding: 12,
    borderRadius: 10,
    marginLeft: 20,
  },
});