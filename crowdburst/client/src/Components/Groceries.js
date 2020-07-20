import React, {useState} from 'react';
import {useMutation, gql, useSubscription, useLazyQuery} from '@apollo/client';
import {useQuery} from '@apollo/client'; 
// import {useSubscription} from '@apollo/client'; 
import {List, ListItem} from './shared/List';
import Search2 from './Search2'; 
import Form2 from './Form2';
import axios from 'axios';





const IHATECODE = gql 
`

query MyQuery($id: String!) {
  grocery_by_pk(id: $id) {
    address
    name
    id
    finrevs {
      body
      grid
    }
  }
}
   `;

   const data =  new Array()

// const GRO = gql `
// subscription MySubscription($id: String!) {
//   grocery_by_pk(id: $id) {
//     address
//     alias
//     display_phone
//     id
//     name
//     finrevs {
//       body
//       grid
//     }
//   }
// }
// `

const componentDidMount = () => {
  this.getDataFromDb();
  if (!this.state.intervalIsSet) {
    let interval = setInterval(this.getDataFromDb, 1000);
    this.setState({ intervalIsSet: interval });
  }
}
const  componentWillUnmount = () => {
      if (this.state.intervalIsSet) {
        clearInterval(this.state.intervalIsSet);
        this.setState({ intervalIsSet: null });
      }
}
const  getDataFromDb = () => {
          fetch('http://localhost:3001/api/getData')
            .then((data) => data.json())
            .then((res) => this.setState({ data: res.data }));
        };
const putDataToDB = (message) => {
  let currentIds = this.state.data.map((data) => data.id);
  let idToBeAdded = 0;
  while (currentIds.includes(idToBeAdded)) {
      ++idToBeAdded;
    }

axios.post('http://localhost:3001/api/putData', {
    id: idToBeAdded,
    message: message,
   });
  };











const Groceries = ({
    match: {
      params: { id },
    },
  }) => {
    const {loading, error, data} = useQuery(IHATECODE, {variables: {id}}); 
    // const {loading, error, data} = useSubscription(GRO, {variables: {id}}); 
    // const {loading, error, data} = useSubscription(GRO); 



    const [inputVal, setInputVal] = useState(""); 
    if (loading) return <p>Loading ...</p>;
    if (error) return <p>Error :(</p>;


    const { name, address, finrevs } = data.grocery_by_pk;

    return (
        <div>
          <h3>
            {name} {address}
          </h3>
          {/* <Form2></Form2> */}
          <addReview></addReview>

          <Search2
            inputVal = {inputVal}
            onChange = {(e) => setInputVal(e.target.value)}
            onSubmit = {() => {}}
            buttonText = "Submit"
            />
          <List>
            {finrevs.map((finrevs) => (
              <ListItem key={finrevs.id}>{finrevs.body}</ListItem>
            ))}
          </List>
          <Form2/>


          <div>
      
        {/* <div style={{ padding: '10px' }}>
          <input
            type="text"
            // onChange={(e) => this.setState({ message: e.target.value })}
            
            onChange= { (e) => this.setState({message: e.target.value})}
            placeholder="add something in the database"
            style={{ width: '200px' }}
          />
          <button onClick={() => this.putDataToDB(this.state.message)}>
            ADD
          </button>
        </div> */}
        
        
            </div>
        </div>
      );
    };

export default Groceries;