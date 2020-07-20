import React from 'react';
import {useQuery, gql} from '@apollo/client';
// import {Badge} from './shared/Badge';
import { Link } from "react-router-dom";
import { List, ListItem, ListItemWithLink } from "./shared/List";

// const GROCERY = gql`

// query GroceryQuery($id: String!) {
//     grocery_by_pk(id: $id) {
//       address
//       alias
//       id
//       name
//       finrevs {
//         body
//         grid
//       }
//     }
// }
   
// `; 

const GROCERY = gql` 
{
  grocery {
    address
    id
    name
    alias
    display_phone
  }
}

  
`;






const Grocery = ({ newGrocery }) => {
  // export default function Grocery(){
  const { loading, error, data } = useQuery(GROCERY);
  // const { loading, error, data } = useQuery(BUSINESS);

  const renderGrocery = (grocery) => {
    return grocery.map(({ id, name, address }) => (
      <ListItemWithLink key={id}>
        <Link to={`/grocery/${id}`}>
          {name} | {address}
        </Link>
      </ListItemWithLink>
    ));
  };

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>Error :(</p>;

  return <List>{renderGrocery(newGrocery || data.grocery)}</List>;


// const Grocery = () => {
//     const {loading, error, data} = useQuery(GROCERY);

//     if(loading) return <p>Loading...</p>;
//     if(error)  return <p>Error!</p>;

    // return data.businesses3.map(({alias, id, name}) => (
    //     <div key = {id}>
    //         <p>
    //             {name} | {alias}
    //         </p>
    //     </div>
    // )); 
    
  
    // return(
    //     <List>
    //         {data.grocery.map(({id, name, address}) => (
    //             <ListItem key = {id}>
    //                 {name} <Badge>{address}</Badge>
    //             </ListItem>
    //         ))}
    //     </List>
    // );

// const Grocery = () => {
//     const {loading, error, data} = useQuery(GROCERY);

//     if(loading) return <p>Loading...</p>;
//     if(error)  return <p>Error!</p>;

//     return data.grocery_by_pk.map(({grid, body}) => (
//         <div key = {grid}>
//             <p>
//                 {grid}
//             </p>
//         </div>
//     ))}; 



    // return(
    //     <List>
    //         {data.grocery.map(({id, name, address}) => (
    //             <ListItem key = {id}>
    //                 {name} <Badge>{address}</Badge>
    //             </ListItem>
    //         ))}
    //     </List>
    // );
 

            
    
// const Grocery = ({
//     match: {
//       params: { id },
//     },
//   }) => {
//     const { loading, error, data } = useQuery(GROCERY, {
//       variables: { id },
//     });
  
//     if (loading) return <p>Loading ...</p>;
//     if (error) return <p>Error :(</p>;
  
//     const { name, address, finrevs } = data.grocery_by_pk;
  
//     return (
//       <div>
//         <h3>
//           {name} <Badge>{address}</Badge>
//         </h3>
//         <List>
//           {finrevs.map((finrevs) => (
//             <ListItem key={finrevs.grid}>{finrevs.body}</ListItem>
//           ))}
//         </List>
//       </div>
//     );
//   };
}
  export default Grocery;