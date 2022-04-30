import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const Order = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    useEffect(() => {

        const getOrders = async () => {
            const email = user?.email;
            const url = `https://glacial-shelf-63460.herokuapp.com/order?email=${email}`;
            try {
                const { data } = await axios.get(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                setOrders(data);
            }
            catch (error) {
                console.log(error.message);
            }
        }

        getOrders();
    }, [user]);

    return (
        <div className='w-50 mx-auto'>
            <h2>Your Orders: {orders.length}</h2>
            {
                orders.map(order => <div key={order._id}>
                    <p>{order.email} : {order.service}</p>
                </div>)
            }
        </div>
    );
};

export default Order;