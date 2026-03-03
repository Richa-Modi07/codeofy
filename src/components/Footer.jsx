// import { Github, Twitter, Linkedin } from "lucide-react";
export default function Footer() {
  return (
    <footer className="bg-[#0b1120] text-gray-300 pt-16 pb-8 px-6">
      {" "}
      <div className="max-w-6xl mx-auto grid gap-12 md:grid-cols-4">
        {" "}
        {/* Logo + Description */}{" "}
        <div>
          {" "}
          <h2 className="text-white text-2xl font-bold">Codeofy</h2>{" "}
          <p className="mt-4 text-sm text-gray-400">
            {" "}
            Transform your ideas into production-ready code with AI-powered
            tools built for modern teams.{" "}
          </p>{" "}
        </div>
        {/* Product */}{" "}
        <div>
          {" "}
          <h3 className="text-white font-semibold mb-4">Product</h3>{" "}
          <ul className="space-y-3 text-sm">
            {" "}
            <li className="hover:text-white cursor-pointer">Features</li>{" "}
            <li className="hover:text-white cursor-pointer">Pricing</li>{" "}
            <li className="hover:text-white cursor-pointer">Docs</li>{" "}
            <li className="hover:text-white cursor-pointer">API</li>{" "}
          </ul>{" "}
        </div>
        {/* Company */}{" "}
        <div>
          {" "}
          <h3 className="text-white font-semibold mb-4">Company</h3>{" "}
          <ul className="space-y-3 text-sm">
            {" "}
            <li className="hover:text-white cursor-pointer">About</li>{" "}
            <li className="hover:text-white cursor-pointer">Careers</li>{" "}
            <li className="hover:text-white cursor-pointer">Blog</li>{" "}
            <li className="hover:text-white cursor-pointer">Contact</li>{" "}
          </ul>{" "}
        </div>
        {/* Social */}{" "}
        <div>
          {" "}
          <h3 className="text-white font-semibold mb-4">Connect</h3>{" "}
          <div className="flex gap-4">
            {" "}
            <Github className="hover:text-white cursor-pointer" />{" "}
            <Twitter className="hover:text-white cursor-pointer" />{" "}
            <Linkedin className="hover:text-white cursor-pointer" />{" "}
          </div>{" "}
        </div>{" "}
      </div>
      {/* Bottom Bar */}{" "}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-500">
        {" "}
        © 2026 Codeofy. All rights reserved.{" "}
      </div>{" "}
    </footer>
  );
}
