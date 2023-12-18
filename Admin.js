import React,{useState} from 'react'
import {Button,View,Text,TextInput} from 'react-native'
import { ipAdrr } from './App'
import DocumentPicker from 'react-native-document-picker';
import {db} from './FirestoreConnection'
import {doc,setDoc,collection} from 'firebase/firestore'
export default function Admin({navigation}) {
//   var url;
//   async function selectPicture(){
//     try{
//     const result = await DocumentPicker.pick({
//       type: [DocumentPicker.types.allFiles],
//     });
//     console.log('1')
//     const { uri, type, name } = result;
//     await uploadImage(uri, type, name);
//   } catch (error) {
//     console.error('Error picking document:', error);
//   }
// }
// const uploadImage = async (uri, type, name) => {
//   try {
//     console.log('2')
//     const storageRef = db.ref(`images/${name}`);
//     console.log('3')
//     await storageRef.putFile(uri, { contentType: type });
//     console.log('4')
//     url = await storageRef.getDownloadURL();
//     console.log('5')
//     // Call a function to store the downloadURL in Firestore or Realtime Database
//     // saveImageURLToDatabase(downloadURL);
//   } catch (error) {
//     console.error('Error uploading image:', error);
//   }
// };
     async function AddProduct(){
      try{
        await setDoc(doc(collection(db,'Product')),{
          // image:url,
          name:name,
          description:description,
          category:category,
          price:price,
        })
        console.log('Update Succesfuly')
      

    }
    catch(e){
      console.log('error')
    }
    }
    const [name,setName]=useState('');
    const [description,setdescription]=useState('');
    const [category,setcategory]=useState('');
    const [price,setprice]=useState('');    
    return (
      <View>
      <TextInput title='Name' onChangeText={setName}/>
      <TextInput title='Description' onChangeText={setdescription}/>
      
      <TextInput title='Category' onChangeText={setcategory}/>
      <TextInput title='Price' onChangeText={setprice}/>

    <Button title="Add Product" onPress={()=>AddProduct()}/>
    <Button title="Select Picture" onPress={()=>selectPicture()}/>
    
    <Button title="Check UnReview Orders" onPress={()=>navigation.navigate('ReviewOrders')}/>
   
    </View>
    )
    
  }
  