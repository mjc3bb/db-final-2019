import React, { useContext, useState } from 'react';
import { Alert, Button, TextInput, View, StyleSheet } from 'react-native';
import gql from 'graphql-tag';
import {useMutation} from "@apollo/react-hooks";
import {useNavigation} from "react-navigation-hooks";
import {userStoreContext} from "../state/User";

export default App = () => {

  const {navigate} = useNavigation();
  const userStore = useContext(userStoreContext);
  const [login, {}] = useMutation(gql`
      mutation u($username:String, $password: String){
          attemptUserLogin(username:$username, password:$password){
              userID
              currentOrderID
          }
      }
  `);

  const [register, {}] = useMutation(gql`
      mutation u($username:String, $password: String){
          createUserLogin(username:$username, password:$password){
              userID
              currentOrderID
          }
      }
  `);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function onLogin() {
    // const { username, password } = this.state;
    login({variables:{username,password}})
      .then((result)=>{
        userStore.logIn(result.data.attemptUserLogin.userID,result.data.attemptUserLogin.currentOrderID).then(()=>navigate('Root'));

        // userStore.currentUserID=result.data.attemptUserLogin.userID;
        // userStore.currentOrderID=result.data.attemptUserLogin.currentOrderID? result.data.attemptUserLogin.currentOrderID: null;
      })
      .catch((error)=>{alert('Username or Password not correct');})
    // Alert.alert('Credentials', `${username} + ${password}`);
  }

  function onRegister() {
    register({variables:{username,password}})
      .then((result)=>{
        // userStore.currentUserID=result.data.createUserLogin.userID;
        userStore.logIn(result.data.createUserLogin.userID, result.data.createUserLogin.currentOrderID).then(()=>navigate('Root'));
        // userStore.currentOrderID=result.data.createUserLogin.currentOrderID? result.data.createUserLogin.currentOrderID: null;
        // navigate('Root');
      })
      .catch((error)=>{alert('Username or Password already exist');})
  }


    return (
      <View style={styles.container}>
        <TextInput
          value={username}
          onChangeText={(username) => setUsername( username )}
          placeholder={'Username'}
          style={styles.input}
        />
        <TextInput
          value={password}
          onChangeText={(password) => setPassword(password)}
          placeholder={'Password'}
          secureTextEntry={true}
          style={styles.input}
        />

        <Button
          title={'Login'}
          style={styles.input}
          onPress={()=>onLogin()}
        />
        <Button
          title={'Register'}
          style={styles.input}
          onPress={()=>onRegister()}
        />
      </View>
    )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
});
