import logo from "../assets/med.svg";
function Footer() {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={logo} alt="" className="mb-2 w-14"/>
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            It seems like there might be a typo in your request. Did you mean
            “Arial” as the font, or were you referring to “Aria Abson” (possibly
            a name or term)? Could you clarify what youre asking about
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+20002-29992</li>
            <li>susidii@gmail.com</li>
          </ul>
        </div>
      </div>
        <div>
          <hr />
          <p className="py-5 text-sm text-center">Copyright 2024@ CurAppint - All Right Reserved.</p>
        </div>
    </div>
  );
}

export default Footer;
