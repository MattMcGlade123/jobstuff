import { selectSiteData, updateList, updateNoResults } from "@/features/siteData";
import { useEffect, useState, useMemo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

interface UseSearchDataReturn {
  searchData: (param: string) => void;
}

const useSearchData = (): UseSearchDataReturn => {
  const dispatch = useDispatch();
  const allData = useSelector(selectSiteData);
  const [searchValue, setSearchValue] = useState<string>("");

  const filteredData = useMemo(() => {
    if (!searchValue.trim()) return null

    const searchLowerCase = searchValue.toLowerCase();
    return allData?.filter((recipe) => {
      const titleMatch = recipe.name.toLowerCase().includes(searchLowerCase);
      const ingredientMatch = recipe.ingredients.some((ingredient) =>
        ingredient.toLowerCase().includes(searchLowerCase)
      );

      return titleMatch || ingredientMatch;
    }) ?? [];
  }, [allData, searchValue]);

  const noResults = useMemo(() => filteredData?.length === 0, [filteredData]);

  useEffect(() => {
    dispatch(updateNoResults(noResults));
  }, [dispatch, noResults]);

  useEffect(() => {
    if (filteredData) {
      dispatch(updateList(filteredData));
    }
  }, [dispatch, filteredData]);

  const searchData = useCallback((value: string) => {
    setSearchValue(value);
  }, []);

  return { searchData };
};

export default useSearchData;
