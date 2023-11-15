import { useState } from "react";
import { Card } from "../components/Card";
import { StickyNavbar } from "../components/Navbar";
import axios from "axios";

export function Home() {
  const [items, setItems] = useState({});
  async function fetchItems() {
    try {
      const { data } = await axios.get("localhost:3000/items");

      setItems(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {/* navbar */}
      <StickyNavbar />

      <div className="md:container md:mx-auto">
        {/* card */}
        {items?.map((item) => {
            return <Card item={item}/>
        })}
      </div>
    </>
  );
}
