import React, { useEffect } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

import "./App.css";
import { connect } from "react-redux";
import { setSearchField, requestRobots } from "./redux/actions";

function App(props) {
  // const [searchField, setSearchField] = useState("");
  // const [monsters, setMonsters] = useState([]);
  const { monsters, requestRobots, isLoading } = props;
  // const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    requestRobots();
  }, [requestRobots]);

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => response.json())
  //     .then((users) => {
  //       setMonsters(users);
  //       setIsLoading(false);
  //     });
  // }, [monsters]);
  // const handleChange = (e) => {
  //   setSearchField(e.target.value);
  // };
  const handleChange = (e) => {
    props.onSearchChange(e);
  };
  const filteredMonsters = monsters.filter((monster) =>
    monster.name.toLowerCase().includes(props.searchField.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Monster Rolodex</h1>
      <SearchBox placeholder="Search Monsters" handleChange={handleChange} />
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <CardList monsters={filteredMonsters} />
      )}
      <footer className="footer">
        © {new Date().getFullYear()}, Made with
        <span
          style={{ margin: "0 0.3rem" }}
          role="img"
          aria-labelledby="heart emoji"
        >
          ❤️
        </span>
        by
        {` `}
        <a href="https://wasifbaliyan.com">Wasif Baliyan</a>
      </footer>
    </div>
  );
}

const mapStateToProps = (state) => ({
  searchField: state.searchRobots.searchField,
  monsters: state.fetchRobots.monsters,
  isLoading: state.fetchRobots.isLoading,
  errors: state.fetchRobots.errors,
});

const mapDispatchToProps = (dispatch) => ({
  onSearchChange: (e) => dispatch(setSearchField(e.target.value)),
  requestRobots: () => dispatch(requestRobots()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
