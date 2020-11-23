const catchError = require("../utils/catchError");

const stripe = require("stripe")(
  "sk_test_51HoAvtGaNOaCdqY8oM36c2Y60g1ovUTQvke5tZL8EZAcy1eSZZy4gA7NbybgtwsvMxfkpaEpwGcRzmKzQULjSzGC00VRsL3xDv"
);


exports.createCheckoutSession = catchError(async(req,res,next)=>{
    const {products} = req.body;
   
    const line_items = products.map(item => ({
          price_data: {
                    currency: 'inr',
                    product_data: {
                        name: item.name
                    },
                    unit_amount:item.price*100,
                },
        quantity: item.quantity,
                
    }) );
   

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items,
        mode: "payment",
        success_url: "http://127.0.0.1/payment-success",
        cancel_url:"http://127.0.0.1/payment-fail",
    }); 
    
    res.json({
        id: session.id
    });

});
