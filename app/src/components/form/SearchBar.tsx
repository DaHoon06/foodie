import React, { useCallback, useState } from "react";
import { useRouter } from "next/router";
import * as styles from "@components/form/SearchBar.css";

type Props = {
  onAddKeyword: (string: string) => void;
  keyword?: string;
};

export const SearchBar = ({ onAddKeyword, keyword }: Props) => {
  const [searchValue, setSearchValue] = useState(keyword || "");

  const router = useRouter();

  const onChangeSearch = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchValue(e.target.value);
    },
    []
  );

  const onSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
      e.preventDefault();
      if (searchValue.length === 0) {
        alert("키워드를 입력해 주세요.");
        return;
      }
      await router.push(`/search?keyword=${searchValue}`);
      onAddKeyword(searchValue);
      setSearchValue("");
      router.push(`/search/result?keyword=${encodeURIComponent(searchValue)}`);
    },
    [searchValue, router, onAddKeyword]
  );
  return (
    <header>
      <form onSubmit={onSubmit}>
        <label className={styles.searchInputLabel}>
          <input
            value={searchValue}
            onChange={onChangeSearch}
            placeholder={"지역, 장소, 메뉴 검색"}
            type={"search"}
            className={styles.searchInput}
          />
        </label>
      </form>
    </header>
  );
};
