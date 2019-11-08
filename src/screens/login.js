import React, { useState, memo, useEffect, useRef } from "react";
import Form from "../components/form";
import TextInput from "../components/textInput";
import { fields } from "./formData";
import { LocaleConsumer } from "../context/localeContext";
import styles from "../styles";

const Login = ({}) => {
  const onSubmit = values => {
    console.log(values);
  };

  return (
    <div>
      <Form
        initialValues={fields.reduce(
          (p, c) => ({ ...p, [c.name]: c.value }),
          {}
        )}
        onSubmit={onSubmit}
        fields={fields}
      />
    </div>
  );
};

export default memo(Login);
