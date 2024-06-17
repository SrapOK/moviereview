import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

import FilmDetails from "widgets/FilmDetails"
import {
  selectFilmById,
  type Film
} from "store/slices/Films"
import { useAppSelector } from "@/hooks/store"
import filmApi, { ErrorResponse } from "shared/api/films"

const FilmPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [film, setFilm] = useState<
    Film | ErrorResponse | undefined
  >(useAppSelector(state => selectFilmById(state, id)))

  useEffect(() => {
    if (typeof id !== "undefined") {
      filmApi
        .getFilmById(id, "full")
        .then(res => res?.data)
        .then(film => setFilm(film))
    }
  }, [])

  if (
    typeof film !== "undefined" &&
    film.Response !== false
  ) {
    return (
      <div>
        <FilmDetails {...film} />
        <div className='w-full flex justify-center mt-10'>
          <button
            onClick={() => navigate(-1)}
            className='btn btn-secondary font-semibold text-lg px-8 text-secondary-content'
          >
            Back
          </button>
        </div>
      </div>
    )
  } else
    return (
      <div>
        <h2 className='font-bold text-2xl'>
          Incorrect Imdb Id
        </h2>
        <div className='w-full flex justify-center mt-10'>
          <button
            onClick={() => navigate(-1)}
            className='btn btn-secondary font-semibold text-lg px-8 text-secondary-content'
          >
            Back
          </button>
        </div>
      </div>
    )
}

export default FilmPage
