import { useEffect, useState } from 'react'
import { ScreenDimensions, UseScreenDimensionsOptions } from '../types'


const useScreenDimensions = (options: UseScreenDimensionsOptions = {}) => {
  const { debounceMs = 100 } = options

  const getInitialState = (): ScreenDimensions => {
    if (typeof window === 'undefined') {
      return {
        screenWidth: 1024,
        screenHeight: 768,
        devicePixelRatio: 1,
        orientation: null,
        isMobile: false,
        isTablet: false,
        isDesktop: true
      }
    }

    const width = window.innerWidth

    return {
      screenWidth: window.innerWidth,
      screenHeight: window.innerHeight,
      devicePixelRatio: window.devicePixelRatio || 1,
      orientation: window.screen?.orientation?.type || null,
      isMobile: width < 768,
      isTablet: width >= 768 && width < 1024,
      isDesktop: width >= 1024
    }
  }

  const [dimensions, setDimensions] = useState<ScreenDimensions>(getInitialState)

  const updateDimensions = () => {
    if (typeof window === 'undefined') return

    const width = window.innerWidth

    setDimensions({
      screenWidth: window.innerWidth,
      screenHeight: window.innerHeight,
      devicePixelRatio: window.devicePixelRatio || 1,
      orientation: window.screen?.orientation?.type || null,
      isMobile: width < 768,
      isTablet: width >= 768 && width < 1024,
      isDesktop: width >= 1024
    })
  }

  useEffect(() => {
    if (typeof window === 'undefined') return

    let timeoutId: NodeJS.Timeout

    const debouncedResize = () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(updateDimensions, debounceMs)
    }

    const handleOrientationChange = () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(updateDimensions, debounceMs)
    }

    window.addEventListener('resize', debouncedResize)

    if (window.screen?.orientation) {
      window.screen.orientation.addEventListener('change', handleOrientationChange)
    }

    return () => {
      clearTimeout(timeoutId)
      window.removeEventListener('resize', debouncedResize)

      if (window.screen?.orientation) {
        window.screen.orientation.removeEventListener('change', handleOrientationChange)
      }
    }
  }, [debounceMs])

  return { ...dimensions }
}

export default useScreenDimensions