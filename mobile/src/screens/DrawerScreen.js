import React from 'react';
import {useQuery} from '@apollo/react-hooks';
import gql from 'graphql-tag';
import {SafeAreaView, Button} from 'react-native';
import {Text} from 'react-native-elements';
import {useNavigation} from 'react-navigation-hooks';


export default ()=>{
      const {navigate} = useNavigation();
      const {loading, data, error} = useQuery(gql`
       query($userID:Int){
        user(userID:$userID){
          username
          accountBalance
          # orders{
          #  orderID
          #  orderTotal
          # }
        }
       }
      `,{variables:{userID:1}});
      if (loading) return <SafeAreaView><Text>Loading...</Text></SafeAreaView>
      return (
        <SafeAreaView>
          <Text>{data.user.username}</Text>
          <Text>${data.user.accountBalance}</Text>
          <Button title="Orders" onPress={()=>navigate('Orders')} />
        </SafeAreaView>
      );
    };
