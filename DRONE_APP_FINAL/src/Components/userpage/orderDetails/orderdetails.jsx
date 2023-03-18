import React from 'react'
import './orderdetails.css'

export default function Orderdetails() {
  return (
    <div>
          <div class="center">
      <h1>Order Details</h1>
      <form method="post">
        <div class="txt_field">
          <input type="text" required />
          <span></span>
          <label>Pickup Location</label>
        </div>
        <div class="txt_field">
          <input type="text" required />
          <span></span>
          <label>Drop Location</label>
        </div>
    
        <input type="submit" value="Proceed" />
        <div class="signup_link">
          
        </div>
      </form>
    </div>
    </div>
  )
}
