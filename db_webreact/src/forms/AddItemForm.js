import React from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {useMutation, useQuery, ApolloProvider} from "@apollo/react-hooks";
import gql from "graphql-tag";
import useForm from "react-hook-form";
import {client} from "../API";
import Col from "react-bootstrap/Col";
import Row from 'react-bootstrap/Row';

export default ({onComplete}) => {
  const {data, loading} = useQuery(gql`
  {
    services{
      serviceID
      serviceName
    }
  }
  `);

  const [addItem, {data: mutationData, error:mutationError}] = useMutation(gql`
   mutation($serviceID: Int, $itemName:String, $itemDescription:String, $itemPrice: Float){
    addServiceItem(serviceID:$serviceID, itemName:$itemName, itemDescription:$itemDescription, itemPrice:$itemPrice){
    itemName
    }
   }
  `);

  const {register, handleSubmit, reset} = useForm();

  if (loading) return null;
  if (mutationError) alert(mutationError);
  const onSubmit = data => {
    addItem({
      variables: {
        serviceID:parseInt(data.serviceID),
        itemName: data.itemName,
        itemDescription: data.itemDescription,
        itemPrice:0.0
      }
    });
    reset();
    if (onComplete) onComplete();
  };

  return (
    <div>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Label>Add an Item</Form.Label>
        <Form.Group as={Row}>
          <Form.Label column sm="2">Item Name</Form.Label>
          <Col sm="10">
          <Form.Control type='input' name='itemName' ref={register({required:true})}/>
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm="2">Item Description</Form.Label>
          <Col sm="10">
          <Form.Control type='input' name='itemDescription' ref={register({required:true})}/>
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm="2">Price</Form.Label>
          <Col sm="10">
            <Form.Control type='input' name='itemPrice' ref={register({required:true,pattern:/^[\d]*\.*[\d]{0,2}$/})} />
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm="2">Service</Form.Label>
          <Col sm="10">
          <Form.Control as="select" multiple name='serviceID' ref={register({required:true})}>
            {data.services.map((item) => <option value={item.serviceID}>{item.serviceName}</option>)}
          </Form.Control>
          </Col>
        </Form.Group>
        <Button variant="primary" type="submit">Add Item</Button>
      </Form>

    </div>
  );
}
