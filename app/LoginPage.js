import { View, Text, TextInput, TouchableOpacity, Pressable, Alert, ImageBackground } from 'react-native'
import React, { useRef, useState } from 'react' 
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { StatusBar } from 'expo-status-bar';
import { Octicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import Loading from './Loading';
import { useAuth } from '../context/authContext';

export default function SignIn() {

  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const {login} = useAuth();

  const emailRef = useRef("");
  const passwordRef = useRef("");

  const handleLogin = async ()=>{
    if(!emailRef.current || !passwordRef.current){
      Alert.alert('Giriş Yapın', "Lütfen tüm alanları doldurun!"); 
      return;
      }

      setLoading(true);
      const response = await login(emailRef.current, passwordRef.current)
      setLoading(false);
      console.log('Oturum Açın:', response);
      if(!response.success) {
        Alert.alert('Giriş Yap', response.msg);
        }
  }
  return (
    <View className="flex-1">
      <ImageBackground
        source={require('../assets/images/firstbgimg.png')}
        style={{paddingTop: hp (8), paddingHorizontal: wp(5)}} className="flex-1 gap-12"
        resizeMode="cover"
      >
    <View className="flex-1">
      <StatusBar style="dark" />
      <View style={{paddingTop: hp (32), paddingHorizontal: wp(3)}} className="flex-1 gap-12">

      <View className="gap-10">
        <Text style={{fontSize: hp(4)}} className="font-bold tracking-wider text-center text-white"></Text>
        <View className="gap-5">
          <View style={{height: hp(7)}} className="flex-row gap-4 px-4 bg-neutral-100 item-center rounded-xl">
            <Octicons name="mail" size={hp(2.5)} color="gray" />
            <TextInput
              onChangeText={value=> emailRef.current=value}
              style={{fontSize: hp(2)}}
              className="flex-1 font-semibold text-neutral-700"
              placeholder='E posta '
              placeholderTextColor={'gray'}
            />
          </View>
          <View className="gap-3">
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
            <Text style={{fontSize: hp(1.8)}} className="font-semibold text-center text-white"> Şifreni mi unuttun?</Text>
          </View>


          <View>
            {
              loading? (
                <View className="flex-row justify-center">
                  <Loading size={hp(6.5)}/>
                </View>
              ):(
                <TouchableOpacity onPress={handleLogin} style={{height: hp(6.5)}} className="bg-cyan-600 rounded-xl justify-center  items-center"> 
                  <Text style={{fontSize: hp(2.7)}} className="text-white font-bold tracking-wider">
                    Giriş Yap
                  </Text>
                </TouchableOpacity>
              )
            }
          </View>


          <View className="flex-row justify-center">
            <Text style={{fontSize: hp(1.8)}} className="font-semibold text-white">Hesabınız yok mu? </Text>
            <Pressable onPress={()=> router.push('signUp')}>
              <Text style={{fontSize: hp(1.8)}} className="font-bold text-cyan-100">Kayıt Ol</Text>
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