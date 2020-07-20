import React, {Component} from 'react';



// const contactArray = [
  
//   ];
  
//   class Form extends React.Component {
  
//     constructor() {
//       super();
//       this.state = {
//         contacts: contactArray
//       };
//       this.handleSubmit = this.handleSubmit.bind(this);
//     }
  
//     handleSubmit(e) {
//       e.preventDefault();
//       const
//       { contacts } = this.state,
//       name = this.refs.name.value,
//       email = this.refs.email.value,
//       phone = this.refs.phone.value;
//       this.setState({
//         contacts: [...contacts, {
//           name,
//           email,
//           phone
//         }]
//       }, () => {
//         this.refs.name.value = '';
//         this.refs.email.value = '';
//         this.refs.phone.value = '';
//       });
//     }
  
//     render() {
//       const { contacts } = this.state;
//       console.log('message',this.state.contacts);
//       return (   
//         <div>
//           <h2>Add Someone</h2>
//           <form onSubmit={this.handleSubmit}>
//             <input type="text" ref="name" placeholder="name" />
//             <input type="text" ref="email" placeholder="email" />
//             <input type="text" ref="phone" placeholder="phone" />
//             <button type="submit">Submit</button>
//           </form>
//           <h2>Exsiting contacts:</h2>
//           <ul>
//             {contacts.map((contact) => 
//              <li>{`Name: ${contact.name} Email: ${contact.email} Phone: ${contact.phone}`}</li>
//             )}
//           </ul>
//         </div>
//       ) 
//     }
//   }

//   export default Form; 

// import ReactDOM from "react-dom";

// import "./style.css";

class IncorporationForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      shareholders: [{ name: "" }]
    };
  }

  handleNameChange = evt => {
    this.setState({ name: evt.target.value });
  };

  handleShareholderNameChange = idx => evt => {
    const newShareholders = this.state.shareholders.map((shareholder, sidx) => {
      if (idx !== sidx) return shareholder;
      return { ...shareholder, name: evt.target.value };
    });

    this.setState({ shareholders: newShareholders });
  };

  handleSubmit = evt => {
    const { name, shareholders } = this.state;
    alert(`Incorporated: ${name} with ${shareholders.length} shareholders`);
  };

  handleAddShareholder = () => {
    this.setState({
      shareholders: this.state.shareholders.concat([{ name: "" }])
    });
  };

  handleRemoveShareholder = idx => () => {
    this.setState({
      shareholders: this.state.shareholders.filter((s, sidx) => idx !== sidx)
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Company name, e.g. Magic Everywhere LLC"
          value={this.state.name}
          onChange={this.handleNameChange}
        />

        <h4>Shareholders</h4>

        {this.state.shareholders.map((shareholder, idx) => (
          <div className="shareholder">
            <input
              type="text"
              placeholder={`Shareholder #${idx + 1} name`}
              value={shareholder.name}
              onChange={this.handleShareholderNameChange(idx)}
            />
            <button
              type="button"
              onClick={this.handleRemoveShareholder(idx)}
              className="small"
            >
              -
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={this.handleAddShareholder}
          className="small"
        >
          Add Shareholder
        </button>
        <button>Incorporate</button>
      </form>
    );
  }
}

export default IncorporationForm; 