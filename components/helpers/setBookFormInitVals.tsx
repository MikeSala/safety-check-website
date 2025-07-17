// TODO: Remove file when testing no longer required
import { FieldValues, UseFormSetValue } from "react-hook-form";

export const setBookFormInitVals = (setValue: UseFormSetValue<FieldValues>) => {
  setValue("ownerFullName", "Test Owner Full Name");
  setValue("date", new Date());
  setValue("ownerPhone", "Test Owner Phone");
  setValue("ownerMobile", "Test Owner Mobile");
  setValue("billingAddress", "Test Billing Address");
  setValue("ownerEmail", "nathan.c.power@icloud.com");
  setValue("properties[0].address", "Test Address");
  setValue("properties[0].service", "smoke-alarm-service");
  setValue("properties[0].complianceSubscription", "yes-with-gas");
  setValue("properties[0].propertyManagerFullName", "Property Manager Name");
  setValue("properties[0].propertyManagerPhone", "Property Manager Phone");
  setValue("properties[0].propertyManagerEmail", "nathan.c.power@icloud.com");
  setValue("confirm", true);
};
