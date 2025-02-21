import React from 'react';
import Swal from 'sweetalert2';

const Addscheduke = () => {
    const handlegym=event=>{
        event.preventDefault();
         const form=event.target;
         const title=form.title.value;
         const date=form.date.value;
         const day=form.day.value;
         const time=form.time.value;
         const newgymuser={title,date,day,time}
         console.log(newgymuser)
         fetch('http://localhost:5000/schedules',{
          method:"POST",
          headers:{
            'content-type':'application/json'
          },
          body:JSON.stringify(newgymuser)
         })
         .then(res=>res.json())
         .then(data=>{
            
            if(data.insertedId){
                Swal.fire({
                    title: 'success!',
                    text: 'Successfullay Added',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
         })
    }
    return (
        <div className='bg-base-200 px-14 py-24 space-y-4'>
          <h1 className='text-xl font-bold text-black flex text-center justify-center'>Add Gym Schedule</h1>
          <form onSubmit={handlegym} className='space-y-4' action="">
            <div className='flex flex-row gap-4'>
                <div className='flex flex-col gap-4 w-1/2'> 
                   <span>Title</span>
                   <input type="text" name='title' placeholder="Title" className="input input-bordered w-full" />
                </div>
                <div className='flex flex-col gap-4 w-1/2'> 
                   <span>Date</span>
                   <input type="date" name='date' placeholder="Date" className="input input-bordered w-full" />
                </div>
            </div>
            <div className='flex flex-row gap-4'>
                <div className='flex flex-col gap-4 w-1/2'> 
                   <span>Day</span>
                   <input type="day" name='day' placeholder="Day" className="input input-bordered w-full" />
                </div>
                <div className='flex flex-col gap-4 w-1/2'> 
                   <span>Time</span>
                   <input type="time" name='time' placeholder="Time" className="input input-bordered w-full" />
                </div>
            </div>
            <input className='btn bg-orange-400 w-full' value="Add Coffe" type="submit" />
          </form>
        </div>
    );
};

export default Addscheduke;