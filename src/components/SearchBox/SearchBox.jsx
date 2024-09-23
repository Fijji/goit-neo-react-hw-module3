import styles from "./SearchBox.module.css";

const SearchBox = ({ filter, onFilterChange }) => {
  return (
    <div className={styles.searchBoxContainer}>
      <label htmlFor="filter">Find contacts by name</label>
      <input type="text" id="filter" value={filter} onChange={onFilterChange} />
    </div>
  );
};

export default SearchBox;
