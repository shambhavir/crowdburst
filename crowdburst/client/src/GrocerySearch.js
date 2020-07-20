import React, { useState } from "react";
import { useLazyQuery, gql } from "@apollo/client";
//import Search from "./Search";
import Grocery from "./Grocery";
import Form2 from "./shared/Form2";


const SEARCH = gql`
query GroceryQuery($id: String!) {
    grocery_by_pk(id: $id) {
      address
      alias
      id
      name
      finrevs {
        body
        grid
      }
    }
}
`;

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
        <Form2
          inputVal={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          onSubmit={() => search({ variables: { match: `%${inputVal}%` } })}
        />
        <Grocery newGrocery={data ? data.grocery : null} />
      </div>
    );
  };

export default GrocerySearch;