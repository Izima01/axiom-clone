const Hero = () => {
  return (
    <section className="bg-[url('https://seo.axiomthemes.com/wp-content/uploads/2023/03/h3mbbg.png')] bg-cover bg-no-repeat flex justify-center items-center h-screen relative">
      <div className='flex flex-col gap-5 md:gap-8 mx-auto items-center w-4/5 md:w-2/3'>
        <h1 className='text-4xl md:text-[3.4rem] font-bold text-white text-center font-quicksand'>
          Turning Creative Ideas into Success
        </h1>
        <p className='text-center text-white font-medium font-dmsans md:text-lg px-7 md:px-0'>
          Consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore
          magna aliqua quis nostrud exerc.
        </p>
        <button className='bg-[#05bed6] rounded-full py-3 px-8 w-fit text-white font-medium font-quicksand'>
          Discover Now
        </button>
      </div>
      <div className='absolute left-0 -bottom-4 w-full'>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 330'>
          <path
            fill='#E4EAF1'
            fill-opacity='1'
            d='M0,256L80,245.3C160,235,320,213,480,218.7C640,224,800,256,960,277.3C1120,299,1280,309,1360,314.7L1440,320L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z'
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
