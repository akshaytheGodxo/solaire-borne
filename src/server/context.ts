import { getPayload } from "payload";
import config from "@payload-config"

export async function createContext() {
    const payload = await getPayload({ config });

    return {
        payload,
    }
}


export type Context = Awaited<ReturnType<typeof createContext>>