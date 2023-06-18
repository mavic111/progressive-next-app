'use client'

import { BellIcon, Cog8ToothIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

export default function Toolbar() {
  return (
    <div className="grid min-w-max grid-cols-2 gap-2">
      <motion.button
        onClick={() => alert('Open settings modal')}
        aria-label="Open settings"
        whileTap={{ scale: 0.95 }}
        className="flex rounded-full p-2 hover:bg-slate-200 dark:hover:bg-zinc-800"
      >
        <Cog8ToothIcon className="h-6 w-6 md:h-8 md:w-8" />
      </motion.button>
      <motion.button
        onClick={() => alert('Open notifications modal')}
        aria-label="Open notifications modal"
        whileTap={{ scale: 0.95 }}
        className="flex rounded-full p-2 hover:bg-slate-200 dark:hover:bg-zinc-800"
      >
        <BellIcon className="h-6 w-6 md:h-8 md:w-8" />
      </motion.button>
    </div>
  )
}
