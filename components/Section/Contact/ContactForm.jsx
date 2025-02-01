"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

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
      toggleAlert("Form submission was successful!", "success");
    } catch (e) {
      console.error(e);
      toggleAlert("Uh oh. Something went wrong.", "danger");
    } finally {
      setDisabled(false);
      reset();
    }
  };

  return (
    <div className="min-h-screen pt-20">
      <div className="flex items-center justify-center mb-6">
        <h1 className="text-white font-bold text-2xl">Contact Me</h1>
      </div>
      <div className="mx-auto max-w-4xl">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className="flex space-x-3">
            <input
              type="text"
              {...register("name", {
                required: "Please enter your name",
                maxLength: {
                  value: 30,
                  message: "Please use 30 characters or less",
                },
              })}
              className="flex-1 p-3 border border-gray-300 rounded"
              placeholder="Name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
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
              className="flex-1 p-3 border border-gray-300 rounded"
              placeholder="Email address"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

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
            <p className="text-red-500 text-sm">{errors.subject.message}</p>
          )}

          <textarea
            {...register("message", { required: "Please enter a message" })}
            className="w-full p-3 border border-gray-300 rounded"
            rows="4"
            placeholder="Message"
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message.message}</p>
          )}

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
        <div
          className={`alert alert-${
            alertInfo.type
          } mt-5 p-4 rounded text-white ${
            alertInfo.type === "success" ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {alertInfo.message}
          <button
            type="button"
            className="ml-4"
            onClick={() =>
              setAlertInfo({ display: false, message: "", type: "" })
            }
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
