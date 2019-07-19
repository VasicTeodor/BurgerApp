import React, { PureComponent } from 'react';
import Button from '../../UI/Button/Button';

class OrderSummary extends PureComponent {
    componentDidUpdate() {
        console.log('[OrderSummary] updated');
    }

    render() {
        const ingredientsSummary = Object.keys(this.props.ingredients).map(igKey => {
            return <li key={igKey}><span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}</li>
        })
    
        return(
            <React.Fragment>
                <h3>Your order</h3>
                <p>A delicious burger with the following ingredients: </p>
                <ul>
                    {ingredientsSummary}
                </ul>
                <p><strong>Total Price: {this.props.price.toFixed(2)} $</strong></p>
                <p>Continue to checkout?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </React.Fragment>
        );
    }
    
}

export default OrderSummary;