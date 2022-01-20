import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import ReactPaginate from "react-paginate";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
const OwlCarousel = dynamic(import("react-owl-carousel"), { ssr: false });

import ProductList from "../ProductsTest/ProductList";
import styles from "./AllCollection.module.css";

import { CgMenuGridR, CgLayoutList } from "react-icons/cg";

const products = [
  //CPU
  {
    id: 1,
    name: "Core i9",
    price: "70000",
    comparedPrice: "90000",
    category: "CPU",
    image: "https://m.media-amazon.com/images/I/61pI7loWpZS._SL1339_.jpg",
  },
  {
    id: 2,
    name: "Core i3",
    price: "7939",
    comparedPrice: "9870",
    category: "CPU",
    image: "https://m.media-amazon.com/images/I/61pI7loWpZS._SL1339_.jpg",
  },
  {
    id: 3,
    name: "Core i5",
    price: "14,990",
    comparedPrice: "24999",
    category: "CPU",
    image: "https://m.media-amazon.com/images/I/61pI7loWpZS._SL1339_.jpg",
  },

  //Cooler
  {
    id: 4,
    name: "ARCTIC Freezer 50",
    price: "4999",
    comparedPrice: "5999",
    category: "CPU Cooler",
    image: "https://m.media-amazon.com/images/I/61pI7loWpZS._SL1339_.jpg",
  },
  {
    id: 5,
    name: "Ant Esports ICE-C612 with RGB CPU Cooler",
    price: "1525",
    comparedPrice: "9870",
    category: "CPU Cooler",
    image: "https://m.media-amazon.com/images/I/61pI7loWpZS._SL1339_.jpg",
  },

  //MotherBoard
  {
    id: 6,
    name: "ASUS Prime B550M-A (AMD AM4 Socket Ryzen 5000/4000G/3000) Micro ATX",
    price: "11300",
    comparedPrice: "16300",
    category: "motherboard",
    image: "https://m.media-amazon.com/images/I/61pI7loWpZS._SL1339_.jpg",
  },
  {
    id: 7,
    name: "ASUS ProArt B550-Creator (AMD Ryzen 5000/ 5000 G/ 4000 G/ 3000) ATX motherboard",
    price: "24949",
    comparedPrice: "37000",
    category: "motherboard",
    image: "https://m.media-amazon.com/images/I/61pI7loWpZS._SL1339_.jpg",
  },
  {
    id: 8,
    name: "GIGABYTE AMD A320, AM4 Socket,Ultra Durable Motherboard with Fast Onboard Storage",
    price: "4990",
    comparedPrice: "8800",
    category: "motherboard",
    image: "https://m.media-amazon.com/images/I/61pI7loWpZS._SL1339_.jpg",
  },
  {
    id: 9,
    name: "ASUS ROG Strix B550-F Gaming WiFi 6 (AMD AM4 Socket for 3rd Gen AMD Ryzen)",
    price: "20499",
    comparedPrice: "24949",
    category: "motherboard",
    image: "https://m.media-amazon.com/images/I/61pI7loWpZS._SL1339_.jpg",
  },

  //Memory
  {
    id: 10,
    name: "Crucial RAM 8GB DDR4",
    price: "2830",
    comparedPrice: "4100",
    category: "memory",
    image: "https://m.media-amazon.com/images/I/61pI7loWpZS._SL1339_.jpg",
  },

  //Storage
  {
    id: 11,
    name: "Crucial P2 500GB 3D NAND NVMe PCIe M.2 SSD - CT500P2SSD8",
    price: "4201",
    comparedPrice: "7800",
    category: "storage",
    subcategory: "ssd",
    image: "https://m.media-amazon.com/images/I/61pI7loWpZS._SL1339_.jpg",
  },
  {
    id: 12,
    name: "Western Digital Blue SN570 NVMe 1TB SSD",
    price: "42086531",
    comparedPrice: "13500",
    category: "storage",
    subcategory: "sdd",
    image: "https://m.media-amazon.com/images/I/61pI7loWpZS._SL1339_.jpg",
  },
  {
    id: 13,
    name: "Seagate BarraCuda 1 TB Internal Hard Drive HDD",
    price: "4201",
    comparedPrice: "7800",
    category: "storage",
    subcategory: "hdd",
    image: "https://m.media-amazon.com/images/I/61pI7loWpZS._SL1339_.jpg",
  },
  //Video Card
  {
    id: 14,
    name: "GALAX GEFORCE RTX 3070",
    price: "85999",
    comparedPrice: "7800",
    category: "graphics card",
    image: "https://m.media-amazon.com/images/I/61pI7loWpZS._SL1339_.jpg",
  },
  {
    id: 15,
    name: "Zotac Gaming Geforce GTX 1650 OC 4GB GDDR6 Graphics Card",
    price: "26628",
    comparedPrice: "45000",
    category: "graphics card",
    image: "https://m.media-amazon.com/images/I/61pI7loWpZS._SL1339_.jpg",
  },

  //Power Supply
  {
    id: 16,
    name: "ZEBRONICS ZEB-PGP450W High Efficiency 450W Gaming Power Supply",
    price: "3199",
    comparedPrice: "5499",
    category: "power supply",
    image: "https://m.media-amazon.com/images/I/61pI7loWpZS._SL1339_.jpg",
  },

  //OS
  {
    id: 17,
    name: "Windows 11 Professional 64bit on USB 3.1",
    price: "13,300",
    comparedPrice: "22,799",
    category: "operatingsystem",
    image: "https://m.media-amazon.com/images/I/61pI7loWpZS._SL1339_.jpg",
  },
  {
    id: 18,
    name: "Microsoft Windows 10 Home English",
    price: "9826",
    comparedPrice: "11999",
    category: "operatingsystem",
    image: "https://m.media-amazon.com/images/I/61pI7loWpZS._SL1339_.jpg",
  },

  //monitor
];

const priceOptions = [
  {
    text: "Rs.1000~Rs.10000",
    value: 1,
  },
  {
    text: "Rs.10000~Rs.25000",
    value: 2,
  },
  {
    text: "Rs.2500~Rs.50000",
    value: 3,
  },
  {
    text: "Rs.50000",
    value: 4,
  },
];

const sortingOptions = [
  {
    id: 1,
    text: "Featured",
    value: "1",
  },
  {
    id: 2,
    text: "Price, Low to High",
    value: "2",
  },
  {
    id: 3,
    text: "Price, High to Low",
    value: "3",
  },
  {
    id: 4,
    text: "Alphabetically, A-Z",
    value: "4",
  },
  {
    id: 5,
    text: "Alphabetically, Z-A",
    value: "5",
  },
  {
    id: 6,
    text: "Date, old to new",
    value: "6",
  },
  {
    id: 7,
    text: "Date, new to old",
    value: "7",
  },
  {
    id: 8,
    text: "Best Selling",
    value: "8",
  },
];

const AllCollectionsDetails = (props) => {
  const [priceSort, setPriceSort] = useState(0);
  const [sortSelected, setSortSelected] = useState(1);

  const [isPriceSelected, setIsPriceSelected] = useState(true);
  const [isSortSelected, setIsSortSelected] = useState(true);

  const [changeView, setChangedView] = useState(false);
  const [items, setItems] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);

  const router = useRouter();
  const collectionname = router.query.collectionId;

  const gridViewHandler = () => {
    setChangedView(true);
  };

  const listViewHandler = () => {
    setChangedView(false);
  };

  const handlePageClick = (event) => {
    console.log("clicked" + event.selected);
  };

  const priceHandler = (e) => {
    const { name, value } = e.target;
    setPriceSort(value);
    setIsPriceSelected(true);
    setIsSortSelected(false);
  };

  const sortingHandler = (e) => {
    const { name, value } = e.target;
    setSortSelected(value);

    setIsPriceSelected(false);
    setIsSortSelected(true);
  };

  function compare(a, b) {
    if (a.price < b.price) {
      return -1;
    }
    if (a.price > b.price) {
      return 1;
    }
    return 0;
  }

  //Sorting By Price
  const SortByPrice = () => {
    //Price Sort
    if (isPriceSelected) {
      switch (parseInt(priceSort)) {
        case 0:
          return products;

        case 1:
          const p = products.filter(function (el) {
            return parseInt(el.price) >= 1000 && parseInt(el.price) <= 10000;
          });
          return p;

        case 2:
          p = products.filter(function (el) {
            return parseInt(el.price) > 10000 && parseInt(el.price) <= 25000;
          });
          return p;

        case 3:
          p = products.filter(function (el) {
            return parseInt(el.price) > 25000 && parseInt(el.price) <= 50000;
          });
          return p;

        case 4:
          p = products.filter(function (el) {
            return parseInt(el.price) > 50000;
          });
          return p;

        default:
          console.log("Unknow Error Occurs");
      }
    }

    // if (isSortSelected) {
    //   switch (parseInt(sortSelected)) {
    //     case 0:
    //       return products;

    //     case 1:
    //       const p = products
    //       return p;

    //     case 2:
    //       p = products.reverse();
    //       return p;

    //     case 3:
    //       p = products.filter(function (el) {
    //         return parseInt(el.price) > 25000 && parseInt(el.price) <= 50000;
    //       });
    //       return p;

    //     case 4:
    //       p = products.filter(function (el) {
    //         return parseInt(el.price) > 50000;
    //       });
    //       return p;

    //     default:
    //       console.log("Unknow Error Occurs");
    //   }
    // }

  };

  useEffect(() => {
    setSortedProducts(SortByPrice());
  }, [priceSort, isPriceSelected]); //sortSelected,  isSortSelected


  return (
    <div className="bg-white shadow-2xl ">
      <div className="bg-gray-300 p-3">
        <h1 className="text-2xl">Products</h1>
      </div>

      <div className="grid grid-cols-4 gap-5 p-5 lg:block">
        <div className="lg:hidden">
          <div className="shadow-xl rounded-md border border-red-400 p-1">
            <h1 className="p-2 bg-red-500 text-white rounded-md mb-1">
              Shop By Price
            </h1>

            <div className="p-2">
              {priceOptions.map((price) => (
                <div className="mb-1" key={price.value}>
                  <label>
                    <input
                      type="radio"
                      name="radio"
                      value={price.value}
                      onChange={priceHandler}
                    />{" "}
                    {price.text}
                  </label>
                </div>
              ))}
            </div>

            {/* <div className="p-2">
              <div className="mb-1">
                <label>
                  <input type="radio" name="radio" /> Rs.1000~Rs.10000
                </label>
              </div>
              <div className="mb-1">
                <label>
                  <input type="radio" name="radio" /> Rs.10000~Rs.25000
                </label>
              </div>
              <div className="mb-1">
                <label>
                  <input type="radio" name="radio" /> Rs.2500~Rs.50000
                </label>
              </div>
              <div className="mb-1">
                <label>
                  <input type="radio" name="radio" /> Rs.50000+
                </label>
              </div>
            </div> */}
          </div>
          <div className="shadow-xl rounded-md border border-red-400 p-1 mt-4">
            <h1 className="p-2 bg-red-500 text-white rounded-md mb-1">
              Shop By Collections
            </h1>
            <div className="p-2">
              <div className="mb-1">
                <label>
                  <input type="radio" name="radio" /> CPU
                </label>
              </div>
              <div className="mb-1">
                <label>
                  <input type="radio" name="radio" /> RAM
                </label>
              </div>
              <div className="mb-1">
                <label>
                  <input type="radio" name="radio" /> HDD
                </label>
              </div>
              <div className="mb-1">
                <label>
                  <input type="radio" name="radio" /> Graphics Card
                </label>
              </div>
              <div>
                <h1 className="text-right text-red-500">More</h1>
              </div>
            </div>
          </div>
          <div className="shadow-xl rounded-md border border-red-400 p-1 mt-4">
            <img
              className="relative"
              src="https://cdn.shopify.com/s/files/1/0195/8916/9252/files/right-banner_16edbb4f-87b7-4602-a5ca-fea9c0ff5c4b_320x.jpg?v=1556857605"
            />
          </div>
          {/* <div>
                <h1>carousel</h1>
                <OwlCarousel className='owl-theme' loop autoplay="true" margin={5} nav dots animateOut>
                  <div class="item">
                    <h4>1</h4>
                  </div>
                  <div class="item">
                    <h4>2</h4>
                  </div>
                  <div class="item">
                    <h4>3</h4>
                  </div>
                  <div class="item">
                    <h4>4</h4>
                  </div>
                  <div class="item">
                    <h4>5</h4>
                  </div>
                  <div class="item">
                    <h4>6</h4>
                  </div>
                  <div class="item">
                    <h4>7</h4>
                  </div>
                  <div class="item">
                    <h4>8</h4>
                  </div>
                  <div class="item">
                    <h4>9</h4>
                  </div>
                  <div class="item">
                    <h4>10</h4>
                  </div>
                  <div class="item">
                    <h4>11</h4>
                  </div>
                  <div class="item">
                    <h4>12</h4>
                  </div>
                </OwlCarousel>

              </div> */}
        </div>

        <div className="col-span-3">
          <div>
            <h1 className="text-xl p-2">Products</h1>
            <div className="p-2 border border-red-500 rounded-md flex justify-between items-center xs:block">
              <div className="flex xs:justify-center xs:pb-2">
                <button onClick={gridViewHandler}>
                  <CgMenuGridR className="border border-gray-500 rounded-md text-4xl p-1 mx-2 xs:text-md" />
                </button>
                <button onClick={listViewHandler}>
                  <CgLayoutList className="border border-gray-500 rounded-md text-4xl p-1 mx-2" />
                </button>
              </div>
              <div className="flex  xs:justify-center">
                <h1 className="mx-2">Sort By:</h1>
                <select
                  className="border border-red-500 rounded-sm hover:border-red-500"
                  onChange={sortingHandler}
                >
                  {sortingOptions.map((val) => (
                    <option
                      value={val.value}
                      className="hover:bg-red-400"
                      key={val.id}
                    >
                      {val.text}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* //Product List */}
          <ProductList
            products={sortedProducts}
            changeView={changeView}
            priceSort={priceSort}
            sortSelected={sortSelected}
          />

          {/* <div className="py-10 text-right">
            <ReactPaginate
              className="flex"
              previousLabel={"<"}
              breakLabel={"..."}
              nextLabel={">"}
              pageCount={15}
              marginPagesDisplayed={4}
              pageRangeDisplayed={3}
              onPageChange={handlePageClick}
              containerClassName={`flex justify-center items-center`}
              pageClassName={
                "flex text-red-500 hover:bg-red-500 hover:text-white text-base leading-tight font-bold cursor-pointer shadow transition duration-150 ease-in-out mx-2 sm:mx-4 rounded px-3 py-2 focus:outline-none"
              }
              previousClassName={
                "flex text-red-500 hover:bg-red-500 hover:text-white text-base leading-tight font-bold cursor-pointer shadow transition duration-150 ease-in-out mx-2 sm:mx-4 rounded px-3 py-2 focus:outline-none"
              }
              nextClassName={
                "flex text-red-500 hover:bg-red-500 hover:text-white text-base leading-tight font-bold cursor-pointer shadow transition duration-150 ease-in-out mx-2 sm:mx-4 rounded px-3 py-2 focus:outline-none"
              }
              breakClassName={
                "flex text-red-500 hover:bg-red-500 hover:text-white text-base leading-tight font-bold cursor-pointer shadow transition duration-150 ease-in-out mx-2 sm:mx-4 rounded px-3 py-2 focus:outline-none"
              }
              activeClassName={"bg-red-500 text-white"}
            />
          </div> */}
          {/* <div>
            <div className="max-w-8xl mx-auto container py-10 text-right">
              <ul className="flex justify-center items-center">
                <li>
                  <span className="p-1 flex rounded transition duration-150 ease-in-out text-base leading-tight font-bold text-gray-500 hover:text-red-500 focus:outline-none mr-1 sm:mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <polyline points="15 6 9 12 15 18" />
                    </svg>
                  </span>
                </li>
                <li>
                  <span className="flex text-red-500 hover:bg-red-500 hover:text-white text-base leading-tight font-bold cursor-pointer shadow transition duration-150 ease-in-out mx-2 sm:mx-4 rounded px-3 py-2 focus:outline-none">
                    1
                  </span>
                </li>
                <li>
                  <span className="flex text-red-500 hover:bg-red-500 hover:text-white text-base leading-tight font-bold cursor-pointer shadow transition duration-150 ease-in-out mx-2 sm:mx-4 rounded px-3 py-2 focus:outline-none">
                    2
                  </span>
                </li>
                <li>
                  <span className="flex text-red-500 hover:bg-red-500 hover:text-white rounded transition duration-150 ease-in-out text-base leading-tight font-bold shadow px-3 py-2 focus:outline-none">
                    ...
                  </span>
                </li>
                <li>
                  <span className="flex text-red-500 hover:bg-red-500 hover:text-white text-base leading-tight font-bold cursor-pointer transition shadow duration-150 ease-in-out mx-2 sm:mx-4 rounded px-3 py-2 focus:outline-none">
                    6
                  </span>
                </li>
                <li>
                  <span className="flex text-red-500 hover:bg-red-500 hover:text-white text-base leading-tight font-bold cursor-pointer transition shadow duration-150 ease-in-out mx-2 sm:mx-4 rounded px-3 py-2 focus:outline-none">
                    7
                  </span>
                </li>
                <li>
                  <span className="flex rounded transition duration-150 ease-in-out text-base leading-tight font-bold text-gray-500 hover:text-red-500 p-1 focus:outline-none ml-1 sm:ml-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <polyline points="9 6 15 12 9 18" />
                    </svg>
                  </span>
                </li>
              </ul>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default AllCollectionsDetails;
