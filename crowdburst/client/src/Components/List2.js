import React, {Component} from 'react';

class List2 extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			filtered: []
		};
		this.handleChange = this.handleChange.bind(this);
	}
	
	componentDidMount() {
    this.setState({
      filtered: this.props.items
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      filtered: nextProps.items
    });
  }
	
	handleChange(e) {
		// Variable to hold the original version of the list
    let currentList = [];
		// Variable to hold the filtered list before putting into state
    let newList = [];
		
		// If the search bar isn't empty
    if (e.target.value !== "") {
			// Assign the original list to currentList
      currentList = this.props.items;
			
			// Use .filter() to determine which items should be displayed
			// based on the search terms
      newList = currentList.filter(item => {
				// change current item to lowercase
		const lc = item.toLowerCase();
		//const lc = "hello"; 
				// change search term to lowercase
		const filter = e.target.value.toLowerCase();
		//const filter = e.target.value; 
				// check to see if the current list item includes the search term
				// If it does, it will be added to newList. Using lowercase eliminates
				// issues with capitalization in search terms and search content
		return lc.includes(filter);
		//return lc; 
      });
    } else {
			// If the search bar is empty, set newList to original task list
      newList = this.props.items;
    }
		// Set the filtered state based on what our rules added to newList
    this.setState({
      filtered: newList
    });
  }
	
	render() {
		return (
			<div>
				<input type="text" className="input" onChange={this.handleChange} placeholder="Search..in customer added" />
					<ul>
						{this.state.filtered.map(item => (
							<li key={item}>
								{item} &nbsp;
								<span
									className="delete"
									onClick={() => this.props.delete(item)}
									/>
							</li>
						))}
					</ul>
				</div>
		)
	}
}

export default List2