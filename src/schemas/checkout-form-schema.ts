import * as z from "zod";

const validations = {
  email: z.string().min(1, "Email required").email("Invalid email"),

  firstName: z.string().min(1, "First name required"),
  lastName: z.string().min(1, "Last name required"),
  address: z.string().min(1, "Address required"),
  city: z.string().min(1, "City required"),
  state: z.string().min(1, "State required"),
  zip: z.string().min(1, "ZIP required").regex(/^\d+$/, "Numbers only"),
  country: z.string().min(1, "Country required"),

  paymentMethod: z.string().min(1, "Payment method required"),
  cardNumber: z
    .string()
    .min(1, "Card number required")
    .regex(/^\d{16}$/, "Must be 16 digits"),
  expiration: z
    .string()
    .min(1, "Expiration required")
    .regex(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/, "Use MM/YY format"),
  securityCode: z
    .string()
    .min(1, "Security code required")
    .regex(/^\d{3,4}$/, "3-4 digits required"),
  cardholderName: z.string().min(1, "Name required"),
};

export const checkoutSchemaMobile = z.object({
  contact: z.object({ email: validations.email }),
  delivery: z.object({
    firstName: validations.firstName,
    lastName: validations.lastName,
    address: validations.address,
    city: validations.city,
    state: validations.state,
    zip: validations.zip,
    country: validations.country,
  }),
  payment: z.object({
    method: validations.paymentMethod,
    cardNumber: validations.cardNumber,
    expirationDate: validations.expiration,
    securityCode: validations.securityCode,
    cardholderName: validations.cardholderName,
  }),
});

export const checkoutSchemaDesktop = z.object({
  delivery: z.object({
    city: validations.city,
    state: validations.state,
    zip: validations.zip,
    country: validations.country,
  }),
  payment: z.object({
    cardNumber: validations.cardNumber,
    expirationDate: validations.expiration,
    securityCode: validations.securityCode,
    cardholderName: validations.cardholderName,
  }),
});

export const getCheckoutSchema = (isMobile: boolean) =>
  isMobile ? checkoutSchemaMobile : checkoutSchemaDesktop;
