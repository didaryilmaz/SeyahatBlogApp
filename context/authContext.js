import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateCurrentUser } from "firebase/auth";
import { auth, db } from "../firebaseConfig";
import {doc, getDoc, setDoch} from 'firebase/firestore';

export const AuthContext = createContext();
export const AuthContextProvider = ({children})=>{
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(undefined);

    useEffect(() => {
      const unsub = onAuthStateChanged(auth, (user)=>{
        //console.log('Kullanıcı: ', user);
        if(user) {
          setIsAuthenticated(true);
          setUser (user);
          updateCurrentUser (user.uid);
        }else{
          setIsAuthenticated (false);
          setUser(null);
        }
    });
    return unsub;
    }, []);

    const updateUserData = async (userId)=>{
        const docRef = doc(db, 'users', userId);
        const docSnap = await getDoc(docRef);

        if(docSnap.exists()){
          let data = docSnap.data();
          setUser({...user, username: data.username, profileUrl: data.profileUrl, userId: data.userId });
        }
        
    }
      
    const login = async (email, password)=>{
      try{
        const response = await signInWithEmailAndPassword(auth, email, password);
        return {success: true};
      }catch(e){
        let msg = e.message;
        if(msg.includes('(auth/invalid-email)')) msg='Geçersiz e-posta'
        if(msg.includes ('(auth/invalid-credential)')) msg='Yanlış kimlik bilgileri'
          return {success: false, msg: e.message};
      }
    }
    const logout = async ()=>{
      try{
        await signOut(auth);
        return {success: true};
      }catch(e){
        return {success: false, msg: e.message, error: e};

      }
    }
    const register = async (email, password, username, profileUrl)=>{
      try{
        const response = await createUserWithEmailAndPassword(auth, email, password);
        console.log('response.user', response?.user);

        // setUser(response?.user);
        // setIsAuthenticated(true);

        await setDoc(doc(db, "Kullanıcılar", response?.user?.uid),{
            username,
            profileUrl,
            userId: response?.user?.uid
          });
          return {success: true, data: response?.user};
      }catch(e){
        let msg = e.message;
        if(msg.includes('(auth/invalid-email)')) msg='Geçersiz e-posta'
        if(msg.includes('(auth/email-already-in-use)')) msg='Bu e-posta zaten kullanılıyor '
          return {success: false, msg: e.message};
      }
    }

    return (
      <AuthContext. Provider value={{user, isAuthenticated, login, register, logout}}>
        {children}
      </AuthContext.Provider>
    )
}

export const useAuth = ()=>{
    const value = useContext (AuthContext);
      if(!value) {
        throw new Error('useAuth must be wrapped inside AuthContextProvider');
      }
      return value;
}