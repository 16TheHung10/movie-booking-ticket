import React from "react";
import { TextField } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { UserRegister } from "../../Redux/Actions/UserActions";
import { Link } from "react-router-dom";
const Register = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDt: "",
      maNhom: "GP01",
      hoTen: "",
    },
    onSubmit: (values) => {
      dispatch(UserRegister(values));
    },
  });
  const { handleChange, values, handleSubmit } = formik;
  return (
    <div className="py-8">
      <form onSubmit={handleSubmit}>
        <TextField
          id="taiKhoan"
          name="taiKhoan"
          onChange={handleChange}
          value={values.taiKhoan}
          type="text"
          label="Username"
          variant="filled"
          className="mb-4 w-full"
          color="primary"
        />
        <TextField
          id="matKhau"
          name="matKhau"
          onChange={handleChange}
          value={values.matKhau}
          type="password"
          label="Password"
          variant="filled"
          className="mb-4  w-full"
          color="primary"
        />
        <TextField
          name="email"
          onChange={handleChange}
          value={values.email}
          type="text"
          label="Email"
          variant="filled"
          className="mb-4  w-full"
          color="primary"
        />
        <TextField
          name="soDt"
          onChange={handleChange}
          value={values.soDt}
          type="text"
          label="Số điện thoại"
          variant="filled"
          className="mb-4  w-full"
          color="primary"
        />
        <TextField
          name="hoTen"
          onChange={handleChange}
          value={values.hoTen}
          type="text"
          label="Họ tên"
          variant="filled"
          className="mb-4  w-full"
          color="primary"
        />
        <button type="submit" className="login-btn">
          Register
        </button>
        <Link className="text-center text-gray-100 w-1/3" to="/login">
          Login
        </Link>
      </form>
    </div>
  );
};

export default Register;
