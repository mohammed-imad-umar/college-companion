const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 text-center py-4 border-t border-gray-700">
      <p className="text-sm">
        © {new Date().getFullYear()} All rights reserved — <span className="text-white font-semibold">Mohammed Imad Umar</span>
      </p>
    </footer>
  );
};

export default Footer;