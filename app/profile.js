import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Pressable
} from 'react-native';
import { Stack } from "expo-router";
import HomeHeader from "../../components/HomeHeader";
import { Ionicons } from '@expo/vector-icons';
import { db, storage } from '../../firebaseConfig';  // Ensure correct import
import { collection, addDoc, deleteDoc, doc, getDocs } from 'firebase/firestore';
import { getDownloadURL, ref } from 'firebase/storage';
import Color from '@/constants/Color';
import { useAuth } from '../../context/authContext';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Profile = () => {
  const [profileUrl, setProfileUrl] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const [newBlogTitle, setNewBlogTitle] = useState('');
  const [newBlogLocation, setNewBlogLocation] = useState('');
  const [newBlogImage, setNewBlogImage] = useState('');

  const {logout, user} = useAuth();
  const handleLogout = async ()=>{
  await logout();
  }

  useEffect(() => {
    // Fetch profile image URL
    const fetchProfileUrl = async () => {
      try {
        const url = await getDownloadURL(ref(storage, 'profile/profile_picture.jpg'));
        setProfileUrl(url);
      } catch (error) {
        console.error('Error fetching profile image URL:', error);
      }
    };

    // Fetch blog data
    const fetchBlogs = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'blogs'));
        const blogsList = [];
        querySnapshot.forEach((doc) => {
          blogsList.push({ id: doc.id, ...doc.data() });
        });
        setBlogs(blogsList);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchProfileUrl();
    fetchBlogs();
  }, []);

  const addBlog = async () => {
    if (newBlogTitle && newBlogLocation && newBlogImage) {
      try {
        const docRef = await addDoc(collection(db, 'blogs'), {
          title: newBlogTitle,
          location: newBlogLocation,
          image: newBlogImage,
        });
        setBlogs([...blogs, { id: docRef.id, title: newBlogTitle, location: newBlogLocation, image: newBlogImage }]);
        setNewBlogTitle('');
        setNewBlogLocation('');
        setNewBlogImage('');
      } catch (error) {
        console.error('Error adding blog:', error);
      }
    }
  };

  const deleteBlog = async (id) => {
    try {
      await deleteDoc(doc(db, 'blogs', id));
      setBlogs(blogs.filter(blog => blog.id !== id));
    } catch (error) {
      console.error('Error deleting blog:', error);
    }
  };

  const renderBlogItem = ({ item }) => (
    <View style={styles.blogItem}>
      <Image source={{ uri: item.image }} style={styles.blogImage} />
      <View style={styles.blogTextContainer}>
        <Text style={styles.blogTitle}>{item.title}</Text>
        <Text style={styles.blogLocation}>{item.location}</Text>
        <TouchableOpacity style={styles.blogTagButton}>
          <Text style={styles.blogTagText}>Etiket</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => deleteBlog(item.id)}>
        <Ionicons name="trash" size={24} color="red" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {profileUrl && <Image source={{ uri: profileUrl }} style={styles.profileImage} />}
        <Text style={styles.profileName}>Didar Yılmaz</Text>
        <Text style={styles.profileDescription}>
          Kullanıcı bu kısımda kendisi ile ilgili hakkında kısmı oluşturabilir.
          Deneyimlerinden kısaca özet geçerek bahsedebilir.
        </Text>
        <TouchableOpacity style={styles.editProfileButton}>
          <Text style={styles.editProfileButtonText}>Profilini Düzenle</Text>
        </TouchableOpacity>
        <View >
      <TouchableOpacity style={styles.editProfileButton}>
      <Pressable onPress={handleLogout}>
          <Text style={[styles.editProfileButtonText ]}>Çıkış Yap</Text>
        </Pressable>
        </TouchableOpacity>
        
    </View>
      </View>
      
    <Stack.Screen
        options={{
        header: ()=> <HomeHeader/>
        }}
    />
      <View style={styles.blogSection}>
        <Text style={styles.blogSectionTitle}>Blog Sayfalarım</Text>
        <FlatList
          data={blogs}
          renderItem={renderBlogItem}
          keyExtractor={(item) => item.id}
        />
        <View style={styles.addBlogSection}>
          <Text style={styles.addBlogTitle}>Blog Ekle</Text>
          <TextInput
            placeholder="Başlık"
            value={newBlogTitle}
            onChangeText={setNewBlogTitle}
            style={styles.input}
          />
          <TextInput
            placeholder="Detay"
            value={newBlogTitle}
            onChangeText={setNewBlogTitle}
            style={styles.input}
          />
          <TextInput
            placeholder="Lokasyon"
            value={newBlogLocation}
            onChangeText={setNewBlogLocation}
            style={styles.input}
          />
          <TextInput
            placeholder="Resim URL"
            value={newBlogImage}
            onChangeText={setNewBlogImage}
            style={styles.input}
          />
          <TouchableOpacity onPress={addBlog} style={styles.addBlogButton}>
            <Text style={styles.addBlogButtonText}>Ekle</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f7',
  },
  header: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#e0e8f0',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  profileName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 10,
  },
  profileDescription: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
    marginBottom: 10,
  },
  editProfileButton: {
    backgroundColor: Color.primaryColor,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  editProfileButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  blogSection: {
    padding: 20,
  },
  blogSectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  blogItem: {
    flexDirection: 'row',
    backgroundColor: Color.primaryColor,
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
    alignItems: 'center',
  },
  blogTextContainer: {
    flex: 1,
  },
  blogImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 10,
  },
  blogTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  blogLocation: {
    fontSize: 14,
    color: '#555',
  },
  blogTagButton: {
    backgroundColor: Color.primaryColor,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  blogTagText: {
    color: '#fff',
    fontSize: 14,
  },
  addBlogSection: {
    marginTop: 20,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
  },
  addBlogTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    fontSize: 16,
  },
  addBlogButton: {
    backgroundColor: Color.primaryColor,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  addBlogButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Profile;
