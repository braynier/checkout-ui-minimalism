import * as z from "zod";

export const checkoutSchema = z.object({
  contact: z.object({
    email: z
      .string()
      .min(1, { message: "Email is required" })
      .email({ message: "Please enter a valid email" }),
  }),
  delivery: z.object({
    firstName: z.string().min(1, { message: "First name is required" }),
    lastName: z.string().min(1, { message: "Last name is required" }),
    address: z.string().min(1, { message: "Address is required" }),
    city: z.string().min(1, { message: "City is required" }),
    state: z.string().min(1, { message: "State is required" }),
    zip: z
      .string()
      .min(1, { message: "ZIP code is required" })
      .regex(/^\d+$/, { message: "ZIP must be numbers only" }),
    country: z.string().min(1, { message: "Country is required" }),
  }),
  payment: z.object({
    method: z.string().min(1, { message: "Payment method is required" }),
    cardNumber: z
      .string()
      .min(1, { message: "Card number is required" })
      .regex(/^\d{16}$/, { message: "Card number must be 16 digits" }),
    expirationDate: z
      .string()
      .min(1, { message: "Expiration date is required" })
      .regex(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/, { message: "Use MM/YY format" }),
    securityCode: z
      .string()
      .min(1, { message: "Security code is required" })
      .regex(/^\d{3,4}$/, { message: "3-4 digits required" }),
    cardholderName: z.string().min(1, { message: "Name is required" }),
  }),
});
