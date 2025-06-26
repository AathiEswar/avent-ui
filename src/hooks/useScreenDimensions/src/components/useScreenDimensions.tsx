import { useEffect, useState } from 'react'
import { ScreenDimensions, UseScreenDimensionsOptions } from '../types'

const getInitialState = (mobileBreakPoint: number, tabletBreakPoint: number): ScreenDimensions => {
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
    isMobile: width < mobileBreakPoint,
    isTablet: width >= mobileBreakPoint && width < tabletBreakPoint,
    isDesktop: width >= tabletBreakPoint
  }
}

const useScreenDimensions = (options: UseScreenDimensionsOptions = {}) => {
  const {
    debounceMs = 100,
    mobileBreakPoint = 768,
    tabletBreakPoint = 1024,
  } = options

  const initialState = getInitialState(mobileBreakPoint, tabletBreakPoint)
  const [dimensions, setDimensions] = useState<ScreenDimensions>(initialState)

  const updateDimensions = () => {
    if (typeof window === 'undefined') return

    const width = window.innerWidth

    setDimensions({
      screenWidth: window.innerWidth,
      screenHeight: window.innerHeight,
      devicePixelRatio: window.devicePixelRatio || 1,
      orientation: window.screen?.orientation?.type || null,
      isMobile: width < mobileBreakPoint,
      isTablet: width >= mobileBreakPoint && width < tabletBreakPoint,
      isDesktop: width >= tabletBreakPoint
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
