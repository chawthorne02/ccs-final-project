import { motion } from 'framer-motion';



function Bubbapage () {





    return (
        <motion.main
        initial={{width: 0}}
      animate={{width: "100%"}}
      exit={{x: window.innerWidth, transition: { duration: 0.4}}}
        >
        <>Bubba's Page</>
        </motion.main>
    )
}

export default Bubbapage;