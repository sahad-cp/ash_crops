import { Parallax } from "react-parallax";
import HeaderBackground from "../../assets/bg_img/courses_img.jpg";
import { motion } from "framer-motion";

function CourseHeader() {
  return (
    <div className="w-full h-auto pb-10">
      <div className="w-full h-[500px] md:h-[700px] rounded-br-[150px] overflow-hidden ">
        <Parallax strength={400} speed={-10} bgImage={HeaderBackground}>
          <div className="w-full h-[500px] md:h-[700px] bg-black bg-opacity-40 pt-[60px]">
            <div className="h-full w-[90%] md:w-[80%] mx-auto flex md:items-center">
              <motion.div
                initial={{ opacity: 0, x: "-100%" }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <div className="mb-10">
                  <h1 className="font-bold text-5xl md:text-7xl text-white">
                    All Courses
                  </h1>
                </div>
                <div className="mb-10 max-w-[600px]">
                  <p className="text-white">
                  Unlock Your Potential: Explore Comprehensive Online Courses
                    Tailored for Success in Today's Dynamic Industries. Elevate
                    Your Skills and Career with Our Cutting-Edge Learning
                    Experience
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </Parallax>
      </div>
    </div>
  );
}

export default CourseHeader;
