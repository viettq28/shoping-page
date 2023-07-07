import Input from '../UI/Input';
import Button from '../UI/Button';
import { Fragment } from 'react';

const CheckoutForm = () => {
  const inputField = ['Full Name', 'Email', 'Phone Number', 'Address'];

  return (
    <div className="w-[70%] text-zinc-500">
      <form onSubmit={(e) => e.preventDefault()} className='[&>*:not(button)]:w-full [&>label]:uppercase [&>label]:tracking-widest [&>input]:mb-5 [&>input]:mt-2'>
        {inputField.map((input, i) => {
          return (
            <Fragment key={i}>
              <label htmlFor={input}>{input}:</label>
              <Input id='fullname' className='placeholder:text-zinc-400 placeholder:text-sm shadow-none py-3' placeholder={`Enter Your ${input} Here!`}></Input>
            </Fragment>
          );
        })}
        <Button className='w-fit !text-lg'>Place order</Button>
      </form>
    </div>
  );
};
export default CheckoutForm;
