import React, {Component} from 'react';
import {connect} from "react-redux";
import {Link, NavLink} from "react-router-dom";

class Header extends Component {
    renderContent() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return <li><a href='/auth/google'>Log In</a></li>;
            default:
                return <li><a href='/api/logout'>Log Out</a></li>;
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