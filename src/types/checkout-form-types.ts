import { z } from "zod";
import { checkoutSchema } from "../schemas/checkout-form-schema";

export type CheckoutFormData = z.infer<typeof checkoutSchema>;
