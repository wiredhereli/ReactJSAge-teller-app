import React, { Component } from 'react';
import TitleComponent from './TitleComponent';
import DisplayAge from './DisplayAge'
import {Form, FormControl, Button } from 'react-bootstrap';


class App extends Component {
	constructor(props){
		super(props);

		this.state = {
			newDate: '',
			birthDate: '01-02-1996',
			showStats: false



		}
	}


	changeBirthday(){
		console.log(this.state);
		this.setState({ 
			birthDate: this.state.newDate,
			showStats: true


		})
	}

	render(){
		return(
			<section>
			   <h2 className="app-title">Age Teller App</h2>

				<div className="App">
				<Form inline>
				   <FormControl 
				   	type="date"
				   	onChange= {(event) => this.setState({ newDate: event.target.value})}
				   	>
				   </FormControl>
				   {'   '}
				   <Button onClick= {() => this.changeBirthday()}> Submit </Button>
				   {
			            this.state.showStats ?
			              <div className="fade display-age">
						  	<DisplayAge date={this.state.birthDate} />	
			              </div>
			            :
              			  <div></div>
          }

				   </Form>
				   
			</div>
		</section>

			)
	}

	}


export default App;