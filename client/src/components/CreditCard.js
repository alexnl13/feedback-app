import React, {Component} from 'react';
import StripeCheckout from 'react-stripe-checkout';
import {connect} from 'react-redux';
import * as actions from '../actions'

class CreditCard extends Component {
    render () {
        return (
          <StripeCheckout
              name="Feedback App"
              description="€5 for 5 credits"
              token={token => this.props.handlePaymentToken(token)}
              currency="EUR" amount={500}
              stripeKey={process.env.REACT_APP_STRIPE_KEY}
          >
              <button className="btn">
                  Add Credits
              </button>
          </StripeCheckout>
        );
    }
}

export default connect(null, actions)(CreditCard);