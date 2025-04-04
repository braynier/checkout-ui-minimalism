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

import {
  CheckoutFormData,
  CheckoutFormErrors,
} from "../../types/checkout-form-types";
import { useCheckoutSchema } from "../../hooks/useCheckoutSchema";

const FORM_DATA_KEY = "CheckoutFormData";

const Checkout = () => {
  const { saveToStorage } = useLocalStorage<CheckoutFormData>();
  const schema = useCheckoutSchema();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<CheckoutFormData>({
    resolver: zodResolver(schema),
    defaultValues: DEFAULT_FORM_VALUES,
    reValidateMode: "onChange",
  });

  const selectedCountry = watch("delivery.country");

  const formSubmission = (data: CheckoutFormData) => {
    saveToStorage(FORM_DATA_KEY, data);
    reset();
  };
  return (
    <section className="border-gray-lighter border-b lg:flex lg:flex-row-reverse lg:border-0">
      <Cart />

      <div className="xxl:pt-10 xxl:pr-[2.375rem] xxl:pl-[27.5rem] xxl:pb-6 xxl:border-r border-gray-lighter w-full">
        <Form onSubmit={handleSubmit(formSubmission)}>
          <FormFieldGroup title="Contact" hiddenOnLg={true}>
            <FormInput
              id="contact.email"
              label="Email Address"
              placeholder="Email Address"
              type="email"
              error={(errors as CheckoutFormErrors).contact?.email?.message}
              register={register("contact.email")}
            />
          </FormFieldGroup>

          <FormFieldGroup title="Delivery">
            <div className="flex gap-3 lg:hidden">
              <FormInput
                id="delivery.firstName"
                label="First Name"
                placeholder="First Name"
                type="text"
                error={
                  (errors as CheckoutFormErrors).delivery?.firstName?.message
                }
                register={register("delivery.firstName")}
              />
              <FormInput
                id="delivery.lastName"
                label="Last Name"
                placeholder="Last Name"
                type="text"
                error={
                  (errors as CheckoutFormErrors).delivery?.lastName?.message
                }
                register={register("delivery.lastName")}
              />
            </div>

            <FormInput
              id="delivery.address"
              label="Address"
              placeholder="Address"
              type="text"
              error={(errors as CheckoutFormErrors).delivery?.address?.message}
              register={register("delivery.address")}
              hiddenOnLg={true}
            />

            <div className="grid grid-cols-2 gap-3 lg:grid-cols-3 [&>*:nth-child(1)]:col-span-2 lg:[&>*:nth-child(1)]:col-auto">
              <FormInput
                id="delivery.city"
                label="City"
                placeholder="City"
                type="text"
                error={errors.delivery?.city?.message}
                register={register("delivery.city")}
              />

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
                error={(errors as CheckoutFormErrors).payment?.method?.message}
                register={register("payment.method")}
                hiddenOnLg={true}
              />

              <div className="border-gray-lighter flex flex-col gap-4 rounded-b-md border-x border-b p-3 pt-3">
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
            <div className="flex items-baseline justify-center gap-2 lg:hidden">
              <Lock />
              <Text size="sm" color="light" position="center">
                All transactions are secured and encrypted
              </Text>
            </div>
          </div>
        </Form>
      </div>
    </section>
  );
};

export default Checkout;
