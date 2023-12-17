import React from 'react'
import carddata from '../../JSONData/carddata.json'
const Carddata = () => {
  return (
    <div className='card-data-container'>
        <h2 className='heading'>Card Data UI</h2>
        {carddata.map((each)=>{
            return(
                <div className='card-data'>
      <h4>{each.Name}</h4>
      <h1>{each.number}</h1>
      <p>{each.date}</p>
      <h2>{each.percentage}</h2>
                </div>
            )
        })}
    </div>
  )
}

export default Carddata
