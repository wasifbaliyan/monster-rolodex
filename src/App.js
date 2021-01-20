import React, { useEffect } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

import "./App.css";
import { connect } from "react-redux";
import {
  setSearchField,
  requestRobots,
  fetchAlbumsAndUsers,
} from "./redux/actions";

function App(props) {
  // const [searchField, setSearchField] = useState("");
  // const [monsters, setMonsters] = useState([]);
  const {
    // monsters,
    // requestRobots,
    // isLoading,
    loading,
    albums,
    fetchAlbumsAndUsers,
  } = props;
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   requestRobots();
  // }, [requestRobots]);

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

  useEffect(() => {
    fetchAlbumsAndUsers();
  }, []);

  console.log(loading, albums);
  // const handleChange = (e) => {
  //   props.onSearchChange(e);
  // };
  // const filteredMonsters = monsters.filter((monster) =>
  //   monster.name.toLowerCase().includes(props.searchField.toLowerCase())
  // );

  return (
    <div className="App">
      {/* <h1>Monster Rolodex</h1>
      <SearchBox placeholder="Search Monsters" handleChange={handleChange} />
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <CardList monsters={filteredMonsters} />
      )} */}
      <footer className="footer">
        {loading
          ? "Loading"
          : albums[0].map((album) => {
              const user = albums[1].find((user) => user.id === album.userId);
              return (
                <div key={album.id}>
                  <h1>{user.name}</h1>
                  <h2>{album.title}</h2>
                </div>
              );
            })}
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
  albums: state.fetchAlbumsAndUsers.albums,
  loading: state.fetchAlbumsAndUsers.loading,
});

const mapDispatchToProps = (dispatch) => ({
  onSearchChange: (e) => dispatch(setSearchField(e.target.value)),
  requestRobots: () => dispatch(requestRobots()),
  fetchAlbumsAndUsers: () => dispatch(fetchAlbumsAndUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
