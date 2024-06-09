import { View, Text, Image, TextInput, TouchableOpacity, Pressable, Alert, ImageBackground, } from 'react-native';
import React, { useRef, useState } from 'react' 
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { StatusBar } from 'expo-status-bar';
import { Feather, Octicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import Loading from './Loading';
import { useAuth } from '../context/authContext';


export default function SignUp() {
  const router = useRouter();
  const {register} = useAuth();
  const [loading, setLoading] = useState(false);

  const emailRef = useRef("");
  const passwordRef = useRef("");
  const usernameRef = useRef("");
  const profileRef = useRef("");


  const handleRegister = async ()=>{
    if(!emailRef.current || !passwordRef.current || !usernameRef.current || !profileRef.current){
      Alert.alert('Üye Olun', "Lütfen tüm alanları doldurun!"); 
      return;
      }
      setLoading(true);

      let response = await register(emailRef.current, passwordRef.current, usernameRef.current, profileRef.current);
      setLoading(false);

      console.log('sonucu aldım:', response);
      if(!response.success){
        Alert.alert('Sign Up', response.msg);
        }

  return (
    <View className="flex-1">
      <ImageBackground
        source={require('../assets/images/firstbgimg.png')}
        style={{paddingTop: hp (7), paddingHorizontal: wp(5)}} className="flex-1 gap-12"
        resizeMode="cover"
      >
    <View className="flex-1">
      <StatusBar style="dark" />
      <View style={{paddingTop: hp (33), paddingHorizontal: wp(4)}} className="flex-1 gap-12">

      <View className="gap-2">
        <Text style={{fontSize: hp(4)}} className="font-bold tracking-wider text-center text-white"></Text>
        <View className="gap-5">
          <View style={{height: hp(7)}} className="flex-row gap-4 px-4 bg-neutral-100 item-center rounded-xl">
            <Octicons name="mail" size={hp(2.7)} color="gray" />
            <TextInput
              onChangeText={value=> emailRef.current=value}
              style={{fontSize: hp(2)}}
              className="flex-1 font-semibold text-neutral-700"
              placeholder='E posta '
              placeholderTextColor={'gray'}
            />
          </View>
          <View style={{height: hp(7)}} className="flex-row gap-4 px-4 bg-neutral-100 item-center rounded-xl">
            <Feather name="user" size={hp(2.7)} color="gray" />
            <TextInput
              onChangeText={value=> usernameRef.current=value}
              style={{fontSize: hp(2)}}
              className="flex-1 font-semibold text-neutral-700"
              placeholder='Kullanıcı Adı'
              placeholderTextColor={'gray'}
            />
          </View>
          
          <View style={{height: hp(7)}} className="flex-row gap-4 px-4 bg-neutral-100 item-center rounded-xl">
            <Octicons name="lock" size={hp(2.7)} color="gray" />
            <TextInput
              onChangeText={value=> passwordRef.current=value}
              style={{fontSize: hp(2)}}
              className="flex-1 font-semibold text-neutral-700"
              placeholder='Şifre'
              secureTextEntry
              placeholderTextColor={'gray'}
            />
          </View>
          <View style={{height: hp(7)}} className="flex-row gap-4 px-4 bg-neutral-100 item-center rounded-xl">
            <Feather name="image" size={hp(2.7)} color="gray" />
            <TextInput
              onChangeText={value=> profileRef.current=value}
              style={{fontSize: hp(2)}}
              className="flex-1 font-semibold text-neutral-700"
              placeholder='Profil url '
              placeholderTextColor={'gray'}
            />
          </View>

          <View>
            {
              loading? (
                <View className="flex-row justify-center">
                  <Loading size={hp(6.5)}/>
                </View>
              ):(
                <TouchableOpacity onPress={handleRegister} style={{height: hp(6.5)}} className="bg-cyan-600 rounded-xl justify-center  items-center"> 
                  <Text style={{fontSize: hp(2.7)}} className="text-white font-bold tracking-wider">
                    Kaydet
                  </Text>
                </TouchableOpacity>
              )
            }
          </View>

          <View className="flex-row justify-center">
            <Text style={{fontSize: hp(1.8)}} className="font-semibold text-white">Zaten bir hesabınız var mı? </Text>
            <Pressable onPress={()=> router.push('signIn')}>
              <Text style={{fontSize: hp(1.8)}} className="font-bold text-cyan-100">Giriş Yap</Text>
            </Pressable>

          </View>

          </View>
        </View>
      </View>
    </View>

    
    </ImageBackground>
    </View>
  )
}
}