import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import "./CSS/Products.css"; // Custom CSS for premium look

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
    toast.success("Added to cart");
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
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
        {
          id: 2,
          title: "Tower Crane TC-6010",
          category: "Cranes",
          description: "High-rise crane with large lifting capacity.",
          image: "https://www.machplaza.com/wp-content/uploads/2023/07/XGA6013-8S-3.jpg",
          price: 125000,
          specifications: {
            maxLoad: "10,000 kg",
            maxHeight: "80 m",
            jibLength: "60 m",
            power: "45 kW"
          }
        },
        {
          id: 3,
          title: "Adjustable Scaffolding",
          category: "Scaffolding",
          description: "Robust steel scaffolding with adjustable height.",
          image: "https://5.imimg.com/data5/SELLER/Default/2021/4/KC/NE/GX/2938942/scaffold-ladder-1000x1000.JPG",
          price: 5500,
          specifications: {
            material: "Galvanized Steel",
            maxHeight: "10 m",
            platformWidth: "0.7 m",
            loadCapacity: "150 kg/m²"
          }
        },
        {
          id: 4,
          title: "Concrete Mixer Machine",
          category: "Tools",
          description: "Portable concrete mixer for small to mid-size projects.",
          image: "https://5.imimg.com/data5/SELLER/Default/2022/1/JY/KW/LN/87267477/venus-self-loading-concrete-mixer-2-1000x1000.jpg",
          price: 14500,
          specifications: {
            capacity: "350 L",
            enginePower: "6.5 HP",
            drumSpeed: "25 rpm",
            weight: "320 kg"
          }
        },
        {
          id: 5,
          title: "Formwork Accessories Kit",
          category: "Accessories",
          description: "Complete formwork accessories including tie rods, clamps, and wedges.",
          image: "https://4.imimg.com/data4/IB/TX/MY-35105146/cup-lock-scaffolding-1000x1000.jpg",
          price: 8200,
          specifications: {
            material: "Steel",
            components: "Tie rods, clamps, wedges",
            compatibility: "Standard formwork systems",
            packageWeight: "85 kg"
          }
        },
        {
          id: 6,
          title: "Lifting & Handling Equipment's Material",
          category: "Lifting & Handling Equipment",
          description: "Lifting & Handling Equipment.",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdAPyZqZ_XrWlmh6RhoJ4m7BqflsQuzn-s3Q&s",
          price: 2500,
          specifications: {
            type: "Various lifting equipment",
            maxCapacity: "Varies by equipment",
            material: "Steel/Alloy",
            applications: "Material handling"
          }
        },
      ];
      setData(products);
      setFilter(products);
      setLoading(false);
    };

    fetchData();
  }, []);

  const Loading = () => (
    <div className="row">
      {[...Array(6)].map((_, i) => (
        <div className="col-md-4 mb-4" key={i}>
          <Skeleton height={450} />
        </div>
      ))}
    </div>
  );

  const filterProduct = (cat) => {
    setFilter(cat === "All" ? data : data.filter((item) => item.category === cat));
  };

  const ShowProducts = () => (
    <>
      <div className="category-buttons text-center py-3">
        {["All", "Excavators", "Cranes", "Scaffolding", "Tools", "Accessories", "Lifting & Handling Equipment"].map((cat) => (
          <button
            key={cat}
            className="btn btn-outline-warning btn-sm m-2"
            onClick={() => filterProduct(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="row">
        {filter.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card product-card h-100 text-center">
              <Link to={`/products/${product.id}`}>
                <img
                  src={product.image}
                  className="card-img-top p-3"
                  alt={product.title}
                  style={{ height: "250px", objectFit: "cover", borderRadius: "10px", cursor: "pointer" }}
                />
              </Link>
              <div className="card-body">
                <Link to={`/products/${product.id}`} style={{ textDecoration: "none", color: "inherit" }}>
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.description}</p>
                </Link>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item lead">₹ {product.price.toLocaleString()}</li>
              </ul>
              <div className="card-body">
                <a
                  href={`https://wa.me/919904693899?text=${encodeURIComponent(
                    `Hello, I visited your website and want more info about:\n\n` +
                    `🔧 ${product.title}\n📂 Category: ${product.category}\n💬 ${product.description}\n💰 ₹${product.price.toLocaleString()}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-success m-1"
                >
                  Get Quote
                </a>
                <button
                  className="btn btn-outline-dark m-1"
                  onClick={() => addProduct(product)}
                >
                  Add to Cart
                </button>
                <Link 
                  to={`/products/${product.id}`} 
                  className="btn btn-outline-primary m-1"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );

  return (
    <div className="product-section container">
      <div className="text-center mb-4">
        <h2 className="display-6">Construction Products & Services</h2>
        <p style={{ color: 'gold' }}>
          Everything from Excavators to Manpower — we've got you covered.
        </p>
        <hr />
      </div>
      {loading ? <Loading /> : <ShowProducts />}
    </div>
  );
};

export default Products;