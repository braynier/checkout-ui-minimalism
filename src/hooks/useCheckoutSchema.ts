import { useEffect, useState } from "react";
import { getCheckoutSchema } from "../schemas/checkout-form-schema";

export const useCheckoutSchema = () => {
  const [schema, setSchema] = useState(getCheckoutSchema(true));

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");

    const handler = (event: MediaQueryListEvent) => {
      setSchema(getCheckoutSchema(!event.matches));
    };

    mediaQuery.addEventListener("change", handler);
    setSchema(getCheckoutSchema(!mediaQuery.matches));

    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return schema;
};
