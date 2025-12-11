import { initTRPC, TRPCError } from "@trpc/server";
import {Context} from "@/server/context";
import { PayloadRequest } from "payload";
import { User } from "../../payload-types";

const t = initTRPC.context<Context>().create()

const middleware = t.middleware

const isAuth = middleware(async ({ctx, next}) => {
    const req = ctx.req 

    const {user} = req as {user: User | null}

    if (!user || !user.id) {
        throw new TRPCError({code: "UNAUTHORIZED"})
    }

    return next({
        ctx: {
            user,
        }
    })

})

export const router = t.router
export const publicProcedure = t.procedure
export const privateProcedure = t.procedure.use(isAuth)