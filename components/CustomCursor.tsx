'use client'
import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const [visible, setVisible] = useState(false)
  const [hovered, setHovered] = useState(false)
  const visibleRef = useRef(false)
  const rx = useMotionValue(0), ry = useMotionValue(0)
  const x = useSpring(rx, { stiffness: 500, damping: 36, mass: 0.3 })
  const y = useSpring(ry, { stiffness: 500, damping: 36, mass: 0.3 })

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      rx.set(e.clientX)
      ry.set(e.clientY)
      if (!visibleRef.current) { visibleRef.current = true; setVisible(true) }
    }

    const isInteractive = (el: Element | null) =>
      !!el?.closest('a, button, [role="button"], input, textarea, select, label')

    const onOver = (e: MouseEvent) => {
      if (isInteractive(e.target as Element)) setHovered(true)
    }
    const onOut = (e: MouseEvent) => {
      if (isInteractive(e.target as Element) && !isInteractive(e.relatedTarget as Element | null))
        setHovered(false)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout', onOut)
    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout', onOut)
    }
  }, [rx, ry])

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:flex items-center justify-center"
      style={{ x, y, translateX: '-50%', translateY: '-50%' }}
      animate={{ opacity: visible ? 1 : 0 }}
    >
      <motion.div
        className="rounded-full"
        animate={{
          width:           hovered ? 52 : 20,
          height:          hovered ? 52 : 20,
          backgroundColor: hovered ? 'rgba(200,255,59,0.18)' : 'rgba(200,255,59,0)',
          borderColor:     'rgba(200,255,59,0.7)',
          borderWidth:     1,
        }}
        style={{ borderStyle: 'solid', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        transition={{ duration: 0.14, ease: 'easeOut' }}
      >
        {!hovered && <div className="w-1 h-1 rounded-full bg-accent" />}
      </motion.div>
    </motion.div>
  )
}
