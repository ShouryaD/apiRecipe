import React, { useRef } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Receipe = () => {
    let [receipe, setReceipe] = useState([])
    let searchRef = useRef()
    let [search, setSearch] = useState('juice')
    async function getRecipe() {
        let data = await fetch(`https://api.edamam.com/search?q=${search}&app_id=2d9046d8&app_key=3049c14e668e962a6957c456c94b5d34`)
        let result = await data.json()
        console.log(result.hits)
        setReceipe(result.hits)
    }
    useEffect(() => {
        getRecipe()
    }, [search])
    // console.log(receipe[0].recipe.label)

    // function handleFunc(ele) {
    //     console.log(ele)
    // }

    const handleSearch = (e)=>{
        e.preventDefault()
        let value = searchRef.current.value
        console.log(value)
        setSearch(value)
    }
    return (
        <>
            <div>
                <form className="d-flex w-50 m-auto my-3" role="search">
                  
                    <input ref={searchRef} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" onClick={handleSearch} type="submit">Search</button>
                </form>

            </div>
            <div className='row m-0 p-0 justify-content-center gap-3 container m-auto bg-warning mt-5'>
                {/* container covers 80% of the width */}
                {receipe.map((ele, key) => (
                    <div className="card" style={{ width: '18rem' }}>
                        <img src={ele.recipe.image} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{ele.recipe.label}</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link to="/view" state={ele} className="btn btn-primary">View</Link>
                            {/* <button onClick={()=>handleFunc(ele)}>click me</button> */}
                        </div>
                    </div>

                ))}
            </div>
        </>
    )
}

export default Receipe