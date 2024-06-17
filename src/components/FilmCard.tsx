import { FC } from "react"
import { Link } from "react-router-dom"

import { FILM_PAGE } from "app/providers/Router/paths"

import { Film } from "store/slices/Films"
import isNa from "@/helpers/isNa"

import defaultPoster from "@/assets/defaultPoster.webp"

export type FilmCardProps = Pick<
  Film,
  | "Poster"
  | "Title"
  | "Plot"
  | "Year"
  | "imdbID"
  | "Metascore"
  | "imdbRating"
>

const FilmCard: FC<FilmCardProps> = props => {
  return (
    <Link to={FILM_PAGE + props.imdbID}>
      <div className='my-4 card min-w-[300px] w-min  card-compact bg-base-100 shadow-xl transition-all duration-500 hover:shadow-2xl hover:border-accent  cursor-pointer border border-transparent hover:-translate-y-6 hover:scale-105 '>
        <figure className='min-h-72'>
          <img
            src={
              isNa(props.Poster)
                ? defaultPoster
                : props.Poster
            }
            className=' min-w-fit object-fill max-h-[400px]'
            alt='poster'
          />
        </figure>
        <div className='card-body'>
          <h2 className='card-title mx-auto'>
            {props.Title}
          </h2>
          {!isNa(props.Plot) ? (
            <p className=' indent-4 text-justify'>
              {props.Plot}
            </p>
          ) : null}
          <div className='card-actions flex flex-col lg:flex-row lg:justify-between'>
            <div
              className={`${
                isNa(props.imdbRating) ? "invisible" : ""
              }`}
            >
              Rating:{" "}
              <span className='text-accent'>
                {props.imdbRating}
              </span>{" "}
            </div>

            <div>
              Released:{" "}
              <span className='text-accent'>
                {props.Year}
              </span>{" "}
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default FilmCard
