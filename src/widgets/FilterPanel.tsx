import FilterController from "components/FilterController"
import SearchInput from "shared/ui/SearchInput"

const FilterPanel = () => {
  return (
    <div className='md:mt-36 flex justify-center mb-6 md:mb-12'>
      <div className='join join-vertical md:join-horizontal mx-10 w-fit'>
        <SearchInput />
        <FilterController sortTypeController={"imdbRating"}>
          Рейтинг
        </FilterController>
        <FilterController sortTypeController={"Year"}>
          Дата
        </FilterController>
      </div>
    </div>
  )
}

export default FilterPanel
