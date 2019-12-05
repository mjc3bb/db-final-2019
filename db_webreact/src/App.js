import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useQuery, ApolloProvider, useMutation} from "@apollo/react-hooks";
import gql from "graphql-tag";
import {client} from "./API";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import useForm from 'react-hook-form';
import CreateServiceForm from "./forms/CreateServiceForm";
import AddItemForm from "./forms/AddItemForm";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion"

const Item = ({item, refetch}) => {
  const [remove, {}] = useMutation(gql`
    mutation CancelLineItem($serviceID:Int, $itemID:Int){
        removeServiceItem(serviceID: $serviceID, itemID:$itemID)
    }
  `);
  return (
    <>
      <p>{item.itemName}</p>
      <button onClick={()=>{remove({variables:{serviceID:item.serviceID,itemID:item.itemID}}).then((()=>refetch()))}}>Remove</button>
    </>
  );
};

const App = () => {
  const {loading, data, error, refetch, networkStatus} = useQuery(gql`
    {
      services{
        serviceName
        serviceID
        serviceAddress
        items{
          itemID
          serviceID
          itemName
        }
      }
    }
  `, {notifyOnNetworkStatusChange: true});


  if (loading || networkStatus !== 7) return (
    <div className="App">
      <p>loading</p>
    </div>);


  if (error) alert(error);

  return (
    <div className="App">
      <Row>
        <Col>
        <Accordion>
        {
          data.services.map((item, index) =>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey={index}>
                  {item.serviceName}: {item.serviceAddress}
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey={index}>
                <Card.Body>
                  {
                    item.items.map((item) =>
                      <Item item={item} refetch={refetch}/>
                    )
                  }
                </Card.Body>
              </Accordion.Collapse>
              <br/>
            </Card>
          )

        }
        </Accordion>
        <Button onClick={() => refetch()}>Refresh</Button>
        </Col>
        <Col>
          <CreateServiceForm onComplete={() => refetch()}/>
        </Col>
        <Col>
          <AddItemForm onComplete={() => refetch()}/>
        </Col>
      </Row>

    </div>
  );
};


const RootApp = () => {
  return (
    <ApolloProvider client={client}>
      <App/>
    </ApolloProvider>
  )
};

export default RootApp;
