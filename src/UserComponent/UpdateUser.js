import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getUserById, updateUser } from '../Services/api';
import Header from '../Indexing/Header';
import Footer from '../Indexing/Footer';
import { Link } from 'react-router-dom';

const UpdateUser = () => {
  const { id } = useParams(); 
  const navigate = useNavigate(); 

  const [userData, setUserData] = useState({
    idUser: '',
    login: '',
    password: '',
    confirmedPassword: '',
    connectionNumber: '',
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await getUserById(id); 
        setUserData({
          idUser: response.idUser,
          login: response.login,
          password: response.password,
          confirmedPassword: '',
          connectionNumber: response.connectionNumber,
        });
      } catch (error) {
        console.error('errror getting user data:', error);
      }
    };

    fetchUserData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (userData.password !== userData.confirmedPassword) {
      alert("password don't match");
      return;
    }

    try {
      const response = await updateUser(id, {
        login: userData.login,
        password: userData.password,
        connectionNumber: userData.connectionNumber,
      });
      console.log('User updated successfully:', response);
      alert('User updated successfully');
      navigate('/list-users'); 
    } catch (error) {
      console.error('Error updating user:', error);
      alert('Failed to update user');
    }
  };

  return (
    <>
      <Header />
      <div className="flex flex-1 justify-center mx-auto mt-16">
        <div className="bg-light w-full max-w-3xl p-8 rounded-lg shadow-md">
          <h1 className="text-3xl font-semibold text-primary mb-6 text-center">Update User</h1>
          <div className="bg-thi p-8 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="idUser" className="block text-lg font-medium text-primary">Id:</label>
                <input
                  type="text"
                  id="idUser"
                  name="idUser"
                  disabled
                  value={userData.idUser}
                  className="w-full p-3 border border-secondary rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="login" className="block text-lg font-medium text-primary">Login:</label>
                <input
                  type="text"
                  id="login"
                  name="login"
                  required
                  value={userData.login}
                  onChange={(e) => setUserData({ ...userData, login: e.target.value })}
                  className="w-full p-3 border border-secondary rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-lg font-medium text-primary">Password:</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  required
                  value={userData.password}
                  onChange={(e) => setUserData({ ...userData, password: e.target.value })}
                  className="w-full p-3 border border-secondary rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="confirmedPassword" className="block text-lg font-medium text-primary">Confirmed Password:</label>
                <input
                  type="password"
                  id="confirmedPassword"
                  name="confirmedPassword"
                  required
                  value={userData.confirmedPassword}
                  onChange={(e) => setUserData({ ...userData, confirmedPassword: e.target.value })}
                  className="w-full p-3 border border-secondary rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="connectionNumber" className="block text-lg font-medium text-primary">Connection Number:</label>
                <input
                  type="number"
                  id="connectionNumber"
                  name="connectionNumber"
                  value={userData.connectionNumber}
                  onChange={(e) => setUserData({ ...userData, connectionNumber: e.target.value })}
                  className="w-full p-3 border border-secondary rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-secondary text-white py-2 px-6 rounded-lg mt-4 hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary">
                <Link 
                to={`/list-users`}>
                Update User
                </Link>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UpdateUser;
