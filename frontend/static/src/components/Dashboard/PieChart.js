
import { width } from '@mui/system';
import React, { PureComponent } from 'react';
import { PieChart, Pie, Tooltip, Cell, Legend } from 'recharts';


function Piechart() {
    const COLORS = ["#8884d8", "#82ca9d", "#FFBB28", "#FF8042", "#AF19FF"];
    const pieData = [
       {
          name: "Tiara",
          value: 54.85
       },
       {
          name: "Bill",
          value: 47.91
       },
       {
          name: "Bubba",
          value: 16.85
       },
       {
          name: "Duke",
          value: 16.14
       },
       {
          name: "Amy",
          value: 10.25
       }
    ];
    const CustomTooltip = ({ active, payload, label }) => {
        if (active) {
           return (
           <div
              className="custom-tooltip"
              style={{
                 backgroundColor: "#ffff",
                 padding: "5px",
                 border: "1px solid #cccc"
              }}
           >
              <label>{`${payload[0].name} : ${payload[0].value}%`}</label>
           </div>
        );
     }
     return null;
  };
      return (
        <PieChart width={650} height={750}>
      <Pie
         data={pieData}
         color="#000000"
         dataKey="value"
         nameKey="name"
         cx="50%"
         cy="50%"
         outerRadius={300}
         fill="#8884d8"
      >
         {pieData.map((entry, index) => (
            <Cell
               key={`cell-${index}`}
               fill={COLORS[index % COLORS.length]}
            />
         ))}
      </Pie>
      <Tooltip content={<CustomTooltip />} />
      <Legend />
      </PieChart>
      );
    
      
}

export default Piechart;