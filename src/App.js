import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const nayoks =["Anwar", "Jafor", "Alomgir","Shakib Khan","Saman ",'Bappi']
  const products =[
    {name: "Photoshop", price:"$90.99"},
   { name: "Illustrator", price:"$60.99"},
   {name: "PDF Reader", price:"$6.99"},
  ]
  
  return (
    <div className="App"> 
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
     
       <p>I am a React Person</p>

       <Counter></Counter>
       <Users></Users>

       {
         nayoks.map(nayok => 
           <li>{nayok}</li>
         
         )
       }
       {
         products.map(pd => <Product product ={pd}> </Product>)
       }
      
     
      </header>
    </div>
  );

}

function Counter (){
  const [count, setCount ] = useState(10);

  return(
    <div>
      <h1>Count:{count} </h1>
      <button onMouseMove = {() => setCount(count - 1 )}>decrease</button>
  <button onClick = { ()=>setCount(count + 1 )}>Increase</button>
    </div>
  )
}
function Users(){
  const [users, setUsers]=useState([])
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => setUsers(data))
  })
  
  return (
    <div>
      <h3>Dynamic  Users : {users.length} </h3>
      <ul>
        {
          users.map (user => <li>
            {user.name}
          </li>)
        }
      </ul>
    </div>
  )
}
function Product(props){
  const produnctStyle ={
    border: "1px solid gray",
    borderRadius:"5px",
    height:"200px",
    width:"200px",
    float:"left",
  
  }
  
  const {name, price} = props.product;
   
  return (
      <div style={produnctStyle}>
        <h4>Name: {name} </h4>
        <h5> Price: {price}</h5>
        <button >Buy Now</button>

      </div>

  )
}

function Person(props){
  
  return (
    <div style={{border:"2px solid gold",width: "400px", margin:"5px",borderRadius:"5px"}}>
      <h3>My name: {props.name}</h3>
      <p>My profession: {props.job}</p>

    </div>
  )
}


export default App;

 
