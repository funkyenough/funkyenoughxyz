"use client";

import { useForm } from "react-hook-form";
import { clientSendEmail } from "../utils/clientSendEmail";

export type FormData = {
  email: string;
  message: string;
};

export default function Form() {
  const { register, handleSubmit } = useForm<FormData>();

  function onSubmit(data: FormData) {
    clientSendEmail(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="md:mx-20">
      <div className="mb-5">
        <label htmlFor="email" className="mb-3 block text-base font-medium">
          Email Address
        </label>
        <input
          type="email"
          className="w-full rounded-md border border-gray-300 bg-[#202020] py-3 px-6 text-base font-medium text-white outline-none focus:border-purple-500 focus:shadow-md"
          placeholder="example@domain.com"
          {...register("email", { required: true })}
        />
      </div>
      <div className="mb-5">
        <label htmlFor="message" className="mb-3 block text-base font-medium">
          Message
        </label>
        <textarea
          rows={4}
          className="w-full resize-none rounded-md border border-gray-300 bg-[#202020] py-3 px-6 text-base font-medium text-white outline-none focus:border-purple-500 focus:shadow-md"
          placeholder="Type your message"
          {...register("message", { required: true })}
        ></textarea>
      </div>
      <div className="flex justify-center">
        <button className="hover:shadow-form rounded-md bg-purple-500 py-3 px-8 text-base font-semibold text-white outline-none">
          Submit
        </button>
      </div>
    </form>
  );
}
