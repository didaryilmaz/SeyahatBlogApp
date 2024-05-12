import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

function MenuBtn () {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <View style={styles.container}>
      <Button title="Menü" onPress={toggleMenu} />

      {isMenuOpen && (
        <View style={styles.menu}>
          <Button title="Kapat" onPress={toggleMenu} style={styles.closeButton} />
          <View style={styles.menuButtons}>
            <Button title="Üye Girişi" onPress={() => navigation.navigate('LoginPage')} />
            <Button title="Kayıt Ol" onPress={() => navigation.navigate('SignUpPage')} />
          </View>
          <View style={styles.navigationButtons}>
            <Button title="Ana Sayfa" onPress={() => navigation.navigate('MainPage')} />
            <Button title="Blog Sayfam" onPress={() => navigation.navigate('Blog')} />
            <Button title="Hakkımızda" onPress={() => navigation.navigate('About')} />
            <Button title="İletişim" onPress={() => navigation.navigate('Contact')} />
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menu: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
  },
  closeButton: {
    marginBottom: 20,
  },
  menuButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  navigationButtons: {
    flexDirection: 'column',
  },
});
export default  MenuBtn;
