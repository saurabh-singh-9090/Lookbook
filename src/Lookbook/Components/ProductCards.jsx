
const ProductCards = ({ currentMediaItem , handleProductClick}) => {
    return (
        <div className="product-cards">
            <div className="product-cards-container">
                {currentMediaItem?.products?.map((product) => (
                    <div onClick={handleProductClick} key={product?.id} className="product-card">
                        <p>{product.name}</p>
                        <p className="price">${product.price.toFixed(2)}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductCards;
