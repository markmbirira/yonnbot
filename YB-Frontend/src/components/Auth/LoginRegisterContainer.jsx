import React, { Component } from 'react';

import 'jquery/src/jquery';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

import SignIn from './SignIn';
import SignUp from './SignUp';

export default class LoginRegisterContainer extends  Component {

	render(){
		return (
			<div className="overlay" style={{ marginTop: 80 }}>
				<div className="container">
					<div className="row">
						<div className="col-md-4"></div>

						<div className="col-md-4">
							<div className="form-container">
								<ul className="nav nav-tabs">
									<li className="active"><a data-toggle="tab" href="#signin-form">Sign in</a></li>
									<li><a data-toggle="tab" href='#signup-form'>Sign up</a></li>
								</ul>	

								<div className="tab-content">
									<SignIn />
									<SignUp />
								</div>

							</div> {/* .form-container */}
						</div> {/* .col-md-4 */}
					</div>

					<div className="col-md-4"></div>
				</div> {/* .container */}
			</div>
		);
	}
}