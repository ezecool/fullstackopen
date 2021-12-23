import React from 'react'

const Filter = ({filterValue, onChange}) => {
    return (
        <form>
            <label>Filter show with </label>
            <input value={filterValue} onChange={onChange} />
        </form>
    )
}

export default Filter