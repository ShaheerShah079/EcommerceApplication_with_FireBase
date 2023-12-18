import Reatc,{useState,useEffect} from 'react'
import {Button,View,Text,ScrollView,FlatList,StyleSheet,TouchableOpacity} from 'react-native'
import { TextInput} from 'react-native-paper'
import { ipAdrr } from './App';
import {db} from './FirestoreConnection'
import {doc,getDocs,collection,query} from 'firebase/firestore'

export default function ViewProducts({navigation,route}){
    async function getProduct(){
        try{
            const q=query(collection(db,'Product'))
            const res =await getDocs(q)
            var temp=[]

            res.forEach((doc)=>temp.push({...doc.data(),id:doc.id}))

            console.log(temp)
            setProduct(temp)
          }
          catch(e){
            console.log('error')
          }   
    }
    useEffect(
        ()=>{
            getProduct()
        },[]
    ) 
    const [product,setProduct]=useState([]); 
    return (
        <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffc266',
      }}>
      <ScrollView>
        <FlatList
          data={product}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('ProductDetail', {
                  id: item.id,
                  name: item.name,
                  description: item.description,
                  price: item.price,
                  category: item.category,
                })
              }>
              <Text>
                {'Item Name : ' +
                  item.name +
                  ' Item Price : ' +
                  item.price}
              </Text>
            </TouchableOpacity>
          )}
        />
    
        <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate('PlaceOrders',
            {'customerId':route.params?.customerId})}>
          <Text>Place Order</Text>
        </TouchableOpacity>
      </ScrollView>
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