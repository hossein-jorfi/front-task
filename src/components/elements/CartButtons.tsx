const CartButtons = ({count}: {count: number}) => {
  return (
    <div className="flex space-x-3">
      <div className="bg-gray-100 p-2 flex space-x-2">
            <span>+</span>
            <span>{count}</span>
            <span>-</span>
      </div>
      <div></div>
    </div>
  );
};

export default CartButtons;
