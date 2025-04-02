function Product({ products }) {
    return (
        <div className="products">
            {products.map((product) => ( //map function to display all the items in the products
                <div className="product-card" key={product.id}>
                    <img className="product-image" src={product.image}/>
                    <h1 className="product-name">{product.name}</h1>
                    <p className="product-price">${product.price}</p>
                    <button className="add-to-cart">Add to Cart</button>
                </div>
            ))}
        </div>
    );
}

export default Product