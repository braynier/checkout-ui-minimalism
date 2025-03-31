import Cashback from "../src/components/icons/benefits/Cashback";
import Rating from "../src/components/icons/benefits/Rating";
import Support from "../src/components/icons/benefits/Support";

import Visa from "../src/components/icons/payment/Visa";
import Mastercard from "../src/components/icons/payment/Mastercard";
import Ames from "../src/components/icons/payment/Ames";
import Diner from "../src/components/icons/payment/Diner";
import Count from "../src/components/icons/payment/Count";

import productImage from "../src/assets/product.png";

export const benefits = [
  {
    id: 1,
    title: "90-Day Money Back Guarantee",
    description:
      "We love our products and we're confident you will too! If you're not in love with your LogoIpsum product, our easy return and refund policy is designed to make things as easy as possible for you.",
    icon: Cashback,
  },
  {
    id: 2,
    title: "Over 75,000+ Happy Customer",
    description:
      "Everyone that tries LogoIpsum says it’s a must-have. We invest a lot of love and care into making our products, so you can enjoy seeing results when using it.",
    icon: Rating,
  },
  {
    id: 3,
    title: "Professional Customer Support",
    description:
      "Our customer service works 24/7 for your satisfaction. Feel free to reach out to us anytime.",
    icon: Support,
  },
];

export const options = [
  {
    id: 1,
    title: "Credit Card",
    icons: [Visa, Mastercard, Ames, Diner, Count],
  },
];

export const cart = [
  {
    id: 1,
    name: "LogoIpsum Product 1",
    price: 299.97,
    quantity: 3,
    image: productImage,
  },
];

export const countries = ["United States", "Canada", "Mexico"];

export const countryStatesMap: Record<string, string[]> = {
  "United States": ["Arizona", "Kansas", "California", "Texas", "New York"],
  Canada: ["Ontario", "Quebec", "British Columbia", "Alberta"],
  Mexico: ["Jalisco", "Nuevo León", "Puebla", "Yucatán"],
};
