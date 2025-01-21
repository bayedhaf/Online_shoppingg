import React from "react";

const footer = () => {
  return (
    <footer class="bg-gray-800 text-white py-8 ">
      <div class="container  flex flex-col justify-center md:flex-row gap-8">
        <div>
          <h3 class="font-bold text-lg mb-4">About Us</h3>
          <p class="text-sm w-1/3">
            We are a passionate team dedicated to providing quality content and
            services. Contact us to learn more about our mission and vision.
          </p>
        </div>

        <div>
          <h3 class="font-bold text-lg mb-4">Contact Us</h3>
          <p class="text-sm">
            Email:{" "}
            <a href="mailto:info@example.com" class="hover:underline">
              info@example.com
            </a>
            <br />
            Phone:{" "}
            <a href="tel:+123456789" class="hover:underline">
              +123 456 789
            </a>
          </p>
          <div class="flex space-x-4 mt-4">
            <a href="#" class="hover:text-gray-300">
              Facebook
            </a>
            <a href="#" class="hover:text-gray-300">
              Twitter
            </a>
            <a href="#" class="hover:text-gray-300">
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div class="mt-8 border-t border-gray-200 pt-4 text-center text-sm">
        <p>&copy; 2024 YourCompany. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default footer;
