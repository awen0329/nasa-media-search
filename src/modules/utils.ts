import { getYear } from "date-fns"
import { FilterConditions, FilterFields } from "../types"

export function getFilterConditions(filter: FilterConditions): FilterConditions {
  let filterParams: FilterConditions = {}
  Object.keys(filter).forEach((key) => {
    let value = filter[key as FilterFields]
    if (value) {
      if (key === "year_start" || key === "year_end") {
        value = getYear(new Date(value)).toString()
      }
      filterParams[key as FilterFields] = value
    }
  })

  return filterParams
}
