import img2 from '../../assets/developer-dark.3f07bd13.svg';
import { IoArrowDownCircleSharp } from "react-icons/io5";
const HeroSection = () => {
    return (
        <div>

            <div className='  md:flex mx-auto justify-between  '>

                <div className='mt-10 md:mt-80 w-full md:w-1/2'>

                    <h2 className='text-2xl md:text-5xl dark:text-white text-gray-600 font-bold'>HI, I AM <br /> Abdullah Al Numan</h2>
                    <p className=' text-xl md:text-2xl mt-5'>A Full-Stack Developer & <br /> 
                       UI/UX Design Enthusiast
                    </p>

                    <button className="btn p-8 hover:bg-primary mt-10 shadow-xl">
                        <IoArrowDownCircleSharp className='text-3xl hover:text-white text-gray-400'></IoArrowDownCircleSharp>
                        <span className='text-xl md:text-2xl text-gray-600 hover:text-white'>Download CV</span>
                    </button>

                </div>


                <div className=''>
                    <img className='w-250 h-100 md:h-200' src={img2} alt="" />
                </div>
            </div>
            
        </div>
    );
};

export default HeroSection;