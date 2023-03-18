import React from "react";
import './order.css'
export default function Order() {
  return (
    <div>
      <div class="container mx-auto mt-4">
        <div class="row">
          <div class="col-md-4">
            <div class="card" style={{margin: '18 rem'}}>
              <img
                src="https://media.wired.com/photos/6077303d9654cfea28c956dd/125:94/w_1871,h_1407,c_limit/Gear-Air-2S--Drone-2.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Archer</h5>
                <h6 class="card-subtitle mb-2">Price : $99</h6>
                <p class="card-text">
                  Fast and efficient deliveries.
                </p>
                <p class="text-center">
                  <a href="#" class="btn mr-2 text-center">
                    <i class="fas fa-link"></i>Order
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
