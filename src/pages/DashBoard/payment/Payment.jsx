import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutFrom from "./CheckOutFrom";
import useCart from "../../../hooks/UseCart";


// TODO: provide publishable Key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
    const [cart] = useCart();
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const price = parseFloat(total.toFixed(2))
    return (
        <div>
             <SectionTitle subHeading="please process" heading="Payment"></SectionTitle>
             <Elements stripe={stripePromise}>
                <CheckOutFrom cart={cart} price={price}></CheckOutFrom>
            </Elements>
        </div>
    );
};

export default Payment;