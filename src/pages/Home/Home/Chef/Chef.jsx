// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import ChefCards from "../../ChefCard/ChefCards";


const Category = () => {
   
    const [chefs, setChef] = useState([]);

    useEffect(() => {
      const loadData = async () => {
        try {
          const response = await fetch(" https://chef-recipe-book-server-sanji2601.vercel.app/recipe");
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
            <h1 style={{textAlign:'center'}}>Chefs List</h1>
           {/* <h2>{chefs.length}</h2> */}
           {
            chefs.map((chefs)=>(
                <ChefCards
                 key={chefs.id}
                 chefs ={chefs}>

                 </ChefCards>
            ))
           }
        </div>
    );
};

export default Category;