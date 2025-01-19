'use client'

import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import Link from "next/link";
import { useState } from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="min-h-screen flex flex-col bg-gray-100">
      {/* Navigation */}
      <nav className="fixed w-full bg-white shadow-sm z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              Alfira.
            </Link>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                <Link
                  key={item}
                  href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  className="hover:text-blue-600 transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4">
              <div className="flex flex-col space-y-4">
                {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                  <Link
                    key={item}
                    href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="hover:text-blue-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex-1 flex items-center justify-center pt-20">
        <div className="container mx-auto px-6">
          <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
  Hi, I&apos;m <span className="text-blue-600">Alfira</span>
</h1>

            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              A passionate Frontend Developer crafting beautiful and functional web experiences.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/projects" 
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                View Projects
              </Link>
              <Link 
                href="/contact" 
                className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-white border-t">
        <div className="container mx-auto px-6">
          <div className="flex justify-center space-x-6">
            <Link href="https://github.com/yourusername" target="_blank" className="text-gray-600 hover:text-blue-600 transition-colors">
              <Github size={24} />
            </Link>
            <Link href="https://linkedin.com/in/yourusername" target="_blank" className="text-gray-600 hover:text-blue-600 transition-colors">
              <Linkedin size={24} />
            </Link>
            <Link href="mailto:your.email@example.com" className="text-gray-600 hover:text-blue-600 transition-colors">
              <Mail size={24} />
            </Link>
          </div>
          <p className="text-center mt-4 text-gray-600">© 2024 Alfira. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}