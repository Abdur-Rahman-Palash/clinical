'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { fadeUp, staggerContainer } from '@/lib/animations';

interface AnimatedWrapperProps {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    variant?: 'fadeUp' | 'stagger';
    delay?: number;
}

export default function AnimatedWrapper({
    children,
    className,
    style,
    variant = 'fadeUp',
    delay = 0,
}: AnimatedWrapperProps) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });

    if (variant === 'stagger') {
        return (
            <motion.div
                ref={ref}
                variants={staggerContainer}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                className={className}
                style={style}
            >
                {children}
            </motion.div>
        );
    }

    return (
        <motion.div
            ref={ref}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            transition={{ delay }}
            className={className}
            style={style}
        >
            {children}
        </motion.div>
    );
}

export function AnimatedSection({
    children,
    className,
    style,
}: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className={className}
            style={style}
        >
            {children}
        </motion.div>
    );
}
