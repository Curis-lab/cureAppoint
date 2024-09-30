import aboutImage from '../assets/doctor-care.jpg';

function About() {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px] object-cover' src={aboutImage} alt=""/>
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>I am a passionate developer with a focus on creating seamless and user-friendly digital experiences. With experience in building web and mobile applications, I am dedicated to improving healthcare accessibility through technology. My goal is to provide users with a straightforward, intuitive platform for booking appointments with medical professionals, ensuring a smooth and stress-free healthcare experience for everyone</p>
          <b>Over vision</b>
          <p>Our mission is to revolutionize the way people access healthcare by providing a simple, efficient, and reliable clinic booking solution. We aim to connect patients with the best healthcare professionals, offering a streamlined process to book appointments, manage schedules, and enhance overall patient satisfaction. By leveraging technology, we strive to make healthcare more accessible and convenient for all.</p>
        </div>
      </div>
      <div className='text-xl my-4'>
        <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div>
      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Efficiency:</b>
          <p>Streamlined apoointment scheduling that fits into your busy lifestyle.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Covenience:</b>
          <p>Streamlined apoointment scheduling that fits into your busy lifestyle.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Personalization:</b>
          <p>Streamlined apoointment scheduling that fits into your busy lifestyle.</p>
        </div>
      </div>
    </div>
  )
}

export default About
