import Link from "next/link";
import { useRouter } from "next/router";

import styles from "./CollectionNavabr.module.css"
/*
Collection List:
CPU
CPU Cooler
MotherBoard
Memory
Storage
Video Card
Case
Power Supply
Operating System
Monitor
*/

const Collections = [
  {
    id: 1,
    name: "CPU",
  },
  {
    id: 2,
    name: "CPU Cooler",
  },
  {
    id: 3,
    name: "Mother Board",
  },
  {
    id: 4,
    name: "Memory",
  },
  {
    id: 5,
    name: "Storage",
  },
  {
    id: 6,
    name: "Video Card",
  },
  {
    id: 7,
    name: "Power Supply",
  },
  {
    id: 8,
    name: "Operating System",
  },
  {
    id: 9,
    name: "Monitor",
  },
];

const CollectionNavbar = () => {
  const router = useRouter();

  return (
    <div className="border-b-2 border-red-500">
      <ul className="flex justify-evenly md:block md:bg-red-200 shadow-xl">
        {Collections.map((collections) => (
          <li
            className={styles.btn1}
            key={collections.id}
          >
            <Link href={`/collections/${encodeURIComponent(collections.name)}`}>
              {collections.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CollectionNavbar;
