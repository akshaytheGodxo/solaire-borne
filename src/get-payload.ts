import { getPayload } from "payload";
import config from "@payload-config";
import nodemailer from "nodemailer"



export const getPayloadClient = async() => {
    return await getPayload({config});
}