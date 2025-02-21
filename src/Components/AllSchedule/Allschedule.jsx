import React, { useState } from 'react';
import { NavLink, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const Allschedule = () => {
    const shceduledata=useLoaderData()
    const [schedule,setschedule]=useState(shceduledata)
   const handledelte=(_id)=>{
   fetch(`http://localhost:5000/schedules/${_id}`,{
    method:"DELETE"
   })
   .then(res=>res.json())
   .then(data=>{
    console.log(data)
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        if(data.deletedCount>0){
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
          const updateschedule=schedule.filter((item)=>item._id!==_id)
          setschedule(updateschedule)
        }
      }
    });
   })
   }
    return (
        <div>
          <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Title</th>
        <th>Date</th>
        <th>Day</th>
        <th>Time</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
        {
            schedule.length===0?<p>No Data Found</p>:schedule.map((schedule,index)=> <tr key={schedule?._id}>
            <th>{index+1}</th>
            <td>{schedule.title}</td>
            <td>{schedule.date}</td>
            <td>{schedule.day}</td>
            <td>{schedule.time}</td>
            <td>
                <div className='flex flex-row gap-2'>
                    <button className='btn'>View</button>
                    <NavLink to={`/updateschedule/${schedule._id}`}>
                    <button className='btn'>Edit</button>
                    </NavLink>
                    <button onClick={()=>handledelte(schedule._id)} className='btn'>Delete</button>
                </div>
            </td>
          </tr>)
        }
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Allschedule;