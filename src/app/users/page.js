"use client";
import React, { useEffect } from 'react';
import { mockUsers } from '@/constants';
import { CardUser } from '@/components';
import './App.css';

const Page = () => {
    useEffect(() => {
        console.log(usermap);
    }, []);

    const usermap = mockUsers.map((e) => `${e.name} ${e.age} ${e.email} ${e.address}`);

    const showCard = (name, email, age, address) => (
        <CardUser name={name} email={email} age={age} address={address} />
    );

    return (
        <div className='flex flex-wrap gap-4 justify-center align-middle mt-[150px]'>
            {mockUsers.map((user) => {
                return (
                    showCard(user.name, user.email, user.age, user.address)
                )
            }

            )}
        </div>
    );
};

export default Page;
