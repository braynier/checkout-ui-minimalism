import { ChangeEvent, FormEvent, useState } from "react";
import Cart from "../cart/Cart";
import FormInput from "../form/FormInput";
import Button from "../ui/Button";
import FormSelectInput from "../form/FormSelect";
import { Text } from "../ui/Text";
import FormFieldGroup from "../form/FormField";
import Form from "../form/Form";
import Lock from "../icons/benefits/Lock";
import { countries, countryStatesMap, options } from "../../../data/data";

const Checkout = () => {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "United States",
    cardNumber: "",
    paymentMethod: "",
    expirationDate: "",
    securityCode: "",
    cardholderName: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
      ...(name === "country" && { state: "" }), // Reset state when country changes
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <section className="border-gray-lighter border-b">
      <Cart />
      <Form onSubmit={handleSubmit}>
        <FormFieldGroup title="Contact">
          <FormInput
            id="email"
            label="Email Address"
            name="email"
            placeholder="Email Address"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
        </FormFieldGroup>

        <FormFieldGroup title="Delivery">
          <div className="flex gap-3">
            <FormInput
              id="firstName"
              label="First Name"
              name="firstName"
              placeholder="First Name"
              type="text"
              value={formData.firstName}
              onChange={handleChange}
            />
            <FormInput
              id="lastName"
              label="Last Name"
              name="lastName"
              placeholder="Last Name"
              type="text"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
          <FormInput
            id="address"
            label="Address"
            name="address"
            placeholder="Address"
            type="text"
            value={formData.address}
            onChange={handleChange}
          />
          <FormInput
            id="city"
            label="City"
            name="city"
            placeholder="City"
            type="text"
            value={formData.city}
            onChange={handleChange}
          />
          <div className="flex gap-3">
            <FormSelectInput
              id="state"
              label="State / Province"
              name="state"
              options={countryStatesMap[formData.country] || []}
              value={formData.state}
              onChange={handleChange}
            />
            <FormInput
              id="zip"
              label="ZIP / Postal Code"
              name="zip"
              placeholder="ZIP / Postal Code"
              type="text"
              value={formData.zip}
              onChange={handleChange}
            />
          </div>
          <FormSelectInput
            id="country"
            label="Country"
            name="country"
            options={countries}
            value={formData.country}
            onChange={handleChange}
          />
        </FormFieldGroup>

        <FormFieldGroup title="Payment">
          <Text size="xs" color="light" position="left">
            All transactions are secure and encrypted.
          </Text>

          <div className="bg-neutral-50">
            <FormInput
              label="Payment Method"
              id="paymentMethod"
              name="paymentMethod"
              type="radio"
              placeholder="Payment Method"
              value={formData.paymentMethod}
              onChange={handleChange}
              options={options}
              checkedValue="Credit Card"
            />

            <div className="border-gray-lighter flex flex-col gap-3 rounded-b-md border-x border-b p-3">
              <FormInput
                id="cardNumber"
                label="Card Number"
                name="cardNumber"
                placeholder="Card Number"
                type="text"
                value={formData.cardNumber}
                onChange={handleChange}
              />

              <div className="flex gap-3">
                <FormInput
                  id="expirationDate"
                  label="Expiration (MM/YY)"
                  name="expirationDate"
                  placeholder="Expiration (MM/YY)"
                  type="text"
                  value={formData.expirationDate}
                  onChange={handleChange}
                />
                <FormInput
                  id="securityCode"
                  label="Security Code"
                  name="securityCode"
                  placeholder="Security Code"
                  type="text"
                  value={formData.securityCode}
                  onChange={handleChange}
                />
              </div>

              <FormInput
                id="cardholderName"
                label="Name on Card"
                name="cardholderName"
                placeholder="Name on Card"
                type="text"
                value={formData.cardholderName}
                onChange={handleChange}
              />
            </div>
          </div>
        </FormFieldGroup>

        <div className="flex flex-col gap-4 bg-white px-4 pb-3">
          <Button>Complete Order</Button>
          <div className="flex items-baseline justify-center gap-2">
            <Lock />
            <Text size="sm" color="light" position="center">
              All transactions are secured and encrypted
            </Text>
          </div>
        </div>
      </Form>
    </section>
  );
};

export default Checkout;
