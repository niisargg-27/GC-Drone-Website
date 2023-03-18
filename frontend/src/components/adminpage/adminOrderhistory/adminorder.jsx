import React from "react";
import './adminorder.css'

export default function Adminorder() {
  return (
    <div>
      <div class="container">
        <div class="row">
          <div class="col-md-3">
            <div class="Admin-account-page-left shadow-sm bg-white h-100">
              <div class="border-bottom p-4">
                <div class="Admin-user text-center">
                  <div class="Admin-user-media">
                    <img
                      class="mb-3 rounded-pill shadow-sm mt-1"
                      src="https://lh3.googleusercontent.com/hwau7OVWx96XaME5KpRuJ0I_MscrerK6SbRH1UwYHYaxIDQQtn7RZK02LDSfBzCreidFgDsJeXyqDct6EZiH6vsV=w640-h400-e365-rj-sc0x00ffffff"
                      alt="gurdeep singh Admin"
                    />
                    <div class="Admin-user-media-body">
                      <h6 class="mb-2">Anurag Tripathi</h6>
                      <p class="mb-1">+91 8896773975</p>
                      <p>Admin@gmail.com</p>
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
                    <i class="bi bi-circle-fill bg-dark"></i> Orders : 20
                  </a>
                </li>
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
                    <i class="bi bi-circle-fill bg-success"></i>Active : 70
                  </a>
                </li>
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
                    <i class="bi bi-circle-fill bg-danger"></i>Rejected : 100
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
                  <div class="bg-white card order-list shadow-sm">
                    <div class="p-4">
                      <a href="#"> </a>
                      <div class="media">
                        <a href="#">
                          <img
                            class="mr-4"
                            src="https://media.wired.com/photos/6077303d9654cfea28c956dd/125:94/w_1871,h_1407,c_limit/Gear-Air-2S--Drone-2.jpg"
                            alt="Image of drone used"
                          />
                        </a>
                        <div class="media-body">
                          <a href="#">
                            <span class="float-right text-info">
                            Delivered on Sun, Mar 19, 7:18 PM
                            </span>
                          </a>
                          <h6 class="mb-2">
                            <a href="#"></a>
                            <a href="#" class="text-black">
                              Delivered using Hermes Drone
                            </a>
                          </h6>
                          <p class="text-gray mb-1">Pickup Location</p>
                          <p class="text-gray mb-3">Drop Location</p>
                          <p class="text-dark">
                            Time Taken : 3.5 hours
                          </p>
                          <hr />

                          <p class="mb-0 text-black text-primary pt-2">
                            <span class="text-black font-weight-bold">
                              Total Paid:
                            </span>
                            $420
                          </p>
                          <div class="float-right">
                            <a class="btn btn-sm btn-outline-primary" href="#">
                              Accept
                            </a>
                            <a class="btn btn-sm btn-outline-primary" href="#">
                              Reject
                            </a>
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
    </div>
  );
}
