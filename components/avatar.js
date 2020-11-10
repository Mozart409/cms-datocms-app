import { motion } from "framer-motion";

export default function Avatar({ name, picture }) {
  return (
    <div className="flex items-center">
      <a
        href="https://twitter.com/marc_van_sax"
        target="_blank"
        rel="noopener noreferrer"
      >
        <motion.div
          transition={{ ease: "easeOut", duration: 0.3 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{
            scale: 0.97,
          }}
          className="flex flex-no-wrap"
        >
          <img
            src={picture.url}
            className="w-12 h-12 rounded-full mr-4"
            alt={name}
          />
          <span className="text-xl text-gray-500 pt-1.5 lg:pt-2">{name}</span>
        </motion.div>
      </a>
    </div>
  );
}
