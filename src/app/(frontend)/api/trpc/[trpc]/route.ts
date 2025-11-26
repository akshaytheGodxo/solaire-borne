import { appRouter } from "@/trpc"
import { fetchRequestHandler } from "@trpc/server/adapters/fetch"
import { NextRequest, NextResponse } from "next/server";
import { createContext } from "@/server/context";
// this function will extract get and post request from trpc

const handler = (req: NextRequest) => {

    return fetchRequestHandler({
        endpoint: "/api/trpc",
        req,
        
        router: appRouter,
        // automatically handled,
        createContext: ({}) => ({}),

        onError: ({ path, error }) => {
            console.error(`trpc failed on ${path ?? "<no-path>"}: ${error.message}`);
        }

    })
    
}

export { handler as GET, handler as POST };