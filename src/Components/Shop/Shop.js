import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../Redux/Actions/CartAction';
import Products from '../Products/Products';

const Shop = (props) => {
    console.log(props);
    const products = [
        {name : 'Auss' , id: 1},
        {name : 'Lenovo' , id: 2},
        {name : 'Toshiba' , id: 3},
        {name : 'Philips' , id: 4},
        {name : 'Ericson' , id: 5},
        
]
    return (
        <div>
            <h2>this is shop</h2>  
            {
                products.map(pd => <Products products={pd}></Products>)
            }
        </div>
    );
};

const mapStateToProps = (state)=>{
    return{
        cart : state.cart,
        products : state.products
    }
}

const mapDispatchToProps = {
    addToCArt : addToCart
}

export const connectToStore = connect(mapStateToProps,mapDispatchToProps )(Shop)

export default Shop;
// connect(mapStateToProps,mapDispatchToProps )(Shop);  