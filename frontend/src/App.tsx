import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Doctors from "./pages/doctors";
import Login from "./pages/login";
import About from "./pages/about";
import Contact from "./pages/contact";
import Profile from "./pages/my-profile";
import MyAppointment from "./pages/my-appointments";
import Appointment from "./pages/appointment";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

function App() {
  return (
    <div className="mx-4 sm:mx-[10%]">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="profile" element={<Profile />} />
        <Route path="appointments" element={<MyAppointment />} />
        <Route path="appointment/:docId" element={<Appointment />} />
        <Route path="doctors" element={<Doctors />} />
        <Route path="doctors/:speciality" element={<Doctors/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
