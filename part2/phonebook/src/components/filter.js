import React, { useState } from 'react'

const filter = () => {
    return (
        <form>
            <label>Filter show with </label>
            <input value={filterValue} onChange={handleFilterValue} />
        </form>
    )
}