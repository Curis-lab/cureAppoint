import { Link } from "react-router-dom";
import { specialityData } from "../assets/assets";

function SpecilityMenu() {
  return (
    <div className="flex flex-col items-center gap-4 py-16 text-gray-800" id="speciality">
      <h1 className="text-3xl font-medium">Find by Speciality</h1>
      <p className="sm:w-1/3 text-center text-sm">
        Simply brosew throught our extendive list of trusted, sheudl our
        appointement
      </p>
      <div className="flex sm:justify-center gap-4 pt-5 w-full overflow-scroll">
        {specialityData.map(
          (
            item: { speciality: string; image: string },
            index: number | string
          ) => (
            <Link key={index} onClick={()=>scrollTo(0,0)} to={`/doctors/${item.speciality}`} className="flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500">
                <img className="w-16 sm:w-24 mb-2" src={item.image} alt=""/>
                <p>{item.speciality}</p>
            </Link>
          )
        )}
      </div>
    </div>
  );
}

export default SpecilityMenu;
