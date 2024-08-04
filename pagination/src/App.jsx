import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
function App() {
  const [products, setProducts] = useState("");
  const [pages, setPages] = useState(1);
  const fetchProducts = async () => {
    const response = await axios.get("https://dummyjson.com/products");
    console.log(response.data);
    if (response && response.data) {
      setProducts(response.data.products);
    }
  };
  console.log(products);

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <div>
        {products.length > 0 && (
          <div className="products">
            {products.slice(pages * 12 - 12, pages * 12).map((prod) => {
              return (
                <span className="products__single" key={prod.id}>
                  <img src={prod.thumbnail} alt={prod.title} />
                  <span>{prod.title}</span>
                </span>
              );
            })}
          </div>
        )}
        {products.length > 0 && (<div className="pagination"> 
          <span>Prev</span>
          {[...Array(products.length /12)].map((_,i)=>{
            return <span key={i}>{i+1}</span>
          })}
          
          <span>Next</span>
        </div>)}
      </div>
    </>
  );
}

export default App;
