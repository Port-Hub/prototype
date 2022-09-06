import Pg1img1 from "../../assets/beautician/Beautician_1.jpg";
import Pg1img2 from "../../assets/beautician/Parlour_Infra_1.jpg";
import Pg1img3 from "../../assets/beautician/Parlour_Infra.jpg";
import Pg1img4 from "../../assets/beautician/Parlour_Infra_2.jpg";
import Pg1img5 from "../../assets/beautician/Parlour_Infra_3.jpg";
import Pg2img1 from "../../assets/beautician/Beauty_Therapy.jpg";
import Pg3img1 from "../../assets/beautician/Aroma_Therapy.jpg";
import Pg4img1 from "../../assets/beautician/Beautician.jpg";
import Pg5img1 from "../../assets/beautician/Beautician_2.jpg";
import Pg6img1 from "../../assets/beautician/Beautician_3.jpg";
import Pg7img1 from "../../assets/beautician/Makeup_Style.jpg";
import Pg8img1 from "../../assets/beautician/Mehandi_Style.jpg";
import Drawer from "../../components/Drawer/Drawer";
import { Carousel } from "flowbite-react";
const Beautician = () => {
  return (
    <div>
      <Drawer
        buttontext={"Explore The courses"}
        buttonattributes={"text-centre px-10 pt-10"}
      />
      <div className="flex flex-col">
      <div>
        <h1 className="mb-8 text-4xl font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight pt-10">
          <span>Best</span>{" "}
          <span className="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-green-400 to-purple-500 lg:inline">
            Training Institute
          </span>{" "}
          <span>for Beautician Courses</span>
        </h1>

        <div className="prose-lg">
          <br />
          A thing of Beauty is a Joy Forever. True to its sense, looking at
          beautiful things always gives pleasure or joy to everyone. Every
          person in this world is attracted to beauty and want to look
          beautiful. There has been an increased awareness about beauty and
          grooming in the past years as more and more people have started to go
          to Beauty Parlours & Spas to enhance their appearance
          <br />
          
          <br />
          <div >
          The Art of Beauty & Cosmetology has helped many ordinary women to
          become beautiful and thereby boosting their confidence and career. In
          recent years there has been an increase in the number of beauty
          parlour all over the country. This created a demand for beauticians
          who have completed any Beauty parlour courses, Cosmetology courses,
          Beauty Therapist courses, or Hair and Beauty courses from a reputed
          Institute for Beautician courses

          <br />
          </div>
          <br />
          There are many parlours offering Beautician courses in South India.
          But they are more of practical in nature and are not professional in
          training. NCFT Heights is the only institute offering Beautician
          courses in Tamil Nadu, karnataka & kerala at affordable fees for all
          segments of people. NCFT Heights is the best Training Centre for
          Beautician Courses with well trained faculty and up to date study
          materials. At NCFT Heights we offer different beauty related courses
          like Certificate Courses for Bridal Make up , Cosmetology Courses,
          Beauty care Courses, Beauty Short term Courses , Beauty Therapist
          Courses , and Hair & Beauty Courses . By completing any of these
          courses one can either take up a job with a reputed beauty salon and
          spa or Start their own Beautician institute and provide employment to
          others. Being a Career in Beautician is a respectable profession with
          a very high earnings.
          <br />
        </div>
      </div>
      <div className="self-center h-56 sm:h-64 xl:h-160 2xl:h-96 w-56 sm:w-64 xl:w-160 2xl:w-96 rounded-1">
            <Carousel>
              <img src={Pg1img1} />
              <img src={Pg1img2} />
              <img src={Pg1img3} />
              <img src={Pg1img4} />
              <img src={Pg1img5} />
            </Carousel>
          </div>
    </div>
    </div>
  );
};

export default Beautician;