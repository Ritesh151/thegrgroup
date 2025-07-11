import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addCart } from '../redux/action';
import toast from 'react-hot-toast';
import './SingleProduct.css'; // Correct relative import

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const products = [
          {
            id: 1,
            title: "Excavator 320D",
            category: "Excavators",
            description: "Heavy-duty excavator for foundation and trenching work.",
            image: "https://5.imimg.com/data5/SELLER/Default/2022/4/AY/JE/EJ/9340697/caterpillar-excavator.jpg",
            price: 75000,
            specifications: {
              weight: "22,000 kg",
              power: "103 kW",
              maxDepth: "6.5 m",
              bucketCapacity: "1.2 m³"
            }
          },
          // Add other products here
        ];
        
        const foundProduct = products.find(item => item.id === parseInt(id));
        setProduct(foundProduct);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product:", error);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const addToCart = () => {
    dispatch(addCart(product));
    toast.success("Added to cart");
  };

  if (loading) {
    return <div className="container text-center py-5">Loading...</div>;
  }

  if (!product) {
    return <div className="container text-center py-5">Product not found</div>;
  }

  return (
    <div className="single-product container py-5">
      <div className="row">
        <div className="col-md-6">
          <img 
            src={product.image} 
            alt={product.title} 
            className="img-fluid rounded product-image"
          />
        </div>
        <div className="col-md-6">
          <h1 className="product-title">{product.title}</h1>
          <h3 className="text-warning">₹ {product.price.toLocaleString()}</h3>
          <p className="lead">{product.description}</p>
          
          <div className="specifications mt-4">
            <h4>Specifications</h4>
            <ul className="list-group">
              {Object.entries(product.specifications).map(([key, value]) => (
                <li key={key} className="list-group-item">
                  <strong>{key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}:</strong> {value}
                </li>
              ))}
            </ul>
          </div>

          <div className="action-buttons mt-4">
            <button 
              onClick={addToCart}
              className="btn btn-dark btn-lg me-3"
            >
              Add to Cart
            </button>
            <a
              href={`https://wa.me/919904693899?text=${encodeURIComponent(
                `Hello, I'm interested in:\n\n` +
                `🔧 ${product.title}\n📂 Category: ${product.category}\n💰 ₹${product.price.toLocaleString()}\n\nPlease provide more details.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-success btn-lg"
            >
              Contact on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;