'use client';
import { motion } from 'framer-motion';
import React from 'react'

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Hero */}
      <section className="relative h-[75vh] flex flex-col justify-center items-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="z-10"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Explorez des idées</h1>
          <p className="text-lg max-w-xl mx-auto text-gray-600">
            Des articles pour inspirer, informer, et faire réfléchir.
          </p>
        </motion.div>
      </section>

      {/* Articles en vedette */}
      <section className="container mx-auto py-20 px-6">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-semibold mb-10 text-center"
        >
          Derniers articles
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gray-100 rounded-lg p-4 space-y-4"
            >
              <div className="h-48 bg-gray-300 rounded animate-pulse" />
              <div className="h-4 w-3/4 bg-gray-400 rounded animate-pulse" />
              <div className="h-4 w-1/2 bg-gray-400 rounded animate-pulse" />
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
