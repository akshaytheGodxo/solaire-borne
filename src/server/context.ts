import { getPayload } from "payload";
import config from "@payload-config";
import type { FetchCreateContextFnOptions } from "@trpc/server/adapters/fetch";
import { NextRequest, NextResponse } from "next/server";


export async function createContext(opts: {req: NextRequest}, {resHeaders}: FetchCreateContextFnOptions) {
  const payload = await getPayload({ config });
  
  return {
    payload,
    req: opts.req,
    resHeaders,
  };
}

export type Context = Awaited<ReturnType<typeof createContext>>;