import React ,{useState,useEffect} from 'react'
import './Nav.css';

function Nav() {
    const[show,handleShow]=useState(false)

    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(window.scrollY>450)
            {
                handleShow(true)
            }
            else
            {
                handleShow(false)
            }
        })
    },[])
    console.log(show);

    return (
        <div className={`nav ${show && "nav_black"}`} >
            <img
                className='logo'
                src="https://www.techdaily.com.au/b2/wp-content/uploads/2015/03/Netflix_Logo_Print_FourColorCMYK.png"
                />
        </div>
    )
}

export default Nav

