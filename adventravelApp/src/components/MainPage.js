import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

function MainPage () {
  const [MenuBtn, setShowMenu] = useState(false);

  const handleMenuPress = () => {
    setShowMenu(!MenuBtn);
  };

  const handleUserPress = () => {
    navigation.navigate('User');
  };

  const handleNotificationsPress = () => {
    navigation.navigate('Notifications');
  };

  const handleToDoListPress = () => {
    navigation.navigate('ToDoList');
  };

  const handleToursPress = () => {
    navigation.navigate('Tours');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
          <TouchableOpacity onPress={() => handleMenuPress()}>
            <FontAwesome name="bars" size={24} color="#000" />
          </TouchableOpacity>
        <View style={styles.rightButtons}>
          <TouchableOpacity onPress={handleUserPress}>
            <FontAwesome name="user" size={24} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleNotificationsPress}>
            <FontAwesome name="bell" size={24} color="#000" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.searchSection}>
       <FontAwesome name="search" size={24} color="#000" />    
        <TextInput
          style={styles.searchInput}
          placeholder="Şimdi keşfet"
        />
      </View>
      <View style={styles.buttonSection}>
        <Button title="Yapılacaklar Listesi" onPress={handleToDoListPress} />
        <Button title="Turlar" onPress={handleToursPress} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f0f0f0',
  },
  menuIcon: {
    width: 20,
    height: 20,
  },
  appIcon: {
    width: 100,
    height: 30,
  },
  rightButtons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userIcon: {
    width: 25,
    height: 25,
  },
  notificationsIcon: {
    width: 25,
    height: 25,
  },
  searchSection: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
  },
  searchIcon: {
    width: 20,
    height: 20,
  },
  searchInput: {
    flex: 1,
    padding: 10,
  },
  buttonSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
});

export default MainPage;

