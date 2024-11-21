import React, { useState } from "react";
import DashboardLayout from "./DashboardLayout"; // Assuming this is in the same directory
import AddProduct from "./AddProoduct";
import CreateProduct from "./CreateProduct";

export default function ProductList() {
  const [products, setProducts] = useState([
    {
      name: "Product 1",
      color: "Red",
      size: "M",
      description: "A beautiful red shirt.",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Product 2",
      color: "Blue",
      size: "L",
      description: "A stylish blue shirt.",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Product 3",
      color: "Green",
      size: "S",
      description: "A fresh green shirt.",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Product 4",
      color: "Yellow",
      size: "XL",
      description: "A vibrant yellow shirt.",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Product 5",
      color: "Purple",
      size: "M",
      description: "A classy purple shirt.",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Product 6",
      color: "Black",
      size: "L",
      description: "A sleek black shirt.",
      image: "https://via.placeholder.com/150",
    },
  ]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(5);
  const [modalOpen, setModalOpen] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: "",
    color: "",
    size: "",
    description: "",
    image: "",
  });

  // Calculate the current products to display based on page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Handle pagination
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Handle opening and closing modal
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  // Handle input changes in modal form
  const handleInputChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  // Handle adding a new product
  const handleAddProduct = () => {
    setProducts([...products, newProduct]);
    setNewProduct({
      name: "",
      color: "",
      size: "",
      description: "",
      image: "",
    });
    closeModal();
  };

  // Pagination buttons
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(products.length / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <DashboardLayout>
      <div className="flex min-h-screen mt-10">
        {/* Main Content Wrapper */}
        <div className="w-full flex-1 p-6">
          {/* Title and New Button */}
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-semibold">Product List</h1>
            <button
              onClick={openModal}
              className="bg-green-500 text-white px-4 py-2 rounded-md flex items-center"
            >
              <span className="mr-2">New</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 5v14m7-7H5"
                />
              </svg>
            </button>
          </div>

          {/* Product Table */}
          <div className="overflow-x-auto bg-white p-6 rounded-md shadow-md">
            <table className="min-w-full table-auto">
              <thead>
                <tr>
                  <th className="py-3 px-4 text-left border-b">Product Name</th>
                  <th className="py-3 px-4 text-left border-b">Color</th>
                  <th className="py-3 px-4 text-left border-b">Size</th>
                  <th className="py-3 px-4 text-left border-b">Description</th>
                  <th className="py-3 px-4 text-left border-b">Image</th>
                </tr>
              </thead>
              <tbody>
                {currentProducts.map((product, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">{product.name}</td>
                    <td className="py-3 px-4 border-b">{product.color}</td>
                    <td className="py-3 px-4 border-b">{product.size}</td>
                    <td className="py-3 px-4 border-b">
                      {product.description}
                    </td>
                    <td className="py-3 px-4 border-b">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-20 h-20 object-cover rounded"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="mt-4 flex justify-center">
            <ul className="flex space-x-2">
              {pageNumbers.map((number) => (
                <li key={number}>
                  <button
                    onClick={() => paginate(number)}
                    className={`${
                      currentPage === number
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200 text-gray-800"
                    } px-4 py-2 rounded-md`}
                  >
                    {number}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Modal for Adding New Product */}
      {modalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-160 relative">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <h2 className="text-xl font-semibold mb-4">Add New Product</h2>
            <CreateProduct />
          </div>
        </div>
      )}
    </DashboardLayout>
  );
}
