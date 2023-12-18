import React,{useState} from 'react'
import {Button,View,Text,TextInput} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ipAdrr } from './App';
import {db} from './FirestoreConnection'
import {doc,getDoc,setDoc,Timestamp,collection,addDoc} from 'firebase/firestore'
export default function ConfirmOrder({navigation,route}){
    async function PlaceInOrderTable(){
      var orderId;
        const totalPrice=await AsyncStorage.getItem('TotalPrice')
        try{
           
           const res=await addDoc(collection(db,'Order'),{
            'customerId':route.params?.customerId,
            'TotalPrice':totalPrice,
            'ShipingAdrress':address,
            'bankCard':bankCard,
            'CustomerComments':comments,
            'OrderDate':Timestamp.fromDate(new Date()),
            'orderStatus':0
           })
        
        orderId=res.id;

        const JsonProducts=await AsyncStorage.getItem('Orders');
        const products=JSON.parse(JsonProducts)
        console.log(products)
        const subCol=collection(res,'ProductsItem')
        console.log('1')
        for(let i=0;i<products.length;i++){
                    console.log({
                      'productsID':products[i].productId,
                      'Items':products[i].itemNum,
                      'orderId':orderId
                      })
                      await setDoc(doc(subCol,products[i].productId),{
                      'Items':products[i].itemNum,
                      })     
        }
        
        const jsonValueorder=await AsyncStorage.removeItem('Orders');
        const jsonValueprice=await AsyncStorage.removeItem('TotalPrice');
      }
      catch(e){
        console.log('error')
      }
      }
      const [bankCard,setBankCard]=useState('');
      const [address,setAddress]=useState('');
      const [comments,setComments]=useState('');   
      return (
        <View>
        <TextInput placeholder='Input bank Card'onChangeText={setBankCard}/>
        <TextInput placeholder='Shipping Address' onChangeText={setAddress}/>
        <TextInput placeholder='Any comments about order' onChangeText={setComments}/>
  
      <Button title="Confirm Order" onPress={()=>PlaceInOrderTable()}/>
      
      </View>
      )
      
    }
    
