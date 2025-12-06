import { publicProcedure, router } from "./trpc";
import { authRouter } from "./routers/auth-router";
import { productRouter } from "./routers/get-product";
export const appRouter = router({
    auth: authRouter,
    product: productRouter
});

export type AppRouter = typeof appRouter