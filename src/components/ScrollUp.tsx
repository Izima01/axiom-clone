import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';

const ScrollUp = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 0.7 * window.innerHeight) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    handleScroll(); // Call the function once to set the initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <a
      href='#'
      className={`scrollUp fixed right-6 bottom-6 ${
        show ? 'translate-y-0' : 'translate-y-16'
      } bg-[#080337] w-10 h-10 flex justify-center items-center z-30 transition-transform duration-300 hover:bg-[#4703ff] focus:bg-[#4703ff] rounded-full`}
    >
      <ArrowUp className='text-xl md:text-2xl text-white' />
    </a>
  );
};

export default ScrollUp;
