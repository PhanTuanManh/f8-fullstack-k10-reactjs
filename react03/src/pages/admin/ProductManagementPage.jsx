import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { getAll, remove } from "../../axios";

const ProductManagementPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await getAll("/products");
      setProducts(response);
    } catch (error) {
      console.error("Error fetching products", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteProduct = async (id) => {
    try {
      await remove("/products", id);
      fetchProducts();
    } catch (error) {
      console.error("Error deleting product", error);
    }
  };

  const handleConfirmDelete = (product) => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete the product "${product.title}"?`
    );
    if (confirmDelete) {
      handleDeleteProduct(product.id);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-2xl py-2 mb-2 border-b">Product Management</h1>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <button
            className="btn btn-primary my-2"
            onClick={() => {
              window.location.href = `/admin/products/add`;
            }}
          >
            Add Product
          </button>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Id</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Description</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.title}</td>
                  <td>{product.price}$</td>
                  <td>{product.description}</td>
                  <td className="flex gap-3 justify-center items-center">
                    <i
                      className="fa-regular fa-pen-to-square text-blue-500 cursor-pointer text-2xl"
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.href = `/admin/products/update/${product.id}`;
                      }}
                    ></i>

                    <i
                      className="fa-solid fa-trash-can text-red-500 cursor-pointer text-2xl"
                      onClick={() => handleConfirmDelete(product)}
                    ></i>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ProductManagementPage;
