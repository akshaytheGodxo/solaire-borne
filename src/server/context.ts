import { getPayload } from "payload";
import config from "@payload-config";
import { PayloadRequest } from "payload";
import { cookies, headers as nextHeaders } from "next/headers";

export async function createContext(opts: {req: PayloadRequest}) {
  const payload = await getPayload({ config });
  const token = (await cookies()).get("payload-token")?.value;

  let user = null;
  const headers = await nextHeaders()
  const result = await payload.auth({
    headers,
    canSetHeaders: false,
  })

  user = result.user ?? null

  return {
    payload,
    req: opts.req,
    user,
  };
}

export type Context = Awaited<ReturnType<typeof createContext>>;