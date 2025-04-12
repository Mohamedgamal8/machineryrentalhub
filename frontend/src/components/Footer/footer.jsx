import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-goldenrod mt-auto">

      {/* Bottom Layer: Customer Support, Company Info, Testimonials */}
      <div className="container mx-auto py-12 scale-90">
        <div className="flex flex-wrap justify-between text-center md:text-left">
          {/* Column 1: Customer Support */}
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h3 className="text-white text-lg font-semibold mb-4">
              Customer Support
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/support"
                  className="text-yellow-500 hover:text-red-500"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-yellow-500 hover:text-red-500"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-yellow-500 hover:text-red-500">
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  to="/safety"
                  className="text-yellow-500 hover:text-red-500"
                >
                  Safety Guidelines
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Company Info */}
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h3 className="text-white text-lg font-semibold mb-4">About Us</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-yellow-500 hover:text-red-500"
                >
                  Who We Are
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className="text-yellow-500 hover:text-red-500"
                >
                  Pricing Plans
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-yellow-500 hover:text-red-500"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-yellow-500 hover:text-red-500"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Testimonials & Blog */}
          <div className="w-full md:w-1/3">
            <h3 className="text-white text-lg font-semibold mb-4">
              What Our Clients Say
            </h3>
            <p className="text-gray-400 mb-2">
              “Exceptional service and reliable vehicles!” - Customer A
            </p>
            <p className="text-gray-400 mb-4">
              “The best place to rent construction equipment!” - Customer B
            </p>
            <h3 className="text-white text-lg font-semibold mb-4">
              Visit Our Blog
            </h3>
            <Link to="/blog" className="text-yellow-500 hover:text-red-500">
              Read the Latest Updates
            </Link>
          </div>
        </div>
      </div>

      {/* Copyright Notice */}
      <div className="bg-gray-800 py-4 text-center">
        <p className="text-gray-400">
          &copy; 2025 Machinery Rentals Hub, All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
