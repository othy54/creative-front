
import styles from './footer.module.css';
import { motion, useScroll, useMotionTemplate, useTransform } from "motion/react";
import { useRef } from 'react';


export default function Footer() {
    const footer = useRef(null);

    const { scrollYProgress } = useScroll({
        target: footer,
        offset: ["start 70%", "end end"],
    });

    const blurValue = useTransform(scrollYProgress, [0, 1], [100, 0]);

    const filter = useMotionTemplate`blur(${blurValue}px)`;

    return (
        <footer ref={footer} className="bg-mocha-500 mt-32 p-10">
            <div
                className={styles.container + " max-w-[1280px] h-[40vh] mx-auto pt-4 lg:pt-10 px-6 lg:px-8 flex justify-center items-center"}
            >
                <div className={styles.wrapper}>
                    <motion.div className={styles.logo} style={{ filter }}>
                        CREATIVE-FRONT
                    </motion.div>
                </div>
            </div>
        </footer>
    )
}