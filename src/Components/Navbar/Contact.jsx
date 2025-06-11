import React from 'react';

const Contact = () => {
    return (
        <div>
            <div className="hero  min-h-screen">
              <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">

                 <section class=" py-10 px-4 sm:px-8 lg:px-16">
                    <h2 class="text-3xl font-bold text-gray-800 mb-6 dark:text-white">Contact Information</h2>
                  
                    <div class="space-y-4 text-gray-700 text-lg">
                      <div class="flex items-center space-x-3">
                        <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" stroke-width="2"
                             viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round"
                                d="M16 12H8m8 0a4 4 0 10-8 0 4 4 0 008 0z" />
                        </svg>
                        <span className='dark:text-white'>Email: <a href="mailto:abdullahalnuman7610@gmail.com" class="text-blue-600 hover:underline">abdullahalnuman7610@gmail.com</a></span>
                      </div>
                  
                      <div class="flex items-center space-x-3">
                        <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" stroke-width="2"
                             viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round"
                                d="M3 5a2 2 0 012-2h1.28a2 2 0 011.92 1.44l.78 2.34a2 2 0 01-.45 2.07l-1.33 1.34a11.05 11.05 0 005.07 5.07l1.34-1.33a2 2 0 012.07-.45l2.34.78A2 2 0 0119 17.72V19a2 2 0 01-2 2H17a16 16 0 01-14-14V7a2 2 0 012-2z" />
                        </svg>
                        <span className='dark:text-white'>Phone: <a href="tel:+8801XXXXXXXXX" class="text-green-600 hover:underline">+8801757487348</a></span>
                      </div>
                  
                      <div class="flex items-center space-x-3">
                        <svg class="w-6 h-6 text-red-500" fill="none" stroke="currentColor" stroke-width="2"
                             viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round"
                                d="M17.657 16.657L13.414 12l4.243-4.243M6.343 7.343L10.586 12l-4.243 4.243" />
                        </svg>
                        <span className='dark:text-white'>Location: Dhaka, Bangladesh</span>
                      </div>
                    </div>
                  </section>

                </div>

                      
                <div className="card bg-base-100 dark:bg-gray-700 w-full max-w-sm shrink-0 shadow-2xl">
                  <div className="card-body">
                    <h2 className="text-2xl md:text-4xl font-bold text-center mb-4">Contact Us</h2>
                    <fieldset className="fieldset ">
                      <label className="label text-xl md:text-[20px]">Full Name</label>
                      <input type="text" name='name' className="input text-black dark:bg-gray-500 dark:text-white" placeholder="Full Name" />
                      <label className="label text-xl md:text-[20px]">Email</label>
                      <input type="email" className="input text-black dark:bg-gray-500 dark:text-white" placeholder="Email" />
                      <label className="label text-xl md:text-[20px]">Subject</label>
                      <input type="text" className="input text-black dark:bg-gray-500 dark:text-white" placeholder="Subject" />
                      <label className="label text-xl md:text-[20px]">Message</label>
                      <textarea className="textarea text-black dark:bg-gray-500 dark:text-white" placeholder="Message"></textarea>
                      
                      <button className="btn btn-primary mt-4">Login</button>
                    </fieldset>
                  </div>
                </div>
              </div>
        </div>
            
        </div>
    );
};

export default Contact;