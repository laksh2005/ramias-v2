import { MAIN_PIC } from '../../utils/constants';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';


const MainContainer = () => {

  return (
    <div className="relative h-screen w-full flex items-center justify-center bg-cover bg-center overflow-show">
      <button className="left-28 bottom-60 absolute z-[10] bot-button bg-gradient-to-r from-yellow-500 to-orange-500 hover:bg-gradient-to-l from-custom1 to-custom2 flex space-x-4 text-custom2 text-2xl font-bold py-4 px-8 rounded-full mt-3 transition duration-300 ease-in-out hover:bg-black hover:text-white hover:border-white border border-transparent">
        <Link to="/courses" className="flex items-center justify-center space-x-2"><span>Discover Courses</span></Link>
        <ArrowRight className="w-6 h-6 text-white" />
      </button>
  
      <img
        className="object-cover h-full w-full -mt-[350px] z-[0]"
        alt="mainpic"
        src={MAIN_PIC}
      />

    </div>
  
    )
}

export default MainContainer