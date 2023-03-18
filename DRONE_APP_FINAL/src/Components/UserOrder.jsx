import React from 'react'
import Footer from './Footer/Footer'
import Order from './userpage/order/order'
import './userpage/order/UserOrder.css'

export default function UserOrder() {
  return (
    <>
    <div className='container order-container'>

    <div className='row'>
        <div className='col' >
    <Order name="Archer"/>
        </div>
        <div className='col' >
    <Order name="Beth"/>
        </div>
        <div className='col' >
    <Order name="Charles"/>
        </div>
        <div className='col' >
    <Order name="Drake"/>
        </div>
        <div className='col' >
    <Order name="Elizabeth"/>
        </div>
        <div className='col' >
    <Order name="Francis"/>
        </div>
    </div>
    </div>
    <Footer/>
    </>
  )
}
