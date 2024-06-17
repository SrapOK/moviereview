import { FC, memo } from "react" 
import FilmCard, {
  FilmCardProps
} from "components/FilmCard"

interface FilmListProps {
  list: FilmCardProps[]
}

const FilmList: FC<FilmListProps> = memo(props => {
  return (
    <div className='flex flex-row flex-wrap justify-evenly gap-6 px-8'>
      {props.list.map((item, index) => {
        return (
          <FilmCard key={item.imdbID || index} {...item} />
        )
      })}
    </div>
  )
})

export default FilmList
