import * as React from "react"

const TAB_BREAKPOINT = 950;

export function useIsProjects() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${TAB_BREAKPOINT - 1}px)`)
    const onChange = () => {
      setIsMobile(window.innerWidth < TAB_BREAKPOINT)
    }
    mql.addEventListener("change", onChange)
    setIsMobile(window.innerWidth < TAB_BREAKPOINT)
    return () => mql.removeEventListener("change", onChange)
  }, [])

  return !!isMobile
}
