import './App.css';
import { useState, useEffect } from 'react';
const getLocalData=()=>{
const lists=localStorage.getItem("mytodolist");
if(lists)
return JSON.parse(lists);
else
return [];
};
function Todo() {
  const [inputdata,setInputData]=useState("");
  const [items,setItems]=useState(getLocalData());
  const addItem = () =>{
      if(!inputdata)
      alert('plz fill the data');
      else{
        const works={
         name:inputdata,
         id:new Date().getTime().toString()
        };
        setItems([...items,works]);
        setInputData("");
      }
     
  };
  const Deletelement = (index) =>
  {
    const updateditems= items.filter((curElem)=>{
      return curElem.id !== index;
    });
    console.log("hkbbj");
    setItems(updateditems);
  };
  const Editelement=(index)=>{

  };

  const Removeall=()=>{
    setItems([]);
  }
  useEffect(()=>{
    localStorage.setItem("mytodolist",JSON.stringify(items));
  },[items]);
  return (
    <div className="main-div">
      <div className="child-div">
        <figure>
          <img src= './images/todo.svg' alt="notes_image" />
          <figcaption>Add Your List Here</figcaption>
        </figure>
        <div className='addItems'>
          <input type='text' placeholder="✍ Add Item" className='form-control' value={inputdata} onChange={(event)=>setInputData(event.target.value)}/>
          <i className="fa fa-plus add-btn" onClick={addItem}></i>
        </div>
        <div className="showItems">
           {items.map((curElem,index)=>{
             return (
              <div className='eachItem' key={curElem.id}>
              <h3>{curElem.name}</h3>
              <div className='todo-btn'>
              <i className="far fa-edit add-btn" onClick={()=>Editelement(curElem)}></i>
              <i className="far fa-trash-alt add-btn" onClick={()=>Deletelement(curElem.id)}></i>
              </div>
              </div>
             );
           })
           }
        </div>
        <div className = 'showItems'>
          <button className="btn effect04" data-sm-link-text='Remove All' onClick={Removeall}><span>CHECK LIST</span></button>
        </div>
      </div>
    
    </div>
  );
}

export default Todo;
