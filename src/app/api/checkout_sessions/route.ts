import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "sk_test_dummyKeyForBuildVariables", {
    apiVersion: "2026-02-25.clover",
});

export async function POST(request: Request) {
    try {
        const { amount } = await request.json();

        if (!amount || isNaN(amount)) {
            return NextResponse.json({ error: "Invalid amount" }, { status: 400 });
        }

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: [
                {
                    price_data: {
                        currency: "usd",
                        product_data: {
                            name: "Donation to Capital Bearcub",
                            description: "Thank you for supporting financial literacy for children!",
                        },
                        unit_amount: Math.round(amount * 100),
                    },
                    quantity: 1,
                },
            ],
            mode: "payment",
            success_url: `${request.headers.get("origin")}/donate?success=true`,
            cancel_url: `${request.headers.get("origin")}/donate?canceled=true`,
        });

        return NextResponse.json({ url: session.url });
    } catch (error: any) {
        console.error("Stripe Error:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
