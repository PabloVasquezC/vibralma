"use client"

import { motion, useInView, UseInViewOptions } from "framer-motion"
import { useRef, ReactNode } from "react"

interface FadeInProps {
    children: ReactNode
    className?: string
    delay?: number
    direction?: "up" | "down" | "left" | "right" | "none"
    duration?: number
    fullWidth?: boolean
    viewport?: UseInViewOptions
}

export function FadeIn({
    children,
    className = "",
    delay = 0,
    direction = "up",
    duration = 0.5,
    fullWidth = false,
    viewport = { once: true, margin: "-100px" },
}: FadeInProps) {
    const ref = useRef(null)
    const isInView = useInView(ref, viewport)

    const directionOffset = {
        up: { y: 40, x: 0 },
        down: { y: -40, x: 0 },
        left: { x: 40, y: 0 },
        right: { x: -40, y: 0 },
        none: { x: 0, y: 0 },
    }

    return (
        <motion.div
            ref={ref}
            initial={{
                opacity: 0,
                x: directionOffset[direction].x,
                y: directionOffset[direction].y,
            }}
            animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
            transition={{
                duration,
                delay,
                ease: [0.21, 0.47, 0.32, 0.98],
            }}
            className={`${className} ${fullWidth ? "w-full" : ""}`}
        >
            {children}
        </motion.div>
    )
}

interface FloatProps {
    children: ReactNode
    className?: string
    duration?: number
    offset?: number
}

export function Float({ children, className = "", duration = 6, offset = 10 }: FloatProps) {
    return (
        <motion.div
            className={className}
            animate={{
                y: [0, -offset, 0],
            }}
            transition={{
                duration,
                ease: "easeInOut",
                repeat: Infinity,
            }}
        >
            {children}
        </motion.div>
    )
}

interface ScaleInProps {
    children: ReactNode
    className?: string
    delay?: number
    duration?: number
    viewport?: UseInViewOptions
}

export function ScaleIn({
    children,
    className = "",
    delay = 0,
    duration = 0.5,
    viewport = { once: true, margin: "-100px" },
}: ScaleInProps) {
    const ref = useRef(null)
    const isInView = useInView(ref, viewport)

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{
                duration,
                delay,
                ease: [0.21, 0.47, 0.32, 0.98],
            }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

interface StaggerContainerProps {
    children: ReactNode
    className?: string
    viewport?: UseInViewOptions
    delay?: number
    staggerChildren?: number
}

export function StaggerContainer({
    children,
    className = "",
    viewport = { once: true, margin: "-100px" },
    delay = 0,
    staggerChildren = 0.1,
}: StaggerContainerProps) {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            transition={{ staggerChildren, delayChildren: delay }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

export function StaggerItem({ children, className = "" }: { children: ReactNode; className?: string }) {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
            }}
            className={className}
        >
            {children}
        </motion.div>
    )
}
