import Navbar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import {Routes,Route} from 'react-router-dom';
import ItemDetail from "./components/ItemDetail/ItemDetail";
import Categories from "./components/Categories/Categories";
import { CartContextProvider } from "./store/CartContext";
import Cart from "./components/Cart/Cart";

function App() {
  return (  
    <CartContextProvider>
      <div> 
        <Navbar/>
        <Routes>
          <Route path="/" element={<ItemListContainer/>}> </Route >
          <Route path="/item/:id" element={<ItemDetail />}> </Route >
          <Route path="/category/:categoria" element={<Categories />}> </Route >
          <Route path="/cart" element={<Cart/>}> </Route >
        </Routes>
      </div> 
    </CartContextProvider>
  );
}

export default App;
 
/*CartContextProvider</> 
<ItemListContainer/> < > */