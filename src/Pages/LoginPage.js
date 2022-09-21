import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { FormWrapper, SubmitBtn } from "./Styles";
import { useLogin } from "../shared/hooks/useLogin";
import { useForm } from "react-hook-form";
import LoginLayout from "../components/LoginLayout";
import CustomInput from "../components/CustomInput";
import Zoom from 'react-reveal'

const LoginPage = () => {
  const navigate = useNavigate();
  const { login, loggedIn } = useLogin();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { email: "", password: "" },
  });

  const onSubmit = () => {
    login();
    navigate("/");
  };

  if (loggedIn) return <Navigate to="/" />;
  return (
    <Zoom>
    <LoginLayout>
      <FormWrapper>
        <h3>Login</h3>
        <h4>Kindly enter your details to log in</h4>
        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off" >
          <CustomInput
            type="email"
            label="Email Address"
            id="email"
            name="email"
            register={register}
            validation={{
              required: true,
              pattern:
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            }}
            errors={errors}
          />
          <CustomInput
            type="password"
            label="Password"
            id="password"
            name="password"
            register={register}
            validation={{
              required: true,
              pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
            }}
            errors={errors}
          />

          <SubmitBtn type="submit" className="mb-4">Log In</SubmitBtn>
          <h5>forgot your password?</h5>
        </form>
        <h6>
          Privacy Policy <span>and</span> Terms of services
        </h6>
      </FormWrapper>
    </LoginLayout>
    </Zoom>
  );
};

export default LoginPage;
