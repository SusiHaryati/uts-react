import { Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-pink-400 to-pink-600 py-8 px-4 text-center">
      <div className="flex justify-center items-center">
        <h1 className="text-3xl font-bold text-white">
          © 2024 Getch. All rights reserved.
        </h1>
      </div>
      <div className="flex justify-center mt-4 space-x-6">
        <a
          href="#"
          className="flex items-center text-teal-200 hover:text-teal-400 transition duration-400"
        >
          <Facebook className="mr-2" />
          Facebook
        </a>
        <a
          href="#"
          className="flex items-center text-pink-200 hover:text-pink-400 transition duration-400"
        >
          <Twitter className="mr-2" />
          Twitter
        </a>
        <a
          href="#"
          className="flex items-center text-blue-200 hover:text-blue-400 transition duration-400"
        >
          <Instagram className="mr-2" />
          Instagram
        </a>
      </div>
      
    </footer>
  );
}
