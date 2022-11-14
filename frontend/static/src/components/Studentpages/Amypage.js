import { motion } from 'framer-motion';





function Amypage () {





    return (
        <motion.main
        initial={{width: 0}}
      animate={{width: "100%"}}
      exit={{x: window.innerWidth, transition: { duration: 0.4}}}
        >
        <>Amy's Page</>
        </motion.main>
    )
}

export default Amypage;