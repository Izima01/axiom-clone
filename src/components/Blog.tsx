import { Dot } from 'lucide-react';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

type BlogArrayType = {
  pic: string;
  category: string;
  title: string;
  dateCreated: Date;
  comments: number;
};

const blogArray: BlogArrayType[] = [
  {
    pic: 'https://seo.axiomthemes.com/wp-content/uploads/2020/04/image-9-890x664.jpg',
    category: 'Media SEO',
    title: "What's trending on designers' charts this spring",
    dateCreated: new Date('4/21/2020'),
    comments: 0,
  },
  {
    pic: 'https://seo.axiomthemes.com/wp-content/uploads/2020/04/image-10-890x664.jpg',
    category: 'Media SEO',
    title: 'Fresh startup ideas for your digital business',
    dateCreated: new Date('4/21/2020'),
    comments: 0,
  },
  {
    pic: 'https://seo.axiomthemes.com/wp-content/uploads/2020/04/image-11-890x664.jpg',
    category: 'Media SEO',
    title: 'Top 5 targeting techniques to attract customers',
    dateCreated: new Date('4/21/2020'),
    comments: 0,
  },
  {
    pic: 'https://seo.axiomthemes.com/wp-content/uploads/2020/04/image-12-890x664.jpg',
    category: 'Media SEO',
    title: 'Why do project managers need to focus on strategy?',
    dateCreated: new Date('4/21/2020'),
    comments: 0,
  },
];

const Blog = ({
  setIsOverSlider,
}: {
  setIsOverSlider: (val: boolean) => void;
}) => {
  return (
    <section
      className='bg-[#E4EAF1] px-8 pt-5 pb-12 custom-cursor'
      onMouseEnter={() => setIsOverSlider(true)}
      onMouseLeave={() => setIsOverSlider(false)}
    >
      <h4 className='text-[#080337] text-sm font-quicksand uppercase font-bold text-center'>
        Our Blog
      </h4>
      <h2 className='text-4xl text-[#080337] font-quicksand mt-2 font-extrabold text-center mb-6'>
        Latest Articles
      </h2>
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: false }}
        speed={800}
        spaceBetween={20}
        loop={true}
        slidesPerGroup={1}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          840: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        {blogArray.map(({ category, comments, dateCreated, pic, title }) => (
          <SwiperSlide key={title} className='mb-12'>
            <div className='md:h-52 w-full overflow-hidden'>
              <img
                src={pic}
                className='rounded-2xl hover:scale-110 transition-[transform,scale] duration-300'
                alt=''
              />
            </div>
            <div className='mt-3 flex flex-col gap-2.5'>
              <p className='text-[#080337] font-quicksand text-sm font-bold uppercase'>
                {category}
              </p>
              <h4 className='text-xl font-quicksand text-[#080337] pr-4 font-extrabold hover:opacity-65'>
                {title}
              </h4>
              <p className='flex gap-2 items-center text-[#a0a4b4] font-dmsans text-sm'>
                <span>
                  {dateCreated.toLocaleDateString('en-GB', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                </span>
                <Dot />
                <span>{comments} comments</span>
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Blog;
