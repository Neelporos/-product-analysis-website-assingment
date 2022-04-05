import React from 'react';
import { Area, AreaChart, CartesianGrid, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {

    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ]

    return (
        <div className=' grid grid-cols-1 md:grid-cols-2 justify-items-center'>
            <LineChart width={400} height={250} data={data}>
                <Line type="monotone" dataKey="investment" stroke="#8884d8" />
                <Line type="monotone" dataKey="sell" stroke="#8884d8" />
                <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
                <Line type="monotone" dataKey="month" stroke="#00008B" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip></Tooltip>
            </LineChart>
            <AreaChart
                width={400}
                height={250}
                data={data}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="investment" stackId="1" stroke="#8884d8" fill="#8884d8" />
                <Area type="monotone" dataKey="sell" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                <Area type="monotone" dataKey="revenue" stackId="1" stroke="#ffc658" fill="#ffc658" />
                <Area type="monotone" dataKey="month" stackId="1" stroke="#00008B" fill="#ffc658" />
            </AreaChart>
            <PieChart width={400} height={400}>
                <Pie
                    dataKey="investment"
                    startAngle={180}
                    endAngle={0}
                    data={data}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    label
                />
                <Pie
                    dataKey="sell"
                    startAngle={180}
                    endAngle={0}
                    data={data}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    label
                />
                <Pie
                    dataKey="revenue"
                    startAngle={180}
                    endAngle={0}
                    data={data}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    label
                />
                <Pie
                    dataKey="month"
                    startAngle={180}
                    endAngle={0}
                    data={data}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    label
                />
                <Tooltip></Tooltip>
            </PieChart>
            <PieChart width={400} height={400}>
                <Pie data={data} dataKey="month" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
                <Pie data={data} dataKey="revenue" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
                <Pie data={data} dataKey="sell" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
                <Pie data={data} dataKey="investment" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#00008B" label />
                <Tooltip></Tooltip>
            </PieChart>
        </div>
    );
};

export default Dashboard;