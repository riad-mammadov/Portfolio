"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { Contact } from "lucide-react";
import { Input } from "@/components/ui/shadcn/input";

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
        // Send email using EmailJS
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );
      toggleAlert("Email was sent succesfully!", "success");
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
      <span className="flex items-center justify-center gap-4 mb-10 z-10 ">
        <Contact className="animate-bounce text-cyan-700" />
        <h1 className="text-center text-xl font-serif tracking-wide sm:text-3xl text-white font-semibold">
          Contact Me
        </h1>
      </span>
      <div className="mx-auto max-w-4xl">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className="flex flex-col space-y-3 sm:flex-row sm:space-x-3 sm:space-y-0">
            <div className="flex-1 flex flex-col">
              <Input
                type="text"
                {...register("name", {
                  required: "Please enter your name",
                  maxLength: {
                    value: 30,
                    message: "Please use 30 characters or less",
                  },
                })}
                className="p-3 h-12 border border-gray-300 text-white rounded"
                placeholder="Name"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-2">
                  {errors.name.message}
                </p>
              )}
            </div>
            <div className="flex-1 flex flex-col">
              <Input
                type="email"
                {...register("email", {
                  required: "Please enter a valid email address",
                  pattern: {
                    value:
                      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    message: "Invalid email address",
                  },
                })}
                className="p-3 border h-12  border-gray-300 text-white rounded"
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
            <Input
              type="text"
              {...register("subject", {
                required: "Please enter a subject",
                maxLength: {
                  value: 75,
                  message: "Subject cannot exceed 75 characters",
                },
              })}
              className="w-full p-3 h-12 border text-white border-gray-300 rounded"
              placeholder="Email Subject"
            />
            {errors.subject && (
              <p className="text-red-500 text-sm mt-2">
                {errors.subject.message}
              </p>
            )}
          </div>

          <div className="flex flex-col">
            <textarea
              type="textarea"
              {...register("message", { required: "Please enter a message" })}
              className="w-full p-3 sm:h-32 h-20 border  border-gray-300 rounded text-white placeholder-gray-500 placeholder:text-sm bg-transparent outline-none"
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
            disabled={disabled}
            className="group relative justify-center px-10 py-3 bg-gray-800/20 overflow-hidden rounded-xl inline-flex items-center"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-800/50 transition-transform duration-500 group-hover:translate-x-0 -translate-x-full"></div>
            <span className="relative z-10 text-white font-sans font-semibold">
              Submit
            </span>
          </button>
        </form>
      </div>
      {alertInfo.display && (
        <div className="flex justify-center items-center">
          <div
            className={`alert fixed top-0 text-sm sm:text-base sm:top-2 sm:right-2 alert-${
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
