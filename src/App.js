import logo from "./logo.svg";
import "./App.css";
import Topbar from "./Topbar";

import Card from "./Card";
import CartItems from "./CartItems";
import { useState } from "react";

function App() {
  const [products, setProduct] = useState([
    {
      title: "Tasty Steel Salad",
      Price: 946,
      image: "http://placeimg.com/640/480/business",
      description:
        "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
      id: "1",
    },
    {
      title: "Tasty Concrete Fish",
      Price: 837,
      image: "http://placeimg.com/640/480/business",
      description:
        "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
      id: "2",
    },
    {
      title: "Handmade Frozen Bacon",
      Price: 181,
      image: "http://placeimg.com/640/480/business",
      description:
        "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
      id: "3",
    },
    {
      title: "Refined Rubber Keyboard",
      Price: 969,
      image: "http://placeimg.com/640/480/business",
      description:
        "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
      id: "4",
    },
    {
      title: "Rustic Concrete Tuna",
      Price: 124,
      image: "http://placeimg.com/640/480/business",
      description:
        "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
      id: "5",
    },
    {
      title: "Awesome Metal Car",
      Price: 910,
      image: "http://placeimg.com/640/480/business",
      description:
        "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
      id: "6",
    },
    {
      title: "Licensed Wooden Computer",
      Price: 439,
      image: "http://placeimg.com/640/480/business",
      description:
        "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
      id: "7",
    },
    {
      title: "Gorgeous Plastic Car",
      Price: 418,
      image: "http://placeimg.com/640/480/business",
      description:
        "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
      id: "8",
    },
    {
      title: "Rustic Wooden Table",
      Price: 724,
      image: "http://placeimg.com/640/480/business",
      description:
        "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
      id: "9",
    },
    {
      title: "Handcrafted Plastic Keyboard",
      Price: 254,
      image: "http://placeimg.com/640/480/business",
      description:
        "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
      id: "10",
    },
    {
      title: "Ergonomic Steel Soap",
      Price: 560,
      image: "http://placeimg.com/640/480/business",
      description:
        "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
      id: "11",
    },
    {
      title: "Refined Soft Pizza",
      Price: 635,
      image: "http://placeimg.com/640/480/business",
      description:
        "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
      id: "12",
    },
    {
      title: "Rustic Concrete Ball",
      Price: 307,
      image: "http://placeimg.com/640/480/business",
      description:
        "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
      id: "13",
    },
    {
      title: "Unbranded Metal Mouse",
      Price: 265,
      image: "http://placeimg.com/640/480/business",
      description:
        "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
      id: "14",
    },
    {
      title: "Ergonomic Steel Bike",
      Price: 862,
      image: "http://placeimg.com/640/480/business",
      description:
        "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
      id: "15",
    },
    {
      title: "Small Concrete Keyboard",
      Price: 321,
      image: "http://placeimg.com/640/480/business",
      description:
        "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
      id: "16",
    },
    {
      title: "Gorgeous Cotton Table",
      Price: 522,
      image: "http://placeimg.com/640/480/business",
      description:
        "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
      id: "17",
    },
    {
      title: "Incredible Frozen Bacon",
      Price: 736,
      image: "http://placeimg.com/640/480/business",
      description:
        "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
      id: "18",
    },
    {
      title: "Licensed Soft Pants",
      Price: 844,
      image: "http://placeimg.com/640/480/business",
      description:
        "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
      id: "19",
    },
    {
      title: "Unbranded Concrete Pants",
      Price: 400,
      image: "http://placeimg.com/640/480/business",
      description:
        "The Football Is Good For Training And Recreational Purposes",
      id: "20",
    },
    {
      title: "Small Wooden Gloves",
      Price: 648,
      image: "http://placeimg.com/640/480/business",
      description:
        "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
      id: "21",
    },
    {
      title: "Small Cotton Keyboard",
      Price: 607,
      image: "http://placeimg.com/640/480/business",
      description:
        "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
      id: "22",
    },
    {
      title: "Handcrafted Metal Pizza",
      Price: 217,
      image: "http://placeimg.com/640/480/business",
      description:
        "The Football Is Good For Training And Recreational Purposes",
      id: "23",
    },
    {
      title: "Ergonomic Plastic Towels",
      Price: 940,
      image: "http://placeimg.com/640/480/business",
      description:
        "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
      id: "24",
    },
    {
      title: "Small Rubber Car",
      Price: 126,
      image: "http://placeimg.com/640/480/business",
      description:
        "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
      id: "25",
    },
    {
      title: "Licensed Frozen Car",
      Price: 145,
      image: "http://placeimg.com/640/480/business",
      description:
        "The Football Is Good For Training And Recreational Purposes",
      id: "26",
    },
    {
      title: "Fantastic Frozen Shirt",
      Price: 501,
      image: "http://placeimg.com/640/480/business",
      description:
        "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
      id: "27",
    },
    {
      title: "Small Steel Keyboard",
      Price: 874,
      image: "http://placeimg.com/640/480/business",
      description:
        "The Football Is Good For Training And Recreational Purposes",
      id: "28",
    },
    {
      title: "Licensed Metal Computer",
      Price: 428,
      image: "http://placeimg.com/640/480/business",
      description:
        "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
      id: "29",
    },
    {
      title: "Sleek Steel Gloves",
      Price: 281,
      image: "http://placeimg.com/640/480/business",
      description:
        "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
      id: "30",
    },
    {
      title: "Ergonomic Steel Keyboard",
      Price: 664,
      image: "http://placeimg.com/640/480/business",
      description:
        "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
      id: "31",
    },
    {
      title: "Handcrafted Cotton Bike",
      Price: 207,
      image: "http://placeimg.com/640/480/business",
      description:
        "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
      id: "32",
    },
    {
      title: "Tasty Steel Towels",
      Price: 154,
      image: "http://placeimg.com/640/480/business",
      description:
        "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
      id: "33",
    },
    {
      title: "Refined Granite Ball",
      Price: 303,
      image: "http://placeimg.com/640/480/business",
      description:
        "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
      id: "34",
    },
    {
      title: "Rustic Metal Bacon",
      Price: 108,
      image: "http://placeimg.com/640/480/business",
      description:
        "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
      id: "35",
    },
    {
      title: "Refined Fresh Bike",
      Price: 718,
      image: "http://placeimg.com/640/480/business",
      description:
        "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
      id: "36",
    },
    {
      title: "Gorgeous Metal Chair",
      Price: 729,
      image: "http://placeimg.com/640/480/business",
      description:
        "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
      id: "37",
    },
    {
      title: "Refined Soft Tuna",
      Price: 647,
      image: "http://placeimg.com/640/480/business",
      description:
        "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
      id: "38",
    },
    {
      title: "Practical Frozen Keyboard",
      Price: 642,
      image: "http://placeimg.com/640/480/business",
      description:
        "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
      id: "39",
    },
    {
      title: "Licensed Fresh Hat",
      Price: 572,
      image: "http://placeimg.com/640/480/business",
      description:
        "The Football Is Good For Training And Recreational Purposes",
      id: "40",
    },
    {
      title: "Small Plastic Chair",
      Price: 72,
      image: "http://placeimg.com/640/480/business",
      description:
        "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
      id: "41",
    },
    {
      title: "Licensed Cotton Chips",
      Price: 876,
      image: "http://placeimg.com/640/480/business",
      description:
        "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
      id: "42",
    },
    {
      title: "Generic Fresh Mouse",
      Price: 511,
      image: "http://placeimg.com/640/480/business",
      description:
        "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
      id: "43",
    },
    {
      title: "Ergonomic Fresh Gloves",
      Price: 672,
      image: "http://placeimg.com/640/480/business",
      description:
        "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
      id: "44",
    },
    {
      title: "Practical Concrete Towels",
      Price: 797,
      image: "http://placeimg.com/640/480/business",
      description:
        "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
      id: "45",
    },
    {
      title: "Unbraned Fresh Pants",
      Price: 631,
      image: "http://placeimg.com/640/480/business",
      description:
        "The Football Is Good For Training And Recreational Purposes",
      id: "46",
    },
    {
      title: "Intelligent Frozen Pants",
      Price: 479,
      image: "http://placeimg.com/640/480/business",
      description:
        "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
      id: "47",
    },
    {
      title: "Gorgeous Plastic Chips",
      Price: 762,
      image: "http://placeimg.com/640/480/business",
      description:
        "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
      id: "48",
    },
    {
      title: "Awesome Soft Bike",
      Price: 313,
      image: "http://placeimg.com/640/480/business",
      description:
        "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
      id: "49",
    },
    {
      title: "Incredible Plastic Salad",
      Price: 236,
      image: "http://placeimg.com/640/480/business",
      description:
        "The Football Is Good For Training And Recreational Purposes",
      id: "50",
    },
    {
      title: "Licensed Concrete Car",
      Price: 584,
      image: "http://placeimg.com/640/480/business",
      description:
        "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
      id: "51",
    },
  ]);
  const [cartItems, setcartItems] = useState([]);
  console.log(cartItems.length);

  const [total, setTotal] = useState(0);
  let addToCart = (id) => {
    let product = products.find((obj) => obj.id == id);
    setcartItems([...cartItems, product]);
    setTotal(total + product.Price);
  };
  let removeItem = (id) => {
    let result = window.confirm("Are you sure want to remove?");
    if (result) {
      let cartIndex = cartItems.findIndex((obj) => obj.id == id);
      setTotal(total - cartItems[cartIndex].Price);
      cartItems.splice(cartIndex, 1);
      setcartItems([...cartItems]);
    }
  };
  return (
    <>
      <Topbar />
      <div className="container" style={{ marginTop: "70px" }}>
        <div className="row">
          <div className="col-lg-8">
            <div className="row">
              {products.map((product) => {
                return <Card data={product} handleCart={addToCart} />;
              })}
            </div>
          </div>

          <div className="col-lg-4">
            <ol class="list-group list-group-numbered">
              <h1>Cart {cartItems.length}</h1>
              {CartItems.length == 0 ? <h3>No items in the Cart</h3> : null}
              {cartItems.map((item) => {
                return <CartItems handleRemove={removeItem} data={item} />;
              })}

              <h1>Total-Rs.{total}</h1>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
