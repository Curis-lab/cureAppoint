import contact_us from "../assets/contact-us.jpg";

function Contact() {
  return (
    <div>
      <div className="text-center text-2xl p-10 text-gray-500">
        <p>
          CONTACT <span className="text-gray-700 font-semibold">US</span>
        </p>
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm">
        <img src={contact_us} alt="" className="w-full md:max-w-[500px] object-cover"/>
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-lg text-gray-600">OUR OFFICE</p>
          <p className="text-gray-500">
            99383 willion Station <br /> Suit 9388, Washington, USA.
          </p>
          <p className="text-gray-500">Tel: (003)-29-2992-992</p>
          <p className="font-semibold text-lg text-gray-600">Careers at Perso res</p>
          <p className="text-gray-500">Learn more about our teams and job openings.</p>
          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">Explore Jobs</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
