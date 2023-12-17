import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';
import data from '../../JSONData/barchart.json'
const Barchart = () => {
  return (
    <div>
      <h2 className='heading'>Sprint Bar Chart</h2>
    <ResponsiveContainer width="90%" height={800}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" label={{
              value: "Sprints",
              position: "insideBottomRight",
              dy: 20,
            }} />
        <YAxis domain={[0,200]}  label={{
              value: "Starypoint (SP)",
              position: "insideLeft",
              angle: -90,
              dy: -10,
            }} />
        <Tooltip cursor={{ fill: "transparent" }}/>
        <Legend />
        <Bar dataKey="SPPlanned"  fill="#a9acac" name="SPPlanned" stackId="a"  barSize={25} radius={[0, 0, 0, 0]}/>
        <Bar dataKey="SPAdded"  fill='rgb(136, 140, 140)' name="SPAdded"   barSize={25}radius={[10, 10, 0, 0]}/>
        <Bar dataKey="SPCompleted" name="SPCompleted" fill="#616666" stackId="a"radius={[10, 10, 0, 0]} />
        <Bar dataKey="SPForcecast" name="SPForcecast" fill='rgb(211, 215, 215)' stackId="a" radius={[10, 10, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
    </div>
  )
}

export default Barchart
