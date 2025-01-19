'use client'

import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold">
              Portfolio.
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="hover:text-blue-600 transition-colors">
                Home
              </Link>
              <Link href="/about" className="hover:text-blue-600 transition-colors">
                About
              </Link>
              <Link href="/projects" className="hover:text-blue-600 transition-colors">
                Projects
              </Link>
              <Link href="/contact" className="hover:text-blue-600 transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex-1 flex items-center justify-center pt-20">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
            <p className="text-lg text-gray-600 mb-8">Frontend Developer | Web Designer</p>
            <div className="flex justify-center gap-4">
              <Link 
                href="/projects" 
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                View Projects
              </Link>
              <Link 
                href="/contact" 
                className="border border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t">
        <div className="container mx-auto px-6">
          <div className="flex justify-center space-x-6">
            <Link href="https://github.com/yourusername" target="_blank" className="hover:text-blue-600">
              <Github size={24} />
            </Link>
            <Link href="https://linkedin.com/in/yourusername" target="_blank" className="hover:text-blue-600">
              <Linkedin size={24} />
            </Link>
            <Link href="mailto:your.email@example.com" className="hover:text-blue-600">
              <Mail size={24} />
            </Link>
          </div>
          <p className="text-center mt-4 text-gray-600">© 2024 Your Name. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}