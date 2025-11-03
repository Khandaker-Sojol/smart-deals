const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 grid-cols-1 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-xl font-bold">
              Smart<span className="text-gradient">Deals</span>
            </h3>
            <p className="mt-2">
              Your trusted marketplace for authentic local products. Discover
              the best deals from across Bangladesh.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="hover:text-purple-500">
                  All Products
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-500">
                  Dashboard
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-500">
                  Login
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-500">
                  Register
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold">Categories</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="hover:text-purple-500">
                  Electronics
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-500">
                  Fashion
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-500">
                  Home & Living
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-500">
                  Groceries
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div>
            <h4 className="text-lg font-semibold">Contact & Support</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href="mailto:support@smartdeals.com"
                  className="hover:text-purple-500"
                >
                  support@smartdeals.com
                </a>
              </li>
              <li>
                <a href="tel:+880123456789" className="hover:text-purple-500">
                  +880 123 456 789
                </a>
              </li>
              <li>123 Commerce Street, Dhaka, Bangladesh</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="mt-6 border-gray-600" />

        {/* Social Links */}
        <div className="flex justify-center gap-4">
          <a href="#" className="text-white hover:text-purple-500">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="text-white hover:text-purple-500">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-white hover:text-purple-500">
            <i className="fab fa-instagram"></i>
          </a>
        </div>

        <div className="text-center text-sm py-7">
          <p>© 2025 SmartDeals. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
