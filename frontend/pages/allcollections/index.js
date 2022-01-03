import Layout from "../../components/Layout/Layout";

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

const AllCollectionPage = () => {
  return (
    <Layout>
      <div className="mt-2 p-5">
        <div>
          <h1>Collections</h1>
          <div>
            <input type="checkbox" />
            CPU
            <input type="checkbox" />
            CPU Cooler
            <input type="checkbox" />
            Mother Board
            <input type="checkbox" />
            Memory
            <input type="checkbox" />
            Storage
            <input type="checkbox" />
            Video Card
            <input type="checkbox" />
            Case
            <input type="checkbox" />
            Power Supply
            <input type="checkbox" />
            Operating System
            <input type="checkbox" />
            Monitor
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AllCollectionPage;
