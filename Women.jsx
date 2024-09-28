import React from 'react'
import Card from '../Components/Card'

const Women = () => {
  return (
    <div>
      <div className='main-banner'>
        <div className='flat-discount'>
          <div>
            <h1>Flat 50 % off</h1>
            <h3><span>12</span> Hours <span>20</span> Mints</h3>
          </div>
          <div className='image-women'></div>
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "2rem", flexWrap: "wrap", marginTop:"2rem" }}>
        <Card image='https://jeem.pk/cdn/shop/files/Dazzle_Pink_Luxury_Dress_For_Women.jpg?v=1724052401&width=600' description='Dazzle Pink' price='75$' strikethrough='100$' />
        <Card image='https://jeem.pk/cdn/shop/files/Sheesha_Maroon_Luxury_Dress.jpg?v=1724053033&width=1000' description='Sheesha Maroon' price='80$' strikethrough='105$' />
        <Card image='https://jeem.pk/cdn/shop/files/Isabel_Blue_Luxury_Formal_For_Women.jpg?v=1724051777&width=600' description='Isabel Blue Luxury Formal For Women' price='90$' strikethrough='120$' />
        <Card image='https://jeem.pk/cdn/shop/files/emma-purple-luxury-pret.webp?v=1710932591&width=800' description='Emma Purple' price='77$' strikethrough='100$' />
        <Card image='https://jeem.pk/cdn/shop/files/Saga_Blue_Luxury_Dress.jpg?v=1724052669&width=1000' description='Saga Blue' price='82$' strikethrough='105$' />
        <Card image='https://jeem.pk/cdn/shop/files/jehan-formal-dress-for_ladies.webp?v=1710921644&width=600' description='Jehan-Formal' price='90$' strikethrough='112$' />
        <Card image='https://jeem.pk/cdn/shop/files/sabah-formal-for-ladies.webp?v=1710754994&width=600' description='Formal Green' price='87$' strikethrough='115$' />
        <Card image='https://jeem.pk/cdn/shop/files/10-7d022c5-fpl---fashion-pakistan-lounge.jpg?v=1718017825&width=1000' description='Teal block Print' price='100$' strikethrough='130$' />
      </div>
    </div>
  )
}

export default Women
