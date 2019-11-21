import React, {useState, useContext, useRef} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Button, Card, Divider, Text, Input} from 'react-native-elements';
import Collapsible from 'react-native-collapsible';
import {cartContext} from '../state/Cart';


export default ({item, serviceID}) =>{
  const [collapsed, setCollapsed] = useState(true);
  const cartStore = useContext(cartContext);
  const [textState, setTextState] = useState('');
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
              <View style={{flexDirection:"row"}}>
                <Input
                  onChangeText={text=>setTextState(text)}
                  placeholder="Quantity"
                  containerStyle={{flex:4,alignSelf:'flex-start'}}
                  style={{flex:1}}
                />
                <Button
                  title='Add to Order'
                  containerStyle={{alignSelf:'flex-end'}}
                  titleStyle={{fontSize:12}}
                  onPress={()=>cartStore.addItem(item.itemID, serviceID,textState!=='' ? textState: 1)}
                />
              </View>
            </Collapsible>
          </View>
        </Card>
      </TouchableOpacity>
    </>
  )
};
