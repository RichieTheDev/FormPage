import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const App = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      country: "United Kingdom",
      password: "",
      terms: "",
    },
    onSubmit: (value) => {
      console.log(value);
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(20, "Name must not exceed 20 characters")
        .required("Name must be entered"),
      email: Yup.string().required("Email must be entered"),
      password: Yup.string()
        .min(5, "Password must contain atleast 5 characters")
        .required("Password must be entered"),
      terms: Yup.array().required("You Must agree to T & Cs"),
    }),
  });
  return (
    <div className="h-screen flex justify-center items-center p-20 bg-cover bg-no-repeat bg-center bg-[url('./assets/Car.jpg')]">
      <form
        onSubmit={formik.handleSubmit}
        className="md:bg-white rounded-2xl md:px-14 "
      >
        <div>
          <h1 className="font-bold text-3xl italic mt-6">Let's Get Started</h1>
          <label
            htmlFor="name"
            className={`mt-4 block text-lg font-medium ${
              formik.touched.name && formik.errors.name ? "text-red-400" : ""
            }`}
          >
            {formik.touched.name && formik.errors.name
              ? formik.errors.name
              : "Name"}
          </label>
          <input
            type="text"
            name="name"
            onBlur={formik.handleBlur}
            value={formik.values.name}
            onChange={formik.handleChange}
            placeholder="Enter your Name"
            className="rounded-xl w-72 p-2 border-2 border-gray-400 focus:outline-teal-500 "
          />
          <label
            htmlFor="email"
            className={`mt-4 block text-lg font-medium ${
              formik.touched.email && formik.errors.email ? "text-red-400" : ""
            }`}
          >
            {formik.touched.email && formik.errors.email
              ? formik.errors.email
              : "Email"}
          </label>
          <input
            type="email"
            name="email"
            onBlur={formik.handleBlur}
            value={formik.values.email}
            onChange={formik.handleChange}
            placeholder="Enter your Email"
            className="rounded-xl w-72 p-2 border-2 border-gray-400 focus:outline-teal-500 "
          />
          <label
            htmlFor="country"
            className={`mt-4 block text-lg font-medium ${
              formik.errors.country ? "text-red-400" : ""
            }`}
          >
            {formik.touched.country && formik.errors.country
              ? formik.errors.country
              : "Country"}
          </label>
          <select
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            name="country"
            className="rounded-lg shadow-xl bg-slate-100"
          >
            <option value="uk">United Kingdom</option>
            <option value="usa">United States</option>
            <option value="nga">Nigeria</option>
            <option value="kenya">Kenya</option>
          </select>
          <label
            htmlFor="password"
            className={`mt-4 block text-lg font-medium ${
              formik.touched.password && formik.errors.password
                ? "text-red-400"
                : ""
            }`}
          >
            {formik.touched.password && formik.errors.password
              ? formik.errors.password
              : "Password"}
          </label>
          <input
            type="password"
            name="password"
            onBlur={formik.handleBlur}
            value={formik.values.password}
            onChange={formik.handleChange}
            placeholder="Enter your Password"
            className="rounded-xl w-72 p-2 border-2 border-gray-400 focus:outline-teal-500 "
          />

          <label
            htmlFor="terms"
            className={`mt-4 block text-lg font-medium ${
              formik.touched.terms && formik.errors.terms ? "text-red-400" : ""
            }`}
          >
            {formik.touched.terms && formik.errors.terms
              ? formik.errors.terms
              : "Terms & conditions"}
          </label>
          <div className="flex space-x-2 items-center">
            <input
              type="checkbox"
              name="terms"
              onBlur={formik.handleBlur}
              value="terms"
              onChange={formik.handleChange}
              className="rounded-xl  p-2 border-2 border-gray-400 focus:outline-teal-500 "
            />
            <p>I hereby agree to the terms and conditions </p>
          </div>
          <button
            type="submit"
            onSubmit={() => navigate("/Submit")}
            className="py-2 px-4 rounded-xl w-64 mt-2 mb-6 text-lg  bg-black text-white"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default App;
