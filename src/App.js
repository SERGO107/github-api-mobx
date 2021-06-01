import Header from './components/Header.js'
import UserCard from './components/UserCard'
import ReposList from './components/ReposList'
import Paginat from './components/Pagination'
// import Store from './store'
// import {useContext} from 'react'


import './App.css';


function App() {
  // const OwnStore = useContext(Store) 
  return (
    <div className="App">
      <Header />
      <UserCard />
      <ReposList />
      <Paginat />
    </div>
  );
}

export default App;
