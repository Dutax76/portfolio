'use client'

import { useEffect } from 'react'

const SoundEffects = () => {
  useEffect(() => {
    // Créer des sons synthétiques avec l'API Web Audio
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()

    const createBeep = (frequency: number, duration: number) => {
      const oscillator = audioContext.createOscillator()
      const gainNode = audioContext.createGain()
      
      oscillator.connect(gainNode)
      gainNode.connect(audioContext.destination)
      
      oscillator.frequency.value = frequency
      oscillator.type = 'sine'
      
      gainNode.gain.setValueAtTime(0, audioContext.currentTime)
      gainNode.gain.linearRampToValueAtTime(0.1, audioContext.currentTime + 0.01)
      gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + duration)
      
      oscillator.start(audioContext.currentTime)
      oscillator.stop(audioContext.currentTime + duration)
    }

    const createCyberSound = () => {
      // Son cyber futuriste
      createBeep(880, 0.1)
      setTimeout(() => createBeep(1320, 0.1), 50)
      setTimeout(() => createBeep(660, 0.2), 100)
    }

    const handleClick = () => {
      createCyberSound()
    }

    const handleHover = () => {
      createBeep(1000, 0.05)
    }

    // Ajouter les événements sur les éléments interactifs
    const buttons = document.querySelectorAll('button, a[href]')
    buttons.forEach(button => {
      button.addEventListener('click', handleClick)
      button.addEventListener('mouseenter', handleHover)
    })

    // Son d'accueil après 2 secondes
    const welcomeSound = setTimeout(() => {
      createBeep(523, 0.2)
      setTimeout(() => createBeep(659, 0.2), 200)
      setTimeout(() => createBeep(784, 0.3), 400)
    }, 2000)

    return () => {
      buttons.forEach(button => {
        button.removeEventListener('click', handleClick)
        button.removeEventListener('mouseenter', handleHover)
      })
      clearTimeout(welcomeSound)
    }
  }, [])

  return null // Ce composant ne rend rien visuellement
}

export default SoundEffects 