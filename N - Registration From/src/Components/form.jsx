import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import "./form.css";

const DisplayingErrorMessagesSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("*first name is required"),
  secondName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("*second name is required"),
  phoneNumber: Yup.string()
    .required("*phone number is required")
    .matches(
        /^(\[-\s]?)?[0]?(91)?[789]\d{9}$/,
        "*Phone number is not valid"
      ),
  email: Yup.string().email("Invalid email address").required("*email is required"),
  password: Yup.string()
    .required("*password is required")
    .matches(
      /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,16}$/,
      "*Password must be 8 to 16 characters, must contain at least one uppercase letter, one number and one special character"
    ),
});

function Forms() {
  const [msg, setMsg] = useState(false)
  const onSubmitForm = (e) => {
     setMsg(true)
   
  }


  return (
    <div className="form-container">
      <Formik
        initialValues={{
          firstName: "",
          secondName: "",
          phoneNumber: "",
          email: "",
          password: "",
        }}
        validationSchema={DisplayingErrorMessagesSchema}
        onSubmit={onSubmitForm}
      >
        {({ errors, touched }) => (
          <div className="box">
            <h2>Register Here</h2>
            <Form>
              <div>
                <label htmlFor="firstName">First Name : </label>
                <br />
                <Field id="firstName" type="text" name="firstName" />
                {touched.firstName && errors.firstName && (
                  <span>{errors.firstName}</span>
                )}
              </div>

              <div>
                <label htmlFor="secondName">Second Name : </label>
                <br />
                <Field id="secondName" type="text" name="secondName" />
                {touched.secondName && errors.secondName && (
                  <span>{errors.secondName}</span>
                )}
              </div>
              <div>
                <label htmlFor="phoneNumber">Phone Number : </label>
                <br />
                <Field id="phoneNumber" type="text" name="phoneNumber" />
                {touched.phoneNumber && errors.phoneNumber && (
                  <span>{errors.phoneNumber}</span>
                )}
              </div>

              <div>
                <label htmlFor="email">Email Address : </label>
                <br />
                <Field id="email" type="email" name="email" />
                {touched.email && errors.email && <span>{errors.email}</span>}
              </div>
              <div>
                <label htmlFor="password">Password : </label>
                <br />
                <Field id="password" type="password" name="password" />
                {touched.password && errors.password && (
                  <span>{errors.password}</span>
                )}
              </div>
              <div className="btn">
                <button type="submit">{msg ? 'Submitted' : 'Submit'}</button>
              </div>
              
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
}

export default Forms;
