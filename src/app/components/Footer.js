'use client'
import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-blue-600 text-white px-6 py-10 mt-auto"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        <div>
          <h4 className="text-xl font-semibold mb-2">À propos du blog</h4>
          <p className="text-sm text-gray-300">
            Histoires, conseils et réflexions partagées par des auteurs passionnés.
          </p>
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-2">Rubriques</h4>
          <ul className="space-y-1 text-sm text-gray-200">
            <li>Culture</li>
            <li>Technologie</li>
            <li>Vie quotidienne</li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-2">Suivez-nous</h4>
          <ul className="space-y-1 text-sm text-gray-200">
            <li>Twitter</li>
            <li>Medium</li>
            <li>Newsletter</li>
          </ul>
        </div>
      </div>
      <div className="mt-10 text-center text-sm text-gray-200">
        &copy; {new Date().getFullYear()} Le Blog — Tous droits réservés.
      </div>
    </motion.footer>
  )
}
