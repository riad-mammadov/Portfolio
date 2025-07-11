function Footer() {
  return (
    <footer className="w-full py-8 mt-8">
      <div className="w-full bg-black/20 backdrop-blur-lg border-t border-gray-700/30">
        <div className="max-w-4xl mx-auto px-4 text-center py-4">
          <p className="text-gray-300 text-sm font-light">
            © 2025 — Crafted with <span className="text-blue-400">💙</span> by{" "}
            <span className="text-white font-medium">Riad</span> using{" "}
            <span className="text-blue-400 font-medium">Next.js</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
