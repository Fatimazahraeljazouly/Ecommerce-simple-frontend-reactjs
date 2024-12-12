import React from 'react';
import Header from '../Indexing/Header';
import Footer from '../Indexing/Footer';
import { postUserData } from '../Services/api';
import { useState } from 'react';
const AddUser = () => {
  const [userData, setUserData] = useState({
    login: '',
    password: '',
    confirmedPassword: '',
    connectionNumber: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (userData.password !== userData.confirmedPassword) {
      alert("Passwords don't match");
      return;
    }

    try {
      const response = await postUserData(userData);
      console.log('User added successfully:', response);
      // Handle success (e.g., redirect or show success message)
    } catch (error) {
      console.error('Error adding user:', error);
      // Handle error (e.g., show error message)
    }
  };
  return (
    <>
      <Header />
      <div className='flex flex-1 justify-center mx-auto mt-16'>
        <div className='bg-light w-full max-w-3xl p-8 rounded-lg shadow-md'>
          <h1 className='text-3xl font-semibold text-primary mb-6 text-center'>Add User</h1>
          <div className='bg-thi p-8 rounded-lg shadow-lg'>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="login" className="block text-lg font-medium text-primary">Login:</label>
                <input type="text" id="login" name="login" required value={userData.login}
                onChange={(e)=>setUserData({...userData,login:e.target.value})}
                  className="w-full p-3 border border-secondary rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-lg font-medium text-primary">Password:</label>
                <input
                  type="password"
                  value={userData.password}
                  onChange={(e)=>setUserData({...userData,password:e.target.value})}
                  id="password"
                  name="password"
                  required
                  className="w-full p-3 border border-secondary rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="c-password" className="block text-lg font-medium text-primary">Confirmed Password:</label>
                <input
                  type="password"
                  value={userData.confirmedPassword}
                  onChange={(e)=>
                    setUserData({...userData,confirmedPassword:e.target.value})}
                  id="c-password"
                  name="c-password"
                  required
                  className="w-full p-3 border border-secondary rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label htmlFor="connectionNumber" className="block text-lg font-medium text-primary">Connection Number:</label>
                <input
                value={userData.connectionNumber}
                onChange={(e)=>setUserData({...userData,connectionNumber:e.target.value})}
                  type="number"
                  id="connectionNumber"
                  name="connectionNumber"
                  className="w-full p-3 border border-secondary rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div className='text-center'>
                <button
                  type="submit"
                  className='bg-secondary text-white py-2 px-6 rounded-lg mt-4 hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary'
                >
                  Add User
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AddUser;
