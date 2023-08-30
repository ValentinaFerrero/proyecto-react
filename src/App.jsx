import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App (){
  return(
    <div className="bgbody">
    { }
    <NavBar/>
    { }
    <ItemListContainer greeting ="¡Proximamente!"/>
    <Routes>
      <Route path= "/" element= {ItemListContainer} />
      <Route path= "/category/:categoryId" element= {<ItemListContainer />} />
      <Route path= "/item/:id" element= {<ItemDetailContainer />} />
    </Routes>
  
    </div>
  )
}


export default App; 