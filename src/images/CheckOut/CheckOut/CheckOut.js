import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetail from '../../../hooks/useServiceDetail';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import axios from 'axios';
import { toast } from 'react-toastify';

const CheckOut = () => {
    const { serviceId } = useParams();
    const [service] = useServiceDetail(serviceId);
    const [user] = useAuthState(auth);

    // const [user, setUser] = useState({
    //     name: 'Akbar Ali',
    //     email: 'akbar@momo.com',
    //     address: 'Andheri Goli',
    //     phone: '01365447951'
    // });

    // const handleAddressChange = event => {
    //     console.log(event.target.value);
    //     const { address, ...rest } = user;
    //     const newAddress = event.target.value;
    //     const newUser = { address: newAddress, ...rest };
    //     console.log(newUser);
    //     setUser(newUser);
    // }

    const handlePlaceBook = event => {
        event.preventDefault();
        const order = {
            email: user.email,
            service: service.name,
            serviceId: serviceId,
            address: event.target.address.value,
            phone: event.target.phone.value
        }
        axios.post('http://localhost:5000/order', order)
            .then(response => {
                const { data } = response;
                if (data.insertedId) {
                    toast('Your order is Booked!!');
                    event.target.reset();
                }
            })
    }

    return (
        <div className='w-50 mx-auto'>
            <h2>Please Book: {service.name}</h2>
            <form onSubmit={handlePlaceBook}>
                <input className='w-100 mb-2' value={user?.displayName} type="text" name="name" placeholder='Name' required readOnly />
                <br />
                <input className='w-100 mb-2' value={user?.email} type="email" name="email" placeholder='Email' required readOnly />
                <br />
                <input className='w-100 mb-2' value={service.name} type="text" name="service" placeholder='Service' required readOnly />
                <br />
                <input className='w-100 mb-2' type="text" name="address" placeholder='Address' required />
                <br />
                <input className='w-100 mb-2' type="text" name="phone" placeholder='Phone' required />
                <br />
                <input className='btn btn-primary' type="submit" value="Place Book" />
            </form>
        </div>
    );
};

export default CheckOut;