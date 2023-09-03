import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



const Phonebar = () => {
    const [phone, setPhone]=useState([]);
    useEffect(()=>{
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        // .then(res => res.json())
        // .then(data=> setPhone(data.data))
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data => {
            const lodedData = data.data.data;
            const phonedata = lodedData.map(phone =>{
                const parts =phone.slug.split('-')
                const price=parseInt(parts[1]);
                const phoneInfo = {
                    name: phone.phone_name,
                    price: price
                }
                return phoneInfo;
            })
            setPhone(phonedata)
        })
        
    },[])
    
    return (
        <div>
           
        <BarChart width={1500} height={300} data={phone}>
          <Bar dataKey="price" fill="#8884d8" />
          
          <XAxis dataKey="name"></XAxis>
          <YAxis></YAxis>
          <Tooltip></Tooltip>
        </BarChart>
        
        </div>
    );
};

export default Phonebar;