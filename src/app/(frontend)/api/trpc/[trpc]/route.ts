import { appRouter } from "@/trpc"
import { fetchRequestHandler } from "@trpc/server/adapters/fetch"
import { NextRequest } from "next/server";
// this function will extract get and post request from trpc

const handler = (req: NextRequest) => {
    console.log("req",req);

     fetchRequestHandler({
        endpoint: "/api/trpc",
        req,
        router: appRouter,
        createContext: ({}) => ({}),

        onError: ({ path, error }) => {
            console.error(`trpc failed on ${path ?? "<no-path>"}: ${error.message}`);
        }

    })
    
}

export { handler as GET, handler as POST };