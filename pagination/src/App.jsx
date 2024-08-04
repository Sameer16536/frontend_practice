import axios from 'axios'

function App() {
  const fetchProducts = async()=>{
    const response =axios.get('https://dummyjson.com/products')
    console.log(response.data)
  }

  useEffect(()=>{
   fetchProducts() 
  },[])
  

  return (
    <>
      
    </>
  )
}

export default App
