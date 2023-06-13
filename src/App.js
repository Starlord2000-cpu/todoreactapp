import './App.css';
function todo() {
  return (
    <div className="main-div">
      <div className="child-div">
        <figure>
          <img src= './images/todo.svg' alt="notes_image" />
          <figcaption>Add Your List Here</figcaption>
        </figure>
        <div className='addItems'>
          <input type='text' placeholder='✍ Add Item' className='form-control'></input>
        </div>
      </div>
    
    </div>
  );
}

export default todo;
