function Product({ products }) {
    return (
        <div className="products">
            {products.map((product) => ( 
                <div className="product-card" key={product.id}>
                    <img className="product-image" src={product.image} alt={product.name} /> // display product image
                    <h1 className="product-name">{product.name}</h1> // display product name
                    <p className="product-price">${product.price}</p> // display product price
                    <button className="add-to-cart">Add to Cart</button> // button to add product to cart
                </div>
            ))}
        </div>
    );
}

export default Product;
