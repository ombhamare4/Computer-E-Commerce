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

const CollectionNavbar = ()=>{
    return(
        <div className="border-b-2 border-red-500">
            <ul className="flex justify-evenly md:block md:bg-red-200 shadow-xl">
                <li className="p-2 hover:bg-red-500  transition ease-in-out  duration-500">CPU</li>
                <li className="p-2 hover:bg-red-500  transition ease-in-out  duration-500">Mother Board</li>
                <li className="p-2 hover:bg-red-500  transition ease-in-out  duration-500">CPU Cooler</li>
                <li className="p-2 hover:bg-red-500  transition ease-in-out  duration-500">Memory</li>
                <li className="p-2 hover:bg-red-500  transition ease-in-out  duration-500">Storage</li>
                <li className="p-2 hover:bg-red-500  transition ease-in-out  duration-500">Video Card</li>
                <li className="p-2 hover:bg-red-500  transition ease-in-out  duration-500">Case</li>
                <li className="p-2 hover:bg-red-500  transition ease-in-out  duration-500">Power Supply</li>
                <li className="p-2 hover:bg-red-500  transition ease-in-out  duration-500">Opearting System</li>
                <li className="p-2 hover:bg-red-500  transition ease-in-out  duration-500">Monitor</li>
            </ul>
        </div>
    )
};

export default CollectionNavbar;