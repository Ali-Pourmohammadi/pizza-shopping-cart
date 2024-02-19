import { Link } from 'react-router-dom';
import ButtonLink from '../ui/ButtonLink';

function EmptyCart() {
  return (
    <div className='w-75 m-auto text-center space-y-4 mt-6 p-3'>
      <ButtonLink to="/menu">&larr; Back to menu</ButtonLink>

      <p>Your cart is still empty. Start adding some pizzas :)</p>
    </div>
  );
}

export default EmptyCart;
