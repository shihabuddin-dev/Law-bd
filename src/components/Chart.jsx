import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell
} from 'recharts';

// Triangle Bar Shape
const getPath = (x, y, width, height) => (
  `M${x},${y + height}
   C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2},${y}
   C${x + width / 2},${y + height / 3} ${x + 2 * width / 3},${y + height} ${x + width},${y + height}
   Z`
);

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;
  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const Chart = ({ appointList }) => {
  const colors = ['#007bff', '#fbbc05', '#00c49f', '#ff6f61', '#8e44ad', '#e74c3c'];

  // Prepare chart data with fill colors
  const singleAppoint = appointList.map((appoint, index) => ({
    name: appoint.name,
    fees: appoint.fees,
    fill: colors[index % colors.length],
  }));

  return (
    <div className="mt-6 mx-auto w-full">
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={singleAppoint}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="fees" shape={<TriangleBar />}>
            {singleAppoint.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.fill} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
