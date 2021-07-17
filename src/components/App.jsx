import React,{useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  var [allItems, setAllItems] = useState([]);
  
  function addItem(item){
    setAllItems(prevItems => [...prevItems, item]);
  }
  function deleteItem(id){
    setAllItems(prevItems => {
      return (
        prevItems.filter((item,index) => index !== id)
      );
    } )
  }

  return (
    <div>
      <Header />
      <CreateArea click = {addItem}/>
      {allItems.map((item,index)=> {
       return (
          <Note key={index} click={deleteItem} title={item.title} content={item.content} id= {index} />
       );
      })}
      <Footer />
    </div>
  );
}

export default App;
