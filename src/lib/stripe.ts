import Stripe from "stripe";

const stripeServerSide = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2023-08-16",
});

export { stripeServerSide };