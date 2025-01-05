
import styles from './footer.module.css';
import { motion, useScroll, useMotionTemplate, useTransform } from "motion/react";
import { useRef } from 'react';


const Footer = () => {
    const footer = useRef<HTMLElement | null>(null);

    const { scrollYProgress } = useScroll({
        target: footer,
        offset: ["start 70%", "end end"],
    });

    const blurValue = useTransform(scrollYProgress, [0, 1], [100, 0]);
    const filter = useMotionTemplate`blur(${blurValue}px)`;

    const year: number = new Date().getFullYear();

    return (
        <footer ref={footer} className="bg-mocha-200 dark:bg-mocha-800 mt-32 py-5 lg:py-10">
            <div
                className={styles.container + " max-w-[1280px] min-h-[40vh] mx-auto pt-4 lg:pt-10 px-6 lg:px-8 flex justify-center items-center"}
            >
                <div className={styles.wrapper}>
                    <motion.div className={styles.logo + ' text-mocha-900 dark:text-mocha-100'} style={{ filter }}>
                        CREATIVE-FRONT
                    </motion.div>
                </div>
            </div>
            <div className="max-w-[1280px] mx-auto">
                <hr className="border-mocha-300" />
                <div className="mt-2 text-right text-sm font-semibold text-mocha-900 dark:text-mocha-100">
                    © {year} CREATIVE-FRONT
                </div>
            </div>
        </footer>
    )
}

export default Footer;