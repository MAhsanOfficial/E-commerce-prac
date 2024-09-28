import React from 'react'
import Card from '../Components/Card'

const Men = () => {
  return (
    <>
    <div className='main-banner'>
      <div className='flat-discount'>
        <div>        
         <h1>Flat 50 % off</h1>
         <h3><span>12</span> Hours <span>20</span> Mints</h3>
        </div>
      <div className='image-men'></div>
      </div>
    </div>
    <div className='men-images'>
        <Card image='https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' description='Men Yellow Hoddie' price='82$' strikethrough='120$'/>
        <Card image='https://images.pexels.com/photos/878358/pexels-photo-878358.jpeg?auto=compress&cs=tinysrgb&w=600' description='Men Full Sleves White t-shirt ' price='62$' strikethrough='100$'/>
        <Card image='https://images.pexels.com/photos/2774163/pexels-photo-2774163.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' description='Men Jeans Jacket' price='75$' strikethrough='115$'/>
        <Card image='https://images.pexels.com/photos/2932748/pexels-photo-2932748.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' description='Men Black Hoddie' price='80$' strikethrough='120$'/>
        <Card image='https://images.pexels.com/photos/1819482/pexels-photo-1819482.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' description='Men Black Jacket' price='82$' strikethrough='120$'/>
        <Card image='https://images.pexels.com/photos/2926180/pexels-photo-2926180.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' description='Men Half Sleves White t-shirt ' price='62$' strikethrough='100$'/>
        <Card image='https://images.pexels.com/photos/2897531/pexels-photo-2897531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' description='Men Black & White Paisley Dress Shirt' price='60$' strikethrough='98$'/>
        <Card image='https://images.pexels.com/photos/157675/fashion-men-s-individuality-black-and-white-157675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' description='Men Black Long Coat' price='85$' strikethrough='125$'/>
    </div>
    </>

  )
}

export default Men
