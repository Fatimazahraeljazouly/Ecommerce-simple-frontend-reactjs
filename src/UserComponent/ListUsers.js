import React, { useEffect, useState } from 'react';
import { getAllUsers ,deleteUser} from '../Services/api';
import Header from '../Indexing/Header';
import Footer from '../Indexing/Footer';
import { Link } from 'react-router';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ListUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersData = await getAllUsers(); // Await the promise
        console.log('Fetched Users:', usersData); // Debugging log
        setUsers(usersData);
        setLoading(false);
      } catch (e) {
        console.error('Error in getting data:', e);
        setError('Failed to fetch users');
        setLoading(false); // Stop loading even if there's an error
      }
    };

    fetchUsers();
  }, []);

  if (loading) return toast.error("Run Tha backend Server", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "light",
    transition: Bounce,
  });
  if (error) return <p>{error}</p>;

  return (
    <div>
      <Header />
      <ToastContainer />
      <div className='flex  flex-1 justify-center'>
      <table className="table-auto border-collapse border border-gray-400 w-[90%] mt-9 content-center  ">
        <thead>
          <tr>
            <th className="border border-gray-400 px-2 py-2">ID</th>
            <th className="border border-gray-400 px-2 py-2">Login</th>
            <th className="border border-gray-400 px-2 py-2">Password</th>
            <th className="border border-gray-400 px-2 py-2">Connection Number</th>
            <th className="border border-gray-400 px-2 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(users) && users.length > 0 ? (
            users.map(user => (
              <tr key={user.idUser}>
                <td className="border border-gray-400 px-2 py-1">{user.idUser}</td>
                <td className="border border-gray-400 px-2 py-1">{user.login}</td>
                <td className="border border-gray-400 px-2 py-1">{user.password}</td>
                <td className="border border-gray-400 px-2 py-1">{user.connectionNumber}</td>
                <td className="border border-gray-400 px-2 py-2 grid   grid-cols-2 gap-5">
                <button 
                    className="bg-primary text-thi px-2 py-1 rounded mr-2 hover:bg-thi hover:text-primary transition delay-200" 
                    onClick={() => {
                      if (window.confirm(`you want to delete user with xx ID ${user.idUser}?`)) {
                        //alert(`You want to delete User with id ${user.idUser}`);
                        deleteUser(user.idUser)
                          .then(() => {
                            setUsers((prevUsers) => prevUsers.filter((u) => u.idUser !== user.idUser));
                            toast.success("User deleted successfully!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "light",
          transition: Bounce,
        });
                          })
                          .catch((error) => {
                            toast.error("Error deleting user!", {
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
                  <Link to={`/update-user/${user.idUser}`}>Update</Link>
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
};

export default ListUsers;
