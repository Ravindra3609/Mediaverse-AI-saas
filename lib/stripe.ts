import Stripe from 'stripe';


export const stripe = new Stripe(process.env.STRIPE_API_kEY!, {
    apiVersion:"2023-08-16",
    //  apiVersion: "2022-11-15",
    typescript:true,
})