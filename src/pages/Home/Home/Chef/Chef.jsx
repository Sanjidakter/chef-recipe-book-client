// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import ChefCards from "../../ChefCard/ChefCards";


const Category = () => {
   
    const [chef, setChef] = useState([]);

    useEffect(() => {
      const loadData = async () => {
        try {
          const response = await fetch("http://localhost:5000/chefs");
          const data = await response.json();
          setChef(data);
        } catch (error) {
          console.log(error);
        }
      };
      loadData();
    }, []);
    
    return (
        <div>
            <h1 style={{textAlign:'center'}}>Chef List</h1>
           <h2>{chef.length}</h2>
           {
            chef.map((chef)=>(
                <ChefCards
                 key={chef.id}
                 chef ={chef}>

                 </ChefCards>
            ))
           }
        </div>
    );
};

export default Category;