import React, {useState, useEffect} from 'react';
import {Text} from 'react-native-elements';
import {useLazyQuery} from "@apollo/react-hooks";
import gql from "graphql-tag";
import Geolocation from '@react-native-community/geolocation';

export default () => {
  const [getAddress,{data, loading, error}] = useLazyQuery(gql`
    query getAddress($lat:String,$lon:String){
      getAddress(lat:$lat,lon:$lon){
        formatted
      }
    }
  `);
  const [address, setAddress] = useState('');

  if (error) alert(error);

  useEffect(()=>{
  Geolocation.getCurrentPosition((position)=>{
    getAddress({variables:{lat:`${position.coords.latitude}`, lon: `${position.coords.longitude}`}})
  });},[]);

  useEffect(()=>{
    if (data) setAddress(data.getAddress.formatted)
  },[data]);

  return(<><Text style={{marginLeft: 10, fontWeight: 'bold'}}>{address} ETA - 30m</Text></>)
  // return(<><Text style={{marginLeft: 10, fontWeight: 'bold'}}>1332 Southern Dr. ETA - 30m</Text></>)
}
