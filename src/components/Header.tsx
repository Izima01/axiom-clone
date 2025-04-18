import { ChevronDown, Menu, Search } from 'lucide-react';
import SearchModal from './SearchModal';
import { useState } from 'react';
import MenuModal from './MenuModal';
import { mobileNavMenuArray } from '../data/navmenu';

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className='bg-transparent/20 py-2.5 flex justify-between px-8 items-center absolute top-0 left-0 w-full z-10'>
      <a href='/' className='w-1/2 md:w-auto'>
        <img
          src='https://seo.axiomthemes.com/wp-content/uploads/2023/03/logo-inverse2-nocopyright.png'
          alt=''
          height={40}
          width={140}
        />
      </a>
      <div className='hidden md:flex gap-8 items-center'>
        {mobileNavMenuArray.map(({ link, name, children }) => (
          <div className='relative group overflow-hidden hover:overflow-visible'>
            <a
              className='text-white text-lg font-quicksand font-bold border-b-transparent transition-colors duration-500 ease-in-out border-b-4 group-hover:border-b-white pb-1'
              href={link}
              key={name}
            >
              {name}
            </a>
            {children && (
              <div className='absolute top-0 left-0 bg-transparent group-hover:visible invisible'>
                <ul
                  className={`mt-16 bg-[#080337] relative -left-10 rounded-2xl p-4 flex flex-col gap-3 translate-y-8  group-hover:translate-y-0 transition-transform duration-500`}
                >
                  {children?.map((child, i) =>
                    child.children ? (
                      <li className=''>
                        <h4
                          className='flex justify-between text-[#979caa] hover:text-white text-lg font-dmsans whitespace-nowrap items-center w-40 cursor-pointer overflow-hidden peer'
                          key={child.name}
                        >
                          <span className="after:content-[''] relative after:absolute after:bg-white after:bottom-0 after:left-0 after:h-[1px] after:w-0 hover:after:w-full after:transition-[width] duration-300">
                            {child.name}
                          </span>
                          <ChevronDown />
                        </h4>

                        <ul
                          className={`rounded-xl p-4 flex flex-col gap-3 bg-[#080337] absolute left-44 ml-5 ${
                            i > child.children.length / 2 ? 'bottom-0' : 'top-0'
                          } transition-all duration-700 peer opacity-0 translate-y-5 peer-hover:translate-y-0 peer-hover:opacity-100 hover:translate-y-0 hover:opacity-100`}
                        >
                          {child.children &&
                            child.children.map((child) => (
                              <li>
                                <a
                                  className="text-[#979caa] hover:text-white font-dmsans whitespace-nowrap items-center cursor-pointer after:content-[''] relative after:absolute after:bg-white after:bottom-0 after:left-0 after:h-[1px] after:w-0 hover:after:w-full after:transition-[width] duration-300 pr-5"
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
                        // className='flex gap-6 text-[#979caa] text-lg font-dmsans leading-4 items-center w-fit pr-4'
                        className="text-[#979caa] hover:text-white w-fit font-dmsans whitespace-nowrap items-center cursor-pointer after:content-[''] relative after:absolute after:bg-white after:bottom-0 after:left-0 after:h-[1px] after:w-0 hover:after:w-full after:transition-[width] duration-300"
                        href={child.link}
                        key={child.name}
                      >
                        {child.name}
                      </a>
                    )
                  )}
                </ul>
              </div>
            )}
          </div>
        ))}
        <Search
          color='white'
          className='cursor-pointer'
          size={28}
          onClick={() => setShowSearch(true)}
        />
      </div>
      <div className='flex gap-5 items-center md:hidden'>
        <Search
          color='white'
          className='cursor-pointer'
          size={28}
          onClick={() => setShowSearch(true)}
        />
        <Menu
          color='white'
          className='cursor-pointer'
          size={28}
          onClick={() => setShowMenu(true)}
        />
      </div>
      <button className='bg-[#4703ff] hover:bg-[#5300f1] rounded-full py-3 px-8 text-white font-bold font-quicksand cursor-pointer'>
        Let's talk
      </button>
      <SearchModal showSearch={showSearch} setShowSearch={setShowSearch} />
      <MenuModal showMenu={showMenu} setShowMenu={setShowMenu} />
    </header>
  );
};

export default Header;
