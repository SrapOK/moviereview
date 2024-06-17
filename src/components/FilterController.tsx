import { FC, PropsWithChildren } from "react"
import { IoIosArrowRoundDown } from "react-icons/io"

import {
  selectSortOrder,
  selectSortType,
  setSortOrder,
  setSortType
} from "store/slices/Filter"
import { SortType } from "store/slices/Filter"

import {
  useAppDispatch,
  useAppSelector
} from "@/hooks/store"

interface FilterControllerProps {
  sortTypeController: SortType
}

const FilterController: FC<
  PropsWithChildren<FilterControllerProps>
> = ({ sortTypeController, children }) => {
  const sortOrder = useAppSelector(selectSortOrder)
  const sortType = useAppSelector(selectSortType)
  const dispatch = useAppDispatch()

  const toggleSortOrder = () => {
    if (sortOrder === "asc") dispatch(setSortOrder("desc"))
    else dispatch(setSortOrder("asc"))
  }
  return (
    <div
      onClick={() =>
        sortType === sortTypeController
          ? toggleSortOrder()
          : dispatch(setSortType(sortTypeController))
      }
      className={` join-item input input-bordered cursor-pointer flex select-none py-3 ${
        sortType === sortTypeController ? "bg-base-300" : ""
      }`}
    >
      {children}
      <IoIosArrowRoundDown
        size={20}
        className={` duration-300 my-auto   ${
          sortOrder === "asc" &&
          sortType === sortTypeController
            ? "-rotate-180 translate-y-1.5"
            : ""
        }`}
      />
    </div>
  )
}

export default FilterController
