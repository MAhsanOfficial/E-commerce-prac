import React from 'react'
import Card from '../Components/Card'

const Kids = () => {
  return (
    <div>
      <div className='main-banner'>
        <div className='flat-discount'>
          <div>
            <h1>Flat 50 % off</h1>
            <h3><span>12</span> Hours <span>20</span> Mints</h3>
          </div>
          <div className='image-kid'></div>
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "2rem", flexWrap: "wrap", marginTop: "2rem" }}>
        <Card image='https://wearochre.com/cdn/shop/products/0085_OBS51_2.jpg?v=1646741345&width=500' description='Denim Blue Shirt' price='60$' strikethrough='80$' />
        <Card image='https://wearochre.com/cdn/shop/files/Resize_0051_INDP-11_1.jpg?v=1722500919&width=900' description='Swiss Lawn Digital Printed 2 Pc Suit' price='70$' strikethrough='90$' />
        <Card image='https://wearochre.com/cdn/shop/products/0012_OBS69_2.jpg?v=1654588077&width=500' description='Chambray Cotton Shirt' price='65$' strikethrough='83$' />
        <Card image='https://wearochre.com/cdn/shop/files/Resize_0046_INDP-12_1.jpg?v=1722500864&width=900' description='Swiss Lawn Digital Printed 2 Pc Suit' price='67$' strikethrough='85$' />
        <Card image='https://wearochre.com/cdn/shop/files/Resize_0019_OBS-61NavyBlue_2.jpg?v=1722500109&width=900' description='Dotted Blue Cotton Shirt' price='60$' strikethrough='80$' />
        <Card image='https://wearochre.com/cdn/shop/files/Resize_0076_EM-40_4.jpg?v=1717411974&width=900' description='Chiffon Embroidered 3 Pc Suit' price='65$' strikethrough='87$' />
        <Card image='https://wearochre.com/cdn/shop/products/OCT27_0145_OBS44_1.jpg?v=1640001407' description='Cotton Shirt' price='62$' strikethrough='90$' />
        <Card image='https://wearochre.com/cdn/shop/products/obs-72a.png?v=1653135886&width=900' description='Half Sleeves Light Pink Cotton Shirt' price='62$' strikethrough='85$' />
      </div>
    </div>
  )
}

export default Kids
