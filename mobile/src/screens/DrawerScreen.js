import React, {useEffect} from 'react';
import {useQuery} from '@apollo/react-hooks';
import gql from 'graphql-tag';
import {useContext} from 'react';
import {SafeAreaView, Button} from 'react-native';
import {Text} from 'react-native-elements';
import {useNavigation} from 'react-navigation-hooks';
import {userStore} from "../state/User";


export default ()=>{
      const {navigate} = useNavigation();

      function onLogout() {
        navigate('LogIn')
      }

      const {loading, data} = useQuery(gql`
       query($userID:Int){
        user(userID:$userID){
          username
          accountBalance
        }
       }
      `,{variables:{userID:parseInt(userStore.currentUserID)}});

      if (loading) return <SafeAreaView><Text>Loading...</Text></SafeAreaView>;
      return (
        <SafeAreaView>
          <Text>{data.user.username}</Text>
          <Text>${data.user.accountBalance}</Text>
          <Button title="Log Out" onPress={()=>onLogout()} />
        </SafeAreaView>
      );
    };
