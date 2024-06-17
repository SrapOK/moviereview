import {
  Suspense,
  useDeferredValue,
  useEffect,
  useRef
} from "react"
import { IoIosArrowRoundUp } from "react-icons/io"

import FilmList from "widgets/FilmList"

import {
  useAppDispatch,
  useAppSelector
} from "@/hooks/store"

import {
  addFilms,
  fetchFilms,
  selectFilms,
  selectFilmsStatus,
  selectTotalFilms
} from "store/slices/Films"
import {
  selectPage,
  selectQuery,
  setPage
} from "store/slices/Filter"

import useElementOnScreen from "@/hooks/useElementOnScreen"
import scrollToTop from "@/helpers/scrollToTop"
import FilterPanel from "widgets/FilterPanel"

const HomePage = () => {
  const films = useAppSelector(selectFilms)
  const deferredFilms = useDeferredValue(films)
  const query = useAppSelector(selectQuery)
  const page = useAppSelector(selectPage)
  const totalFilms = useAppSelector(selectTotalFilms)
  const isLoading = useAppSelector(selectFilmsStatus)
  const isLastPage = Math.ceil(totalFilms / 10) <= page
  const isMounting = useRef(true)

  const [intersectionRef, isVisible] = useElementOnScreen()
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setPage(1))
    dispatch(fetchFilms({ query, page: 1 }))
  }, [query])

  useEffect(() => {
    if (!isLastPage && isVisible)
      dispatch(setPage(page + 1))
  }, [isVisible])

  useEffect(() => {
    if (isMounting.current === true) {
      isMounting.current = false
    } else if (page !== 1)
      dispatch(addFilms({ query, page }))
  }, [page])

  return (
    <div>
      <FilterPanel />
      <div className='min-h-screen'>
        <Suspense fallback={<p>loading</p>}>
          <FilmList list={deferredFilms} />
        </Suspense>
      </div>

      <div
        className='w-full h-10 mt-10 flex flex-col gap-10'
        //@ts-expect-error
        ref={intersectionRef}
      >
        {isLoading ? (
          <h3 className=' mx-auto font-semibold text-xl'>
            Loading...
          </h3>
        ) : null}
        <a
          onClick={scrollToTop}
          className='btn btn-circle mx-auto'
        >
          <IoIosArrowRoundUp className=' size-full' />
        </a>
      </div>
    </div>
  )
}

export default HomePage
