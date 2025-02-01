"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/shadcn/Button";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [disabled, setDisabled] = useState(false);
  const [alertInfo, setAlertInfo] = useState({
    display: false,
    message: "",
    type: "",
  });

  const toggleAlert = (message, type) => {
    setAlertInfo({ display: true, message, type });
    setTimeout(() => {
      setAlertInfo({ display: false, message: "", type: "" });
    }, 5000);
  };

  const onSubmit = async (data) => {
    const { name, email, subject, message } = data;
    try {
      setDisabled(true);
      const templateParams = { name, email, subject, message };
      await emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );
      toggleAlert(
        "Email was sent succesfully! I will try to respond as soon as possible",
        "success"
      );
    } catch (e) {
      console.error(e);
      toggleAlert("Uh oh. Something went wrong.", "danger");
    } finally {
      setDisabled(false);
      reset();
    }
  };

  return (
    <div className=" pt-20 p-8 sm:p-6">
      <div className="flex items-center justify-center mb-6">
        <h1 className="text-white font-bold text-2xl">Contact Me</h1>
      </div>
      <div className="mx-auto max-w-4xl">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Each input and its error message in separate divs for proper spacing */}
          <div className="flex flex-col space-y-3 sm:flex-row sm:space-x-3 sm:space-y-0">
            <div className="flex-1 flex flex-col">
              <input
                type="text"
                {...register("name", {
                  required: "Please enter your name",
                  maxLength: {
                    value: 30,
                    message: "Please use 30 characters or less",
                  },
                })}
                className="p-3 border border-gray-300 rounded"
                placeholder="Name"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-2">
                  {errors.name.message}
                </p>
              )}
            </div>
            <div className="flex-1 flex flex-col">
              <input
                type="email"
                {...register("email", {
                  required: "Please enter a valid email address",
                  pattern: {
                    value:
                      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    message: "Invalid email address",
                  },
                })}
                className="p-3 border border-gray-300 rounded"
                placeholder="Email address"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-2">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          <div className="flex flex-col">
            <input
              type="text"
              {...register("subject", {
                required: "Please enter a subject",
                maxLength: {
                  value: 75,
                  message: "Subject cannot exceed 75 characters",
                },
              })}
              className="w-full p-3 border border-gray-300 rounded"
              placeholder="Subject"
            />
            {errors.subject && (
              <p className="text-red-500 text-sm mt-2">
                {errors.subject.message}
              </p>
            )}
          </div>

          <div className="flex flex-col">
            <textarea
              {...register("message", { required: "Please enter a message" })}
              className="w-full p-3 border border-gray-300 rounded"
              rows="4"
              placeholder="Message"
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-2">
                {errors.message.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="px-10 py-3 bg-blue-500 text-white font-bold rounded hover:bg-blue-600 disabled:opacity-50"
            disabled={disabled}
          >
            Submit
          </button>
        </form>
      </div>
      {alertInfo.display && (
        <div className="flex justify-center items-center">
          <div
            className={`alert fixed top-0 right-1/2 sm:top-2 sm:right-2 alert-${
              alertInfo.type
            } mt-5 p-4 rounded-2xl text-white ${
              alertInfo.type === "success" ? "bg-green-600" : "bg-red-700"
            }`}
          >
            {alertInfo.message}
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
