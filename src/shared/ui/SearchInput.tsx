import {
  useAppDispatch,
  useAppSelector
} from "@/hooks/store"
import {
  ChangeEventHandler,
  FC,
  InputHTMLAttributes,
  useMemo,
  useState
} from "react"
import { selectQuery, setQuery } from "store/slices/Filter"

import { debounce } from "@/helpers/debounce"

import { AiOutlineSearch } from "react-icons/ai"

interface SearchInputProps
  extends InputHTMLAttributes<HTMLInputElement> {}

const SearchInput: FC<SearchInputProps> = props => {
  const dispatch = useAppDispatch()
  const defaultQuery = useAppSelector(selectQuery)
  const [localQuery, setLocalQuery] = useState(defaultQuery)

  const debouncedSetQuery = useMemo(() => {
    return debounce(query => dispatch(setQuery(query)), 400)
  }, [])

  const onChange: ChangeEventHandler<
    HTMLInputElement
  > = ev => {
    setLocalQuery(ev.target.value)
    debouncedSetQuery(ev.target.value)
  }

  const allowedCharacters = /[^\W]+|[\s;'":]/giu

  return (
    <label className='input input-bordered flex items-center gap-2 join-item indicator '>
      {localQuery.match(allowedCharacters)?.join("") !==
        localQuery && localQuery.length ? (
        <span className='indicator-item badge badge-warning indicator-center indicator-top md:indicator-bottom'>
          use the Latin alphabet
        </span>
      ) : null}

      <input
        type='search'
        placeholder='Search the film...'
        title='use the Latin alphabet'
        pattern={allowedCharacters.source}
        className={"grow"}
        onChange={onChange}
        value={localQuery}
        {...props}
      />
      <AiOutlineSearch size={20} />
    </label>
  )
}

export default SearchInput
