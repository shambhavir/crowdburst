import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { render } from 'react-dom';
import { ApolloProvider } from '@apollo/client';
import { ApolloClient, HttpLink, InMemoryCache,split } from '@apollo/client'; 
import {getMainDefinition} from '@apollo/client/utilities'; 
import {WebSocketLink} from '@apollo/link-ws'; 
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Groceries from './Components/Groceries'; 
import GrocerySearch2 from './GrocerySearch2'; 
import axios from 'axios';
import bt from './bt'; 
import App from './App'; 
import AppFront from './AppFront'; 
import Stitch2 from './Stitch2'; 
// import GrocerySearch3 from './GrocerySearch3'; 
// import Mutation from './Components/shared/Mutation'; 
// import server from './server'; 

// import App3 from './test6/my-app/src2';

//import { render } from 'ejs';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
// const httpLink = new HttpLink({
//   uri: "https://crowdburst.herokuapp.com/v1/graph1l", 
// }); 

// const wsLink = new WebSocketLink({
//   uri: `ws://crowdbusrt.herokuapp.com/v1/graphql`,
//   options: {
//     reconnect: true, 
//   }
// }); 

// const splitLink = split (
//   ({query}) => {
//     const definition = getMainDefinition(query);
//     return(
//       definition.kind === "OperationDefinition" && 
//       definition.operation === "subscription"
//     ); 
//   },
//   wsLink,
//   httpLink
// ); 

// const client = new ApolloClient(
//   {
//     cache: new InMemoryCache(),
//     link: splitLink,
//   }
// ); 

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'https://crowdburst.herokuapp.com/v1/graphql',
  })
}); 
// const data = new Array()


      const data =  new Array()
      // const id = 0
      // const message = null
      // const intervalIsSet = false
      // const idToDelete = null
      // const idToUpdate = null
      // const objectToUpdate = null
  

////////
// const GRAPHQL_ENDPOINT = "crowdburst.herokuapp.com/v1/graphql";

// const httpLink = new HttpLink({
//   uri: `https://${GRAPHQL_ENDPOINT}`,
// });

// const wsLink = new WebSocketLink({
//   uri: `ws://${GRAPHQL_ENDPOINT}`,
//   options: {
//     reconnect: true,
//   },
// });

// const splitLink = split(
//   ({ query }) => {
//     const definition = getMainDefinition(query);
//     return (
//       definition.kind === "OperationDefinition" &&
//       definition.operation === "subscription"
//     );
//   },
//   wsLink,
//   httpLink
// );

// const client = new ApolloClient({
//   cache: new InMemoryCache(),
//   link: splitLink,
// });

//////

const App2 = () => (
  
  

<BrowserRouter>
  <ApolloProvider client = {client}>
    {/* <div>
      <h2>My first React App</h2>
    </div> */}

    {/* <Grocery/> */}
    {/* <App3/> */}

    {/* <App/> */}
    <Stitch2/>
    {/* <AppFront/> */}
    {/* <server/> */}
  <Switch> 
        <Route path="/grocery/:id" component={Groceries} />
        <Route path="/" component={GrocerySearch2} />
  </Switch> 

  {/* <Switch>
  <Route path="/grocery2/:id" component={Mutation} />
        <Route path="/" component={GrocerySearch3} />
  </Switch> */}
  </ApolloProvider>
  </BrowserRouter>
); 





// ReactDOM.render(<App2 />, document.getElementById('root'))
ReactDOM.render(<App2/>, document.getElementById('root')); 
// requireServiceWorker(); 

// render(<App2/>, document.getElementById('root')); 


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
