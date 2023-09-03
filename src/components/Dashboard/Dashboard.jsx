import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
    const marksArray = [
        {
          id: 1,
          name: "John Doe",
          math: 55,
          physics: 98,
          english: 62
        },
        {
          id: 2,
          name: "Jane Smith",
          math: 49,
          physics: 75,
          english: 38
        },
        {
          id: 3,
          name: "Bob Johnson",
          math: 78,
          physics: 75,
          english: 80
        },
        {
          id: 4,
          name: "Emily Davis",
          math: 62,
          physics: 76,
          english: 89
        },
        {
          id: 5,
          name: "Michael Brown",
          math: 85,
          physics: 39,
          english: 92
        },
        {
          id: 6,
          name: "Sarah Wilson",
          math: 67,
          physics: 58,
          english: 95
        },
        {
          id: 7,
          name: "David Clark",
          math: 90,
          physics: 82,
          english: 88
        },
        {
          id: 8,
          name: "Olivia Taylor",
          math: 44,
          physics: 91,
          english: 87
        },
        {
          id: 9,
          name: "William White",
          math: 88,
          physics: 77,
          english: 33
        },
        {
          id: 10,
          name: "Ava Martin",
          math: 91,
          physics: 45,
          english: 90
        }
      ];

    return (
        <div className='text-center'>
           
            <LineChart 
            width={1200}
            height={300}
            data={marksArray}
            >
                <Line type="monotone" dataKey="math" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="physics" stroke="#82ca9d" />
          <Line type="monotone" dataKey="english" stroke="#000" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
            </LineChart>
            
        </div>
    );
};

export default Dashboard;