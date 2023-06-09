import React from 'react';


class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: '',
      signInPassword: ''
    }
  }

	onSubmitSignIn = () => {
		console.log('signinbuttonclicked')
		fetch('http://localhost:3001/signin', {				//3001 is correct. THIS BELOW IS NEW
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				email: this.state.signInEmail,
				password: this.state.signInPassword
			})
		})																						//THIS HERE IS NEW. UP TO THIS WORKS
 		// .then(response => console.log('response is', response.json()))		//TEST
 		.then(response => response.json())
 		// .then(data => console.log('data is', data))	//TEST
 		.then(data => {
 			if(data.id) {
 				this.props.loadUser(data);			//THIS ISNT GOING TO WORK BC DATA IS SUCCESS									
 				this.props.onRouteChange('home');				//UP TO THIS POINT WORKS
 			}
 		})
	}

  
	render() {
			console.log(this.state)		//monitors new signInEmail and signInPassword values

			return(
			<div style={{zIndex: 990}}>
				<article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-1 mw6 shadow-5 center">
					<main className="pa4 black-80">
					  <div className="measure">
					    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
					      <legend className="f1 fw6 ph0 mh0">Sign In</legend>
					      <div className="mt3">
					        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
					        <input 
					        	className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
					        	type="email" 
					        	name="email-address"
					        	id="email-address"
					      		onChange={event => this.setState({signInEmail: event.target.value})} />
					      </div>
					      <div className="mv3">
					        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
					        <input 
					        	className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
					        	type="password" 
					        	name="password"  
					        	id="password" 
					        	onChange={event => this.setState({signInPassword: event.target.value})} />
					      </div>
					    </fieldset>
					    <div className="">
					      <input 
					      	onClick={() => {
					      		// this.props.onRouteChange('home');
					      		this.onSubmitSignIn();
					      	}}	
					      	className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
					      	type="submit" 
					      	value="Sign in" />
					    </div>
					    <div className="lh-copy mt3">
					      <p onClick={() => this.props.onRouteChange('register')} href="#0" className="f6 link dim black db pointer">Register</p>
					    </div>
					  </div>
					</main>
				</article>
			</div>
		)
	};
}

export default Signin;