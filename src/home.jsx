import React, { useState } from "react";
import Menu from "./Data";

const Home = () => {
    const [Data,SetData] = useState(Menu)

    const FilterItem=(categ)=>{
        const updatedItem=Menu.filter((item)=>{
            return item.category===categ
        })
        SetData(updatedItem)
    }
    return (
        <>
        {/* Order Your Favourite Dish */}
            <h1 className="main_heading">gaurav's personel food court</h1>
            <hr />
            <div className="buttons_div">
                <button type="button" class="btn but btn-danger"onClick={()=>SetData(Menu)}>All Items</button>
                <button type="button" class="btn btn-danger" onClick={()=>FilterItem('breakfast')}>Breakfast</button>
                <button type="button" class="btn btn-danger" onClick={()=>FilterItem('dinner')}>Dinner</button>
                <button type="button" class="btn btn-danger" onClick={()=>FilterItem('lunch')}>Lunch</button>
                <button type="button" class="btn btn-danger" onClick={()=>FilterItem('sweet')}>Sweet</button>
            </div>
            <hr />

            


           <div className="cardsMain">

            {
                Data.map((item)=>{
                    // const {image,name,category,price,description} = Data
                    return(
                        <div className="card">
                        <div className="cardImg">
                            <img src={item.image} className="item_image" alt="maggi" />
                        </div>
                        <div className="cardBody">
                            <h1>{item.name}</h1>
                            <p>{item.description}</p>
                            <div className="innergreed">
                                <h3>price :{item.price}</h3>
                                <a href={item.link}>
                                <button type="button" class="btn btn-danger">Order Now</button>
                                </a>
                            </div>
                            <p>Prices may Vary on Selected Date</p>
    
                        </div>
                    </div>
                    )
                })
            }




           </div>


        </>
    )
}

export default Home