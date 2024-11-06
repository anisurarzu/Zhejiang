import React, { useState } from "react";

export default function ProductCard() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1); // Current page state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const productsPerPage = 8;
  const fabricImages = [
    {
      filePath: "/img/cl-1.jpg",
      name: "col-1",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      filePath: "/img/cl-2.jpg",
      name: "col-2",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      filePath: "/img/cl-3.jpg",
      name: "col-3",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      filePath: "/img/cl-4.jpg",
      name: "col-4",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      filePath: "/img/cl-5.jpg",
      name: "col-5",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      filePath: "/img/cl-6.jpg",
      name: "col-6",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      filePath: "/img/cl-7.jpg",
      name: "col-7",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      filePath: "/img/cl-8.jpg",
      name: "col-8",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      filePath: "/img/cl-8.jpg",
      name: "col-9",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
  ];
  const getButtonColor = (index) => {
    const colors = [
      "bg-red-600",
      "bg-blue-600",
      "bg-green-600",
      "bg-yellow-600",
      "bg-indigo-600",
      "bg-purple-600",
      "bg-pink-600",
      "bg-teal-600",
    ];
    return colors[index % colors.length];
  };
  const filteredFabricImages = fabricImages.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const totalPages = Math.ceil(filteredFabricImages.length / productsPerPage);

  // Slice the products based on the current page
  const currentProducts = filteredFabricImages.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  // Handle page change (next/previous)
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  // Close Modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };


  return (
    <div className="mt-10">
      {/* Product Section */}
      <div className="py-12 bg-white">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Our Fabrics
        </h2>

        {/* Search Field */}
        <div className="flex justify-between">
          <div></div>
          <div className="mr-16 mb-2">
            <input
              type="text"
              placeholder="Search by fabric name"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 border rounded-md shadow-md focus:outline-none"
            />
          </div>
        </div>

        {/* Display Filtered and Paginated Products */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4 md:px-16">
          {currentProducts.map((product, index) => (
            <div
              key={index}
              className="relative bg-white rounded-lg shadow-xl overflow-hidden h-96 flex flex-col"
            >
              <img
                src={product.filePath}
                alt={`Fabric ${index + 1}`}
                className="w-full h-48 object-cover"
              />
              <div className="flex flex-col p-6 flex-grow">
                <h3 className="text-2xl font-semibold text-gray-800">
                  {product.name}
                </h3>
                <p className="text-gray-600 mt-3 text-sm line-clamp-3">
                  {product.description}
                </p>
              </div>

              <div className="mt-5">
                <button
                  onClick={() => openModal(product)}
                  className={`absolute bottom-4 right-6 py-2 px-4 text-white ${getButtonColor(
                    index
                  )} transform hover:translate-y-1 transition-all`}
                >
                  Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center mt-8">
          {/* Previous Button */}
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-300 rounded-md mx-1 disabled:opacity-50"
          >
            &lt;
          </button>

          {/* Page Numbers */}
          {[...Array(totalPages).keys()].map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page + 1)}
              className={`px-4 py-2 border rounded-md mx-1 ${
                currentPage === page + 1 ? "bg-blue-600 text-white" : "bg-white"
              }`}
            >
              {page + 1}
            </button>
          ))}

          {/* Next Button */}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-300 rounded-md mx-1 disabled:opacity-50"
          >
            &gt;
          </button>
        </div>
        {/* Pagination End */}
        {isModalOpen && selectedProduct && (
          <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50">
            <div className="bg-white w-[600px] h-auto rounded-lg overflow-hidden shadow-xl p-6">
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 text-gray-600 font-bold text-lg"
              >
                X
              </button>
              <div className="flex flex-col items-center">
                <img
                  src={selectedProduct.filePath}
                  alt="Selected Fabric"
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-3xl font-semibold text-gray-800">
                  {selectedProduct.name}
                </h3>
                <p className="text-gray-600 mt-3 text-sm">
                  {selectedProduct.description}
                </p>
                <button
                  className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
