import { FC } from "react"

import FilmInfoRow from "shared/ui/FilmInfoRow"
import { Film } from "store/slices/Films"

export type AboutTheFilmProps = Pick<
  Film,
  | "Released"
  | "Director"
  | "Actors"
  | "Writer"
  | "Genre"
  | "Runtime"
  | "Country"
>

const AboutTheFilm: FC<AboutTheFilmProps> = ({
  Released,
  Director,
  Actors,
  Writer,
  Genre,
  Runtime,
  Country
}) => {
  return (
    <div>
      <FilmInfoRow
        title='Released'
        className='gap-4'
        info={Released}
      />
      <FilmInfoRow
        title='Director'
        className='gap-4'
        info={Director}
      />
      <FilmInfoRow
        title='Writer'
        className='gap-4'
        info={Writer}
      />
      <FilmInfoRow
        title='Actors'
        className='gap-4'
        info={Actors}
      />
      <FilmInfoRow
        title='Genres'
        className='gap-4'
        info={Genre}
      />
      <FilmInfoRow
        title='Runtime'
        className='gap-4'
        info={Runtime}
      />
      <FilmInfoRow
        title='Country'
        className='gap-4'
        info={Country}
      />
    </div>
  )
}

export default AboutTheFilm
