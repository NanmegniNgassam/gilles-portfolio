import { motion } from 'framer-motion';
import styles from "./loader.module.css";

const loaderVariants = {
  animationOne: {
    x: [-20, 20],
    y: [0, -40],
    transition: {
      x: {
        repeatType: "mirror",
        repeat: Infinity,
        duration: 0.5,
      },
      y: {
        repeatType: "mirror",
        repeat: Infinity,
        duration: 0.25,
        ease: 'easeOut'
      }
    }
  }
};

const Loader = () => {
  return (
    <>
      <motion.div className={styles.loader}
        variants={loaderVariants}
        animate="animationOne"
      ></motion.div>
    </>
  )
}

export default Loader;