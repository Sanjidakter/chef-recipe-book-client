// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const UserDetail = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className="square border border-dark w-75 mx-auto mt-lg-5 p-5" style={{marginLeft:'20%',marginTop:'5%'}}>
            <h1>USer Details</h1>
            
                <h2>Name: {user.displayName}</h2>
                <h2>Email: {user.email}</h2>
                <img style={{width:'50%'}} src={user.photoURL} alt="" />
        </div>
    );
};

export default UserDetail;