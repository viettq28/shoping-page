import { useState } from 'react';

import ChatHeader from './ChatHeader';
import ChatInterface from './ChatInterface';
import ChatInput from './ChatInput';

const ChatPopup = ({ handleHidePop }) => {
  const [msgs, setMsg] = useState([
    ['U', 'Xin chào'],
    ['U', 'Làm thế nào để xem các sản phẩm'],
    ['A', 'Chào bạn'],
    ['A', 'Bạn có thể vào mục shop để xem các sản phẩm'],
  ]);

  return (
    <>
      <div className="fixed inset-0" onClick={handleHidePop}></div>
      <div className="fixed left-1/2 top-1/2 h-full w-full !origin-center -translate-x-1/2 -translate-y-1/2 animate-shaking-popup rounded-lg bg-white shadow-[rgba(0,0,0,0.19)_0px_10px_20px,rgba(0,0,0,0.23)_0px_6px_6px] lg:h-3/4 lg:w-1/3 [&>*:not(:last-child)]:border-b [&>*:not(:last-child)]:border-zinc-300 [&>*]:px-6 [&>*]:py-4">
        <ChatHeader />
        <ChatInterface msgs={msgs} />
        <ChatInput setMsg={setMsg} />
      </div>
    </>
  );
};
export default ChatPopup;
