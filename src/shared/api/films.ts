import { Film } from "store/slices/Films"
import $host from "."

export type FilmsResponse = {
  Search: Film[]
  totalResults: number
  Response: true
}

export type ErrorResponse = {
  Error: string
  Response: false
}
type Plot = "full" | "short" | ""

class filmApi {
  static getFilmById = async (
    id: string,
    plot: Plot = ""
  ) => {
    try {
      const data = await $host.get<Film | ErrorResponse>(
        "",
        {
          params: { i: id, plot: plot }
        }
      )
      return data
    } catch (e) {
      console.warn(e)
    }
  }

  static getFilms = async (params: {
    query: string
    page: number
  }) => {
    try {
      const data = await $host.get<
        FilmsResponse | ErrorResponse
      >("", {
        params: {
          s: params.query,
          page: params.page
        }
      })
      const preparedData = await filmApi.populateFilms(
        data.data.Response ? data.data.Search : []
      )
      return { ...data.data, Search: preparedData }
    } catch (e) {
      console.warn(e)
    }
  }

  protected static populateFilms = async (
    films: Film[]
  ) => {
    const populatedFilms = await Promise.all(
      films.map(async film => {
        const newData = await filmApi.getFilmById(
          film.imdbID
        )
        const result = { ...film, ...newData?.data }
        return result
      })
    )
    return populatedFilms
  }
}

export default filmApi
