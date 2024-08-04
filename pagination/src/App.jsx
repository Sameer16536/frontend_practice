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

const pageHandler =(selectedPage)=>{
  if(selectedPage>1 && selectedPage <= products.length/10 && selectedPage !=pages){

    setPages(selectedPage)
  }
}

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
        {products.length > 0 && (
          <div className="pagination">
            <span onClick={()=>pageHandler(pages-1)}>Prev</span>

            {[...Array(products.length / 10)].map((_, i) => {
              return <span className={pages===i+1 ? "pagination__selected":""} onClick={()=>pageHandler(i+1)} key={i}>{i + 1}</span>;
            })}

            <span onClick={()=>pageHandler(pages+1)}>Next</span>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
