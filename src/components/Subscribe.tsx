import { Send } from 'lucide-react';

const Subscribe = () => {
  return (
    <section className='bg-[#E4EAF1] px-6 grid grid-cols-5 md:grid-cols-7 gap-x-3 gap-y-1 py-6 items-start'>
      <h2 className='text-[1.75rem] md:text-3xl lg:text-5xl font-quicksand font-bold text-[#080337] col-span-5 md:col-span-3'>
        Subscribe for the exclusive updates!
      </h2>
      <input
        type='text'
        className='bg-white px-6 py-2 rounded-full col-span-3 md:col-span-2 outline-none placeholder:text-[#686e7c] text-black md:text-lg'
        placeholder='Enter Your Email Address'
      />
      <button className='bg-[#4703ff] rounded-full px-3 md:px-0 py-2 md:py-4 w-full text-white text-sm lg:text-lg font-medium font-quicksand flex items-center justify-center gap-4 col-span-2'>
        <Send size={20} />
        Subscribe
      </button>
      <p className='col-span-3 text-[#686e7c] md:col-start-4 md:col-end-6 md:-mt-8'>
        <input type='checkbox' name='agree' id='' className='mr-2.5' />I agree
        to the <span className='underline'>Privacy Policy</span>
      </p>
    </section>
  );
};

export default Subscribe;
