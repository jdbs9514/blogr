const Footer = () => {
  return (
    <footer>
      <div id="footer-section">
        <div className="text-center mt-[90px]">
          <h3 className="text-3xl text-white font-semibold pt-[50px]">Blogr</h3>
        </div>
        <div className="text-center mt-[60px]">
          <h4 className="text-white font-bold mb-[30px]">Product</h4>
          <p className="text-white hover:text-blue-400 cursor-pointer">Overview</p>
          <p className="text-white hover:text-blue-400 cursor-pointer">Pricing</p>
          <p className="text-white hover:text-blue-400 cursor-pointer">Marketplace</p>
          <p className="text-white hover:text-blue-400 cursor-pointer">Features</p>
          <p className="text-white hover:text-blue-400 cursor-pointer">Integrations</p>
        </div>
        <div className="text-center mt-[60px]">
          <h4 className="text-white font-bold mb-[30px]">Company</h4>
          <p className="text-white hover:text-blue-400 cursor-pointer">About</p>
          <p className="text-white hover:text-blue-400 cursor-pointer">Team</p>
          <p className="text-white hover:text-blue-400 cursor-pointer">Blog</p>
          <p className="text-white hover:text-blue-400 cursor-pointer">Careers</p>
        </div>
        <div className="text-center mt-[60px]">
          <h4 className="text-white font-bold mb-[30px]">Connect</h4>
          <p className="text-white hover:text-blue-400 cursor-pointer">Contact</p>
          <p className="text-white hover:text-blue-400 cursor-pointer">Newsletter</p>
          <p className="text-white hover:text-blue-400 cursor-pointer pb-[70px]">LinkedIn</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
