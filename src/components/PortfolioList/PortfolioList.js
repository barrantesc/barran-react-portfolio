import React from 'react'
import "./portfolioList.css"
import Portfolio from "../Portfolio/Portfolio.js"
import { portfolio } from '../../data'

const PortfolioList = () => {
  return (
    <section className='pl'>PortfolioList
      <div className='pl-texts'>
        <h1 className='pl-title'> Create & inspire.</h1>
        <p className='pl-desc'> Write description about portfolio</p>
      </div>
      <div className='pl-list'>
        {portfolio.map((item) => (
          <Portfolio key={item.id} img={item.img} link={item.link}/>
        ))}
        
      </div>
    </section>
  )
}

export default PortfolioList