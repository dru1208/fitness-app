import React from 'react'



const RegistrationForm = (props) => {

  return (
    <div className="registrationForm">
      <form onSubmit={props.handleRegister}>
        <label htmlFor="firstName">First Name:</label>
        <input type="text" name="firstName"></input><br></br>

        <label htmlFor="lastName">Last Name:</label>
        <input type="text" name="lastName"></input><br></br>

        <label htmlFor="email">Email:</label>
        <input type="email" name="email"></input><br></br>

        <label htmlFor="password">Password:</label>
        <input type="password" name="password"></input><br></br>

        <label htmlFor="passwordConfirmation">Password Confirmation:</label>
        <input type="password" name="passwordConfirmation"></input><br></br>

        <label htmlFor="location">Location (optional):</label>
        <input type="text" name="location"></input><br></br>

        <label htmlFor="pic">Profile Picture (optional):</label>
        <input type="file" onChange={props.selectImageHandler} name="pic" accept="image/*"/>
        {props.image &&
          <div>
              <p>Image preview:</p>
              <img className="image-preview" src={props.image} height="150px" width="auto"/>
          </div>
        }

        <input type="submit" value="Submit"></input>
      </form>
    </div>
  )
};


export default RegistrationForm;