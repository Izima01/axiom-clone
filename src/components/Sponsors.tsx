const sponsorLogos = [
  'https://seo.axiomthemes.com/wp-content/uploads/2023/04/partner-1-copyright.png',
  'https://seo.axiomthemes.com/wp-content/uploads/2023/04/partner-2-copyright.png',
  'https://seo.axiomthemes.com/wp-content/uploads/2023/04/partner-3-copyright.png',
  'https://seo.axiomthemes.com/wp-content/uploads/2023/04/partner-4-copyright.png',
  'https://seo.axiomthemes.com/wp-content/uploads/2023/04/partner-5-copyright.png',
  'https://seo.axiomthemes.com/wp-content/uploads/2023/04/partner-6-copyright.png',
];

const Sponsors = () => {
  return (
    <section className='bg-[#E4EAF1] px-8 grid grid-cols-2 md:grid-cols-3 auto-rows-[130px] md:auto-rows-[140px] py-5'>
      {sponsorLogos.map((imgg, i) => (
        <img
          key={i}
          src={imgg}
          className='opacity-60 hover:opacity-100 transition-opacity duration-500 h-full mx-auto'
          alt=''
          //   height={120}
        />
      ))}
    </section>
  );
};

export default Sponsors;
