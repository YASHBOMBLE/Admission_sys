import { React, useState } from 'react'
import axios from 'axios'
import swal from 'sweetalert'
function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [show, setShow] = useState(false)
  const handleShow = () => {
    setShow(!show)
  }
  async function loginUser() {
    const response = await axios.post('/login', {
      email: email,
      password: password,
    })
    console.log(response.data)
    if (response.data.success) {

      await swal({
        title: "Success",
        text: response.data.message,
        icon: "success",
        button: "Aww yiss!",
      });
      localStorage.setItem('currentUser', JSON.stringify(response.data.data));
      window.location.href = "/"
    }
    else {
      await swal({
        title: "Error",
        text: response.data.message,
        icon: "error",
        button: "Try Again!",
      });
      setEmail("")
      setPassword("")
      localStorage.removeItem('currentUser');
    }
  }


  return (
    <div>Login
      <div>
        <div>
          <label htmlFor='email'>Email: </label>
          <input type='email' id='email' placeholder='Email' className='user-input'
            value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
      </div>
      <label for="password">Password:</label>
      <div class="input-container">
        <input type={show ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} className='user-input' placeholder=' Password' id="password" name="password" />
        <i class="btn text-pass" onClick={handleShow}>{show ? "Hide" : "Show"}</i>
      </div>
      <button type="submit" onClick={loginUser}>Login</button>
    </div>
  )
}

export default Login