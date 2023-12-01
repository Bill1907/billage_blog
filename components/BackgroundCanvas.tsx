'use client'

import React, { useEffect, useRef } from 'react'

const BackgroundCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const snowflakes = useRef<any[]>([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const context = canvas.getContext('2d')
    if (!context) return

    // Initialize snowflakes
    for (let i = 0; i < 15; i++) {
      snowflakes.current.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speedX: Math.random() * 2 - 1,
        speedY: Math.random() * 0.5 + 0.5,
        radius: Math.random() * 0.5 + 0.5,
      })
    }

    let animationFrameId: number

    //Our draw came here
    const render = () => {
      context.fillStyle = 'black'
      context.fillRect(0, 0, canvas.width, canvas.height)

      // Draw snowflakes
      context.fillStyle = 'white'
      for (const snowflake of snowflakes.current) {
        context.beginPath()
        context.arc(snowflake.x, snowflake.y, snowflake.radius, 0, Math.PI)
        context.fill()

        // Update snowflake position
        snowflake.x += snowflake.speedX
        snowflake.y += snowflake.speedY

        // Reset snowflake when it goes out of the screen
        if (snowflake.y > canvas.height) {
          snowflake.x = Math.random() * canvas.width
          snowflake.y = -snowflake.radius
        }
        if (snowflake.y > canvas.height) {
          snowflake.y = canvas.height
          snowflake.speedX = 0
          snowflake.speedY = 0
        } else if (snowflake.y < 0) {
          // Reset snowflake when it goes out of the screen
          snowflake.x = Math.random() * canvas.width
          snowflake.y = -snowflake.radius
        }
      }

      // Then call requestAnimationFrame again to create an infinite loop
      animationFrameId = window.requestAnimationFrame(render)
    }
    render()

    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-screen"
      style={{ zIndex: -1 }}
    />
  )
}

export default BackgroundCanvas
