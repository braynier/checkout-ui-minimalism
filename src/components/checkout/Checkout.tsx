import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Cart from "../cart/Cart";
import Button from "../ui/Button";
import { Text } from "../ui/Text";
import Lock from "../icons/benefits/Lock";
import Form from "../form/Form";
import FormInput from "../form/FormInput";
import FormSelectInput from "../form/FormSelect";
import FormFieldGroup from "../form/FormField";
import { useLocalStorage } from "../../hooks/useLocalStorage";

import { countries, countryStatesMap, options } from "../../../data/data";
import { DEFAULT_FORM_VALUES } from "../../constants/checkout-form-defaults";
import { CheckoutFormData } from "../../types/checkout-form-types";
import { checkoutSchema } from "../../schemas/checkout-form-schema";

const FORM_DATA_KEY = "CheckoutFormData";

const Checkout = () => {
  const { saveToStorage } = useLocalStorage<CheckoutFormData>();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: DEFAULT_FORM_VALUES,
    reValidateMode: "onChange",
  });

  const selectedCountry = watch("delivery.country");

  const onSubmit = (data: CheckoutFormData) => {
    saveToStorage(FORM_DATA_KEY, data);

    console.log("Form submitted:", data);

    reset();
  };
  return (
    <section className="border-gray-lighter border-b">
      <Cart />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormFieldGroup title="Contact">
          <FormInput
            id="contact.email"
            label="Email Address"
            placeholder="Email Address"
            type="email"
            error={errors.contact?.email?.message}
            register={register("contact.email")}
          />
        </FormFieldGroup>

        <FormFieldGroup title="Delivery">
          <div className="flex gap-3">
            <FormInput
              id="delivery.firstName"
              label="First Name"
              placeholder="First Name"
              type="text"
              error={errors.delivery?.firstName?.message}
              register={register("delivery.firstName")}
            />
            <FormInput
              id="delivery.lastName"
              label="Last Name"
              placeholder="Last Name"
              type="text"
              error={errors.delivery?.lastName?.message}
              register={register("delivery.lastName")}
            />
          </div>

          <FormInput
            id="delivery.address"
            label="Address"
            placeholder="Address"
            type="text"
            error={errors.delivery?.address?.message}
            register={register("delivery.address")}
          />

          <FormInput
            id="delivery.city"
            label="City"
            placeholder="City"
            type="text"
            error={errors.delivery?.city?.message}
            register={register("delivery.city")}
          />

          <div className="flex gap-3">
            <FormSelectInput
              id="delivery.state"
              label="State / Province"
              options={countryStatesMap[selectedCountry] || []}
              error={errors.delivery?.state?.message}
              register={register("delivery.state")}
            />
            <FormInput
              id="delivery.zip"
              label="ZIP / Postal Code"
              placeholder="ZIP / Postal Code"
              type="text"
              error={errors.delivery?.zip?.message}
              register={register("delivery.zip")}
            />
          </div>

          <FormSelectInput
            id="delivery.country"
            label="Country"
            options={countries}
            error={errors.delivery?.country?.message}
            register={register("delivery.country")}
          />
        </FormFieldGroup>

        <FormFieldGroup title="Payment">
          <Text size="xs" color="light" position="left">
            All transactions are secure and encrypted.
          </Text>

          <div className="bg-neutral-50">
            <FormInput
              label="Payment Method"
              id="payment.method"
              type="radio"
              options={options}
              error={errors.payment?.method?.message}
              register={register("payment.method")}
            />

            <div className="border-gray-lighter flex flex-col gap-3 rounded-b-md border-x border-b p-3">
              <FormInput
                id="payment.cardNumber"
                label="Card Number"
                placeholder="Card Number"
                type="text"
                error={errors.payment?.cardNumber?.message}
                register={register("payment.cardNumber")}
              />

              <div className="flex gap-3">
                <FormInput
                  id="payment.expirationDate"
                  label="Expiration (MM/YY)"
                  placeholder="MM/YY"
                  type="text"
                  error={errors.payment?.expirationDate?.message}
                  register={register("payment.expirationDate")}
                />
                <FormInput
                  id="payment.securityCode"
                  label="Security Code"
                  placeholder="Security Code"
                  type="text"
                  error={errors.payment?.securityCode?.message}
                  register={register("payment.securityCode")}
                />
              </div>

              <FormInput
                id="payment.cardholderName"
                label="Name on Card"
                placeholder="Name on card"
                type="text"
                error={errors.payment?.cardholderName?.message}
                register={register("payment.cardholderName")}
              />
            </div>
          </div>
        </FormFieldGroup>

        <div className="flex flex-col gap-4 bg-white px-4 pb-3">
          <Button type="submit">Complete Order</Button>
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
