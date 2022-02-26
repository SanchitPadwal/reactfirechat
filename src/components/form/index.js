import React from "react";
import { Form, FormGroup, Input, Button } from "./form";

export default function MyForm({ children, ...restProps }) {
  return <Form {...restProps}>{children}</Form>;
}

MyForm.FormGroup = function MyFormGroup({ children, ...restProps }) {
  return <FormGroup {...restProps}>{children}</FormGroup>;
};


MyForm.FormInput = function MyFormInput({ ...restProps }) {
  return <Input {...restProps} />;
};

MyForm.FormButton = function MyFormButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};
