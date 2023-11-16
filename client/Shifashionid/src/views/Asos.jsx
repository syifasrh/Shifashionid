import axios from "axios";
import { useEffect, useState } from "react";
import { StickyNavbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export function Products() {
  const [products, setProducts] = useState([]);
  const idRandom = Math.floor(Math.random(0) * 202610000)
  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://asos-com1.p.rapidapi.com/products/search-by-category",
      params: { cid: "50539" },
      headers: {
        "X-RapidAPI-Key": "55c3d1a7cbmshb3850a7df406de3p1b5b3ejsn578cff1aad7e",
        "X-RapidAPI-Host": "asos-com1.p.rapidapi.com",
      },
    };
    const asyncFn = async () => {
      const { data } = await axios.request(options);
      setProducts(data);
    };
    asyncFn();
  }, []);

  return (
    <>
      {/* navbar */}
      <StickyNavbar />
        <h1 className="mb-2 py-10 block font-sans text-4xl font-semibold leading-[1.3] tracking-normal text-blue-gray-900 antialiased text-center uppercase">Our Recomended Fashion Style for Man</h1>
      <div className="md:container md:mx-auto py-5">
        <div className="grid md:grid-cols-3 gap-5">
          {products?.data?.products?.map((product) => {
            return (
              <div className="relative flex flex-col text-gray-700 bg-white w-96 rounded-xl bg-clip-border transition-all hover:scale-105 shadow-lg shadow-blue-gray-900/50">
                <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white h-96 rounded-xl bg-clip-border">
                  <img
                    src={"https://" + product.imageUrl}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                      {product.name}
                    </p>
                  </div>
                  <p className="block font-sans text-lg antialiased font-normal leading-normal text-gray-700 opacity-100">
                    <b>
                      {product.price.currency} {product.price.current.text}
                    </b>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* footer */}
      <Footer />
    </>
  );
}
