import design from '../assets/design.svg';
import endless from '../assets/endless.svg';
import AnimatedCounter from './AnimatedCounter';

const achievments: { name: string; value: number }[] = [
  {
    name: 'Projects',
    value: 98,
  },
  {
    name: 'People',
    value: 65,
  },
  {
    name: 'Years',
    value: 10,
  },
  {
    name: 'Offices',
    value: 15,
  },
];

const CreativeAgency = () => {
  return (
    <section className='bg-[#E4EAF1] -mt-8 md:-mt-12 px-8 grid grid-cols-5 gap-6 pt-20 md:pt-14 pb-5 items-center'>
      <div className='relative h-80 md:h-[29rem] col-span-5 md:col-span-2'>
        <img
          src='https://seo.axiomthemes.com/wp-content/uploads/2023/03/h3l.png'
          alt=''
          width={'70%'}
          // height={'70%'}
          className='absolute md:h-3/5 top-0 md:top-10 left-0'
        />
        <img
          src='https://seo.axiomthemes.com/wp-content/uploads/2023/03/h3r.png'
          alt=''
          width={'70%'}
          // height={'70%'}
          className='absolute md:h-3/5 right-0 bottom-0 md:bottom-10'
        />
      </div>
      <div className='mb-4 col-span-5 md:col-span-3 md:pl-10'>
        <h4 className='mb-2 uppercase tracking-[0.2em] font-bold text-[#080337] text-sm md:text-base font-quicksand'>
          Creative Agency
        </h4>
        <h2 className='text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-quicksand font-bold text-[#080337]'>
          We help your business grow
        </h2>
        <p className='mt-2 font-dmsans text-[#686e7c] mb-4'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
          voluptatibus perferendis eligendi porro qui nulla nam maxime, sequi
          optio sapiente?
        </p>
        <article className='flex items-start gap-4 mb-4'>
          <img src={design} alt='' />
          <div>
            <h5 className='font-bold text-xl font-quicksand text-[#080337] pb-1'>
              Creative design
            </h5>
            <p className='font-dmsans text-[#686e7c]'>
              Natus error sit voluptatem accus antium doloremque.
            </p>
          </div>
        </article>
        <article className='flex items-start gap-4'>
          <img src={endless} alt='' />
          <div>
            <h5 className='font-bold text-xl font-quicksand text-[#080337] pb-1'>
              Endless possibilities
            </h5>
            <p className='font-dmsans text-[#686e7c]'>
              Sit voluptatem accus antium doloremque laudan.
            </p>
          </div>
        </article>
      </div>
      <div className='col-span-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-4 gap-y-4'>
        {achievments.map(({ name, value }) => (
          <div className='relative mx-auto'>
            <h2 className='font-quicksand text-8xl md:text-9xl text-[#080337]/50 font-extrabold tracking-widest'>
              <AnimatedCounter duration={3000} target={value} />
            </h2>
            <p className='absolute text-black text-2xl md:text-3xl font-bold font-dmsans top-1/2 left-1/2 -translate-1/2'>
              {name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CreativeAgency;
