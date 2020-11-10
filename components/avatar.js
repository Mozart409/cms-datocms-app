import { motion } from "framer-motion";

export default function Avatar({ name, picture }) {
  return (
    <div className="flex items-center">
      <a
        href="https://twitter.com/marc_van_sax"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="flex flex-no-wrap">
          <motion.img
            animate={{ scale: [0, 0.4, 1] }}
            transition={{ ease: "easeOut", duration: 0.5 }}
            whileHover={{ scale: 1.05, rotate: 3 }}
            whileTap={{ scale: 0.8 }}
            src={picture.url}
            className="w-12 h-12 rounded-full mr-4"
            alt={name}
          />
          <span className="text-xl text-gray-500 pt-1.5 lg:pt-2">{name}</span>
        </div>
      </a>
    </div>
  );
}
