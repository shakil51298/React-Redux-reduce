import React from 'react';

const Products = (props) => {
    const {name , id} = props.products
    return (
        <div style={{border:"1px solid tomato" ,padding:'5px'}}>
            <h3>{name}</h3>
            <button>Add to Cart</button>
        </div>
    );
};

export default Products;<h3>this is products</h3>