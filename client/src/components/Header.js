import React, {Component} from 'react';
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import CreditCard from './CreditCard';

class Header extends Component {
    renderContent() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return <li><a href='/auth/google'>Log In</a></li>;
            default:
                return [
                    <li key="1"><CreditCard/></li>,
                    <li key="2" style={{margin: '0 10px'}}>Credits: {this.props.auth.credits}</li>,
                    <li key="3"><a href='/api/logout'>Log Out</a></li>
                ];

        }
    }

    render() {
        return (
            <nav>
                <div className="nav-wrapper blue darken-3">
                    <Link
                        to={this.props.auth ? "/surveys" : "/"}
                        className="brand-logo">
                        Feedback App
                    </Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        {this.renderContent()}
                    </ul>
                </div>
            </nav>
        );
    }
}

function mapStatetoProps(state) {
    return {auth: state.auth};
}

export default connect(mapStatetoProps)(Header);