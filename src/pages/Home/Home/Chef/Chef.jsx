// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import ChefCards from "../../ChefCard/ChefCards";


const Category = () => {
    const {id} = useParams();
    const categoryNews = useLoaderData();
    
    return (
        <div>
           
            {
                categoryNews.map(chef =>
                    <ChefCards
                    key={chef._id}
                    chef= {chef}
                    ></ChefCards>
                    )
            }
        </div>
    );
};

export default Category;