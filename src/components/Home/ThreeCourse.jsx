import FrontEndImg from "../../assets/images/courseImges/1_i3laWIzy2jaemiCURVPrMg.jpg"
import BackEndImg from "../../assets/images/courseImges/backend_developer_roles_and_responsibilities-optimized.webp"
import FullStackImg from "../../assets/images/courseImges/full-stack.webp"
import { Link } from "react-router-dom"

function ThreeCourse() {
  return (
    <div className="w-full mt-[100px]">
        <div className="md:w-[80%] w-[90%] grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mx-auto mb-[50px]">
            <div className="md:h-[450px] shadow-2xl rounded-[10px] overflow-hidden">
                <img src={FrontEndImg} alt="" className="w-full h-[225px]" />
                <h1 className="text-[30px] font-bold w-full text-center py-5">Frontend Development</h1>
                <p className="px-[15px] text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <Link to={"/courses"}>
                <div className="w-full flex justify-center md:mt-[35px] my-5">
                <button className="w-[95%] py-2 bg-gradient-to-br from-violet-800 to-rose-800 text-white rounded-[20px]">see more</button>
                </div>
                </Link>
            </div>
            <div className="md:h-[450px] shadow-2xl rounded-[10px] overflow-hidden">
                <img src={BackEndImg} alt="" className="w-full h-[225px]" />
                <h1 className="text-[30px] font-bold w-full text-center py-5">Backend Development</h1>
                <p className="px-[15px] text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <Link to={"/courses"}>
                <div className="w-full flex justify-center md:mt-[35px] my-5">
                <button className="w-[95%] py-2 bg-gradient-to-br from-violet-800 to-rose-800 text-white rounded-[20px]">see more</button>
                </div>
                </Link>
            </div>
            <div className="md:h-[450px] shadow-2xl rounded-[10px] overflow-hidden">
                <img src={FullStackImg} alt="" className="w-full h-[225px]" />
                <h1 className="text-[30px] font-bold w-full text-center py-5">Full Stack Development</h1>
                <p className="px-[15px] text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <Link to={"/courses"}>
                <div className="w-full flex justify-center md:mt-[35px] my-5">
                <button className="w-[95%] py-2 bg-gradient-to-br from-violet-800 to-rose-800 text-white rounded-[20px]">see more</button>
                </div>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default ThreeCourse