import { IUseLocationPathName, useLocationPathNameResult } from "../types/general.types";





export const useLocationPathName = (props: IUseLocationPathName): useLocationPathNameResult => {

  const string = props.location?.pathname?.split("/")[props.limit];
  const firstLetter = props.isFirstLetterUppercased ? string?.charAt(0).toLocaleUpperCase() : string?.charAt(0).toLocaleLowerCase();
  const lastLetters = string?.slice(1);

  const path = firstLetter + lastLetters


  const urlSearchParams = new URLSearchParams(window.location.search);
  const searchParam = urlSearchParams.get(props.searchQuery && props.searchQuery);

  return {
    path, // beauty
    searchParam // type
  };
};