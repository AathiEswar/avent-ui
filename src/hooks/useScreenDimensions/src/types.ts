export type ScreenDimensions = {
  screenWidth: number
  screenHeight: number
  devicePixelRatio: number
  orientation: string | null
  isMobile: boolean
  isTablet: boolean
  isDesktop: boolean
}

export type UseScreenDimensionsOptions = {
  debounceMs?: number
}
