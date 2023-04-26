import React, { useState, useEffect } from "react";
import categoriesData from "./categoriesData.json";

function CategoryDropdown() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);

  

  useEffect(() => {
    
    setCategories(categoriesData.categories);
  }, []);

  function CategoryHover(category) {
    
    setSelectedCategory(category);
  }

  function SubcategoryHover(subcategory) {

    setSelectedSubcategory(subcategory);
  }

  return (
    
    <div style={{marginLeft:'20px',marginTop:'20px',textAlign:'center'}}>
         <h4 style={{height:'40px',width:'350px',backgroundColor:'#5EE527',borderRadius:'6px'}}>SHOP BY CATEOGRY</h4>
    
      {categories.map((category) => (
        <div
          key={category.name}
          onMouseEnter={() => CategoryHover(category)}
        >
           
          <h4 className="hover" style={{height:'40px',width:'350px',backgroundColor:'grey',borderRadius:'6px'}}>{category.name}</h4>

        
        
              {selectedCategory === category &&
                category.subcategories.map((subcategory) => (
                  <div
                    key={subcategory.name}
                    onMouseEnter={() => SubcategoryHover(subcategory)}
                  >
                    
                    <h5 style={{marginLeft:'500px',height:'40px',width:'350px',backgroundColor:'grey',borderRadius:'6px'}}>{subcategory.name}</h5>
      

             
                {selectedSubcategory === subcategory &&
                  subcategory.items.map((item) => (
                    <h6 style={{marginLeft:'1000px',height:'40px',width:'350px',backgroundColor:'grey',borderRadius:'6px'}} key={item}>{item}</h6>
                  ))}
              </div>
            ))}
        </div>
      ))}
    </div>
  );
}

export default CategoryDropdown;