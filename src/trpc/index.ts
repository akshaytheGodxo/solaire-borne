import { publicProcedure, router } from "./trpc";
import { authRouter } from "./routers/auth-router";
import { productRouter } from "./routers/get-product";
import { paymentRouter } from "./routers/payment-router";
export const appRouter = router({
    auth: authRouter,
    product: productRouter,
    payment: paymentRouter
    
});

export type AppRouter = typeof appRouter