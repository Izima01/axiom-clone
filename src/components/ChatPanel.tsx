import { MessageSquare } from 'lucide-react';

const ChatPanel = () => {
  return (
    <section className='fixed left-12 bottom-12 flex gap-6 z-50 items-center'>
      <button className='bg-[#49b93b] w-14 h-14 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 duration-300 ease-in-out'>
        <MessageSquare fill='white' stroke='none' size={28} />
      </button>
      <h3 className='bg-white min-w-32 flex justify-center items-center whitespace-nowrap text-[#06132b] text-lg font-dmsans rounded-xl py-2 px-4'>
        Presale Chat
      </h3>
    </section>
  );
};

export default ChatPanel;
