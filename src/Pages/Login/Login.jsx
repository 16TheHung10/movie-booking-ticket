import React, { Fragment } from "react";
import { TextField } from "@material-ui/core";
import "./Login.css";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { UserLogin } from "../../Redux/Actions/UserActions";
import { Link } from "react-router-dom";
const Login = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
    },
    onSubmit: (values) => {
      console.log("submit", values);
      dispatch(UserLogin(values));
    },
  });
  const { handleChange, values, handleSubmit } = formik;
  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <TextField
          name="taiKhoan"
          onChange={handleChange}
          value={values.taiKhoan}
          type="text"
          id="filled-basic"
          label="Username"
          variant="filled"
          className="mb-4 w-full"
          color="secondary"
        />
        <TextField
          name="matKhau"
          onChange={handleChange}
          value={values.matKhau}
          type="password"
          id="filled-basic"
          label="Password"
          variant="filled"
          className="mb-4  w-full"
          color="secondary"
        />
        <button type="submit" className="login-btn">
          Login
        </button>
      </form>
      <div className="flex justify-around">
        <Link className="text-gray-100" to="*">
          Forgot password?
        </Link>
        <Link className="text-gray-100" to="/register">
          Register
        </Link>
      </div>
    </Fragment>
  );
};

export default Login;
