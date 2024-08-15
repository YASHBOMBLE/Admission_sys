import React from 'react'
import ImageUpload from '../../component/ImageUpload/ImageUpload.js'

function Home() {
  async function logOut() {
    localStorage.removeItem('currentUser');
    window.location.href = '/login'
  }
  return (
    <div>
      <div>
        <nav>
          <a href="/">Home</a> &nbsp;
          <a href="/login">Login</a> &nbsp;
          <a href="/signup">Signup</a> &nbsp;
          <button onClick={logOut}>Logout</button>
        </nav>
      </div>
      <div>
        ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
      </div>
      <div>
        Personal Information <br /> ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
      </div>

      <div>
        <form >
          <label>
            Full Name:
            <input type="text" name="fullname" />
          </label> &nbsp;&nbsp;&nbsp;&nbsp; 
          <label>Mother Name:
            <input type="text" name="mothername" />
          </label><br />
          <label> Date Of Birth : </label>
          <input type="date" name="dob" /> <br /> 
          <label> Gender : </label>
          <select name="gender">
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select><br />
          <label>
            Address:
            <input type="text" name="address" />
          </label><br />
          <label>
            Mobile No :
          </label>
          <input type="text" name="mobileno" />
          <label>Blood group :</label>
          <select name="bloodgroup">
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </select><br />
          <label>Place Of Birth :</label>
          <input type="text" name="placeofbirth" /> <br />
          <label>Religion :</label>
          <input type="text" name="religion" /> <br />
          <label>Caste :</label>
          <input type="text" name="caste" /> <br />
          <label>Nationality :</label>
          <input type="text" name="nationality" /> <br />
          <button type="button" onClick={()=>{
            alert('Form Submitted Successfully')
          }}>Submit</button>

        </form>
      </div>
    </div>
  )
}

export default Home