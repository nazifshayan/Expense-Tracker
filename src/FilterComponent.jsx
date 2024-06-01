import React from 'react';

const FilterComponent = ({ filter, setFilter }) => {
  const handleCategoryChange = (e) => {
    setFilter({ ...filter, category: e.target.value });
  };

  const handleDateRangeChange = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <select value={filter.category} onChange={handleCategoryChange}>
        <option value="">All Categories</option>
        <option value="Food">Food</option>
        <option value="Travel">Travel</option>
        <option value="Utilities">Utilities</option>
      </select>
      <input type="date" name="startDate" value={filter.startDate} onChange={handleDateRangeChange} />
      <input type="date" name="endDate" value={filter.endDate} onChange={handleDateRangeChange} />
    </div>
  );
};

export default FilterComponent;
