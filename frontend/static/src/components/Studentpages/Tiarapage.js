import { motion } from 'framer-motion';


function Tiarapage() {





    return (
        <motion.main
        initial={{width: 0}}
      animate={{width: "100%"}}
      exit={{x: window.innerWidth, transition: { duration: 0.4}}}
        >
            Tiara's page
        </motion.main>
    )
}

export default Tiarapage;
