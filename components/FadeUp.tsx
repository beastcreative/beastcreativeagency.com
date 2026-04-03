'use client';
import { motion } from 'framer-motion';

export default function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.44, 0, 0.56, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
