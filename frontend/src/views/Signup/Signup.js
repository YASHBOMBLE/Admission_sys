import React, { useEffect } from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function Signup() {

    
        function Signup()
        {
            const name = document.getElementById("name").value;
            const phone = document.getElementById("phone").value;
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;
            const cpassword = document.getElementById("cpassword").value;
            if(name && phone && email && password && cpassword)
            {
                document.getElementById("otp").disabled = false;
            }
            else
            {
                document.getElementById("otp").disabled = true;
            } 

            document.getElementById("btn").innerHTML = "Submit";
    
        }

              

        useEffect(() =>{
            document.getElementById("otp").disabled = true;  
        })
    
  return (
    <div>
        <h1>Sign Up</h1>
        <form>
        <label for="name">Name :</label>
          <input type="text" placeholder="Name"  id='name'/><br/>
          <label for="email">phone :</label>
          <input type="text" placeholder="Phone"id='phone'/><br/>
          <label for="email">Email :</label>
          <input type="email" placeholder="Email" id='email'/><br/>
          <label for="pwd">Password:</label>
          <input type="password" placeholder="Password" id='password'/><br/>
        
           <label for="password">Conform Password</label>
          <input type="password" placeholder="Confirm Password" id='cpassword'/> <br/>
          <input type='text' id='otp' placeholder='opt'/>
          <button type="submit" onClick={Signup} id='btn'>Submit</button>
        </form>
    </div>
  )
}

export default Signup