import {
  ArrowRight,
  ChevronDown,
  Dribbble,
  Facebook,
  Instagram,
  Twitter,
  X,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { mobileNavMenuArray } from '../data/navmenu';

const MenuModal = ({
  showMenu,
  setShowMenu,
}: {
  showMenu: boolean;
  setShowMenu: (val: boolean) => void;
}) => {
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    if (showMenu) setShowOverlay(true);
  }, [showMenu]);

  const [openDropdown, setOpenDropdown] = useState({
    child: '',
    grandChild: '',
  });

  const toggleDropDown = (child: string, childOfChild: string) => {
    setOpenDropdown((prev) =>
      prev.child == child && childOfChild == ''
        ? { child: '', grandChild: '' }
        : prev.grandChild && prev.grandChild == childOfChild
        ? { child: prev.child, grandChild: childOfChild }
        : { child: child, grandChild: childOfChild }
    );
  };

  return (
    <div
      className={`bg-[rgba(0,0,0,0.2)] fixed inset-0 w-full h-screen transition-opacity duration-300  z-100 ${
        showOverlay ? ' opacity-100 visible' : 'opacity-0 invisible'
      }`}
    >
      <div
        className={`bg-[#111922] w-full p-6 flex flex-col justify-between transition-transform overflow-y-scroll duration-500 ${
          showMenu ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className='flex justify-between items-center mb-10'>
          <a href='/' className='w-1/2'>
            <img
              src='https://seo.axiomthemes.com/wp-content/uploads/2023/03/logo-inverse2-nocopyright.png'
              alt=''
              height={40}
              width={160}
            />
          </a>
          <button
            className='flex items-center  text-[#62656f]'
            onClick={() => {
              setShowMenu(false);
              setTimeout(() => {
                setShowOverlay(false);
              }, 1000);
            }}
          >
            Close
            <X
              color='white'
              size={32}
              className={`${showMenu ? 'animate-rotate' : ''} ml-2`}
            />
          </button>
        </div>
        <nav className='pb-8 border-b border-b-gray-500'>
          <ul className='flex flex-col gap-2.5 md:gap-3.5'>
            {mobileNavMenuArray.map(({ name, link, children }) => {
              if (link == '')
                return (
                  <li>
                    <h3
                      key={name}
                      className={`flex gap-5 md:gap-7 ${
                        openDropdown.child == name
                          ? 'text-white'
                          : 'text-[#979caa]'
                      } text-lg md:text-2xl font-semibold items-center w-fit duration-500 font-quicksand leading-1`}
                      onClick={() => toggleDropDown(name, '')}
                    >
                      <span>{name}</span>
                      <ArrowRight size={24} />
                    </h3>
                    <ul
                      className={`flex flex-col gap-2.5 overflow-hidden relative mt-1 transition-all duration-700 ${
                        openDropdown.child == name
                          ? 'max-h-96 pl-6 py-2'
                          : 'max-h-0'
                      }`}
                    >
                      {children &&
                        children.map((child) =>
                          child.children ? (
                            <li>
                              <h4
                                className='flex gap-6 text-[#979caa]  font-dmsans leading-1 items-center w-fit'
                                key={child.name}
                                onClick={() => toggleDropDown(name, child.name)}
                              >
                                {child.name}
                                <ChevronDown />
                              </h4>

                              <ul
                                className={`flex flex-col gap-3 overflow-hidden relative transition-all duration-700 ${
                                  openDropdown.grandChild == child.name
                                    ? 'max-h-96 pl-6 py-2 pt-1'
                                    : 'max-h-0'
                                }`}
                              >
                                {child.children &&
                                  child.children.map((child) => (
                                    <li>
                                      <a
                                        className='flex gap-6 text-[#979caa]  leading-4 items-center w-auto'
                                        href={child.link}
                                        key={child.name}
                                      >
                                        {child.name}
                                      </a>
                                    </li>
                                  ))}
                              </ul>
                            </li>
                          ) : (
                            <a
                              className='flex gap-6 text-[#979caa]  font-dmsans leading-4 items-center w-fit pr-4'
                              href={child.link}
                              key={child.name}
                            >
                              {child.name}
                            </a>
                          )
                        )}
                    </ul>
                  </li>
                );
              else
                return (
                  <li
                    className={`${
                      openDropdown.child == name
                        ? 'text-white'
                        : 'text-[#979caa]'
                    } text-lg md:text-2xl font-quicksand`}
                    key={name}
                  >
                    <a href={link}>{name}</a>
                  </li>
                );
            })}
          </ul>
        </nav>
        <div className='pt-6 flex gap-8 items-center'>
          <Facebook color='white' size={24} />
          <Twitter color='white' size={24} />
          <Dribbble color='white' size={24} />
          <Instagram color='white' size={24} />
        </div>
      </div>
    </div>
  );
};

export default MenuModal;
