import Reatc,{useState} from 'react'
import {Button,View,Text,TouchableOpacity,StyleSheet} from 'react-native'
import { TextInput} from 'react-native-paper'
import { ipAdrr } from './App'
import {db} from './FirestoreConnection'
import {doc,getDoc} from 'firebase/firestore'


export default function LogIn({navigation}){
    async function LogIn(){
        try{
          if(email=='admin'&& password=="123"){
            console.log('done')
            navigation.navigate('Admin')
          }
          else{
          const res=await getDoc(doc(db,'Customer',email));
        if(!res.exists()){
            alert('Incorrect Email and Password')
        }
        else{
            if(res.data().password==password){
              navigation.navigate('ViewProducts',{"customerId":email})
            }
             
        }
      }
      }
      catch(e){
        console.log('error')
      }
      }
      const [email,setEmail]=useState('');
      const [password,setPassword]=useState('');   
      return (
      <View
         style={{
           flex: 1,
           backgroundColor: '#ffc266',
         }}>
         <TextInput
           label="Email Address"
           mode="outlined"
           value={email}
           onChangeText={setEmail}
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
         <View
         style={{
           flex: 10,
           alignItems: 'center',
           backgroundColor: '#ffc266',
         }}>
         <TouchableOpacity style={styles.btn} onPress={() => LogIn()}>
           <Text style={styles.btntxt}>Log In</Text>
         </TouchableOpacity>
         <Text>{'\n'}</Text>
         <TouchableOpacity
           style={styles.btn}
           onPress={() => navigation.navigate('SignUp')}>
           <Text style={styles.btntxt}>Sign Up</Text>
         </TouchableOpacity>
         </View>
       </View>
      )
      
    }
   export const styles = StyleSheet.create({
     btn: {
       borderRadius: 5,
       backgroundColor: 'white',
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