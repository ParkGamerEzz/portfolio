"use client";
import axios from 'axios';

import React, { useEffect, useState } from 'react';
// import { mockUsers } from '@/constants';
import { CardUser } from '@/components';
import './App.css';

const Page = () => {
    const [mockUsers, setMockUsers] = useState([]);
    async function sendPostRequest(url, params) {
        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: params,
            });
    
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
    
            const jsonResponse = await response.json();
            return jsonResponse;
        } catch (error) {
            console.error('Error:', error);
        }
    }
    const getuser = async () => {
        try {
            const response = await axios.post('https://mas.acr.ac.th/mas.studentdb/route/routes.asp', {
                params: 'page_move=get-student-desc-by-idcode&param=17685&param=1',
            }, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            });
    
            const data = response.data;
            console.log(data);
            setMockUsers(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    useEffect(() => {
        getuser()
    }, []);

    useEffect(() => {
        console.log(mockUsers)
    }, [mockUsers]);

    // const usermap = mockUsers.map((e) => `${e.name} ${e.age} ${e.email} ${e.address}`);

    const showCard = (index, name, email, age, address) => (
        <CardUser key={index} name={name} email={email} age={age} address={address} />
    );

    return (
        <div className='flex flex-wrap gap-4 justify-center align-middle mt-[150px]'>




            {mockUsers.map((user, index) => {
                return (
                    showCard(index, user.name, user.email, user.username, user.address.city)
                )
            }

            )}
        </div>
    );
};

export default Page;
