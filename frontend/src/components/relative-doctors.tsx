import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/app-context";
import { useNavigate } from "react-router-dom";

function RelativeDoctors({
  docId,
  speciality,
}: {
  docId: string | undefined;
  speciality: string;
}) {
  const { doctors } = useContext(AppContext);

  const [relDoc, setRelDoc] = useState([]);
  const navigate = useNavigate();
  useEffect(()=>{
    if(doctors.length > 0 && speciality){
        const doctorsData = doctors.filter((doc:any)=> doc.speciality === speciality && doc._id !== docId);
        setRelDoc(doctorsData);
    }
  },[doctors, speciality, docId])
  return (
    <div className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10">
      <h1 className="text-3xl font-medium">Top Doctors to Book</h1>
      <p className="sm:w-1/3 text-center text-sm">
        Simply broser throught our extendisve list
      </p>
      <div className="w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0">
        {relDoc.slice(0, 5).map((item:{_id:string,image:string, name:string, speciality:string}, idx) => (
          <div
            onClick={() => {
              navigate(`/appointment/${item._id}`);
              scrollTo(0, 0);
            }}
            key={idx}
            className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
          >
            <img
              className="bg-blue-500 w-full h-[30vh] object-cover"
              src={item.image}
              alt="doctor"
            />
            <div className="p-4">
              <div className="flex items-center gap-2 text-sm text-center text-green-500">
                <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                <p>Available</p>
              </div>
              <p className="text-gray-900 text-lg font-medium">{item.name}</p>
              <p className="text-gray-600 text-sm">{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RelativeDoctors;
