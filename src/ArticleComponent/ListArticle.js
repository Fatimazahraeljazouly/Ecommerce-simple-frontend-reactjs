import React from 'react'
import Header from '../Indexing/Header'
import Footer from '../Indexing/Footer'
import { Link } from 'react-router-dom'
import { useState,useEffect } from 'react'
import { getALLArticle ,deletArticle} from '../Services/api'
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ListArticle = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchArticles = async () => {
        try {
          const artData = await getALLArticle(); // Await the promise
          console.log('Fetched Users:', artData); // Debugging log
          setArticles(artData);
          setLoading(false);
        } catch (e) {
          console.error('Error in getting data:', e);
          setError('Failed to fetch articles');
          setLoading(false); // Stop loading even if there's an error
        }
      };
  
      fetchArticles();
    }, []);
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;
  
    return (
      <div>
        <Header />
        <ToastContainer/>
        <div className='flex  flex-1 justify-center'>
        <table className="table-auto border-collapse border border-gray-400 w-[90%] mt-9 content-center  ">
          <thead>
            <tr>
              <th className="border border-gray-400 px-2 py-2">ID</th>
              <th className="border border-gray-400 px-2 py-2">Price</th>
              <th className="border border-gray-400 px-2 py-2">Brand</th>
              <th className="border border-gray-400 px-2 py-2">Description</th>
              <th className="border border-gray-400 px-2 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(articles) && articles.length > 0 ? (
                articles.map(article => (
                <tr key={article.idArticle}>
                  <td className="border border-gray-400 px-2 py-1">{article.idArticle}</td>
                  <td className="border border-gray-400 px-2 py-1">{article.price}</td>
                  <td className="border border-gray-400 px-2 py-1">{article.brand}</td>
                  <td className="border border-gray-400 px-2 py-1">{article.descreption}</td>
                  <td className="border border-gray-400 px-2 py-2 grid   grid-cols-2 gap-5">
                  <button 
                      className="bg-primary text-thi px-2 py-1 rounded mr-2 hover:bg-thi hover:text-primary transition delay-200" 
                      onClick={() => {
                        if (window.confirm(`you want to delete user with xx ID ${article.idArticle}?`)) {
                          //alert(`You want to delete User with id ${user.idArticle}`);
                          deletArticle(article.idArticle)
                            .then(() => {
                              setArticles((prevUsers) => prevUsers.filter((u) => u.idArticle !== article.idArticle));
                              toast.success("Article deleted successfully!", {
                                position: "top-right",
                                autoClose: 5000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                theme: "light",
                                transition: Bounce,
                              });                            })
                            .catch((error) => {
                              toast.error("Error deleting user", {
                                position: "top-right",
                                autoClose: 5000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                theme: "light",
                                transition: Bounce,
                              });
                              console.error(error); // Log the error for debugging
                            });
                        }
                      }} 
                    >
                      Delete
                    </button>
                    <button  className="bg-primary text-thi px-2 py-1 rounded mr-2 hover:bg-thi hover:text-primary transition delay-200" >
                    <Link to={`/update-user/${article.idArticle}`}>Update</Link>
                    </button>
  
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="border border-gray-400 px-4 py-2 text-center">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
        </div>
       
        <Footer />
      </div>
    );
}

export default ListArticle
