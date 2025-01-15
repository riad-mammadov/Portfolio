function MacWindow() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="hidden w-full h-fit border-2 rounded-xl overflow-hidden max-w-4xl shadow-sm md:flex flex-col"
    >
      <div className="border-b bg-border py-4 px-6 flex items-center gap-x-4">
        <div className="flex items-center gap-x-2">
          <div className="w-3 h-3 bg-red-400 rounded-full border border-red-700" />
          <div className="w-3 h-3 bg-yellow-400 rounded-full border border-yellow-700" />
          <div className="w-3 h-3 bg-green-400 rounded-full border border-green-700" />
        </div>
        <p className="text-sm font-medium text-muted-foreground ">
          <span className="hidden md:inline">
            About Me<span className="mx-3">\\</span>
          </span>
          <span className="text-foreground">Happy Clients!</span>
        </p>
      </div>
    </motion.div>
  );
}

export default MacWindow;
