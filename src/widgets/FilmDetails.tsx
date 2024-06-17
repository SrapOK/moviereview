import { FC } from "react"

import AboutTheFilm from "components/AboutTheFilm"
import { AboutTheFilmProps } from "components/AboutTheFilm"

import { Film } from "store/slices/Films"
import FilmInfoRow from "shared/ui/FilmInfoRow"
import isNa from "@/helpers/isNa"

import defaultPoster from "@/assets/defaultPoster.webp"

export type FilmDetails = Pick<
  Film,
  | "Poster"
  | "Title"
  | "Plot"
  | "Metascore"
  | "imdbRating"
  | keyof AboutTheFilmProps
>

const FilmDetails: FC<FilmDetails> = ({
  Poster,
  Title,
  Plot,
  Metascore,
  imdbRating,
  ...props
}) => {
  return (
    <div className='hero min-h-screen bg-base-300 px-4 md:px-20'>
      <div className='hero-content flex-col lg:flex-row gap-10'>
        <div>
          <img
            src={isNa(Poster) ? defaultPoster : Poster}
            className='max-w-sm rounded-lg shadow-2xl'
          />
          <div className=' rounded-lg py-2 px-4 space-y-2 text-lg bg-accent bg-opacity-80 mt-6 text-accent-content'>
            {Metascore !== "N/A" ? (
              <FilmInfoRow
                title='Metascore'
                info={Metascore}
              />
            ) : null}

            <FilmInfoRow
              title='imdbRating'
              info={imdbRating}
            />
          </div>
        </div>
        <div>
          <h1 className='text-5xl p-4 text-center lg:text-left font-bold text-primary'>
            {Title}
          </h1>
          <div className='flex max-w-96 text-right flex-col gap-1.5 mx-auto lg:mr-0 text-lg'>
            <h2 className=' text-right text-2xl font-semibold text-secondary'>
              About the film
            </h2>
            <AboutTheFilm {...props} />
          </div>
          {!isNa(Plot) ? (
            <p className='text-pretty indent-10 leading-relaxed text-justify py-8'>
              {Plot}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default FilmDetails
