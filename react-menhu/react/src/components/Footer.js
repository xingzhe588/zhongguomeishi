import React from 'react';
import { motion } from 'framer-motion';

const contacts = [
  {
    name: 'Алексей Иванов',
    phone: '+7 901 234-56-78',
    email: 'alexey@example.com',
    desc: 'Frontend-разработчик, увлечён UI/UX и анимациями. Работает с React, Vue и Tailwind CSS.',
    avatar: '/img/avatar1.jpg', // 替换为你的头像路径
  },
  {
    name: 'Екатерина Смирнова',
    phone: '+7 902 987-65-43',
    email: 'ekaterina@example.com',
    desc: 'Backend-инженер, специализируется на Node.js, Express и MySQL. Увлекается системным дизайном.',
    avatar: '/img/avatar2.jpg',
  },
];

const Footer = () => {
  return (
    <footer className="bg-primary dark:bg-gray-900 text-white pt-16 pb-8 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {contacts.map((person, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-xl shadow-lg p-6 flex flex-col items-center text-center min-h-[280px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <img
              src={person.avatar}
              alt={person.name}
              className="w-20 h-20 rounded-full object-cover mb-4 shadow-md"
            />
            <h3 className="text-xl font-bold mb-1">{person.name}</h3>
            <p className="text-sm mb-1"><span className="font-semibold">📞</span> {person.phone}</p>
            <p className="text-sm mb-2"><span className="font-semibold">📧</span> {person.email}</p>
            <p className="text-gray-600 dark:text-gray-400 text-sm">{person.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary mt-8"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      />
    </footer>
  );
};

export default Footer;
