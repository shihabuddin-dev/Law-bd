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

// Custom curved spike shape
const CurvedSpike = (props) => {
    const { x, y, width, height, fill } = props;
    const centerX = x + width / 2;
    const bottomY = y + height;

    const path = `
    M${x},${bottomY}
    Q${centerX},${y} ${x + width},${bottomY}
    Z
  `;
    return <path d={path} fill={fill} />;
};

const Chart = ({ appointList }) => {
    const colors = ['#007bff', '#fbbc05', '#007bff', '#00c49f', '#fbbc05', '#ff6f61'];

    const singleAppoint = appointList.map((appoint, index) => ({
        name: appoint.name,
        fees: appoint.fees,
        fill: colors[index % colors.length],
    }));

    return (
        <div className='mt-6 mx-auto w-full'>
            <ResponsiveContainer width="100%" height={400}>
                <BarChart data={singleAppoint}>
                    <XAxis dataKey='name' />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey='fees' shape={<CurvedSpike />}>
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
