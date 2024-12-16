import React, {useEffect,useState,Component } from 'react'
import { MdOutlineSegment } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
import "./Navbar.css"
import SideNav from './Sidenav';
function Navbar(){

    const[sideToggle,setSideToggle] = useState(false);

    const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

    // Update viewport width when the window is resized
    useEffect(() => {
      const handleResize = () => {
        setViewportWidth(window.innerWidth);
      };
  
      // Add event listener to handle window resize
      window.addEventListener('resize', handleResize);
  
      // Cleanup the event listener on component unmount
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);


    const [isToggled, setIsToggled] = useState(false);

    useEffect(() => {
        const intervalId = setInterval(() => {
          setIsToggled(prevState => !prevState); // Toggle state
        }, 5000); // 3000ms = 3 seconds
    
        return () => clearInterval(intervalId);
      }, []);
    

   

    return (

        <div className='nav-container'>

            <SideNav/>
            <div className="navbar-1">
                <div className="search-bar">
                    <input type="text" placeholder="Search..." />
                </div>
                <div className="icons">
                    <a href="#" className="icon cart-icon"><FaCartShopping /></a>

                    {
                        viewportWidth < 768 ? 
                        <>
                        
                        </>
                        :
                        <>
                        <a href="#" className="icon login-icon"><FaUserCircle /></a>
                        </>
                    }
                </div>
            </div>
            <div className='navbar-2'>
                <div className='left-part'>
                    <div className='left-part-1'>THRIFT TREASURES</div>
                    <div className='left-part-2'>
                    {
                        viewportWidth < 768 ? 
                        <>
                        <MdOutlineSegment onClick={()=>{
                            setSideToggle(true);
                        }} />
                        </>
                        :
                        <>
                        <div>Shop</div>
                        <div>About</div>
                        <div>FAQ</div>
                        <div>Contact</div>
                        </>
                    }    
                    </div>
                </div>
                <div className='right-part'>
                {isToggled ? "contact at 101" : "hello@gamil"}
                </div>
            </div>
        </div>
            

    )
}
export default Navbar;