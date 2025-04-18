const WhoWeAre = () => {
  return (
    <section className='bg-[#E4EAF1] px-8 flex flex-col md:flex-row-reverse gap-6 py-5 items-center'>
      <div className='relative w-full h-[29rem] lg:h-[31rem] lg:flex-1/2'>
        <img
          src='https://seo.axiomthemes.com/wp-content/uploads/2023/03/h32r.png'
          alt=''
          width={'65%'}
          // height={'85%'}
          className='absolute right-0 top-0 md:top-10 lg:top-0 rounded-3xl h-5/6 md:h-3/5 lg:h-4/5'
        />
        <img
          src='https://seo.axiomthemes.com/wp-content/uploads/2023/03/h32l.png'
          alt=''
          width={'65%'}
          className='absolute left-10 md:left-0 bottom-0 md:bottom-10 lg:bottom-0 rounded-3xl h-5/6 md:h-3/5 lg:h-4/5'
        />
      </div>
      <div className='mb-4 lg:flex-1/2'>
        <h4 className='mb-2 uppercase tracking-[0.2em] font-bold text-[#080337] font-quicksand'>
          Who We Are
        </h4>
        <h2 className='text-3xl md:text-4xl lg:text-6xl font-quicksand font-bold text-[#080337]'>
          We provide best digital services
        </h2>
        <p className='mt-2 font-dmsans text-[#686e7c] mb-4 md:text-lg md:pr-10'>
          Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit sed quia.
        </p>
        <button className='bg-[#05bed6] rounded-full py-3 px-8 md:px-11 md:py-4 w-fit text-white font-medium font-quicksand'>
          Discover Now
        </button>
      </div>
    </section>
  );
};

export default WhoWeAre;
