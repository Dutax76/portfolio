'use client'

import { useRef, useEffect, useState } from 'react'

interface FloatingObject {
  id: number
  baseX: number
  baseY: number
  speedX: number
  speedY: number
  rotationSpeed: number
  type: number
  size: number
}

const FloatingObjects3D = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isClient, setIsClient] = useState(false)
  const objectsRef = useRef<FloatingObject[]>([])
  const animationRef = useRef<number>()
  const isInitialized = useRef(false)

  // Initialize objects only once and distribute across full screen
  useEffect(() => {
    if (isInitialized.current) return
    
    setIsClient(true)
    
    // Create objects distributed across the ENTIRE screen
    const objects: FloatingObject[] = []
    
    // Generate 15 objects for better coverage
    for (let i = 0; i < 15; i++) {
      objects.push({
        id: i,
        // Better distribution across full width and height
        baseX: 5 + (i * 6.2) % 90, // Spread across width
        baseY: 5 + (i * 6.7) % 90, // Spread across full height
        speedX: 0.3 + (i % 4) * 0.2, // Varying speeds
        speedY: 0.2 + (i % 5) * 0.15,
        rotationSpeed: 0.5 + (i % 6) * 0.3,
        type: i % 4,
        size: 0.8 + (i % 3) * 0.4 // Varying sizes
      })
    }
    
    objectsRef.current = objects
    isInitialized.current = true
  }, [])

  useEffect(() => {
    if (!isClient || !isInitialized.current) return

    const animate = () => {
      if (containerRef.current && objectsRef.current.length > 0) {
        const time = Date.now() * 0.001
        
        objectsRef.current.forEach((obj) => {
          const element = containerRef.current?.querySelector(`[data-object-id="${obj.id}"]`) as HTMLElement
          if (element) {
            // Smooth floating movement with smaller amplitude
            const floatX = Math.sin(time * obj.speedX + obj.id * 0.5) * 40
            const floatY = Math.cos(time * obj.speedY + obj.id * 0.3) * 30
            const floatZ = Math.sin(time * 0.2 + obj.id * 0.7) * 15
            
            // Smooth rotation
            const rotateX = time * 10 * obj.rotationSpeed + obj.id * 30
            const rotateY = time * 15 * obj.rotationSpeed + obj.id * 45
            
            element.style.transform = `translate3d(${floatX}px, ${floatY}px, ${floatZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${obj.size})`
            element.style.opacity = '0.15'
          }
        })
      }
      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isClient])

  if (!isClient || !isInitialized.current) {
    return null
  }

  const renderShape = (type: number, size: number) => {
    const sizeClass = size > 1 ? 'w-20 h-20' : size > 0.9 ? 'w-16 h-16' : 'w-12 h-12'
    
    switch (type) {
      case 0:
        return (
          // Cube with neon glow
          <div className={`relative ${sizeClass}`}>
            <div className="absolute inset-0 bg-gradient-to-r from-neon-blue to-neon-purple opacity-25 rounded-lg shadow-lg shadow-neon-blue/20" />
            <div className="absolute inset-1 bg-gradient-to-r from-neon-green to-neon-blue opacity-20 rounded transform rotate-12" />
            <div className="absolute inset-0 border border-neon-blue/30 rounded-lg" />
          </div>
        )
      case 1:
        return (
          // Triangle with glow
          <div className="relative">
            <div 
              className={`${size > 1 ? 'border-l-12 border-r-12 border-b-20' : 'border-l-8 border-r-8 border-b-16'} border-transparent border-b-neon-green opacity-30 filter drop-shadow-lg`}
              style={{ filter: 'drop-shadow(0 0 10px rgba(16, 185, 129, 0.3))' }}
            />
          </div>
        )
      case 2:
        return (
          // Circle with multiple rings and glow
          <div className="relative">
            <div className={`${sizeClass} rounded-full border-2 border-neon-blue opacity-30 animate-pulse`} style={{ boxShadow: '0 0 20px rgba(0, 212, 255, 0.3)' }} />
            <div className="absolute inset-2 rounded-full border border-neon-purple opacity-40 animate-ping" />
            <div className="absolute inset-4 rounded-full bg-neon-blue/10" />
          </div>
        )
      case 3:
        return (
          // Hexagon with gradient and glow
          <div 
            className={`${sizeClass} bg-gradient-to-r from-neon-pink via-neon-purple to-neon-blue opacity-25 rounded`}
            style={{
              clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)',
              filter: 'drop-shadow(0 0 15px rgba(236, 72, 153, 0.3))'
            }}
          />
        )
      default:
        return null
    }
  }

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      style={{ perspective: '1200px' }}
    >
      {/* Floating Geometric Objects - Distributed across full screen */}
      {objectsRef.current.map((obj) => (
        <div
          key={obj.id}
          data-object-id={obj.id}
          className="floating-3d-object absolute"
          style={{
            left: `${obj.baseX}%`,
            top: `${obj.baseY}%`,
            transformStyle: 'preserve-3d',
            zIndex: Math.floor(obj.baseY / 10) // Layering based on position
          }}
        >
          {renderShape(obj.type, obj.size)}
        </div>
      ))}

      {/* Enhanced Holographic Data Streams - More coverage */}
      {Array.from({ length: 10 }, (_, i) => (
        <div
          key={`stream-${i}`}
          className="absolute text-neon-green font-mono text-xs opacity-20 whitespace-nowrap"
          style={{
            left: `${(i * 10) % 100}%`,
            top: `${5 + (i * 9) % 90}%`, // Better vertical distribution
            animation: `dataStream ${6 + (i % 4)}s linear infinite`,
            animationDelay: `${i * 0.8}s`,
            fontSize: i % 3 === 0 ? '10px' : '8px'
          }}
        >
          {Array.from({ length: 25 }, (_, j) => ((i + j + 5) % 16).toString(16)).join('')}
        </div>
      ))}

      {/* Additional floating particles for atmosphere */}
      {Array.from({ length: 20 }, (_, i) => (
        <div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-neon-blue rounded-full opacity-30"
          style={{
            left: `${(i * 5.1) % 100}%`,
            top: `${(i * 4.7) % 100}%`,
            animation: `floatParticle ${8 + (i % 5)}s ease-in-out infinite`,
            animationDelay: `${i * 0.3}s`
          }}
        />
      ))}

      <style jsx>{`
        @keyframes dataStream {
          0% {
            transform: translateX(-150px);
            opacity: 0;
          }
          10%, 90% {
            opacity: 0.2;
          }
          100% {
            transform: translateX(calc(100vw + 150px));
            opacity: 0;
          }
        }
        
        @keyframes floatParticle {
          0%, 100% {
            transform: translateY(0px) scale(1);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-30px) scale(1.2);
            opacity: 0.6;
          }
        }
      `}</style>
    </div>
  )
}

export default FloatingObjects3D 