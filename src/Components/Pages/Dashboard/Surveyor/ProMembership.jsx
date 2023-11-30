import React from 'react';

const ProMembership = () => {
    return (
        <div>

        </div>
    );
};

export default ProMembership;

// import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

// const ProMembership = () => {

//     const stripe = useStripe();
//     const elements = useElements();

//     const handleProMembership = async (e) => {
//         e.preventDefault();

//         if (!stripe || !elements) {
//             return;
//         }

//         const card = elements.getElement(CardElement);
//         if (card === null) {

//         }

//     }

//     return (
//         <div>

//             <div>
//                 <h1 className="text-4xl font-bold text-center pt-10">Pro Membership</h1>
//                 <div className="divider pb-5"></div>
//             </div>

//             <form onSubmit={handleProMembership}>

//                 <CardElement
//                     options={{
//                         style: {
//                             base: {
//                                 fontSize: '16px',
//                                 color: '#424770',
//                                 '::placeholder': {
//                                     color: '#aab7c4',
//                                 },
//                             },
//                             invalid: {
//                                 color: '#9e2146',
//                             },
//                         },
//                     }}
//                 />
//                 <button className="btn btn-sm btn-primary my-4" type="submit" disabled={!stripe || !clientSecret}>
//                     Pay
//                 </button>

//             </form>
//         </div>
//     );
// };

// export default ProMembership;