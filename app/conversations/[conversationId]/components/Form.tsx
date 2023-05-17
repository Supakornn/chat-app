"use client";

import useConversation from "@/app/hooks/useConversation";
import { FieldValue, FieldValues, SubmitHandler, useForm } from "react-hook-form";

export const Form = () => {
  const { conversationId } = useConversation();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm();

  const {} = useForm<FieldValues>({ defaultValues: { message: "" } });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {};
  return <div>Form</div>;
};
