import React, {useState, useRef} from 'react'
import person from '../images/person.png'
import '../avatar/avatar.css';
const Avatar = () => {
    const [name, setname] = useState('')
    const [gender, setgender] = useState('')
    const avatar = useRef(null)
    const getValues = () =>{
        console.log(name, gender)
        if(name === ''){
            alert('Please Enter Name');
        }
        if(gender === ''){
            alert('Please Select Gender');
        }
        if(name !== '' && gender !== ''){
            avatar.current.src = `https://joeschmoe.io/api/v1/${gender}/${name}`;
        }
    } 
    return (
        <>
            <div className="title_container">
            <h1>Get Your Avatar</h1>
                <div className="box">
                    <p className="name">Enter Your Name</p>
                    <p><input type="text" value={name} onChange={(event)=>setname(event.target.value)}  id="name" autoComplete="off" /></p>
                    <p>
                        <span className="gender">Gender:</span>&nbsp;
                        <input type="radio" name="gender" id="male" value="male" onChange={()=>setgender('male')} />&ensp;
                        <label htmlFor="male" className="gender_label">Male</label>&nbsp;
                        <input type="radio" name="gender" value="female" id="female" onChange={()=>setgender('female')} />&ensp;
                        <label htmlFor="female" className="gender_label">Female</label>
                    </p>
                    <img src={person} alt="Person" width="200" ref={avatar} />
                    <br /><br />
                    <button onClick={getValues}>Get Avatar</button>
                </div>
            </div>
        </>
    )
}

export default Avatar
