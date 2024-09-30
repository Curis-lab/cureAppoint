import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/app-context";

function Doctors() {
  const { speciality } = useParams();
  const { doctors } = useContext(AppContext);
  const [filterDoctors, setFilterDoctors] = useState<any[]>([]);
  const navigate = useNavigate();
  const applyFilter = () => {
    if (speciality) {
      setFilterDoctors(
        doctors.filter(
          (doc: any) =>
            doc.speciality.toLowerCase() === speciality.toLowerCase()
        )
      );
    } else {
      setFilterDoctors(doctors);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]);

  return (
    <div>
      <p className="text-gray-600">Browser throught the doctors specialist.</p>
      <div className="flex flex-col sm:flex-row items-start gap-4 mt-5">
        <div className="flex flex-col gap-4 text-sm text-gray-600 px-2">
          <p
            onClick={() =>
              speciality === "General physician" ? navigate("/doctors") : navigate(`/doctors/General physician`)
            }
            className={`w-[94vw] ${speciality === 'General physician'?'bg-indigo-50 text-black':''} sm:w-auto pl-3 py-1.5 border border-gray-300 rounded transition-all cursor-pointer px-4`}
          >
            General physician
          </p>
          <p
            onClick={() =>
              speciality === "Gynecologist" ? navigate("/doctors") : navigate(`/doctors/Gynecologist`)
            }
            className={`w-[94vw] ${speciality === 'Gynecologist'? 'bg-indigo-50 text-black':''} sm:w-auto pl-3 py-1.5 border border-gray-300 rounded transition-all cursor-pointer px-4`}
          >
            Gyenologist
          </p>
          <p
            onClick={() =>
              speciality === "Dermotologist" ? navigate("/doctors") : navigate(`/doctors/Dermotologist`)
            }
            className={`w-[94px] ${speciality === 'Dermotologist'? 'bg-indigo-50 text-black':''} sm:w-auto pl-3 py-1.5 border border-gray-300 rounded transition-all cursor-pointer px-4`}
          >
            Dermotologist
          </p>
          <p
            onClick={() =>
              speciality === "Pediatricians" ? navigate("/doctors") : navigate(`/doctors/Pediatricians`)
            }
            className={`w-[94px] ${speciality === 'Pediatricians'? 'bg-indigo-50 text-black':''} sm:w-auto pl-3 py-1.5 border border-gray-300 rounded transition-all cursor-pointer px-4`}
          >
            Pediatricians
          </p>
          <p
            onClick={() =>
              speciality === "Neurologist" ? navigate("/doctors") : navigate(`/doctors/Neurologist`)
            }
            className={`w-[94px] ${speciality === 'Neurologist'? 'bg-indigo-50 text-black':''} sm:w-auto pl-3 py-1.5 border border-gray-300 rounded transition-all cursor-pointer px-4`}
          >
            Neurologist
          </p>
          <p
            onClick={() =>
              speciality === "Gastroenterologist" ? navigate("/doctors") : navigate(`/doctors/Gastroenterologist`)
            }
            className={`w-[94px] ${speciality === 'Gastroenterologist'?'bg-indigo-50 text-black':''} sm:w-auto pl-3 py-1.5 border border-gray-300 rounded transition-all cursor-pointer px-4`}
          >
            Gastroenterologist
          </p>
        </div>
        <div className="w-full grid grid-cols-auto gap-4 gap-y-6">
          {filterDoctors.map((item, index: string | number) => (
            <div
              onClick={() => navigate(`/appointment/${item._id}`)}
              key={index}
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
    </div>
  );
}

export default Doctors;
