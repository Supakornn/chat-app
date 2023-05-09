"use client";

import { Button } from "@/app/components/Button";
import Input from "@/app/components/input/Input";
import React, { useCallback, useState } from "react";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";

type Varaint = "LOGIN" | "REGISTER";

const AuthForm = () => {
  const [variant, setVariant] = useState<Varaint>("LOGIN");
  const [isLoading, setIsLoading] = useState(false);

  const toggleVaraint = useCallback(() => {
    if (variant === "LOGIN") {
      setVariant("REGISTER");
    } else {
      setVariant("LOGIN");
    }
  }, [variant]);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: ""
    }
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    if (variant === "REGISTER") {
      // Axios Register
    }

    if (variant === "LOGIN") {
      // NextAuth SignIn
    }

    const socialAction = (action: string) => {
      setIsLoading(true);
      // NextAuth Social SignIn
    };
  };

  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {variant === "REGISTER" && (
            <Input label="Name" id="name" register={register} errors={errors} />
          )}
          <Input
            label="Email address"
            id="email"
            type="email"
            register={register}
            errors={errors}
          />

          <Input
            label="Password"
            id="password"
            type="Password"
            register={register}
            errors={errors}
          />

          <div>
            <Button />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthForm;
