import { motion } from 'framer-motion';
import styles from "./loader.module.css";

const loaderVariants = {
  animationOne: {
    x: [-40, 40],
    transition: {
      x: {
        repeatType: "mirror",
        repeat: Infinity,
        duration: 0.5,
      },
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