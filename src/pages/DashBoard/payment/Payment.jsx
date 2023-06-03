import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutFrom from "./CheckOutFrom";


// TODO: provide publishable Key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
    return (
        <div>
             <SectionTitle subHeading="please process" heading="Payment"></SectionTitle>
             <Elements stripe={stripePromise}>
                <CheckOutFrom ></CheckOutFrom>
            </Elements>
        </div>
    );
};

export default Payment;