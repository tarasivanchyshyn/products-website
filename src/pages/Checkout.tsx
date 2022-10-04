import CheckoutForm from '@components/Checkout/CheckoutForm';
import Summary from '@components/Checkout/Summary';

function Checkout() {
  return (
    <div>
      <h1>Checkout</h1>
      <CheckoutForm />
      <Summary />
    </div>
  );
}

export default Checkout;
