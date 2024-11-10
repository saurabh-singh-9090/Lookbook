
const Annotation = ({ product, handleProductClick }) => {

    return (
        <button
            className="product-dot"
            style={{ left: `${product.position.x}%`, top: `${product.position.y}%` }}
            onClick={handleProductClick}
            aria-label={`View ${product.name}`}
        />
    );
}

export default Annotation;
