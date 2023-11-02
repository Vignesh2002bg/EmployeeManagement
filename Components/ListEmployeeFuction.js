import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import APIService from '../Service/APIService';
function ListEmployeeFunction(props) {
    const [data, setData] = useState([]);
    const [id,setid]=useState();
  const navigation=useNavigate();
  useEffect(() => {
    // Fetch data from the API when the component mounts
    async function fetchData() {
      try {
        const result = await APIService.fetch();
        setData(result);
      } catch (error) {
        // Handle error
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);
  const handleDelete = async (id) => {
    try {
      await APIService.delete(id);
      // Refresh data after deletion
      const updatedData = data.filter(item => item.id !== id);
      setData(updatedData);
    } catch (error) {
      // Handle error
      console.error('Error deleting item:', error);
    }
  };
  const handleUpdate=(id)=>{
    props.setUser(id); 
  }
    return ( 
    <>
    <>
            <h2 className='text-center'>Employee List</h2>
            <div className='row'>
                <button className='btn btn-primary w-25 mb-2' onClick={()=>navigation("/add")}>Add Employee</button>

            </div>
            <div className='row'>
                <table className='table table-striped table-bordered'>
                    <thead>
                        <tr>
                            <th>Employee Name</th>
                            <th>Employee DOB</th>
                            <th>Employee City</th>
                            <th>Employee State</th>
                            <th>Employee Position</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((item)=>
                                <tr key={item.id}>
                                    <td>{item.employeename}</td>
                                    <td>{item.employeedob}</td>
                                    <td>{item.city}</td>
                                    <td>{item.state}</td>
                                    <td>{item.position}</td>
                                    <td><button className='btn btn-outline-secondary'onClick={() => handleUpdate(item.id)}>Edit </button></td>
                                    <td><button className='btn btn-outline-danger' onClick={() => handleDelete(item.id)}>Delete</button></td>
                                </tr>
                            )
                        }
                        
                    </tbody>
                </table>
            </div>
            </>
    </> 
    );
}

export default ListEmployeeFunction;