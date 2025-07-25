import React, { useContext, useState } from "react";
import { Upload } from "lucide-react";
import "./Add.css";
import axios from "axios";
import { backendUrl } from "../App";
import { AppContext } from "../Context/AppContext";
import { ToastContainer, toast } from "react-toastify";

const Add = () => {
  const { token } = useContext(AppContext);

  const sizes = ["S", "M", "L", "XL", "XXL"];

  const [image, setImage] = useState(false);
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [category, setCategory] = useState("");
  const [subcategory, setSubcategory] = useState("");
  const [price, setPrice] = useState("");
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [bestseller, setBestseller] = useState(false);

  const handleSizeChange = (size) => {
    setSelectedSizes((prevSizes) =>
      prevSizes.includes(size)
        ? prevSizes.filter((item) => item !== size)
        : [...prevSizes, size]
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create FormData object
    const formData = new FormData();
    formData.append("name", productName);
    formData.append("description", productDescription);
    formData.append("category", category);
    formData.append("subCategory", subcategory);
    formData.append("price", price);
    formData.append("sizes", JSON.stringify(selectedSizes)); // Array must be stringified
    formData.append("image", image); // File object
    formData.append("bestseller", bestseller);
    formData.append("date", new Date().toISOString());

    try {
      const response = await axios.post(
        `${backendUrl}/api/products/add`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            token: token,
          },
        }
      );
      if (response.data.success) {
        console.log("Product added successfully:", response.data);
        setProductName("");
        setProductDescription("");
        setPrice("");
        setBestseller(false);
        toast.success("Product Added Successfully");
      } else {
        toast.error("Product Not Added");
      }
    } catch (error) {
      console.error(
        "Error adding product:",
        error.response?.data || error.message
      );
      toast.error("Product Not Added");
    }
  };

  return (
    <div className="upload-container">
      <form className="upload-form" onSubmit={handleSubmit}>
        <label className="upload-icon">
          <Upload id="upload" size={24} />
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            htmlFor="upload"
            hidden
          />
        </label>

        <input
          type="text"
          placeholder="Product Name"
          className="form-input"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />

        <textarea
          placeholder="Product Description"
          className="form-input description"
          rows={4}
          value={productDescription}
          onChange={(e) => setProductDescription(e.target.value)}
        />

        <select
          className="form-input"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Select Category</option>
          <option value="Men">Men</option>
          <option value="Women">Women</option>
          <option value="Kids">Kids</option>
        </select>

        <select
          className="form-input"
          value={subcategory}
          onChange={(e) => setSubcategory(e.target.value)}
        >
          <option value="">Select Subcategory</option>
          <option value="Topwear">Topwear</option>
          <option value="Bottomwear">Bottomwear</option>
          <option value="Winter">Winter</option>
        </select>

        <input
          type="number"
          placeholder="Product Price"
          className="form-input"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <div className="sizes-container">
          <p className="sizes-label">Select Sizes:</p>
          <div className="sizes-grid">
            {sizes.map((size) => (
              <div key={size} className="size-item">
                <input
                  type="checkbox"
                  id={size}
                  name="sizes"
                  value={size}
                  checked={selectedSizes.includes(size)}
                  onChange={() => handleSizeChange(size)}
                />
                <label htmlFor={size}>{size}</label>
              </div>
            ))}
          </div>
        </div>

        {/* Bestseller toggle */}
        <div className="bestseller-container">
          <p className="sizes-label">Mark as Bestseller:</p>
          <label className="switch">
            <input
              type="checkbox"
              checked={bestseller}
              onChange={() => setBestseller(!bestseller)}
            />
            <span className="slider round"></span>
          </label>
        </div>

        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
      <ToastContainer
        position="top-center"
        autoClose={3000} // Auto close after 3 seconds
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default Add;
