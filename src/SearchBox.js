import { React } from "react";

export default function SearchBox(props) {
  return (
    <>
      <input
        type="text"
        placeholder="search movie"
        value={props.searchValue}
        onChange={(event) => props.setSearch(event.target.value)}
      ></input>
    </>
  );
}
