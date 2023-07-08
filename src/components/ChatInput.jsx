import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceSmile, faPaperclip , faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const ChatInput = () => {
  return (
    <div className="flex gap-2 bg-zinc-100">
      {/* Avatar */}
      <img
        src="https://www.w3schools.com/howto/img_avatar.png"
        alt="avatr"
        className="h-fit max-h-[2rem] w-[10%] max-w-[2rem] rounded-full object-cover"
      />
      {/* Phần nhập liệu */}
      <input
        type="text"
        className="h-fit rounded-sm bg-white py-1 px-3 my-auto text-zinc-400 focus:outline-zinc-500"
        placeholder="Enter Messages!"
      />
      {/* Các icon */}
      <div className='space-x-2 my-auto ml-3 [&>*]:text-[#a1a1aa] hover:[&>*]:text-[#48B0F7]'>
        <FontAwesomeIcon icon={faFaceSmile} />
        <FontAwesomeIcon icon={faPaperclip} />
        <FontAwesomeIcon icon={faPaperPlane} />
      </div>
    </div>
  );
};
export default ChatInput;
