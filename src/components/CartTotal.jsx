const CartTotal = () => {
  return <div className="w-[30%] bg-[--cust-bg] p-7 space-y-5 font-medium">
    <p className="text-xl">CART TOTAL</p>
    <div className="space-y-2 text-sm">
      <p>SUBTOTAL</p>
      <div className="border-b border-b-zinc-400"></div>
      <p>TOTAL</p>
    </div>
  </div>
};
export default CartTotal