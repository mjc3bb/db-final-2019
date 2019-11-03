import React, {useState, useContext} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Button, Card, Divider, Text} from 'react-native-elements';
import Collapsible from 'react-native-collapsible';
import {cartContext} from '../state/Cart';


export default ({item}) =>{
  const [collapsed, setCollapsed] = useState(true);
  const cartStore = useContext(cartContext);
  return (
    <>
      <TouchableOpacity
        onPress={()=>setCollapsed(!collapsed)}
      >
        <Card
          containerStyle={{
            margin:0,
            marginBottom:1,
            shadowOffset:{width:0, height:0}
          }}
        >
          <View>
            <View style={{flexDirection:'row', marginVertical:3}}>
              <Text style={{ flex:1}}>{item.itemName}</Text>
              <Text style={{ flex:1, textAlign:'right'}}>${item.itemPrice}</Text>
            </View>
            <Collapsible collapsed={collapsed}>
              <Divider/>
              <Text>{item.itemDescription}</Text>
              <Button title='Add to Order' containerStyle={{alignSelf:'flex-end'}} titleStyle={{fontSize:12}} onPress={()=>cartStore.addItem()}/>
            </Collapsible>
          </View>
        </Card>
      </TouchableOpacity>
    </>
  )
};
