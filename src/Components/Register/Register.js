import React from 'react';


class Register extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			registerEmail: "",
			registerPassword: "",
			registerName: ""
		}
	}
 

	onSubmitRegister = () => {							//THIS WORKS
		console.log('signinbuttonclicked')
		fetch('http://localhost:3001/register', {				
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				email: this.state.registerEmail,
				password: this.state.registerPassword,
				name: this.state.registerName
			})
		})																						
 		.then(response => response.json())
 		.then(user => {
 			if(user.id) {									
 				this.props.onRouteChange('signin');				
 			}
 		})
	}


	render() {
		console.log(this.state)		//monitors new values for name, email, password
		
		return(
			<div style={{zIndex: 990}}>
				<article className="white br3 ba b--black-10 mv4 w-100 w-50-m w-25-1 mw6 shadow-5 center" style={{zIndex: 998}}>
					<main className="pa4 black-80">
					  <div className="measure">
					    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
					      <legend className="f1 fw6 ph0 mh0">Register</legend>
					      <div className="mt3">
					        <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
					        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
					        	type="text" 
					        	name="name"  
					        	id="name"
					        	onChange={event => this.setState({registerName: event.target.value})}
					        />
					      </div>
					      	<div className="mt3">
					        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
					        <input 
					        	className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
					        	type="email" 
					        	name="email-address"  
					        	id="email-address" 
					        	onChange={event => this.setState({registerEmail: event.target.value})}
					        />
					      </div>
					      <div className="mv3">
					        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
					        <input 
					        	className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
					        	type="password" 
					        	name="password"  
					        	id="password" 
					        	onChange={event => this.setState({registerPassword: event.target.value})} 
					        	/>
					      </div>
					    </fieldset>
					    <div className="">
					      <input 
					      	className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
					      	type="submit" 
					      	value="Register" 
 						    onClick={() => {
 						    	// this.props.onRouteChange('signin');
 						    	this.onSubmitRegister();		
 						    	// THIS IS NEW
 						    }}
					      />
					    </div>
					  </div>
					</main>
				</article>
			</div>
		);
	}
}

export default Register;