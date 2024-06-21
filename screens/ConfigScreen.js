import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  addCategoryToFirebase,
  updateCategoryColorInFirebase,
  deleteCategoryFromFirebase,
} from "../firebaseCategories";

const ConfigScreen = () => {
  const [categoryName, setCategoryName] = useState("");
  const [categoryColor, setCategoryColor] = useState("");
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  // Accessing categories from Redux store
  const categories = useSelector((state) => state.taskCategory);

  useEffect(() => {
    // Optionally, implement a function to fetch categories from Firebase and dispatch to Redux store
  }, []);

  const handleAddCategory = () => {
    addCategoryToFirebase({ name: categoryName, color: categoryColor });
    setCategoryName("");
    setCategoryColor("");
  };

  const handleUpdateCategoryColor = () => {
    if (selectedCategoryId) {
      updateCategoryColorInFirebase(selectedCategoryId, categoryColor);
      setSelectedCategoryId(null); // Reset after update
      setCategoryColor(""); // Clear color input
    }
  };

  const handleDeleteCategory = (id) => {
    deleteCategoryFromFirebase(id);
  };

  return (
    <div>
      <h2>Manage Task Categories</h2>
      <div>
        <input
          type="text"
          placeholder="Category Name"
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
        />
        <input
          type="color"
          value={categoryColor}
          onChange={(e) => setCategoryColor(e.target.value)}
        />
        <button onClick={handleAddCategory}>Add Category</button>
        {selectedCategoryId && (
          <button onClick={handleUpdateCategoryColor}>Update Color</button>
        )}
      </div>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            {category.name} -{" "}
            <span style={{ color: category.color }}>{category.color}</span>
            <button onClick={() => setSelectedCategoryId(category.id)}>
              Select
            </button>
            <button onClick={() => handleDeleteCategory(category.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ConfigScreen;
