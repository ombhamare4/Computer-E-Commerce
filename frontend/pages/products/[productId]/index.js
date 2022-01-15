import { useRouter } from "next/router";

import ProductDetails from "../../../components/ProductDetails/ProductDetail";
import Layout from "../../../components/Layout/Layout";
import data from "../../products.json";

const productslist = [
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

const products = () => {
  const router = useRouter();
  const { productId } = router.query;
  // const {id} =10;

  const result = productslist.find(({ id }) => String(id) === productId);

  console.log(result);

  return (
    <Layout>
      <ProductDetails id={productId} />
    </Layout>
  );
};

export default products;
