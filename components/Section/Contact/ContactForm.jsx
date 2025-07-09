"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { AlertCircle, Contact, Send } from "lucide-react";
import { Input } from "@/components/ui/shadcn/input";
import { AnimatePresence, motion } from "framer-motion";

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
    }, 3000);
  };

  const alertVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
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
      setTimeout(() => {
        setDisabled(false);
      }, 60000);
      reset();
    }
  };

  return (
    <div className="pt-20 p-8 sm:p-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8 mt-8"
      >
        <div className="inline-flex items-center space-x-3 mb-4">
          <div className="p-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl backdrop-blur-sm border border-white/10">
            <Contact className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
          </div>
          <h2 className="text-2xl sm:text-5xl font-bold font-serif text-white">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Contact Me
            </span>
          </h2>
        </div>
        <p className="text-gray-300 text-md sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
          Interested in collaborating or have any questions? I’d love to hear
          from you. Whether it’s about a project, opportunity, or just to
          connect, feel free to reach out.
        </p>
      </motion.div>

      <div className="mx-auto max-w-4xl">
        <motion.div
          className="relative backdrop-blur-xl bg-slate-900/30 border border-slate-700/50 rounded-2xl p-8 shadow-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5 rounded-2xl" />

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6 relative z-10"
          >
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <motion.div
                className="flex-1 flex flex-col group"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="relative">
                  <Input
                    type="text"
                    {...register("name", {
                      required: "Please enter your name",
                      maxLength: {
                        value: 30,
                        message: "Please use 30 characters or less",
                      },
                    })}
                    className="p-3 h-12 border-2 border-slate-600/50 bg-slate-800/50 text-white rounded-xl backdrop-blur-sm transition-all duration-300 focus:border-cyan-400/70 focus:bg-slate-800/70 focus:shadow-lg focus:shadow-cyan-400/20 hover:border-slate-500/70 placeholder:text-slate-400"
                    placeholder="Name"
                  />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/0 via-cyan-400/0 to-cyan-400/0 group-hover:from-cyan-400/5 group-hover:via-transparent group-hover:to-purple-400/5 transition-all duration-300 pointer-events-none" />
                </div>
                <AnimatePresence>
                  {errors.name && (
                    <motion.p
                      className="text-red-400 text-sm mt-2 flex items-center gap-1"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                    >
                      <AlertCircle size={14} />
                      {errors.name.message}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>

              <motion.div
                className="flex-1 flex flex-col group"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="relative">
                  <Input
                    type="email"
                    {...register("email", {
                      required: "Please enter a valid email address",
                      pattern: {
                        value:
                          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                        message: "Invalid email address",
                      },
                    })}
                    className="p-3 border-2 h-12 border-slate-600/50 bg-slate-800/50 text-white rounded-xl backdrop-blur-sm transition-all duration-300 focus:border-cyan-400/70 focus:bg-slate-800/70 focus:shadow-lg focus:shadow-cyan-400/20 hover:border-slate-500/70 placeholder:text-slate-400"
                    placeholder="Email address"
                  />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/0 via-cyan-400/0 to-cyan-400/0 group-hover:from-cyan-400/5 group-hover:via-transparent group-hover:to-purple-400/5 transition-all duration-300 pointer-events-none" />
                </div>
                <AnimatePresence>
                  {errors.email && (
                    <motion.p
                      className="text-red-400 text-sm mt-2 flex items-center gap-1"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                    >
                      <AlertCircle size={14} />
                      {errors.email.message}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>

            <motion.div
              className="flex flex-col group"
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="relative">
                <Input
                  type="text"
                  {...register("subject", {
                    required: "Please enter a subject",
                    maxLength: {
                      value: 75,
                      message: "Subject cannot exceed 75 characters",
                    },
                  })}
                  className="w-full p-3 h-12 border-2 text-white border-slate-600/50 bg-slate-800/50 rounded-xl backdrop-blur-sm transition-all duration-300 focus:border-cyan-400/70 focus:bg-slate-800/70 focus:shadow-lg focus:shadow-cyan-400/20 hover:border-slate-500/70 placeholder:text-slate-400"
                  placeholder="Email Subject"
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/0 via-cyan-400/0 to-cyan-400/0 group-hover:from-cyan-400/5 group-hover:via-transparent group-hover:to-purple-400/5 transition-all duration-300 pointer-events-none" />
              </div>
              <AnimatePresence>
                {errors.subject && (
                  <motion.p
                    className="text-red-400 text-sm mt-2 flex items-center gap-1"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    <AlertCircle size={14} />
                    {errors.subject.message}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>

            <motion.div
              className="flex flex-col group"
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="relative">
                <textarea
                  {...register("message", {
                    required: "Please enter a message",
                  })}
                  className="w-full p-3 sm:h-32 h-20 border-2 border-slate-600/50 bg-slate-800/50 rounded-xl text-white placeholder-slate-400 placeholder:text-sm backdrop-blur-sm outline-none transition-all duration-300 focus:border-cyan-400/70 focus:bg-slate-800/70 focus:shadow-lg focus:shadow-cyan-400/20 hover:border-slate-500/70 resize-none"
                  rows="4"
                  placeholder="Message"
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/0 via-cyan-400/0 to-cyan-400/0 group-hover:from-cyan-400/5 group-hover:via-transparent group-hover:to-purple-400/5 transition-all duration-300 pointer-events-none" />
              </div>
              <AnimatePresence>
                {errors.message && (
                  <motion.p
                    className="text-red-400 text-sm mt-2 flex items-center gap-1"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    <AlertCircle size={14} />
                    {errors.message.message}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>

            <motion.button
              type="submit"
              disabled={disabled}
              className="group relative justify-center px-10 py-3 bg-slate-800/40 backdrop-blur-sm overflow-hidden rounded-xl inline-flex items-center border border-slate-600/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-cyan-400/50"
            >
              <div
                className={`${
                  disabled && "hover:cursor-not-allowed opacity-70 bg-none"
                } absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 transition-transform duration-500 group-hover:translate-x-0 -translate-x-full`}
              />
              <div
                className={`${
                  disabled && "hover:cursor-not-allowed opacity-70"
                } absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              />

              <span
                className={`${
                  disabled && "hover:cursor-not-allowed opacity-70"
                } relative z-10 text-white font-sans font-semibold flex items-center gap-2 transition-all duration-300`}
              >
                {disabled ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  </>
                ) : (
                  <>
                    <Send size={16} className="" />
                    Submit
                  </>
                )}
              </span>
            </motion.button>
          </form>
        </motion.div>
      </div>
      <AnimatePresence>
        {alertInfo.display && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={alertVariants}
            className="flex justify-center items-center"
          >
            <div
              className={`alert fixed top-0 text-sm sm:text-base sm:top-2 sm:right-2 alert-${
                alertInfo.type
              } mt-5 p-4 rounded-2xl text-white ${
                alertInfo.type === "success" ? "bg-green-600" : "bg-red-700"
              }`}
            >
              {alertInfo.message}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactForm;
