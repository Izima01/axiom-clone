import { AppWindow, Images, ShoppingCart } from 'lucide-react';

const panels = [
  { id: 1, title: 'Buy Theme', icon: <ShoppingCart size={18} color='white' /> },
  { id: 2, title: 'Our Bestsellers', icon: <Images size={18} color='white' /> },
  { id: 3, title: 'Hide Panel', icon: <AppWindow size={18} color='white' /> },
];

const SidePanel = () => {
  return (
    <section className='fixed right-0 top-1/2 -translate-y-1/2 flex flex-col gap-0.5 z-50'>
      {panels.map((panel) => (
        <article className='flex flex-row-reverse h-12 items-stretch cursor-pointer'>
          <div className='bg-[#060367] p-4 z-20 pr-6 hover:translate-x-0 translate-x-2 transition-transform duration-300 ease-in-out peer'>
            {panel.icon}
          </div>
          <h3 className='bg-[#191e2d] min-w-32 flex justify-center items-center whitespace-nowrap text-white text-xs uppercase font-quicksand font-bold peer-hover:translate-x-0 peer-hover:opacity-100 translate-x-full opacity-0 duration-300 ease-in-out transition-transform z-10'>
            {panel.title}
          </h3>
        </article>
      ))}
    </section>
  );
};

export default SidePanel;
