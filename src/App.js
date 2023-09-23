
import './App.css';
import axios from "axios";

function App() {
  //function handleLogin = async ()=>
  
  async function handleLogin(){
    

try {
  console.log("ye");
  var t=await axios.post('https://testbackend.onrender.com/login',{useremail:"xyz1@gmail.com",password:'99999999'},
  {
   headers: {
    'Content-Type': 'application/x-www-form-urlencoded' 
     } ,
     withCredentials: true
       
  });

  console.log("=",t);
} catch (err) {
 console.log(err); 
}

  
  }
  return (
   <>
   <button  onClick={handleLogin}>Login</button>
   </>
   
  );
}

export default App;
