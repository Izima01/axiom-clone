import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const images = [
  '//seo.axiomthemes.com/wp-content/uploads/2023/03/image-14.png',
  '//seo.axiomthemes.com/wp-content/uploads/2023/03/image-15.png',
  '//seo.axiomthemes.com/wp-content/uploads/2023/03/image-16.png',
  '//seo.axiomthemes.com/wp-content/uploads/2023/03/image-17.png',
  '//seo.axiomthemes.com/wp-content/uploads/2023/03/image-16.png',
  '//seo.axiomthemes.com/wp-content/uploads/2023/03/image-15.png',
];

const Slider = ({
  setIsOverSlider,
}: {
  setIsOverSlider: (val: boolean) => void;
}) => {
  return (
    <section
      // id='slider'
      className='bg-[#E4EAF1] px-8 py-5 custom-cursor'
      onMouseEnter={() => setIsOverSlider(true)}
      onMouseLeave={() => setIsOverSlider(false)}
    >
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 3600,
          disableOnInteraction: false,
        }}
        speed={800}
        // spaceBetween={32}
        loop={true}
        slidesPerGroup={1}
        className='w-full'
        breakpoints={{
          0: {
            slidesPerView: 2.2,
            spaceBetween: 28,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 36,
          },
        }}
      >
        {images.map((image, i) => (
          <SwiperSlide
            key={i}
            className='!flex items-center justify-center !h-96 scale-y- !rounded-4xl overflow-hidden'
          >
            <img decoding='async' src={image} alt='' className='!rounded-4xl' />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Slider;
