import Reatc,{useState,useEffect} from 'react'
import {Button,View,Text,TextInput,ScrollView,FlatList} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function ProductDetail({navigation,route}){
    async function placeOrder(){
        const jsonValueorder=await AsyncStorage.getItem('Orders');
        const jsonValueprice=await AsyncStorage.getItem('TotalPrice');
        
        if(jsonValueorder!=null && jsonValueprice!=null){
            console.log(route.params?.id)
            console.log(items)
            const ordervalue=JSON.parse(jsonValueorder);
            ordervalue.push({'productId':route.params?.id,'itemNum':items});
            console.log(ordervalue)
            await AsyncStorage.setItem('Orders',JSON.stringify(ordervalue))
            
            const pricevalue=JSON.parse(jsonValueprice);
            var newPrice=pricevalue+price
            console.log(newPrice)
            await AsyncStorage.setItem('TotalPrice',JSON.stringify(newPrice))
        }
        else{
            console.log("this")
            const arr=[{'productId':route.params?.id,'itemNum':items}]
            await AsyncStorage.setItem('Orders',JSON.stringify(arr))
            await AsyncStorage.setItem('TotalPrice',JSON.stringify(price))
        }
    }
    function initials(){
        navigation.setOptions({ headerTitle:route.params?.name});
            setPrice(parseInt(route.params?.price));
            setUnitPrice(parseInt(route.params?.price));
            setDescription(route.params?.description);  
            setCategory(route.params?.category);
    }
    useEffect(
        ()=>{
            initials()
        },[]
    ) 
    const [price,setPrice]=useState(0);
    const [unitPrice,setUnitPrice]=useState(0);
    
    const [description,setDescription]=useState('');
    const [category,setCategory]=useState('');
    const [items,setItem]=useState(1);
    
    return (
        <View>
            <Text>Description : {description}</Text>
            <Text>Category : {category}</Text>
            <Text>Number of Items</Text>
            <Button title="Decrement" onPress={()=>{
                var tempItem=items;
                tempItem==1?tempItem:tempItem--;
                setItem(tempItem);
                setPrice(unitPrice*tempItem);

            }}/>
            <Text>{items}</Text>
            <Button title="Increment" onPress={()=>{
                var tempItem=items;
                tempItem++;
                setItem(tempItem);
                setPrice(unitPrice*tempItem);

            }}/>

            <Text>{price}</Text>
            <Button title="Add to order " onPress={()=>{placeOrder()}}/>
        </View>
      )
      
    }
    
