import { Recipe } from "@/custom-type";
import { selectSiteData, updateList, updateNoResults } from "@/features/siteData";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

interface UseSearchDataReturn {
  searchData: (param: string) => void;
}

const useSearchData = (): UseSearchDataReturn => {
  const dispatch = useDispatch();
  const allData = useSelector(selectSiteData);
  const [filteredData, setFilteredData] = useState<Recipe[] | null>(null);
  const [noResults, setNoResults] = useState(false)

  const searchData = (searchValue: string) => {
    const searchLowerCase = searchValue.toLowerCase();

    const updateData = allData?.filter((thisRecipe) => {
      const thisRecipeTitleLowerCase = thisRecipe.name.toLowerCase();
      const thisRecipeIngredients = thisRecipe.ingredients;

      if (thisRecipeTitleLowerCase.indexOf(searchLowerCase) !== -1) {
        return thisRecipe;
      }

      const ingredientMatches = thisRecipeIngredients.some((thisIngredient) => (
        thisIngredient.toLowerCase().includes(searchLowerCase)
      ));

      return ingredientMatches;

    })

    if (updateData) {
      setFilteredData(updateData)
    }
    else {
      setNoResults(true)
    }
  }

  useEffect(() => {
    dispatch(updateNoResults(noResults))
  }, [dispatch, noResults])

  useEffect(() => {
    if (filteredData) {
      dispatch(updateList(filteredData))
    }
  }, [dispatch, filteredData])

  return { searchData }
}

export default useSearchData;