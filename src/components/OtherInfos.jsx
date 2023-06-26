import Button from "../UI/Button";

const OtherInfos = (props) => {
  return (
    <>
      <div className="mt-11 flex justify-around bg-[--cust-bg] py-11">
        <div>
          <p>FREE SHIPPING</p>
          <p className="text-sm text-zinc-400">Free shipping worldwide</p>
        </div>
        <div>
          <p>24 x 7 SERVICES</p>
          <p className="text-sm text-zinc-400">Free shipping worldwide</p>
        </div>
        <div>
          <p>FESTIVAL OFFER</p>
          <p className="text-sm text-zinc-400">Free shipping worldwide</p>
        </div>
      </div>
      <div className="flex justify-between py-9 mb-9">
        <div>
          <p>LET&lsquo;S BE FRIENDS!</p>
          <p className="text-sm text-zinc-400">Nisi Nisi tempor consequat laboris nisi!</p>
        </div>
        <div className="[&>*]:h-full w-1/2 flex">
            <input type="text" placeholder="Enter your email address"
                className="w-3/4 border-zinc-400 border text-xs px-3 focus:outline-none"
            />
            <Button title='Subscribe' className='w-1/4'/>
        </div>
      </div>
    </>
  );
};  
export default OtherInfos;
