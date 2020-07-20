import React, { useState } from "react";
import { useLazyQuery, gql, useSubscription } from "@apollo/client";
//import Search from "./Search";
import Grocery from "./Components/Grocery"; 
import Search2 from "./Components/Search2";
// import Form2 from './Components/Form2';
import Stitch2 from './Stitch2'; 



const SEARCH = gql`
subscription MyQuery($id: String!) {
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

// const SEARCH = gql `
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
// `; 

//   query Search($match: String) {
//     grocery(order_by: { name: asc }, where: { name: { _ilike: $match } }) {
//       name
//       alias
//       id
//     }
//   }

const GrocerySearch = () => {
  
  const [inputVal, setInputVal] = useState("");
  const [search, { loading, error, data }] = useLazyQuery(SEARCH);

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>Error :(</p>;

    return (
      <div>
        {/* <Form2></Form2> */}
        <addReview></addReview>
        {/* <Stitch2></Stitch2> */}
        {/* <Search2
          inputVal={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          onSubmit={() => search({ variables: { match: `%${inputVal}%` } })}
        /> */}
        <h1></h1>
        <Grocery newGrocery={data ? data.grocery : null} />
      </div>
    );
  };

export default GrocerySearch;

