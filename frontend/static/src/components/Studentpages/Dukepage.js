import { motion } from 'framer-motion';


function Dukepage () {





    return (
        <motion.main
        initial={{width: 0}}
      animate={{width: "100%"}}
      exit={{x: window.innerWidth, transition: { duration: 0.4}}}
        >
        <>Duke Page</>
        </motion.main>
    )
}

export default Dukepage;