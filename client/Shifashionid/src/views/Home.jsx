import { useEffect, useState } from "react";
import { Card } from "../components/Card";
import { StickyNavbar } from "../components/Navbar";
import axios from "axios";
import { Example } from "../components/Cart";
import { Footer } from "../components/Footer";
import { useNavigate } from "react-router";

export function Home() {
  const [items, setItems] = useState([]);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate()

  function openCloseModal() {
    // if(localStorage.access_token) {
        
        if (open === true) {
            setOpen(false)
        } else {
            setOpen(true)
        }
    // } else {
    //     navigate('/login')
    // }
  }

  async function fetchItems() {
    try {
      const { data } = await axios.get("http://localhost:3000/items");

      setItems(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <>
      {/* navbar */}
      <StickyNavbar openCloseModal={openCloseModal} />
      {/* cart */}
      <Example open={open} openCloseModal={openCloseModal}/>

      <div className="md:container md:mx-auto">
        {/* card */}
        <div className="grid md:grid-cols-3 gap-5">
          {items?.map((item) => {
            return <Card item={item} />;
          })}
        </div>

        <div className="md:container md:mx-auto py-30">
          {/* footer */}
          <Footer />
        </div>
      </div>
    </>
  );
}
