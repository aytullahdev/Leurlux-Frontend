import { loadStripe } from '@stripe/stripe-js'
export async function checkout({ lineItems, route }) {
    let strippromise = null
    let getstripe = () => {
        if (!strippromise) {
            strippromise = loadStripe(process.env.
                NEXT_PUBLIC_STRIP_PUBLIC_TOKEN)
        }
        return strippromise

    }
    const stripe = await getstripe()
    await stripe.redirectToCheckout({
        mode: 'payment',
        lineItems,
        successUrl: `${window.location.origin}/${route}&session_id={CHECKOUT_SESSION_ID}`,
        cancelUrl: `${window.location.origin}/${route}&session_id={CHECKOUT_SESSION_ID}`
    })

}