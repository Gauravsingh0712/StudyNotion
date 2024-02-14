import React, { useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  // to set password both type text and password
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form>
      {/* email address */}
      <label>
        <p>
          Email Address<sup>*</sup>
        </p>
        <input
          required
          type="email"
          placeholder="Enter Email Address"
          value={formData.email}
          onChange={changeHandler}
          name="email"
        />
      </label>

      {/* password */}
      <label>
        <p>
          Password<sup>*</sup>
        </p>
        <input
          required
          type={showPassword ? "text" : "password"}
          placeholder="Enter Password"
          value={formData.password}
          onChange={changeHandler}
          name="password"
        />
        <span onClick={() => setShowPassword((prev) => !prev)}>
          {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
        </span>

        <Link to="#">
          <p>Forgot Password</p>
        </Link>
      </label>

      <button>Sign In</button>
    </form>
  );
};

export default LoginForm;
