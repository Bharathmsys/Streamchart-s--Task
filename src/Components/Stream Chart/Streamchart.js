import React from 'react'
import {ResponsiveContainer,XAxis,YAxis,CartesianGrid,Tooltip,Legend,AreaChart,Area,} from "recharts";
import data from '../../JSONData/streamchart.json'
const Streamchart = () => {
  return (
    <div className='main-container'>
      <h2 className='heading'>Streamed Area Chart</h2>
      <h6 className='title'>Total lead Time: 35 days(Avg)    Total cycle Time: 33 days(Avg)</h6>
      <ResponsiveContainer width="90%" height={500}>
        <AreaChart width={1000} height={500} data={data}>
          <CartesianGrid strokeDasharray="3 3"></CartesianGrid>
          <XAxis
            type="category"
            dataKey="month"
            label={{
              value: "Hours in avg",
              position: "insideBottomRight",
              dy: 15,
            }}
          ></XAxis>
          <YAxis
            type="number"
            domain={[0, 60]}
            label={{
              value: "Story Point (Days)",
              position: "insideLeft",
              angle: -90,
              dy: -10,
            }}
          ></YAxis>
          <Tooltip> </Tooltip>
          <Legend></Legend>
          <Area
            type="bumpX"
            dataKey="IssueOpen"
            stroke="#535757"
            fill="#535757"
            legendType="circle"
            dot={false}
          />
          <Area
            type="bumpX"
            dataKey="IssueStarted"
            stroke="#bdc2c2"
            fill="#bdc2c2"
            legendType="circle"
            dot={false}
          />
          <Area
            type="bumpX"
            dataKey="IssueCompleted"
            stroke="#e0e6e6"
            fill="#e0e6e6"
            legendType="circle"
            dot={false}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Streamchart
