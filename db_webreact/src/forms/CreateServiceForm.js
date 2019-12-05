import React from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import useForm from "react-hook-form";
import {useMutation} from "@apollo/react-hooks";
import gql from "graphql-tag";


export default ({onComplete}) => {
  const [addTodo, {data: mutationData}] = useMutation(gql`
  mutation($serviceName:String, $serviceAddress:String){
    createService(
    serviceName:$serviceName,
    serviceAddress:$serviceAddress,
    imageURI:""
  ){
    serviceName
    }
  }
  `);

  const {register, handleSubmit, reset} = useForm();

  const onSubmit = data => {
    alert('addTodo');
    addTodo({
      variables: {
        serviceName: data.serviceName,
        serviceAddress: data.serviceAddress
      }
    });
    reset();
    if (onComplete) onComplete();
  };
  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Label>Create a service</Form.Label>
        <Form.Group controlId="serviceName">
          <Form.Label>Service Name</Form.Label>
          <Form.Control type='input' name='serviceName' ref={register({required: true})}/>
        </Form.Group>
        <Form.Group controlId="serviceAddress">
          <Form.Label>Service Address</Form.Label>
          <Form.Control type='input' name='serviceAddress' ref={register({required: true})}/>
        </Form.Group>
        <Button variant="primary" type="submit">
          Create
        </Button>
      </Form>
    </div>
  );
}
