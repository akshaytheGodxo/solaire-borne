import { AuthCredentialsValidator } from "@/lib/validators/account-credentials";
import { router, publicProcedure } from "../trpc";
import { getPayloadClient } from "@/get-payload";
import { TRPCError } from "@trpc/server";
import { cookies } from "next/headers";
import z from "zod";

export const authRouter = router({
  createPayloadUser: publicProcedure
    .input(AuthCredentialsValidator)
    .mutation(async ({ input }) => {
      const { email, password } = input;
      const payload = await getPayloadClient();

      //check if user already exists

      const { docs: users } = await payload.find({
        collection: "users",
        where: {
          email: {
            equals: email,
          },
        },
      });

      if (users.length !== 0) throw new TRPCError({ code: "CONFLICT" });

      await payload.create({
        collection: "users",
        data: {
          email,
          password,
          role: "user",
        },
      });

      return {
        success: true,
        sentToEmail: email,
      };
    }),

  verifyEmail: publicProcedure
    .input(
      z.object({
        token: z.string(),
      })
    )
    .query(async ({ input }) => {
      const { token } = input;

      const payload = await getPayloadClient();

      const isVerified = await payload.verifyEmail({
        collection: "users",
        token,
      });

      if (!isVerified) throw new TRPCError({ code: "UNAUTHORIZED" });

      return { success: true };
    }),

  signIn: publicProcedure
    .input(AuthCredentialsValidator)
    .mutation(async ({ input, ctx }) => {
      const { email, password } = input;
      const payload = await getPayloadClient();
      try {
        const result = await payload.login({
          collection: "users",
          data: {
            email,
            password,
          },
        });

        const token = result.token || ""  
        const cookieStore = await cookies();
        cookieStore.set("payload-token", token, {
          httpOnly: true,
          path: "/",
          expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
        })
        if (!token) throw new Error("No token returned from payload");
        
        return {success: true}
      } catch (error) {
        throw new TRPCError({ code: "UNAUTHORIZED" });
      }
    }),
});
