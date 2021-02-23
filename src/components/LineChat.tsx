import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, Tooltip, Legend, YAxis } from 'recharts';

export interface Sample01 {
    name: string,
    date: string,
    uv: number,
    pv: number,
    amt: number
} 

export interface data {
    data: Array<Sample01>
}

export default class Example extends React.Component<data> {
    
    render() {
        return (
            <LineChart
              width={500}
              height={300}
              data={this.props.data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
        );
    }
}
