import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div style={{display:"flex" ,gap:"20px" , padding:"20px" ,backgroundColor:"black" ,justifyContent:"space-between" ,color:"wheat"}}>
           <div style={{display:"flex" ,gap:"20px" , padding:"20px" ,backgroundColor:"black"  ,color:"wheat"}}>
             <Link  href={"/"}> Jith Stephen</Link>
            <Link  href={"/Projects"}> Projects</Link>
            <Link  href={"/"}> Experience</Link>
           </div>

           <div style={{display:"flex" ,gap:"20px" , padding:"10px" ,backgroundColor:"black"  ,color:"wheat"}}>

           <Image
             src={"https://avatars.githubusercontent.com/u/107480083?v=4"}
             alt="jith"
             width={50}
             height={50}
             style={{borderRadius:"50%"}}
           />
               
           </div>

           

            
        </div>
    );
};

export default Navbar;