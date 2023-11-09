import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";

const RegisterForm = ({ refresh }) => {
  const [status, setStatus] = useState("sign in");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const loginUser = async (e) => {
    e.preventDefault();
    const { email, password } = data;
    try {
      const { data } = await axios.post("/login", {
        email,
        password,
      });
      if (data.error) {
        alert(1);
        toast.error(data.error);
      } else {
        alert(2);
        setData({
          name: "",
          email: "",
          password: "",
        });
        refresh();
      }
    } catch (error) {
      // toast.
    }
  };

  const signUser = async (e) => {
    e.preventDefault();
    const { name, email, password } = data;
    try {
      const { data } = await axios.post("/register", {
        name,
        email,
        password,
      });
      if (data.error) {
        toast.error(data.error);
      } else {
        setData({ email: "", password: "" });
        toast.success("Register successful");
        setStatus("login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div id="form-container">
      <form id="form" onSubmit={status === "login" ? loginUser : signUser}>
        {status === "sign in" && (
          <div className="form__input-container">
            <input
              type="name"
              id="name"
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
              placeholder="name"
            />
            <span></span>
          </div>
        )}
        <div className="form__input-container">
          <input
            type="email"
            id="email"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
            placeholder="email"
          />
          <span></span>
        </div>

        <div className="form__input-container">
          <input
            type="password"
            id="password"
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
            placeholder="password"
          />
          <span></span>
        </div>

        <div className="form__button-container">
          <input type="reset" value="reset" />
          <input type="submit" value={status} />
        </div>

        <div>
          {status === "login" ? "Not a member? " : "already a user "}
          <a
            href="#"
            onClick={() => {
              setStatus(status === "login" ? "sign in" : "login");
            }}
          >
            {status === "login" ? "sign in" : "login"}
          </a>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
