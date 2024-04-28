import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';

const App = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuPress = () => {
    setShowMenu(!showMenu);
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
        <TouchableOpacity onPress={handleMenuPress}>
          //<Image source={require('')} style={styles.menuIcon} />
        </TouchableOpacity>
        //<Image source={require('')} style={styles.appIcon} />
        <View style={styles.rightButtons}>
          <TouchableOpacity onPress={handleUserPress}>
            //<Image source={require('')} style={styles.userIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleNotificationsPress}>
            //<Image source={require('')} style={styles.notificationsIcon} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.searchSection}>
        //<Image source={require('')} style={styles.searchIcon} />
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

export default App;
