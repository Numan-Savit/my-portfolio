import { Link } from 'react-router-dom';

import { MdOutlineDarkMode } from "react-icons/md";

import { MdOutlineLightMode } from "react-icons/md";
import { useState } from 'react';
import { useDarkMode } from '../ContextApi/ThemeContext';

import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
const Navbar = () => {

   
    const [isOpen, setIsOpen] = useState(false);
    
    const {darkMode, setDarkMode} = useDarkMode();

    
    
    const navlink = <>

       <li className='text-20 lg:text-2xl'><Link to={'/'}>Home</Link></li>
       <li className='text-20 lg:text-2xl'><Link to={'/hire'}>About Me</Link></li>
       <li className='text-20 lg:text-2xl'><Link to={'/hire'}>Projects</Link></li>
       <li className='text-20 lg:text-2xl'><Link to={'/contact'}>Contact</Link></li>

       <button className="btn btn-primary lg:hidden  lg:text-3xl text-20 p-5" onClick={()=>document.getElementById('my_modal_3').showModal()}>
          Hire Me
       </button>
     
       
    </>


     const handleSendRequest = (e) => {
        e.preventDefault();
  
          emailjs.sendForm(
            'service_4howqnb',     // Replace with actual ID
            'template_vw6u49l',    // Replace with actual ID
            e.target,
            '_D3jiBSkNfkwUbtDa'      // Replace with actual key
          ).then((result) => {
            console.log(result.text);
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Message Sent Successfully",
              showConfirmButton: false,
              timer: 1500
            });
          }, (error) => {
            console.log(error.text);
            alert('Failed to send message.');
          });
        
          e.target.reset(); // Clear form after sending
       };


    return (
        <div className='sticky top-0 w-full'>

            <div className="navbar dark:bg-gray-900 dark:text-white bg-base-100 "> 
              <div className="navbar-start relative h-20">
                <div className="">
                  <div tabIndex={0} onClick={() => setIsOpen(!isOpen)} role="button"
                   className="btn btn-ghost lg:hidden"
                  
                   >
                   
                     {isOpen ? (
                         // X Cross Icon
                         <svg xmlns="http://www.w3.org/2000/svg"
                             className="h-6 w-6" fill="none"
                             viewBox="0 0 24 24" stroke="currentColor">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                 d="M6 18L18 6M6 6l12 12" />
                         </svg>
                        ) : (
                         // menu Hamburger Icon
                         <svg xmlns="http://www.w3.org/2000/svg"
                             className="h-6 w-6" fill="none"
                             viewBox="0 0 24 24" stroke="currentColor">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                 d="M4 6h16M4 12h16M4 18h16" />
                         </svg>
                       )}
                  </div> 
               
                  

                </div>
               <h2 className='text-[15px] md:text-3xl [text-shadow:_7px_5px_8px_#838383] ml-2 md:ml-0  font-bold dark:text-white text-blue-600 shadow-blue-700'><span className='text-blue-400 text-4xl dark:text-white '>A</span>bdullah Al Numan</h2>
               
              </div>
              <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 dark:bg-gray-900">
                  {navlink}
                </ul>
              </div>
              <div className="navbar-end">
                
                 <button className="btn btn-primary lg:flex hidden lg:text-xl p-5" onClick={()=>document.getElementById('my_modal_3').showModal()}>Hire Me</button>

                <button onClick={() => setDarkMode(!darkMode)} className='btn ml-4 lg:text-3xl p-5'>
                  {darkMode ? <MdOutlineLightMode /> : <MdOutlineDarkMode className='text-3xl'></MdOutlineDarkMode>}
                </button>
               
              </div>
            </div>

            {isOpen && (
               <ul className="menu bg-base-100 p-4 space-y-2 shadow lg:hidden dark:bg-gray-900">
                 {navlink}
               </ul>
            )}

            {/* MODAL should be here, always in DOM */}
            <dialog id="my_modal_3" className="modal modal-bottom sm:modal-middle">
              <div className="modal-box w-full max-w-3xl h-[600px]  relative dark:bg-gray-800 dark:text-white">
                <form onSubmit={handleSendRequest} className='' method="dialog">
                  {/* <button className="btn btn-sm text-2xl p-2 btn-circle btn-ghost absolute right-2 top-2">✕</button> */}
                  <h3 className="font-bold text-xl mt-4 lg:mt-0 md:text-2xl mb-5">What project are you looking for?</h3>
                  <label className="label">Name</label><br />
                  <input type="name" name="name" className="input w-full h-15 dark:bg-gray-600" placeholder="Name" /><br /><br />
                  <label className="label">Email</label><br />
                  <input type="email" name="email" className="input w-full h-15 dark:bg-gray-600" placeholder="Email" /><br /><br />

                  <label className="label">Project Type</label>
                  <select name="projectType" className="select select-bordered w-full dark:bg-gray-600">
                    <option value="web">Web Application</option>
                    <option value="web">Mobile Application</option>
                    <option value="mobile">UI/UX Design</option>
                    <option value="ecommerce">E-commerce Website</option>
                    <option value="custom">Custom Project</option>
                    <option value="custom">Branding</option>
                  </select><br /><br />

                  <textarea name="message" className="textarea h-44 w-full dark:bg-gray-600" placeholder="Project Description"></textarea>
                  
                  <button className="btn btn-primary mt-4">Send Request</button>
                </form>

                <form method="dialog">
                  <button className="btn btn-sm text-2xl p-2 btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
              </div>
            </dialog>

           
        </div>
    );
};

export default Navbar;




