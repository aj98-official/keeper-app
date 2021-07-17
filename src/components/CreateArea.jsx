import React,{useState} from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';



function CreateArea(props) {
  var [item, setItem] = useState({
    title:"",
    content:""
  });
  function getItem(event){
    var name = event.target.name;
    var value = event.target.value;
    
      setItem(
        prevItem => {
          return {
            ...prevItem,
            [name] : value
          } ;
        }
      )
  }
  
  function submitItem(event){
    props.click(item);
    setItem({
      title:"",
      content:""
    })
    event.preventDefault();
  }
  
  var [isHidden, setIsHidden] = useState(true);
  
  function expandItem(){
    setIsHidden(false)
  }


  return (
    <div>
      <form className = "create-note">
        {
         !isHidden && 
         <input 
          onChange= {getItem}
          name="title" 
          placeholder="Title" 
          value={item.title}   
         />
        }

        <textarea 
          onClick = {expandItem}
          onChange = {getItem}
          name="content" 
          placeholder="Take a note..." 
          rows = {isHidden ? 1 :3}
          value = {item.content} 
        />

        <Zoom in = {!isHidden}>
          <Fab onClick = {submitItem}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
