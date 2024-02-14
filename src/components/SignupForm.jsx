import React, { useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
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
    <div>
      {/* student-instructor tab */}
      <div>
        <button>Student</button>
        <button>Instructor</button>
      </div>

      <form>
        {/* firstname and lastname */}
        <div>
          <label>
            <p>
              First Name <sup>*</sup>
            </p>
            <input
              required
              type="text"
              name="firstName"
              placeholder="First Name"
              onChange={changeHandler}
              value={formData.firstName}
            />
          </label>

          <label>
            <p>
              Last Name <sup>*</sup>
            </p>
            <input
              required
              type="text"
              name="lastName"
              placeholder="Last Name"
              onChange={changeHandler}
              value={formData.lastName}
            />
          </label>
        </div>

        {/* email */}
        <label>
          <p>
            Email <sup>*</sup>
          </p>
          <input
            required
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={changeHandler}
            value={formData.email}
          />
        </label>

        <div>
          {/* password and confirm password */}
          <label>
            <p>
              Password <sup>*</sup>
            </p>
            <input
              required
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              onChange={changeHandler}
              value={formData.password}
            />
            <span onClick={() => setShowPassword((prev) => !prev)}>
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </label>
          <label>
            <p>
              Confirm Password <sup>*</sup>
            </p>
            <input
              required
              type={showPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm Password"
              onChange={changeHandler}
              value={formData.confirmPassword}
            />
            <span onClick={() => setShowPassword((prev) => !prev)}>
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </label>
        </div>
        <button>Create Account</button>
      </form>
    </div>
  );
};

export default SignupForm;
