const stripe = require('stripe')('sk_test_51MamPiLPNdUzkCF3xdRvn0nkLpOrsJFo1um4Z7e07FlQXH6T7HCHhRxYkVjkK2iPW61EMZKoDM0ml6YSdWmAPcEn00E3jb1Gcr');
// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
const handler = async (event) => {
  console.log(event)
  try {
    const {amount} = event.body
    const chargeAmount = (amount * 100)
    
    const paymentIntent = await stripe.paymentIntents.create({
        amount: chargeAmount,
        currency: 'usd',
    })

      return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        clientSecret: paymentIntent.client_secret
      })
    };
}catch(e){

}
}

module.exports = { handler }
