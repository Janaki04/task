import React from 'react'
import {Link} from 'react-router-dom'

function Form() {
  return (
    <div>  
       <h1>FORM</h1>   
    <form >
   
  <div className="form-row">
    <div className="form-group col-md-4">
      <label >FirstName</label>
      <input type="text" className="form-control" />
    </div>
    <div className="form-group col-md-4">
      <label >UserName</label>
      <input type="text" className="form-control" />
    </div>
    <div className="form-group col-md-4">
      <label >Date of Birth</label>
      <input type="date of birth" className="form-control" />
    </div>
    <div className="form-group col-md-6">
      <label >Email</label>
      <input type="email" className="form-control" />
    </div>
    <div className="form-group col-md-6">
      <label >Phone Number</label>
      <input type="number" className="form-control" />
    </div>
    <div className="form-group col-md-3">
      <label >City</label>
      <input type="text" className="form-control" />
    </div>
    <div className="form-group col-md-3">
      <label >State</label>
      <input type="text" className="form-control" />
    </div>
    <div className="form-group col-md-3">
      <label >Country</label>
      <input type="text" className="form-control" />
    </div>
    
  <button type="submit" ><Link to="/" className="btn btn-primary mb-2">Submit </Link></button>
  </div>
</form>
   
    </div>
  )
}

export default Form