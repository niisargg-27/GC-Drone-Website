import React from "react";
import './orderhistory.css'

export default function Orderhistory() {
  return (
    <div>
      <div class="container">
        <div class="row">
          <div class="col-md-3">
            <div class="Admin-account-page-left shadow-sm bg-white h-100">
              <div class="border-bottom p-4">
                <div class="text-center">
                  <div class="Admin-user-media">
                    <img
                      class="mb-3 rounded-circle shadow-sm mt-1"
                      src="https://lh3.googleusercontent.com/hwau7OVWx96XaME5KpRuJ0I_MscrerK6SbRH1UwYHYaxIDQQtn7RZK02LDSfBzCreidFgDsJeXyqDct6EZiH6vsV=w640-h400-e365-rj-sc0x00ffffff"
                      alt="Admin"
                    />
                    <div class="Admin-user-media-body">
                      <h6 class="mb-2">Name</h6>
                      <p class="mb-1">+91 7538596034</p>
                      <p>user@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
              <ul
                class="nav nav-tabs flex-column border-0 pt-4 pl-4 pb-4"
                id="myTab"
                role="tablist"
              >
                <li class="nav-item">
                  <a
                    class="nav-link"
                    id="orders-tab"
                    data-toggle="tab"
                    href="#orders"
                    role="tab"
                    aria-controls="orders"
                    aria-selected="false"
                  >
                    <i class="icofont-food-cart"></i> Orders
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-9">
            <div class="Admin-account-page-right shadow-sm bg-white p-4 h-100">
              <div class="tab-content" id="myTabContent">
                <div
                  class="tab-pane fade active show"
                  id="orders"
                  role="tabpanel"
                  aria-labelledby="orders-tab"
                >
                  <h4 class="font-weight-bold mt-0 mb-4">Past Orders</h4>
                  <div class="bg-white card mb-4 order-list shadow-sm">
                    <div class="p-4">
                      <a href="#"> </a>
                      <div class="media">
                        <a href="#">
                          <img
                            class="mr-4"
                            src="https://media.wired.com/photos/6077303d9654cfea28c956dd/125:94/w_1871,h_1407,c_limit/Gear-Air-2S--Drone-2.jpg"
                            alt="Generic image"
                          />
                        </a>
                        <div class="media-body">
                          <a href="#">
                            <span class="float-right text-info">
                              Delivered on Mon, Nov 12, 7:18 PM
                            </span>
                          </a>
                          <h6 class="mb-2">
                            <a href="#"></a>
                            <a href="#" class="text-black">
                              Drone Name that is used for delivery
                            </a>
                          </h6>
                          <p class="text-gray mb-1">
                            <i class="icofont-location-arrow"></i>Pickup
                            Location
                          </p>
                          <p class="text-gray mb-3">Drop Location</p>
                          <p class="text-dark">Time taken - 2hours</p>
                          <hr />
                          <p class="mb-0 text-black text-primary pt-2">
                            <span class="text-black font-weight-bold">
                              Total Paid:
                            </span>
                            $300
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
