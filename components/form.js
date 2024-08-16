import Toast from "@/components/Toast";
import { useEffect, useState } from "react";

function Form() {
  const [showToast, setShowToast] = useState(false);
  const [bookData, setBookData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const author = e.target[1].value;
    const genre = e.target[2].value;
    setBookData({ name, author, genre });
    setShowToast(true);
  };

  useEffect(() => {
    if (showToast) {
      setTimeout(() => {
        setShowToast(false);
      }, 2000);
    }
  }, [showToast]);

  return (
    <>
      <div className=" w-full flex flex-col items-center justify-center  mb-20 mt-0 py-10 px-20">
       
        <h1 className="text-3xl font-extrabold mb-8 text-center">Register New Book</h1>
        
     
        <form
          onSubmit={handleSubmit}
          className="max-w-sm w-full p-6 bg-white rounded-lg shadow-md dark:bg-gray-800"
        >
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
            <input
              type="text"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            />
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Author</label>
            <input
              type="text"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            />
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Genre</label>
            <input
              type="text"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            />
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Register new Book
          </button>
        </form>
      </div>
      {showToast && <Toast message={bookData} close={() => setShowToast(false)} />}
    </>
  );
}

export default Form;
