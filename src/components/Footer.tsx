const Footer = () => {
  return (
    <footer className="border-t bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-green-500 rounded-full"></div>
          <span className="font-semibold text-4xl">Brilliant</span>
        </div>
        <div className="flex items-center space-x-2 ">
          <span className="text-lg">curated by</span>
          <span className="text-2xl font-semibold">Mobbin</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
