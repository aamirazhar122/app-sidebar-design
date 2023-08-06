
"use client"

import { BsArrowLeftShort, BsSearch , BsChevronDown, BsFillImageFill, BsPerson, BsReverseLayoutSidebarReverse } from "react-icons/bs";
import { AiFillEnvironment, AiOutlineBarChart, AiOutlineFileText, AiOutlineLogout, AiOutlineMail, AiOutlineSetting } from "react-icons/ai";
import { RiDashboardFill } from "react-icons/ri";
import {useState} from "react";
export default function Home() {

const [open, setOpen]=useState(true)
const [submenuopen, setSubmenuOpen]=useState(false)
const Menus=[
  {title:"Dashboard"},
  {title:"Pages" , icon:<AiOutlineFileText/>},
  {title:"Media", spacing:true, icon: <BsFillImageFill/>},
{
  title:"Projects",
  icon:<BsReverseLayoutSidebarReverse/>,
  submenu:true,
  submenuitems:
  [
{title:"Project 1"},
{title:"Project 2"},
{title:"Project 3"}
  ],
},
{title:"Analytics" ,icon:<AiOutlineBarChart/>},
{title:"Inbox" ,icon:<AiOutlineMail/>},
{title:"Profile" ,spacing:true, icon: <BsPerson/>},
{title:"Setting", icon:<AiOutlineSetting/>},
{title:"Logout",icon: <AiOutlineLogout/>}

];

  return (
    <div className='flex'>
      <div className={`bg-purple-900 h-screen ${
        open ? "w-72":"w-20"} p-5 pt-8 duration-300 relative`}>

      <BsArrowLeftShort  className={`bg-white text-3xl ${(!open) && 
      "rotate-180"}
       text-purple-900 rounded-full absolute -right-3 
       top-9 border border-purple-900  cursor-pointer`} 

       onClick={()=> setOpen (!open)}
       />
     
     <div className='inline-flex '>
     <AiFillEnvironment className={`text-4xl bg-amber-500 block float-left
     rounded mr-2 duration-500 ${open && "rotate-[360deg]"}`}/>
       <h1 className={`text-white flex items-center 
       duration-300 ${(!open) && "scale-0"} 
      font-medium text-2xl origin-left `}>Tailwind</h1>
     </div>
     <div className={`flex items-center bg-[rgba(255,255,255,0.18)] 
      rounded-md  mt-6 ${!open ? "px-2.5": "px-4"} py-2`}>

      <BsSearch className={`text-white text-lg block 
      float-left cursor-pointer ${open && "mr-2"} `}/>

      <input type={"search"} placeholder="search"  
      className={`text-base text-white bg-transparent w-full 
      focus:outline-none ${!open && "hidden"} `} />
     </div>
    <ul className="pt-2  ">
{Menus.map((menu, index)=>(
  <>
<li key={index} className={`text-sm text-gray-300 flex items-center 
cursor-pointer gap-x-4 hover:bg-[rgba(255,255,255,0.18)] 
 p-2 rounded-md mt-2 ${menu.spacing? "mt-9":"mt-2" } `}
>
  <span className={`text-2xl block float-left `}>
{menu.icon ? menu.icon :
  <RiDashboardFill/>}
  </span>
<span className={`text-base font-medium flex-1 duration-200  
${!open && "hidden"} `}
>
  {menu.title}
</span>
{menu.submenu && open && ( 
  <BsChevronDown className= {`${submenuopen && "rotate-180"}`} 
  onClick={()=> 
    {setSubmenuOpen (!submenuopen)} }/>
)}
</li>
{menu.submenu && submenuopen && open && (
  <ul>
    {menu.submenuitems.map((submenuitems, index)=>(
      <li key={index} className={`text-sm text-gray-300 flex items-center 
      cursor-pointer gap-x-4 px-5 hover:bg-[rgba(255,255,255,0.18)] 
       p-2 rounded-md mt-2 `}
      >
{submenuitems.title}
      </li>
    ))}
  </ul>
)}
</>
))}
</ul>
     </div>

      <div className='p-7'>
      <h1 className='text-2xl font-semibold'>Home Page</h1>
      </div>
      

    </div>





    )
}
