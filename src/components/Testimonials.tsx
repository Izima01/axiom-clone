import { Quote } from 'lucide-react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const testistomialArray = [
  {
    name: 'Paul Freeman',
    title: 'Expert',
    picture:
      'https://seo.axiomthemes.com/wp-content/uploads/2021/08/image-13-300x300.jpg',
    text: 'Beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia. Excepteur sint occaecat cupidatat non proident, sunt in culpa',
  },
  {
    name: 'John Dou',
    title: 'Expert',
    picture:
      'https://seo.axiomthemes.com/wp-content/uploads/2021/09/image-1-120x120.jpg',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    name: 'Sandy Williams',
    title: 'CEO, Business Co.',
    picture:
      'https://seo.axiomthemes.com/wp-content/uploads/2021/08/image-2-120x120.jpg',
    text: 'Adipiscing elit vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas.',
  },
];

const Testimonials = ({
  setIsOverSlider,
}: {
  setIsOverSlider: (val: boolean) => void;
}) => {
  return (
    <section
      className='bg-[#E4EAF1] p-8 custom-cursor'
      onMouseEnter={() => setIsOverSlider(true)}
      onMouseLeave={() => setIsOverSlider(false)}
    >
      <Swiper
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 3500 }}
        pagination={{ clickable: false }}
        speed={800}
        spaceBetween={20}
        loop={false}
        slidesPerView={1}
        slidesPerGroup={1}
      >
        {testistomialArray.map(({ name, picture, text, title }, i) => (
          <SwiperSlide key={name + i} className='mb-12'>
            <img
              width={90}
              height={90}
              className='rounded-full mx-auto mb-5'
              src={picture}
              alt=''
            />
            <p className='text-center font-dmsans text-lg text-[#080337] md:text-2xl px-6 md:px-10 lg:px-40'>
              {text}
            </p>
            <Quote
              size={24}
              className='mx-auto mt-5 rotate-180 mb-2'
              color='#05bed6'
            />
            <h3 className='text-center font-quicksand text-lg font-bold text-[#080337]'>
              {name}
            </h3>
            <p className='text-center text-[#6b6e7c]'>{title}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
