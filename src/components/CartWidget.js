// class based component
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

class CartWidget extends React.Component 
{
    render() 
    {
      return(
        <div className="border border-info p-1">
            <img src="../../images/cart_icon.png" alt='Cart icon' width="25" id='cartIcon' className="d-inline-block"/>
            <span className="d-inline-block">2</span>
        </div>);
    }
}

export default CartWidget;
