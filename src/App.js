import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Correct import
import Home from './Indexing/Home';
import Article from './ArticleComponent/Home';
import User from './UserComponent/Home'
import AddUser from './UserComponent/AddUser'
import SearchUser from './UserComponent/SearchUser';
import ListUsers from './UserComponent/ListUsers';
import UpdateUser from './UserComponent/UpdateUser';
import AddArticle from './ArticleComponent/AddArticle';
import ListArticle from './ArticleComponent/ListArticle';
import Command from './Command/home'
import Payement from './Payement/Home'
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/article-management" element={<Article />} />
          <Route path="/users-management" element={<User />} />
          <Route path="/add-user" element={<AddUser />} />
          <Route path="/search-user" element={<SearchUser />} />
          <Route path="/list-users" element={<ListUsers />} />
          <Route path="/update-user/:id" element={<UpdateUser/>} />
          <Route path='/add-article' element={<AddArticle/>} />
          <Route path='/list-articles' element={<ListArticle/>} />
          <Route path='/commands-management' element={<Command/>} />
          <Route path="/payment-management" element={<Payement />} />

          {/* Uncomment these when needed:
          
          <Route path="/shop" element={<Shop />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/cart" element={<Carts />} /> 
          */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
