import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductList from "../components/ProductList";
import ProductSearch from "../components/ProductSearch";
import Pagination from "../components/Pagination";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useDebounce } from "use-debounce";
import Header from "../components/Header";
import instance from "../axios";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);
  const [error, setError] = useState(null);

  const [debouncedSearchQuery] = useDebounce(searchQuery, 500);

  const fetchProducts = async (query = "", skip = 0, limit = 10) => {
    setLoading(true);
    setError(null);

    try {
      const response = await instance.getAll("/products", {
        params: {
          q: query,
          _start: skip,
          _limit: limit,
        },
      });

      setProducts(response.data);
      console.log(products.length);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
      setError("Lỗi khi tải dữ liệu. Vui lòng thử lại!");
      setLoading(false);
    }
  };

  useEffect(() => {
    const skip = (currentPage - 1) * pageSize;
    fetchProducts(debouncedSearchQuery, skip, pageSize);
  }, [debouncedSearchQuery, currentPage, pageSize]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const handlePageSizeChange = (e) => {
    setPageSize(parseInt(e.target.value, 10));
    setCurrentPage(1);
  };

  return (
    <div className="container mx-auto p-4">
      <Header></Header>
      <section className="mt-10 container">
        <ProductSearch value={searchQuery} onChange={handleSearch} />

        <div className="flex items-center justify-start gap-4 mb-4">
          <label htmlFor="pageSize" className="text-lg">
            Products per page:
          </label>
          <select
            id="pageSize"
            value={pageSize}
            onChange={handlePageSizeChange}
            className="border p-2 rounded-md"
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={30}>30</option>
            <option value={40}>40</option>
          </select>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {Array(pageSize)
              .fill(0)
              .map((_, index) => (
                <div key={index} className="border p-4 rounded-lg shadow-md">
                  <Skeleton
                    height={200}
                    className="w-full aspect-square object-cover rounded"
                  />
                  <Skeleton className="font-semibold text-lg mt-4" />
                  <Skeleton width="30%" />
                </div>
              ))}
          </div>
        ) : error ? (
          // Xử lý trường hợp lấy dữ liệu bi lỗi (cái lày mất mạng mới rơi vào)
          <p className="text-red-500">{error}</p>
        ) : products.length === 0 ? (
          <p className="text-gray-500">Không có sản phẩm nào tìm thấy</p>
        ) : (
          <ProductList products={products} />
        )}

        {products.length > 0 && (
          <Pagination
            currentPage={currentPage}
            totalProducts={totalProducts}
            pageSize={pageSize}
            onPageChange={setCurrentPage}
          />
        )}
      </section>
    </div>
  );
};

export default HomePage;
