import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Footer, Navbar } from "../components";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import toast from "react-hot-toast";
import "../components/CSS/Products.css"; // adjust path as needed
import "./SingleProduct.css"; // new CSS for this component

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
    toast.success("Added to cart");
  };

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);

      const products = [
        {
          id: 1,
          title: "MS Scaffolding Universal Jack",
          category: "Scaffolding Accessories",
          description: "Adjustable universal jack for scaffolding systems.",
          image: "https://5.imimg.com/data5/SELLER/Default/2020/9/FP/KR/MN/21957175/scaffolding-universal-jack.jpg",
          price: 1200,
          specifications: {
            material: "Mild Steel",
            maxHeight: "500 mm",
            minHeight: "300 mm",
            loadCapacity: "2000 kg"
          }
        },
        {
          id: 2,
          title: "Expandable Joint Pins",
          category: "Scaffolding Accessories",
          description: "High-quality expandable joint pins for scaffolding.",
          image: "https://sc04.alicdn.com/kf/H61b62c2c072a45fdab8041115404fd8c3.jpg_350x350.jpg",
          price: 850,
          specifications: {
            material: "Carbon Steel",
            diameter: "48 mm",
            length: "200 mm",
            loadCapacity: "1500 kg"
          }
        },
        {
          id: 3,
          title: "Top Cup Scaffolding",
          category: "Scaffolding Accessories",
          description: "Durable top cup for scaffolding connections.",
          image: "https://4.imimg.com/data4/WP/OT/MY-2291372/top-cup-scaffolding-250x250.jpg",
          price: 950,
          specifications: {
            material: "Mild Steel",
            diameter: "48 mm",
            thickness: "3.2 mm",
            loadCapacity: "1800 kg"
          }
        },
        {
          id: 4,
          title: "MS Spigot Joint Pin",
          category: "Scaffolding Accessories",
          description: "Spigot joint pins for secure scaffolding connections.",
          image: "https://5.imimg.com/data5/SELLER/Default/2021/12/CS/EG/RT/2938942/ms-spigot-joint-pin-500x500.jpg",
          price: 750,
          specifications: {
            material: "Mild Steel",
            diameter: "48 mm",
            length: "150 mm",
            loadCapacity: "1600 kg"
          }
        },
        {
          id: 5,
          title: "Sheet Metal Fix Coupler",
          category: "Scaffolding Accessories",
          description: "Fix coupler for sheet metal scaffolding.",
          image: "https://5.imimg.com/data5/SELLER/Default/2021/12/CS/EG/RT/2938942/sheet-metal-fix-coupler-500x500.jpg",
          price: 1100,
          specifications: {
            material: "Galvanized Steel",
            diameter: "48 mm",
            thickness: "3.5 mm",
            loadCapacity: "2000 kg"
          }
        },

        // Formwork Accessories
        {
          id: 6,
          title: "MS Anchor Nut",
          category: "Formwork Accessories",
          description: "High-strength anchor nuts for formwork.",
          image: "https://5.imimg.com/data5/SELLER/Default/2021/12/CS/EG/RT/2938942/ms-anchor-nut-500x500.jpg",
          price: 650,
          specifications: {
            material: "Mild Steel",
            size: "M16",
            threadType: "Coarse",
            loadCapacity: "1200 kg"
          }
        },
        {
          id: 7,
          title: "Solid Screw Jack",
          category: "Formwork Accessories",
          description: "Adjustable screw jack for formwork support.",
          image: "https://5.imimg.com/data5/SELLER/Default/2021/12/CS/EG/RT/2938942/solid-screw-jack-500x500.jpg",
          price: 1350,
          specifications: {
            material: "Steel",
            maxHeight: "600 mm",
            minHeight: "350 mm",
            loadCapacity: "2500 kg"
          }
        },
        {
          id: 8,
          title: "Tie Rod Wing Nut",
          category: "Formwork Accessories",
          description: "Wing nuts for tie rod systems.",
          image: "https://5.imimg.com/data5/SELLER/Default/2021/12/CS/EG/RT/2938942/tie-rod-wing-nut-500x500.jpg",
          price: 500,
          specifications: {
            material: "Steel",
            size: "M16",
            threadType: "Coarse",
            loadCapacity: "800 kg"
          }
        },
        {
          id: 9,
          title: "GI Shuttering Runner",
          category: "Formwork Accessories",
          description: "Galvanized iron runners for shuttering.",
          image: "https://5.imimg.com/data5/SELLER/Default/2021/12/CS/EG/RT/2938942/gi-shuttering-runner-500x500.jpg",
          price: 1800,
          specifications: {
            material: "Galvanized Iron",
            length: "3 m",
            width: "100 mm",
            thickness: "2 mm"
          }
        },
        {
          id: 10,
          title: "Hax Nut Tie Rod",
          category: "Formwork Accessories",
          description: "Hex nut tie rods for formwork systems.",
          image: "https://5.imimg.com/data5/SELLER/Default/2021/12/CS/EG/RT/2938942/hax-nut-tie-rod-500x500.jpg",
          price: 700,
          specifications: {
            material: "Steel",
            diameter: "16 mm",
            length: "Customizable",
            loadCapacity: "1500 kg"
          }
        },

        // Scaffolding Fittings
        {
          id: 11,
          title: "Mild Steel Scaffolding Pipe Fitting",
          category: "Scaffolding Fittings",
          description: "High-quality MS pipe fittings for scaffolding.",
          image: "https://5.imimg.com/data5/SELLER/Default/2021/12/CS/EG/RT/2938942/ms-scaffolding-pipe-fitting-500x500.jpg",
          price: 950,
          specifications: {
            material: "Mild Steel",
            diameter: "48 mm",
            thickness: "3.2 mm",
            loadCapacity: "1800 kg"
          }
        },
        {
          id: 12,
          title: "MS Scaffolding Sleeve Coupler",
          category: "Scaffolding Fittings",
          description: "Sleeve couplers for scaffolding pipe connections.",
          image: "https://5.imimg.com/data5/SELLER/Default/2021/12/CS/EG/RT/2938942/ms-scaffolding-sleeve-coupler-500x500.jpg",
          price: 850,
          specifications: {
            material: "Mild Steel",
            diameter: "48 mm",
            thickness: "4 mm",
            loadCapacity: "2000 kg"
          }
        },
        {
          id: 13,
          title: "Safety Toe Guard",
          category: "Scaffolding Fittings",
          description: "Protective toe guards for scaffolding safety.",
          image: "https://5.imimg.com/data5/SELLER/Default/2021/12/CS/EG/RT/2938942/safety-toe-guard-500x500.jpg",
          price: 600,
          specifications: {
            material: "Steel",
            height: "200 mm",
            width: "1000 mm",
            thickness: "1.5 mm"
          }
        },
        {
          id: 14,
          title: "Carbon Steel Scaffolding Putlog Coupler",
          category: "Scaffolding Fittings",
          description: "Putlog couplers for scaffolding systems.",
          image: "https://5.imimg.com/data5/SELLER/Default/2021/12/CS/EG/RT/2938942/carbon-steel-scaffolding-putlog-coupler-500x500.jpg",
          price: 1100,
          specifications: {
            material: "Carbon Steel",
            diameter: "48 mm",
            thickness: "4.5 mm",
            loadCapacity: "2200 kg"
          }
        },

        // Walkway Planks
        {
          id: 15,
          title: "GI Scaffolding Plank (without hook)",
          category: "Walkway Planks",
          description: "Galvanized iron planks for scaffolding walkways.",
          image: "https://5.imimg.com/data5/SELLER/Default/2021/12/CS/EG/RT/2938942/gi-scaffolding-plank-without-hook-500x500.jpg",
          price: 2500,
          specifications: {
            material: "Galvanized Iron",
            length: "3 m",
            width: "250 mm",
            thickness: "1.5 mm",
            loadCapacity: "300 kg"
          }
        },
        {
          id: 16,
          title: "Scaffold Walkway Plank",
          category: "Walkway Planks",
          description: "Durable walkway planks for scaffolding.",
          image: "https://5.imimg.com/data5/SELLER/Default/2021/12/CS/EG/RT/2938942/scaffold-walkway-plank-500x500.jpg",
          price: 2800,
          specifications: {
            material: "Steel",
            length: "3 m",
            width: "300 mm",
            thickness: "2 mm",
            loadCapacity: "350 kg"
          }
        },
        {
          id: 17,
          title: "Anti-Skid Solar Walkway Plank",
          category: "Walkway Planks",
          description: "Anti-skid planks for solar panel installations.",
          image: "https://5.imimg.com/data5/SELLER/Default/2021/12/CS/EG/RT/2938942/anti-skid-solar-walkway-plank-500x500.jpg",
          price: 3200,
          specifications: {
            material: "Steel with anti-skid surface",
            length: "3 m",
            width: "300 mm",
            thickness: "2.5 mm",
            loadCapacity: "400 kg"
          }
        },
        {
          id: 18,
          title: "MS Scaffolding Plank",
          category: "Walkway Planks",
          description: "Mild steel planks for scaffolding platforms.",
          image: "https://5.imimg.com/data5/SELLER/Default/2021/12/CS/EG/RT/2938942/ms-scaffolding-plank-500x500.jpg",
          price: 2200,
          specifications: {
            material: "Mild Steel",
            length: "3 m",
            width: "250 mm",
            thickness: "2 mm",
            loadCapacity: "300 kg"
          }
        }
      ];

      const found = products.find((p) => p.id === parseInt(id));
      setProduct(found);
      setLoading(false);
    };

    fetchProduct();
  }, [id]);

  const Loading = () => (
    <div className="text-center my-5">
      <Skeleton height={40} width={300} />
      <div className="row mt-4">
        <div className="col-md-6"><Skeleton height={400} /></div>
        <div className="col-md-6"><Skeleton count={6} /></div>
      </div>
    </div>
  );

  const ShowProduct = () => (
    <div className="container my-5 single-product">
      <div className="row align-items-center">
        <div className="col-md-6 text-center">
          <img
            src={product.image}
            alt={product.title}
            className="product-image"
          />
        </div>
        <div className="col-md-6">
          <h2 className="product-title">{product.title}</h2>
          <p className="text-muted">Category: {product.category}</p>
          <h4 className="text-warning">₹ {product.price.toLocaleString()}</h4>
          <p>{product.description}</p>

          {product.specifications && (
            <ul className="list-group specifications mb-3">
              {Object.entries(product.specifications).map(([key, value]) => (
                <li className="list-group-item" key={key}>
                  <strong>{key[0].toUpperCase() + key.slice(1)}:</strong> {value}
                </li>
              ))}
            </ul>
          )}

          <div className="action-buttons">
            <a
              href={`https://wa.me/919904693899?text=${encodeURIComponent(
                `Hello, I'm interested in:\n\n🔧 ${product.title}\n📂 Category: ${product.category}\n💬 ${product.description}\n💰 ₹${product.price.toLocaleString()}`
              )}`}
              className="btn btn-success btn-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Quote
            </a>
            <button className="btn btn-add-cart btn-lg" onClick={() => addProduct(product)}>
              Add to Cart
            </button>
            <Link to="/products" className="btn btn-back btn-lg">
              Back to Products
            </Link>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <Navbar />
      <div className="product-section">
        {loading ? <Loading /> : product ? <ShowProduct /> : (
          <div className="text-center py-5">
            <h3>Product not found</h3>
            <Link to="/products" className="btn btn-outline-warning mt-3">Browse Products</Link>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default SingleProduct;
