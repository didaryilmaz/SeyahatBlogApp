import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Color from "@/constants/Color";


const GroupListings = ({ listings }) => {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View>
        <Text style={styles.itemTxt}>{item.name}</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Ionicons name="star" size={20} color={Color.primaryColor} />
          <Text style={styles.itemRating}>{item.rating}</Text>
          <Text style={styles.itemReviews}>({item.reviews})</Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={{ marginVertical: 20 }}>
      <Text style={styles.title}>En İyi Seyahat Grupları</Text>
      <FlatList
        data={listings}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default GroupListings;

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: "600",
    color: Color.black,
    marginBottom: 10,
  },
  item: {
    backgroundColor: Color.white,
    padding: 10,
    borderRadius: 10,
    marginRight: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 80,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
  },
  itemTxt: {
    fontSize: 14,
    fontWeight: "600",
    color: Color.black,
    marginBottom: 8,
  },
  itemRating: {
    fontSize: 14,
    fontWeight: '600',
    color: Color.black,
    marginLeft: 5,
  },
  itemReviews: {
    fontSize: 14,
    color: '#999'
  }
});
