import Navbar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import {Routes,Route} from 'react-router-dom';
import ItemDetail from "./components/ItemDetail/ItemDetail";
import Categories from "./components/Categories/Categories";

function App() {
  return (  
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<ItemListContainer/>}> </Route >
        <Route path="/item/:id" element={<ItemDetail />}> </Route >
        <Route path="/category/:categoria" element={<Categories />}> </Route >
      </Routes>
    </div>
  );
}

export default App;
 
/*
<ItemListContainer/> < > */