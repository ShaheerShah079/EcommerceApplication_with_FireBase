import Reatc,{useState,useEffect} from 'react'
import {Button,View,Text,TextInput,ScrollView,FlatList} from 'react-native'
import { ipAdrr } from './App';
import {db} from './FirestoreConnection'
import {doc,getDocs,collection,query} from 'firebase/firestore'
export default function ReviewOrders({navigation,route}){
    async function updateStatus(){
        try{
            console.log(oId)

        const response=await fetch('http://'+ipAdrr+'//UpdateOrderStatus.php',{
          method: 'POST',
          headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            'orderId':oId,
          })
          }  
        )
        const res=await response.json()
        console.log(res)
        }
        catch(e){
            console.log('error')
          }   
    }
    async function review(){
        try{
            // const q=query(collection(db,'Order',''))
           const res =await getDocs(doc(collection(db,'Order')))
           res.forEach(async (doc)=>{
            const re=await getDocs(doc(db,'Order',doc.id))
            re.forEach(async(doc)=>{

            })
           })

            // const response=await fetch('http:/'+ipAdrr+'//GetReviewOrders.php');
            // const res=await response.json()
            // if(res.length==0){
            //     alert('No Order Available')
            // }
            // else{
            //     console.log(res)
            //     setOrder(res)
            // }
          }
          catch(e){
            console.log('error')
          }   
    }
    useEffect(
        ()=>{
            review()
        },[]
    ) 
    const [order,setOrder]=useState([]); 
    const [oId,setOId]=useState('')
    return (
        <ScrollView>
            <FlatList
                data={order} 
                renderItem={({item})=>(<Text>Order ID : {item.OrderID}  Order Price : {item.TotalPrice}
                 Order Address: {item.ShipingAdrress} Customer Comment :{item.CustomerComments}
                </Text>)}
            />
            <TextInput title='Confirm Order By Put there ID' onChangeText={setOId}/>
            <Button title='Confirm Order' onPress={()=>updateStatus()}/>
        </ScrollView>
      )
      
    }
    
