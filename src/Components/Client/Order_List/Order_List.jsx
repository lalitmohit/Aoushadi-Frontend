import React, { useState } from "react";
import "./Order_List.css";

const Order_List = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleItem = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const items = [
    {
      title: {
        items: "Item 1",
        price: "Rs 6000",
        date: "2 Feb 2020",
        time: "10PM",
      },
      content: [
        {
          medicine_name: "Drug Prevention Pill",
          quantity: "2",
          mdeicine_price: "3000",
        },
        {
          medicine_name: "Drug Prevention Pill",
          quantity: "2",
          mdeicine_price: "3000",
        },
        {
          medicine_name: "Drug Prevention Pill",
          quantity: "2",
          mdeicine_price: "3000",
        },
      ],
    },
    {
      title: {
        items: "Item 1",
        price: "Rs 6000",
        date: "2 Feb 2020",
        time: "10PM",
      },
      content: [
        {
          medicine_name: "Drug Prevention Pill",
          quantity: "2",
          mdeicine_price: "3000",
        },
        {
          medicine_name: "Drug Prevention Pill",
          quantity: "2",
          mdeicine_price: "3000",
        },
        {
          medicine_name: "Drug Prevention Pill",
          quantity: "2",
          mdeicine_price: "3000",
        },
      ],
    },
    {
      title: {
        items: "Item 1",
        price: "Rs 6000",
        date: "2 Feb 2020",
        time: "10PM",
      },
      content: [
        {
          medicine_name: "Drug Prevention Pill",
          quantity: "2",
          mdeicine_price: "3000",
        },
        {
          medicine_name: "Drug Prevention Pill",
          quantity: "2",
          mdeicine_price: "3000",
        },
        {
          medicine_name: "Drug Prevention Pill",
          quantity: "2",
          mdeicine_price: "3000",
        },
      ],
    },
  ];
  return (
    <div className="mt-10 mr-8 mb-8 rounded-lg md:mr-52">
      <div className="heading">My Orders</div>
      <div>
        {items.map((item, index) => (
          <div key={index} className="mb-8">
            <div className="bg-white py-4 px-10 transition duration-5000 flex justify-between">
              <div className="items" onClick={() => toggleItem(index)}>
                {item.title.items}
              </div>
              <div className="price">{item.title.price}</div>
              <div className="date_time">
                <p>Date: {item.title.date}</p>
                <p>Time: {item.title.time}</p>
              </div>
            </div>
            {activeIndex === index && (
              <div className="bg-white py-4 px-10 transition duration-150 ease-in-out">
                <div className="medicine_details">
                  {item.content.map((item, index) => (
                    <div className="flex justify-between">
                      <div>{item.medicine_name}</div>
                      <div>Quantity: {item.quantity}</div>
                      <div>Price: {item.mdeicine_price}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>{" "}
    </div>
  );
};

export default Order_List;
