import { createBrowserRouter } from "react-router-dom";
import Layouts from "../Components/Layouts/Layouts";
import Error from "../Components/Error/Error";
import Home from "../Components/Home/Home";
import Addscheduke from "../Components/Add Schedule/Addscheduke";
import Allschedule from "../Components/AllSchedule/Allschedule";
import Signout from "../Components/Signout/Signout";
import Updateschedule from "../Components/Updateschedule/Updateschedule";

const router=createBrowserRouter([
   {
    path:'/',
    element:<Layouts></Layouts>,
    errorElement:<Error></Error>,
    children:[
        {
      path:"/",
      element:<Home></Home>
        },
        {
            path:"/addschedule",
            element:<Addscheduke></Addscheduke> 
        },
        {
            path:'/allschedule',
            element:<Allschedule></Allschedule>,
            loader:()=>fetch('http://localhost:5000/schedules')
        },
        {
            path:'/signout',
            element:<Signout></Signout>
        },
        {
            path:"/updateschedule/:id",
            element:<Updateschedule></Updateschedule>,
            loader:({params})=>fetch(`http://localhost:5000/schedules/${params.id}`)
        }
    ]
   }
])
export default router;