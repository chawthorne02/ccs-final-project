import { motion } from 'framer-motion';


function Billpage () {





    return (
        <motion.main
        initial={{width: 0}}
      animate={{width: "100%"}}
      exit={{x: window.innerWidth, transition: { duration: 0.4}}}
        >
        <>Bill's Page</>
        </motion.main>
    )
}

export default Billpage;