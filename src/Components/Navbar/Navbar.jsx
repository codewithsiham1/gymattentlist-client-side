import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='flex py-3'>
            <div className='flex mx-auto space-x-3 text-xl font-bold'>
                 <NavLink className={({isActive})=>isActive?"text-white  border-2 bg-orange-300":"text-black"} to='/'>Home</NavLink>
                 <NavLink className={({isActive})=>isActive?"text-white  border-2 bg-orange-300":"text-black"} to="/addschedule">Add Schedule</NavLink>
                 <NavLink className={({isActive})=>isActive?"text-white  border-2 bg-orange-300":"text-black"} to="/allschedule">All Schedule</NavLink>
                 <NavLink className={({isActive})=>isActive?"text-white  border-2 bg-orange-300":"text-black"} to="/signout">SignOut</NavLink>
            </div>

        </div>
    );
};

export default Navbar;