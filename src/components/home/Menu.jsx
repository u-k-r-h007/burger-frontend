import React from "react";
import MenuCard from "./MenuCard";
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
import burger3 from "../../assets/burger3.png";

const Menu = () => {
    const addToCarthandler=(itemNum)=>{

    }
  return (
    <section id="menu" className="">
      <h1>MENU</h1>

      <div>
        <MenuCard
          itemNum={1}
          burgerSrc={burger1}
          price={200}
          title="Cheese Burger"
          handler={addToCarthandler}
          delay={0.1}
        />
        <MenuCard
          itemNum={1}
          burgerSrc={burger2}
          price={500}
          title="double Chicken Cheese Burger"
          handler={addToCarthandler}
          delay={0.5}
        />
        <MenuCard
          itemNum={1}
          burgerSrc={burger3}
          price={280}
          title="Chicken Cheese Burger with fries"
          handler={addToCarthandler}
          delay={0.8}
        />
      </div>
    </section>
  );
};

export default Menu;
