import React from 'react';
import { v4 as uuidv4 } from 'uuid';
const BloodBank = () => {
    const bloodGroup = ["A+", "A-", "O+", "O-", "AB-", "AB+", "B+", "B-", "ALL"];
    const [filteredList, setFilteredList] = React.useState({
        isFilter: false,
        data: []
    });
    const [donerList, setDonerList] = React.useState([])
    React.useEffect(() => {
        fetch("  http://localhost:5000/bloodDonerList")
            .then(res => res.json())
            .then(data => setDonerList(data))
    }, [])
    console.log(donerList);
    const handleFilter = (group) => {
        if (group !== "ALL") {
            console.log(group)
            let data = { ...filteredList, isFilter: true }
            // setFilteredList({ ...filteredList, isFilter: true })
            const filteredData = donerList.filter(elem => elem?.bloodGroup === group);
            data = { ...data, data: filteredData }
            setFilteredList(data)
        } else {
            setFilteredList({ isFilter: false, data: [] })
        }
    }
    return (
        <div>
            <div className='flex absolute top-[18%] md:left-[23%] flex-wrap justify-center'>
                {bloodGroup.map(elem => <button className='btn md:mx-5' onClick={() => handleFilter(elem)} key={uuidv4()}>{elem}</button>)}
            </div>
            <section className='md:mx-10 pt-60 pb-10'>
                <div className="overflow-x-auto" >
                    <table className="table table-zebra w-full bg-white">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Blood Group</th>
                                <th>Phone Number</th>
                                <th>Address</th>
                                <th>Age</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                filteredList?.isFilter === true ? filteredList?.data?.length !== 0 ? filteredList?.data?.map((elem, index) => <tr key={uuidv4()}>
                                    <th key={uuidv4()}>{index + 1}</th>
                                    <td key={uuidv4()}>{elem?.name}</td>
                                    <td key={uuidv4()}>{elem?.email}</td>
                                    <td key={uuidv4()}>{elem?.bloodGroup}</td>
                                    <td key={uuidv4()}>{elem?.phone}</td>
                                    <td key={uuidv4()}>{elem?.address}</td>
                                    <td key={uuidv4()}>{elem?.age}</td>
                                </tr>) : <p className='flex justify-center items-center w-[100%] relative left-[236%]'>No Group Found</p> : donerList.map((elem, index) => <tr key={uuidv4()}>
                                    <th key={uuidv4()}>{index + 1}</th>
                                    <td key={uuidv4()}>{elem?.name}</td>
                                    <td key={uuidv4()}>{elem?.email}</td>
                                    <td key={uuidv4()}>{elem?.bloodGroup}</td>
                                    <td key={uuidv4()}>{elem?.phone}</td>
                                    <td key={uuidv4()}>{elem?.address}</td>
                                    <td key={uuidv4()}>{elem?.age}</td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
};

export default BloodBank;