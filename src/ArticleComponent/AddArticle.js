import React from 'react';
import Header from '../Indexing/Header';
import Footer from '../Indexing/Footer';
import { addArticle } from '../Services/api';
import { useState } from 'react';
const AddArticle = () => {
  const [articleData, setArticleData] = useState({
    price: '',
    brand: '',
    descreption: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    
    try {
      const response = await addArticle(articleData);
      alert("User Added Successfully");
      console.log('Article added successfully:', response);
    } catch (error) {
      console.error('Error adding article:', error);
      alert("error adding article")
    }
  };
  return (
    <>
      <Header />
      <div className='flex flex-1 justify-center mx-auto mt-16'>
        <div className='bg-light w-full max-w-3xl p-8 rounded-lg shadow-md'>
          <h1 className='text-3xl font-semibold text-primary mb-6 text-center'>Add Article</h1>
          <div className='bg-thi p-8 rounded-lg shadow-lg'>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="price" className="block text-lg font-medium text-primary">Price:</label>
                <input type="number" id="price" name="price" required value={articleData.login}
                onChange={(e)=>setArticleData({...articleData,price:e.target.value})}
                  className="w-full p-3 border border-secondary rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="brand" className="block text-lg font-medium text-primary">Brand:</label>
                <input
                  type="text"
                  value={articleData.brand}
                  onChange={(e)=>setArticleData({...articleData,brand:e.target.value})}
                  id="brand"
                  name="brand"
                  required
                  className="w-full p-3 border border-secondary rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="descreption" className="block text-lg font-medium text-primary">Descreption:</label>
                <input
                value={articleData.descreption}
                onChange={(e)=>setArticleData({...articleData,descreption:e.target.value})}
                  type="text"
                  id="descreption"
                  name="descreption"
                  className="w-full p-3 border border-secondary rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div className='text-center'>
                <button
                  type="submit"
                  className='bg-secondary text-white py-2 px-6 rounded-lg mt-4 hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary'
                >
                  Add Article
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

export default AddArticle;
