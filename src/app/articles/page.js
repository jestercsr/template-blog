'use client';
import { motion } from 'framer-motion';
import React from 'react';

export default function BlogArticle() {
  return (
    <main className="min-h-screen bg-white text-gray-800 px-6 py-16">
      <article className="max-w-3xl mx-auto space-y-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="h-10 w-2/3 bg-gray-300 rounded animate-pulse mb-2" />
          <div className="h-6 w-1/4 bg-gray-200 rounded animate-pulse" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="h-80 w-full bg-gray-100 rounded animate-pulse" />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          transition={{ staggerChildren: 0.2 }}
          viewport={{ once: true }}
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="h-4 w-full bg-gray-200 rounded animate-pulse my-2"
            />
          ))}
        </motion.div>
      </article>
    </main>
  );
}
