import React from 'react'
import data from '../../JSONData/Tablelist.json'
const Tablelist = () => {
  return (
    <div className='container'>
        <h2 className='heading'>Sprint Table List</h2>
       <table className='table' >
        <div className='table-head'>
            <tr>
            <th className='table-row'>Sprint Name</th>
            <th className='table-row'>Status</th>
            <th className='table-row'>Start Date</th>
            <th className='table-row'>End Date</th>
            <th className='table-row'>Completed Date</th>
            </tr>
            </div>
            {data.map((each)=>{
                return(
                    <div className='table-data'>
                    <tr>
                <td className='table-rows1'>{each.name}</td>
                <td className='table-rows'>{each.status}</td>
                <td className='table-rows'>{each.startdate}</td>
                <td className='table-rows'>{each.enddate}</td>
                <td className='table-rows'>{each.completeddate}</td>
                </tr>
                </div>
                )
            })}
        </table>
      </div>
  )
}

export default Tablelist
