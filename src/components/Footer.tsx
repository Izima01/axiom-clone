import { ArrowRight, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className='bg-[#060e18] px-8 mt-[2%] sm:mt-[5%] pt-8 pb-6 gap-5 relative grid grid-cols-4 md:grid-cols-10'>
      <div className='absolute bottom-[98%] left-0 w-full'>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 260'>
          <path
            fill='060e18'
            fillOpacity='1'
            d='M0,128L80,138.7C160,149,320,171,480,160C640,149,800,107,960,106.7C1120,107,1280,149,1360,170.7L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z'
          ></path>
        </svg>
      </div>
      <div className='col-span-4 md:col-span-3'>
        <h2 className='text-[#f9f9f9] text-lg font-extrabold font-quicksand'>
          Office
        </h2>
        <p className='text-[#979caa] font-dmsans'>
          Germany —
          <br />
          785 15h Street, Office 478
          <br />
          Berlin, De 81566
        </p>
        <p className='underline text-[#979caa] font-dmsans underline-offset-8 my-2'>
          info@email.com
        </p>
        <p className='font-quicksand text-lg text-[#f9f9f9] font-bold my-2'>
          +1 840 841 25 69
        </p>
      </div>
      <div className='col-span-2 md:col-span-2'>
        <h2 className='text-[#f9f9f9] text-lg font-extrabold font-quicksand'>
          Links
        </h2>
        <div className='flex gap-3 flex-col mt-3'>
          <a href='/' className='text-[#979caa] font-dmsans'>
            Home
          </a>
          <a href='/' className='text-[#979caa] font-dmsans'>
            Services
          </a>
          <a href='/' className='text-[#979caa] font-dmsans'>
            About Us
          </a>
          <a href='/' className='text-[#979caa] font-dmsans'>
            Our Team
          </a>
          <a href='/' className='text-[#979caa] font-dmsans'>
            Contacts
          </a>
        </div>
      </div>
      <div className='col-span-2 md:col-span-2'>
        <h2 className='text-[#f9f9f9] text-lg font-extrabold font-quicksand'>
          Socials
        </h2>
        <div className='flex gap-3 flex-col mt-3'>
          <a href='/' className='text-[#979caa] font-dmsans'>
            Facebook
          </a>
          <a href='/' className='text-[#979caa] font-dmsans'>
            Twitter
          </a>
          <a href='/' className='text-[#979caa] font-dmsans'>
            Dribble
          </a>
          <a href='/' className='text-[#979caa] font-dmsans'>
            Instagram
          </a>
        </div>
      </div>
      <div className='col-span-4 md:col-span-3 flex flex-col gap-3 md:-ml-4'>
        <h2 className='text-[#f9f9f9] text-lg font-extrabold font-quicksand'>
          Newsletter
        </h2>
        <div className='px-3 md:px-0 flex gap-2 relative'>
          <input
            type='text'
            className='bg-[#111922] pl-16 md:pl-14 px-6 py-2 rounded-full w-11/12 outline-none placeholder:text-[#686e7c] text-white'
            placeholder='Enter Your Email Address'
          />
          <Mail color='#686e7c' className='absolute left-9 md:left-6 top-2' />
          <button className='bg-[#4703ff] rounded-full w-11 h-11 flex justify-center items-center'>
            <ArrowRight color='white' />
          </button>
        </div>
        <p className=' text-[#62656f] font-dmsans text-sm'>
          <input
            type='checkbox'
            name='agree'
            id=''
            className='mr-2.5 not-checked:text-transparent bg-transparent'
          />
          I agree to the <span className='underline'>Privacy Policy</span>
        </p>
      </div>
      <div className='col-span-4 md:col-span-10 pt-3 -mb-2 border-t border-t-gray-200/20 text-sm font-dmsans text-[#979caa]'>
        <a href='https://axiomthemes.com/' target='_blank' rel='noopener'>
          AxiomThemes
        </a>{' '}
        © 2025. All Rights Reserved.{' '}
      </div>
    </footer>
  );
};

export default Footer;
