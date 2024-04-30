import {SearchLayout} from "@layouts/SearchLayout";
import {SearchContainer} from "@containers/SearchContainer";
import {ReactElement} from "react";
import {NextPage} from "next";

const SearchPage: NextPage = (): ReactElement => {

  return (
    <SearchLayout>
      <SearchContainer/>
    </SearchLayout>
  )
}

export default SearchPage;
