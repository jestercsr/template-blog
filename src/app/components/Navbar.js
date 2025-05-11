'use client'
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="bg-white shadow-md px-6 py-4 sticky top-0 z-50"
    >
      <nav className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-gray-800">📘 Le Blog</Link>
        <div className="space-x-4">
          <Link href="/articles" className="text-gray-600 hover:text-blue-600">Articles</Link>
          <Link href="#" className="text-gray-600 hover:text-blue-600">Contact</Link>
        </div>
      </nav>
    </motion.nav>
  )
}
