import React from 'react'
import Card from './Card'

function App() {
  
  const obj = [
    { 
      heading : "Laptop",
      img : "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fHww",
      sub1 : "Best Laptop in the World",
      sub2: "With Amazing features",
      price1: 80000,
      price2: 70000
    },
    {
      heading : "Mobile",
      img : "https://images.unsplash.com/photo-1749716491521-af90e3b6feb6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGhvbmV8ZW58MHx8MHx8fDA%3Dw",
      sub1 : "Best Mobile in the World",
      sub2 : 'With Amazing Camera',
      price1: 50000,
      price2: 40000
    },
    {
      heading : "PS5",
      img : "https://images.unsplash.com/photo-1622297845775-5ff3fef71d13?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHM1fGVufDB8fDB8fHww",
      sub1 : "Best PS5 in the World",
      sub2 : 'With Amazing Games',
      price1: 40000,
      price2: 30000
    },
    {
      heading : "SmartWatch",
      img : "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c21hcnR3YXRjaHxlbnwwfHwwfHx8MA%3D%3D",
      sub1 : "Best Smartwatch in the World",
      sub2 : 'With Amazing Tech',
      price1: 15000,
      price2: 10000
    },


  ]
  return (
    <div>
      <h1 className='header'>Trending Products</h1>
    <div className='main'>
      <Card product={obj[0]}/>
      <Card product={obj[1]}/>
      <Card product={obj[2]}/>
      <Card product={obj[3]}/>
      
    </div>
    </div>
  )
}

export default App