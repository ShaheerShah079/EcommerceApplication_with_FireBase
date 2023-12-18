import Reatc,{useState,useEffect} from 'react'
import {Button,View,Text,TextInput,ScrollView,FlatList} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CommonActions } from '@react-navigation/native';
import { ipAdrr } from './App';
import {db} from './FirestoreConnection'
import {doc,getDoc} from 'firebase/firestore'

export default function PlaceOrders({navigation,route}){
    async function getOrderProduct(){
        const JsonProducts=await AsyncStorage.getItem('Orders');
        const products=JSON.parse(JsonProducts)
        const jsonPrice=await AsyncStorage.getItem('TotalPrice')
        const price=JSON.parse(jsonPrice)
        setTotalPrice(price)
        var tempProduct=[];
        for(let i=0;i<products.length;i++){
            try{
                console.log(products[i].productId)
                console.log(products[i].itemNum)
                console.log(price)
                
                const  res =await getDoc(doc(db,'Product',products[i].productId))
                var tempProduct=[]
    
                tempProduct.push("Product Name : "+res.data().name+" Product Category : "+res.data().category+" Purchased Item : "+products[i].itemNum+" price : "+(products[i].itemNum*parseFloat(res.data().price)))
                
              }
              catch(e){
                console.log('error')
              }
        }
        setProduct(tempProduct)
           
    }
    useEffect(
        ()=>{
            getOrderProduct()
        },[]
    ) 
    const [product,setProduct]=useState([]); 
    const [TotalPrice,setTotalPrice]=useState([]); 
    
    return (
        <View>
            <FlatList
                data={product} 
                renderItem={({item})=>(<Text>{item}</Text>)}
            />
             <Text>Total Price : {TotalPrice}</Text>   
             <Button title="Confirm Order " onPress={()=>navigation.navigate('ConfirmOrder',{'customerId':route.params?.customerId})}/>
        </View>
      )
      
    }
    
