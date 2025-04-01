import { z } from "zod";
import {
  checkoutSchemaDesktop,
  checkoutSchemaMobile,
} from "../schemas/checkout-form-schema";

export type MobileFormData = z.infer<typeof checkoutSchemaMobile>;
export type DesktopFormData = z.infer<typeof checkoutSchemaDesktop>;

export type CheckoutFormData = MobileFormData | DesktopFormData;
export type CompleteCheckoutFormData = MobileFormData & DesktopFormData;

export type CheckoutFormErrors = {
  contact?: {
    email?: { message?: string };
  };
  delivery?: {
    firstName?: { message?: string };
    lastName?: { message?: string };
    address?: { message?: string };
    city?: { message?: string };
    state?: { message?: string };
    zip?: { message?: string };
    country?: { message?: string };
  };
  payment?: {
    method?: { message?: string };
    cardNumber?: { message?: string };
    expirationDate?: { message?: string };
    securityCode?: { message?: string };
    cardholderName?: { message?: string };
  };
};
