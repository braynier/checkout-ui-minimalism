import { CheckoutFormData } from "../types/checkout-form-types";

export const DEFAULT_FORM_VALUES: CheckoutFormData = {
  contact: { email: "" },
  delivery: {
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "Arizona",
    zip: "",
    country: "United States",
  },
  payment: {
    method: "Credit Card",
    cardNumber: "",
    expirationDate: "",
    securityCode: "",
    cardholderName: "",
  },
};
