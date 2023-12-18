import React,{useState} from 'react'
import {Button,View,Text,TouchableOpacity,StyleSheet} from 'react-native'
import { TextInput} from 'react-native-paper'
import { ipAdrr } from './App'
import {db} from './FirestoreConnection'
import {doc,setDoc} from 'firebase/firestore'

export default function SignUp() {
     async function SignUp(){
      try{
        await setDoc(doc(db,'Customer',email),{
          name:name,
          password:password
        })
        console.log('Update Succesfuly')
    }
    catch(e){
      console.log('error')
    }
    }
    const [email,setEmail]=useState('');
    const [name,setName]=useState('');
    const [password,setPassword]=useState('');  
    return (
      <View
      style={{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ffc266',
      }}>
      <TextInput
        label="Email"
        mode="outlined"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        label="Name"
        mode="outlined"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput
        label="Password"
        mode="outlined"
        value={password}
        onChangeText={setPassword}
        style={styles.input}
      />
      <Text>{'\n'}</Text>
      <TouchableOpacity style={styles.btn} onPress={() => SignUp()}>
        <Text style={styles.btntxt}>Sign UP</Text>
      </TouchableOpacity>
      </View>
    )
    
  }
  export const styles = StyleSheet.create({
    btn: {
      borderRadius: 5,
      backgroundColor: 'white',
      alignItems: 'center',
    },
    btntxt: {
      padding: 10,
      fontWeight: 'bold',
      color: '#ff8000',
    },
    input: {
      backgroundColor: 'white',
    },
    View: {
      backgroundColor: '#ffc266',
    },
  });
  