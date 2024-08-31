
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const Categories = () => {
//   const [categories, setCategories] = useState([]);
//   const [newCategoryName, setNewCategoryName] = useState('');
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchCategories();
//   }, []);

//   const fetchCategories = async () => {
//     try {
//       const response = await axios.get('http://localhost:8080/api/categories/all');
//       setCategories(response.data);
//     } catch (error) {
//       console.error('Error fetching categories:', error);
//     }
//   };

//   const handleAddCategory = async () => {
//     try {
//       const response = await axios.post('http://localhost:8080/api/categories/create', {
//         categoryName: newCategoryName,
//       });

//       console.log(response);
      
//       const newCategory = response.data;

//       setCategories((prevCategories) => [...prevCategories, newCategory]);

//       // Clear the input field
//       setNewCategoryName('');
//     } catch (error) {
//       console.error('Error adding category:', error);
//     }
//   };

//   const handleUpdateCategory = async (categoryId) => {
//     const updatedCategoryName = prompt('Enter new category name:');
//     if (!updatedCategoryName) return;

//     try {
//       await axios.put(`http://localhost:8080/api/categories/update/${categoryId}`, {
//         categoryName: updatedCategoryName,
//       });

//       setCategories((prevCategories) =>
//         prevCategories.map((category) =>
//           category.categoryId === categoryId
//             ? { ...category, categoryName: updatedCategoryName }
//             : category
//         )
//       );
//     } catch (error) {
//       console.error('Error updating category:', error);
//     }
//   };

//   const handleDeleteCategory = async (categoryId) => {
//     try {
//       console.log(`Attempting to delete category with ID: ${categoryId}`);
//       const response = await axios.delete(`http://localhost:8080/api/categories/delete/${categoryId}`);
//       console.log('Delete response:', response);
  
//       if (response.status === 200) {
//         setCategories((prevCategories) => prevCategories.filter((category) => category.categoryId !== categoryId));
//       } else {
//         console.error('Failed to delete category:', response.data);
//       }
//     } catch (error) {
//       console.error('Error deleting category:', error);
//     }
//   };
  

//   const handleAddPlant = (categoryId) => {
//     navigate(`/plant-details/${categoryId}`);
//   };

//   return (
//     <div className="min-h-screen bg-gray-100">
//       <div className="container mx-auto py-8">
//         <h1 className="text-3xl font-bold mb-6">Category Management</h1>
//         <div className="flex mb-4">
//           <input
//             type="text"
//             className="flex-grow p-2 border rounded mr-2"
//             placeholder="New Category Name"
//             value={newCategoryName}
//             onChange={(e) => setNewCategoryName(e.target.value)}
//           />
//           <button
//             className={`bg-green-500 text-white py-2 px-4 rounded ${newCategoryName ? '' : 'opacity-50 cursor-not-allowed'}`}
//             onClick={handleAddCategory}
//             disabled={!newCategoryName}
//           >
//             Add Category
//           </button>
//         </div>
//         <table className="min-w-full bg-white border border-gray-300">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="py-2 px-4 border">Category ID</th>
//               <th className="py-2 px-4 border">Category Name</th>
//               <th className="py-2 px-4 border">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {categories.map((category) => (
//               <tr key={category.categoryId} className="hover:bg-gray-100">
//                 <td className="py-2 px-4 border">{category.categoryId}</td>
//                 <td className="py-2 px-4 border">{category.categoryName}</td>
//                 <td className="py-2 px-4 border">
//                   <button
//                     className="bg-blue-500 text-white py-1 px-3 rounded mr-2"
//                     onClick={() => handleUpdateCategory(category.categoryId)}
//                   >
//                     Update
//                   </button>
//                   <button
//                     className="bg-red-500 text-white py-1 px-3 rounded mr-2"
//                     onClick={() => handleDeleteCategory(category.categoryId)}
//                   >
//                     Delete
//                   </button>
//                   <button
//                     className="bg-yellow-500 text-white py-1 px-3 rounded"
//                     onClick={() => handleAddPlant(category.categoryId)}
//                   >
//                     Add Plant
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Categories;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaEdit, FaTrashAlt, FaLeaf } from 'react-icons/fa';

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [newCategoryName, setNewCategoryName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/categories/all');
      setCategories(response.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const handleAddCategory = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/categories/create', {
        categoryName: newCategoryName,
      });

      const newCategory = response.data;
      setCategories((prevCategories) => [...prevCategories, newCategory]);

      setNewCategoryName('');
    } catch (error) {
      console.error('Error adding category:', error);
    }
  };

  const handleUpdateCategory = async (categoryId) => {
    const updatedCategoryName = prompt('Enter new category name:');
    if (!updatedCategoryName) return;

    try {
      await axios.put(`http://localhost:8080/api/categories/update/${categoryId}`, {
        categoryName: updatedCategoryName,
      });

      setCategories((prevCategories) =>
        prevCategories.map((category) =>
          category.categoryId === categoryId
            ? { ...category, categoryName: updatedCategoryName }
            : category
        )
      );
    } catch (error) {
      console.error('Error updating category:', error);
    }
  };

  const handleDeleteCategory = async (categoryId) => {
    try {
      const response = await axios.delete(`http://localhost:8080/api/categories/delete/${categoryId}`);

      if (response.status === 200) {
        setCategories((prevCategories) => prevCategories.filter((category) => category.categoryId !== categoryId));
      } else {
        console.error('Failed to delete category:', response.data);
      }
    } catch (error) {
      console.error('Error deleting category:', error);
    }
  };

  const handleAddPlant = (categoryId) => {
    navigate(`/plant-details/${categoryId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-200 to-green-100">
      <div className="container mx-auto py-8">
        <h1 className="text-4xl font-bold text-green-800 mb-6">Category Management</h1>
        <div className="flex mb-4">
          <input
            type="text"
            className="flex-grow p-2 border border-green-400 rounded-l"
            placeholder="New Category Name"
            value={newCategoryName}
            onChange={(e) => setNewCategoryName(e.target.value)}
          />
          <button
            className={`bg-green-600 text-white py-2 px-4 rounded-r ${newCategoryName ? '' : 'opacity-50 cursor-not-allowed'}`}
            onClick={handleAddCategory}
            disabled={!newCategoryName}
          >
            Add Category
          </button>
        </div>
        <table className="min-w-full bg-white shadow-md rounded-lg border border-gray-300">
          <thead>
            <tr className="bg-green-300">
              <th className="py-2 px-4 border">Category ID</th>
              <th className="py-2 px-4 border">Category Name</th>
              <th className="py-2 px-4 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => (
              <tr key={category.categoryId} className="hover:bg-green-100">
                <td className="py-2 px-4 border">{category.categoryId}</td>
                <td className="py-2 px-4 border">{category.categoryName}</td>
                <td className="py-2 px-4 border">
                  <button
                    className="bg-green-500 hover:bg-green-700 text-white py-1 px-3 rounded mr-2 shadow-lg"
                    onClick={() => handleUpdateCategory(category.categoryId)}
                  >
                    <FaEdit />
                  </button>
                  <button
                    className="bg-green-500 hover:bg-green-700 text-white py-1 px-3 rounded mr-2 shadow-lg"
                    onClick={() => handleDeleteCategory(category.categoryId)}
                  >
                    <FaTrashAlt />
                  </button>
                  <button
                    className="bg-green-500 hover:bg-green-700 text-white py-1 px-3 rounded shadow-lg"
                    onClick={() => handleAddPlant(category.categoryId)}
                  >
                    <FaLeaf />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Categories;
