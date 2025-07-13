import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import toast from "react-hot-toast";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import "./CSS/Products.css";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentCategory, setCurrentCategory] = useState("All");
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
    toast.success("Added to cart");
  };

 const filterProduct = (cat) => {
  setCurrentCategory(cat);
  const filtered = cat === "All" ? data : data.filter((item) => item.category === cat);
  setFilter(filtered);

  if (cat === "All") {
    navigate("/products");
  } else {
    navigate(`/category/${encodeURIComponent(cat)}`);
  }
};


  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      // PLACEHOLDER: Replace with actual API or backend data loading if needed
      const products = [
         // Scaffolding Accessories
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

      setData(products);
      setFilter(products);
      setLoading(false);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const searchQuery = searchParams.get("search");
    if (searchQuery) {
      const filtered = data.filter(
        (product) =>
          product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilter(filtered);
      setCurrentCategory(`Search Results for "${searchQuery}"`);
    } else {
      setFilter(data);
      setCurrentCategory("All");
    }
  }, [searchParams, data]);

  const Loading = () => (
    <div className="row">
      {[...Array(6)].map((_, i) => (
        <div className="col-md-4 mb-4" key={i}>
          <Skeleton height={450} />
        </div>
      ))}
    </div>
  );

  const ShowProducts = () => (
    <>
      <div className="category-buttons text-center py-3">
        {["All", "Scaffolding Accessories", "Formwork Accessories", "Scaffolding Fittings", "Walkway Planks"].map(
          (cat) => (
            <button
              key={cat}
              className={`btn m-2 ${currentCategory.includes(cat) ? "active" : ""}`}
              onClick={() => filterProduct(cat)}
            >
              {cat}
            </button>
          )
        )}
      </div>

      {filter.length === 0 ? (
        <div className="text-center py-5">
          <h3>No products found</h3>
          <p>Try a different search term or browse our categories</p>
          <button
            className="btn btn-warning"
            onClick={() => {
              setFilter(data);
              setCurrentCategory("All");
              navigate("/products");
            }}
          >
            Show All Products
          </button>
        </div>
      ) : (
        <div className="row">
          {filter.map((product) => (
            <div key={product.id} className="col-md-4 col-sm-6 mb-4">
              <div className="card product-card h-100 text-center">
                <Link to={`/products/${product.id}`}>
                  <img
                    src={product.image}
                    className="card-img-top p-3"
                    alt={product.title}
                    style={{
                      height: "250px",
                      objectFit: "cover",
                      borderRadius: "10px",
                      cursor: "pointer",
                    }}
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
                  <button className="btn btn-outline-dark m-1" onClick={() => addProduct(product)}>
                    Add to Cart
                  </button>
                  <Link to={`/products/${product.id}`} className="btn btn-outline-primary m-1">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );

  return (
    <div className="product-section container">
      <div className="text-center mb-4">
        <h2 className="display-6">Scaffolding Products & Accessories</h2>
        <p style={{ color: "gold" }}>
          {currentCategory.startsWith("Search Results")
            ? `Showing results for "${searchParams.get("search")}"`
            : "High-quality scaffolding components for construction projects."}
        </p>
        <hr />
      </div>
      {loading ? <Loading /> : <ShowProducts />}
    </div>
  );
};

export default Products;
