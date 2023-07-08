const ChatInterface = ({ msgs }) => {
  // Các msgs được truyền vào có dạng ['người viêt', 'nội dung']
  // Render đoạn chat tùy vào 'người viêt'
  return (
    <div className="h-[72%] space-y-3 [&_.mess]:w-fit [&_.mess]:rounded-sm [&_.mess]:px-3 [&_.mess]:py-2">
      {msgs.map((msg, i) => {
        // Nếu 'người viêt' là 'U'
        if (msg[0] === 'U') {
          return (
            <div key={i} className="mess ml-auto bg-[#48B0F7] text-zinc-100">
              {msg[1]}
            </div>
          );
        }
        // 'người viết' khác
        return (
          <div key={i} className="flex gap-2">
            <img
              src="https://www.w3schools.com/howto/img_avatar.png"
              alt="avatr"
              className="h-fit max-h-[2rem] w-[10%] max-w-[2rem] rounded-full"
            />
            <div className="mess h-fit bg-zinc-100 text-zinc-400">
              ADMIN: {msg[1]}
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default ChatInterface;
