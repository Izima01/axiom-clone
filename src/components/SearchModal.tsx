import { Search, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const SearchModal = ({
  showSearch,
  setShowSearch,
}: {
  showSearch: boolean;
  setShowSearch: (val: boolean) => void;
}) => {
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    if (showSearch) setShowOverlay(true);
  }, [showSearch]);

  return (
    <div
      className={`bg-[rgba(0,0,0,0.2)] fixed inset-0 w-full h-screen transition-opacity duration-300 ${
        showOverlay ? ' opacity-100 visible' : 'opacity-0 invisible'
      }`}
    >
      <div
        className={`bg-[#111922] w-full h-80 p-6 flex flex-col justify-between transition-transform delay-500 duration-500 ${
          showSearch ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className='flex justify-between items-center'>
          <a href='/' className='w-1/2'>
            <img
              src='https://seo.axiomthemes.com/wp-content/uploads/2023/03/logo-inverse2-nocopyright.png'
              alt=''
              height={40}
              width={160}
            />
          </a>
          <X
            color='white'
            size={32}
            className={showSearch ? 'animate-rotate' : ''}
            onClick={() => {
              setShowSearch(false);
              setTimeout(() => {
                setShowOverlay(false);
              }, 1000);
            }}
          />
        </div>
        <div>
          <div className='flex justify-between pb-3 mx-2'>
            <input
              type='text'
              className='w-4/5 border-0 outline-none bg-transparent font-quicksand placeholder:text-[#979caa] text-white text-xl'
              placeholder='Type words and hit enter'
            />
            <Search color='white' size={32} />
          </div>
          <hr
            className={`border-b-gray-400 border-2 mb-8 ${
              showSearch ? 'animate-grow' : ''
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
