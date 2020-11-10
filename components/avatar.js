import { motion } from 'framer-motion'

export default function Avatar ({ name, picture }) {
  return (
    <div className='flex items-center'>
      <a
        href='https://twitter.com/marc_van_sax'
        target='_blank'
        rel='noopener noreferrer'
      >
        <motion.img
          animate={{ scale: [0, 0.4, 1] }}
          transition={{ ease: 'easeOut', duration: 0.5 }}
          whileHover={{ scale: 1.2, rotate: 6 }}
          src={picture.url}
          className='w-12 h-12 rounded-full mr-4'
          alt={name}
        />
        <div className='text-xl text-gray-700'>{name}</div>
      </a>
    </div>
  )
}
