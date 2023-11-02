import React, { useState } from 'react';
import APIService from '../Service/APIService';
import { useNavigate } from 'react-router-dom';
function CreateEmployeeCompoent() {
    const navigation=useNavigate();
    const [formData, setFormData] = useState({
        employeename:'',
        employeedob:'',
        city:'',
        state:'',
        position:''
    });
    
    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        
      };
      const handleInsert = async (e) => {
        e.preventDefault();
        try {
            await APIService.create(formData);
            console.log("sucessfully")
            navigation("/")
          } catch (error) {
            console.error('Error inserting data:', error);
          }
      };
   
    return ( 
        <>
         <>
            <div className="card mt-4 w-50">
            <div className="card-body">
                <h5 className="card-title text-center">EMPLOYEE REGISTER FORM</h5>
                <form onSubmit={handleInsert}>
                    <div className='form-group'>
                        <label>EmployeeName</label>
                        <input className='form-control' placeholder='' value={formData.employeename} name='employeename' onChange={handleInputChange}/>
                    </div>
                    <div className='form-group'>
                        <label>EmployeeDOB</label>
                        <input className='form-control' placeholder='' value={formData.employeedob} name='employeedob' onChange={handleInputChange}/>
                    </div>
                    <div className='form-group'>
                        <label>EmployeeCity</label>
                        <input className='form-control' placeholder=''  value={formData.city} name='city'onChange={handleInputChange}/>
                    </div>
                    <div className='form-group'>
                        <label>EmployeeState</label>
                        <input className='form-control' placeholder=''   name='state' value={formData.state} onChange={handleInputChange}/>
                    </div>
                    <div className='form-group'>
                        <label>EmployeePosition</label>
                        <input className='form-control' placeholder='' value={formData.position}  name='position' onChange={handleInputChange}/>
                    </div>
                    <div className='form-group mt-4'>
                        <button className='btn btn-primary' >Submit Record</button>
                    </div>
                </form>
            </div>

            </div>
            </>
        </>
     );
}

export default CreateEmployeeCompoent;