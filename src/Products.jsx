import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Products = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('YOUR_API_URL_HERE') 
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

  const handleDetail = (id) => {
    navigate(`/product/${id}`); 
  };

  return (
    <div>
      {products.map((product) => (
        <div key={product.id} onClick={() => handleDetail(product.id)}>
          <img src={product.image} alt={product.title} />
          <h3>{product.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default Products;
