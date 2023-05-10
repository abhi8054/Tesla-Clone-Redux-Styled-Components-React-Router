import React from 'react'
import Section from './Section'
import Header from './Header'

function Home() {
  return (
    <div>
        <Header />
        <Section 
            title="Model S"
            desc="Order Online for Touchless Delivery"
            leftbtn="Custom Order"
            rightbtn="Existing Inventory"
            backimg="model-s.jpg"
        />
         <Section 
            title="Model Y"
            desc="Order Online for Touchless Delivery"
            leftbtn="Custom Order"
            rightbtn="Existing Inventory"
            backimg="model-y.jpg"
        />
        <Section 
            title="Model 3"
            desc="Order Online for Touchless Delivery"
            leftbtn="Custom Order"
            rightbtn="Existing Inventory"
            backimg="model-3.jpg"
        />
        <Section 
            title="Model X"
            desc="Order Online for Touchless Delivery"
            leftbtn="Custom Order"
            rightbtn="Existing Inventory"
            backimg="model-x.jpg"
        />
        <Section 
            title="Lowest Cost Solar Panels in America"
            desc="Money-Back guarantee"
            leftbtn="Order Now"
            rightbtn="Learn More"
            backimg="solar-panel.jpg"
        />
        <Section 
             title="Solar for New Roofs"
             desc="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
             leftbtn="Order Now"
             rightbtn="Learn More"
             backimg="solar-roof.jpg"
        />
        <Section 
             title="Accessories"
             leftbtn="Order Now"
             backimg="accessories.jpg"
        />
    </div>
  )
}

export default Home