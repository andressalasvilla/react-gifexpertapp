import React, { useState } from 'react'

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setinputValue] = useState('');

    const handleInputChange = (e) => {
        // console.log(e);
        setinputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log('Submit Hecho')
        if (inputValue.trim().length > 2) {
            setCategories(cats => [inputValue,...cats ]);
            setinputValue('');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            {/* <h1>{inputValue}</h1> */}
            {/* <h2>Add Category</h2> */}
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange} />
        </form>
    )
}
