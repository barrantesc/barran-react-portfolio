import React from 'react'
import "./portfolioList.css"
import Portfolio from "../Portfolio/Portfolio.jsx"
import { portfolio } from '../../data'

const PortfolioList = () => {
  return (
    <section id='portfolio' className='pl'>
      <div className='pl-texts'>
        <h1 className='pl-title'> Portfolio</h1>
        {/* <p className='pl-desc'> Write description about portfolio</p> */}
      </div>
      <div className='pl-list'>
        
        {portfolio.map((item) => (
          <Portfolio key={item.id} name={item.name} img={item.img} link={item.link}/>
        ))}
        
      </div>
    </section>
  )
}

export default PortfolioList