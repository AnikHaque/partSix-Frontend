import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';

const BloodDoner = () => {
    const bloodGroup = ["A+", "A-", "O+", "O-", "AB-", "AB+", "B+", "B-"];
    const [userInfo, loading] = useAuthState(auth);
    const [isBloodGroupSelect, setIsBloodGroupSelect] = React.useState(false)
    const [userBloodGroup, setUserBloodGroup] = React.useState('')
    const handleBloodGroup = (e) => {
        e.preventDefault();
        setIsBloodGroupSelect(true)
    }
    const handleBloodDonerInfo = (e) => {
        e.preventDefault()
        // Post the donner info to the server
        console.log(e?.target?.bloodGroup?.value);
        console.log(e?.target?.name?.value);
        const donerInfo = {
            name: e?.target?.name?.value,
            bloodGroup: e?.target?.bloodGroup?.value,
            email: userInfo?.email,
            address: e?.target?.address?.value,
            phone: e?.target?.telephone?.value,
            age: e?.target?.age?.value,
        }
        console.log(donerInfo)
        fetch('  https://whispering-bayou-93638.herokuapp.com/bloodDoner', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(donerInfo)
        }).then(res => res.json())
            .then(data => console.log(data))

    }
    console.log(userBloodGroup);
    return (
        <div className='flex h-[80vh] flex-col lg:flex-row items-center justify-center pb-32 pt-32'>
            <img src="https://www.seekpng.com/png/detail/21-214042_for-developers-blood-clipart-blood-donation-png.png" alt="" className='h-[67%] rounded-2xl lg:block hidden' />
            <form onSubmit={isBloodGroupSelect === false ? handleBloodGroup : handleBloodDonerInfo} className="md:w-[500px] w-[90vw] flex flex-col justify-center items-center app__login-form rounded">
                {
                    isBloodGroupSelect === false ? <p>Select The Blood Group First</p> : null
                }
                {
                    isBloodGroupSelect === false ? <>
                        {
                            bloodGroup.map(elem => {
                                return (<p className='flex justify-center items-center'>
                                    <input className='w-5' type="radio" name="bloodGroup" id={`${elem}`} required onClick={() => setUserBloodGroup(elem)} />
                                    <label htmlFor={`${elem}`}>{elem}</label>
                                </p>
                                )
                            })
                        }
                    </> : null
                }

                {
                    isBloodGroupSelect === true ? <>
                        <p>Name</p>
                        <input type="text" name="name" id="name" defaultValue={userInfo?.displayName} placeholder='Enter your name here' className='rounded-lg' required />
                        <p>Email</p>
                        <input type="email" name="email" id="email" defaultValue={userInfo?.email} disabled className='rounded-lg' required />
                        <p>Address</p>
                        <input type="text" name="address" id="address" placeholder='Enter your address here' className='rounded-lg' required />
                        <p>Phone Number</p>
                        <input type="number" name="telephone" id="telephone" placeholder='Enter your phone number' className='rounded-lg' required />
                        <p>Blood Group</p>
                        <input type="text" name="blood-group" id="bloodGroup" defaultValue={userBloodGroup} disabled className='rounded-lg' required />
                        <p>Age</p>
                        <input type="number" name="age" id="age" placeholder='Enter your age here' className='rounded-lg' required />
                    </> : null
                }
                <input type="submit" value="Submit" className='rounded-lg btn' />
            </form>
            <ToastContainer />
        </div>
    );
};

export default BloodDoner;