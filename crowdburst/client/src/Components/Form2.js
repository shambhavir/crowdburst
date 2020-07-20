import React, {Component} from 'react';
// import axios from 'axios';

import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'; 
import List2 from './List2'; 

//import { render } from 'react-dom';


const client = new ApolloClient(
    {
      cache: new InMemoryCache(),
      link: new HttpLink({
        uri: 'https://crowdburst.herokuapp.com/v1/graphql',
      })
    }
  ); 

// const app = require('express'); 

class Form2 extends React.Component {
    

constructor(props)
{
    super(props)
    this.state = 
    {
        list: 
        [
          // this.addItem = this.addItem.bind(this)

        ]
    }

    

    this.addItem = this.addItem.bind(this)

}

addItem(e) {
  // Prevent button click from submitting form
  e.preventDefault();

  // Create variables for our list, the item to add, and our form
  let list = this.state.list;
  const newItem = document.getElementById("addInput");
  const form = document.getElementById("addItemForm");
  





  // If our input has a value
  if (newItem.value != "") {
    // Add the new item to the end of our list array
    list.push(newItem.value);
    // Then we use that to set the state for list
    this.setState({
      list: list
    });
    // Finally, we need to reset the form
    newItem.classList.remove("is-danger");
    form.reset();
  } else {
    // If the input doesn't have a value, make the border red since it's required
    newItem.classList.add("is-danger");
  }
}






render() {
    return (
      <div className="content">
        <div className="container">
          <section className="section">
          <List2 items={this.state.list} delete={this.removeItem} />
          </section>
          <hr />
    <section className="section">
      <form className="form" id="addItemForm">
        <input type="text" className="input" id="addInput" placeholder="How's the crowd, parking, etc?" />
        <button className="button is-info" onClick={this.addItem}>
          Add Note
        </button>
      </form>
      {/* <form className = "form" id = "addItemForm">
        <input type = "text" className = "input" id="addInput" placeholder="Address"/>
        <button className="button is-info" onClick={this.addItem}>
          Add Address
        </button>
      </form> */}
    </section>
        </div>
      </div>
    )
  }

}

export default Form2

// class Form2 extends React.Component {
//   // initialize our state
//   state = {
//     data: [],
//     id: 0,
//     message: null,
//     intervalIsSet: false,
//     idToDelete: null,
//     idToUpdate: null,
//     objectToUpdate: null,
//   };

// //   const App3 = () => {

// //   // export default App3(
// //   //   {
// //   //     state = {
// //   //       data: [],
// //   //       id: 0,
// //   //       message: null,
// //   //       intervalIsSet: false,
// //   //       idToDelete: null,
// //   //       idToUpdate: null,
// //   //       objectToUpdate: null,
// //   //     }
// //   //   }
// //   // ); 

// //   // const App3  =  
// //   //   `
// //   //   state = {
// //   //     data: [],
// //   //     id: 0,
// //   //     message: null,
// //   //     intervalIsSet: false,
// //   //     idToDelete: null,
// //   //     idToUpdate: null,
// //   //     objectToUpdate: null,
// //   //     `; 
  

// //   // when component mounts, first thing it does is fetch all existing data in our db
// //   // then we incorporate a polling logic so that we can easily see if our db has
// //   // changed and implement those changes into our UI
//   componentDidMount() {
//     this.getDataFromDb();
//     if (!this.state.intervalIsSet) {
//       let interval = setInterval(this.getDataFromDb, 1000);
//       this.setState({ intervalIsSet: interval });
//     }
//   }

// //   // never let a process live forever
// //   // always kill a process everytime we are done using it
//   componentWillUnmount() {
//     if (this.state.intervalIsSet) {
//       clearInterval(this.state.intervalIsSet);
//       this.setState({ intervalIsSet: null });
//     }
//   }

// //   // just a note, here, in the front end, we use the id key of our data object
// //   // in order to identify which we want to Update or delete.
// //   // for our back end, we use the object id assigned by MongoDB to modify
// //   // data base entries

// //   // our first get method that uses our backend api to
// //   // fetch data from our data base
//   getDataFromDb = () => {
//     fetch('http://localhost:3001/api/getData')
//       .then((data) => data.json())
//       .then((res) => this.setState({ data: res.data }));
//   };

// //   // // // our put method that uses our backend api
// //   // // // to create new query into our data base
//   putDataToDB = (message) => {
//     let currentIds = this.state.data.map((data) => data.id);
//     let idToBeAdded = 0;
//     while (currentIds.includes(idToBeAdded)) {
//       ++idToBeAdded;
//     }

//     axios.post('http://localhost:3001/api/putData', {
//       id: idToBeAdded,
//       message: message,
//     });
//   };

// //   // our delete method that uses our backend api
// //   // to remove existing database information
//   deleteFromDB = (idTodelete) => {
//     parseInt(idTodelete);
//     let objIdToDelete = null;
//     this.state.data.forEach((dat) => {
//       if (dat.id == idTodelete) {
//         objIdToDelete = dat._id;
//       }
//     });

//     axios.delete('http://localhost:3001/api/deleteData', {
//       data: {
//         id: objIdToDelete,
//       },
//     });
//   };

// //   // our update method that uses our backend api
// //   // to overwrite existing data base information
//   updateDB = (idToUpdate, updateToApply) => {
//     let objIdToUpdate = null;
//     parseInt(idToUpdate);
//     this.state.data.forEach((dat) => {
//       if (dat.id == idToUpdate) {
//         objIdToUpdate = dat._id;
//       }
//     });

//     axios.post('http://localhost:3001/api/updateData', {
//       id: objIdToUpdate,
//       update: { message: updateToApply },
//     });
//   };

// //   // here is our UI
// //   // it is easy to understand their functions when you
// //   // see them render into our screen
//   render() {
//     const { data } = this.state;
//     return (
//       <div>
//         <ul>
//           {data.length <= 0
//             ? 'NO DB ENTRIES YET'
//             : data.map((dat) => (
//                 <li style={{ padding: '10px' }} key={data.message}>
//                   <span style={{ color: 'gray' }}> id: </span> {dat.id} <br />
//                   <span style={{ color: 'gray' }}> data: </span>
//                   {dat.message}
//                 </li>
//               ))}
//         </ul>
//         <div style={{ padding: '10px' }}>
//           <input
//             type="text"
//             onChange={(e) => this.setState({ message: e.target.value })}
//             placeholder="add something in the database"
//             style={{ width: '200px' }}
//           />
//           <button onClick={() => this.putDataToDB(this.state.message)}>
//             ADD
//           </button>
//         </div>
//         <div style={{ padding: '10px' }}>
//           <input
//             type="text"
//             style={{ width: '200px' }}
//             onChange={(e) => this.setState({ idToDelete: e.target.value })}
//             placeholder="put id of item to delete here"
//           />
//           <button onClick={() => this.deleteFromDB(this.state.idToDelete)}>
//             DELETE
//           </button>
//         </div>
//         <div style={{ padding: '10px' }}>
//           <input
//             type="text"
//             style={{ width: '200px' }}
//             onChange={(e) => this.setState({ idToUpdate: e.target.value })}
//             placeholder="id of item to update here"
//           />
//           <input
//             type="text"
//             style={{ width: '200px' }}
//             onChange={(e) => this.setState({ updateToApply: e.target.value })}
//             placeholder="put new value of the item here"
//           />
//           <button
//             onClick={() =>
//               this.updateDB(this.state.idToUpdate, this.state.updateToApply)
//             }
//           >
//             UPDATE
//           </button>
//         </div>
//       </div>
//     );
//   }
// }

// export default Form2