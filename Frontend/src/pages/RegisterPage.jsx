import Navbar from "../component/navbar";
import educator from "../assets/img/educator.png";
import admin from "../assets/img/admin.png";
import curriculumDev from "../assets/img/curri.png";

const RegisterPage = () => {
  return (
    <div className="flex">
      <Navbar />
      <section className="mt-48 w-full flex justify-center  ">
        <div className="flex flex-col justify-center items-center border-2   border-gray-200 m-6 p-4 h-[500px] ">
          <h1 className="font-bold text-2xl mb-4 ">Register As</h1>
          <div className="flex">
            <div className="h-64 w-64 border-2 border-gray-200   rounded-xl p-4 m-4 hover:ring-4 ">
              <img className="h-48 " src={curriculumDev} />
              <p className="text-center">Curriculum Developer</p>
            </div>
            <div className=" h-64 w-64 border-2 border-gray-200  rounded-xl p-4 m-4 hover:ring-4">
              <img src={admin} className="h-48 " />
              <p className="text-center">Administrator</p>
            </div>
            <div className="h-64 w-64 border-2 border-gray-200   rounded-xl p-4   m-4 hover:ring-4">
              <img src={educator} className="h-48 " />
              <p className="text-center">Educator</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default RegisterPage;
