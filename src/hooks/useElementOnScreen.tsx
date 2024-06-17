import {
  useDeferredValue,
  useEffect,
  useRef,
  useState
} from "react"

interface useElementOnScreenProps {
  root?: Element | Document | null
  rootMargin?: string
  threshold?: number | number[]
}

const useElementOnScreen = (
  options: useElementOnScreenProps = {
    root: null,
    rootMargin: "0px",
    threshold: 1
  }
) => {
  const observableRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const deferredIsVisible = useDeferredValue(isVisible)

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      const [entry] = entries

      if (observableRef.current)
        setIsVisible(entry.isIntersecting)
    }, options)

    if (observableRef.current)
      observer.observe(observableRef.current)

    return () => {
      if (observableRef.current)
        observer.unobserve(observableRef.current)
    }
  }, [observableRef, options])

  return [observableRef, deferredIsVisible]
}

export default useElementOnScreen
