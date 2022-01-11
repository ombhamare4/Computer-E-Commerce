import { useRouter } from "next/router";

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
const AllCollectionsDetails = (props) => {
  const router = useRouter();
  const collectionname = router.query.collectionId;

  return (
    <div className="bg-white shadow-2xl ">
      <div className="bg-gray-300 p-3">
        <h1 className="text-2xl">Products</h1>
      </div>

      <div className="grid grid-cols-4 gap-5 p-5">
        <div>
          <div className="shadow-xl rounded-md border border-red-400 p-1">
            <h1 className="p-2 bg-red-500 text-white rounded-md mb-1">
              Shop By Price
            </h1>
            <div className="p-2">
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
            </div>
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
        </div>

        <div className="col-span-3">
          <div>
            <h1 className="text-xl p-2">Products</h1>
            <div className="p-2 border border-red-500 rounded-md flex justify-between items-center">
              <div className="flex">
                <button>
                  <CgMenuGridR className="border border-gray-500 rounded-md text-4xl p-1 mx-2" />
                </button>
                <button>
                  <CgLayoutList className="border border-gray-500 rounded-md text-4xl p-1 mx-2" />
                </button>
              </div>
              <div className="flex">
                <h1 className="mx-2">Sort By:</h1>
                <select className="mx-2 border border-red-500 rounded-sm w-44 hover:border-red-500">
                  <option value="0" className="hover:bg-red-400">
                    Featured
                  </option>
                  <option value="1">Price, Low to High</option>
                  <option value="2">Price, High to Low</option>
                  <option value="3">Alphabetically, A-Z</option>
                  <option value="4">Alphabetically, Z-A</option>
                  <option value="5">Date, old to new</option>
                  <option value="6">Date, new to old</option>
                  <option value="7">Best Selling</option>
                </select>
              </div>
            </div>
          </div>
          <ProductList products={products}/>
          <div>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCollectionsDetails;
