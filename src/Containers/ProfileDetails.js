
import React, { useState } from 'react';


import {Profile} from '../Components/Profile/Profile'

const options = [
    { name: "Rod Hand", value: "optionOne" },
    { name: "Rod RolfSon DVM", value: "optionTwo" },
    { name: "Curt MCKenzie", value: "optionThre" },
    { name: "Juliet Bogisich", value: "optionFour" },
    { name: "Clifton Rowe", value: "optionFive" },
  ];

export const ProfileDetails=()=>{
    const [isAllSelected, setAllChecked]=useState(false)
    const [isSelected, setSelected]=useState({})
  
    const handleAllChecked=(e)=>{
      setAllChecked(!isAllSelected)
    }
    const handleCheckbox=(e)=>{
    // console.log('====>e',e.target.id,)
     setSelected({...isSelected, [e.target.id]: !isSelected[e.target.id]})
    }

   

    const handleSubmit=(e)=>{
        e.preventDefault();

    }

    return<Profile
    options={options}
    onFormSubmit={handleSubmit}
    handleAllChecked={handleAllChecked}
    handleCheckbox={handleCheckbox}
    isAllSelected={isAllSelected}
    isSelected={isSelected}
    />
}