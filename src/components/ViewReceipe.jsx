import React from 'react'
import { useLocation, Link } from 'react-router-dom'

const ViewReceipe = () => {
  let location = useLocation()
  console.log(location.state.recipe)
  let recipe = location.state.recipe;
  let arr = Object.entries(recipe.totalNutrients);
  console.log(arr)
  return (
    <>
      {/* <div className='m-0 p-0 row container m-auto bg-warning'>
        <img style={{height:'30vh', width:'20vw'}} className='mx-5 mt-5' src={location.state.recipe.image} alt="" />
      <h1 className='mx-5 my-5'>{location.state.recipe.label}</h1>
      <ul className='mx-5'>
        <li>{location.state.recipe.ingredients[0].text}</li>
        <li>{location.state.recipe.ingredients[1].text}</li>

        <li>{location.state.recipe.ingredients[2].text}</li>
        <li>{location.state.recipe.ingredients[3].text}</li>
      </ul>
      </div> */}
      <div className="container">
        <div className="row">
          <div className="col-md-4 bg-info d-flex justify-content-center">
            <img src={location.state.recipe.image} alt="" />
          </div>
          <div className="col-md-8 bg-warning">
            <h3 className='my-3'>Title:{recipe.label}</h3>
            <h3 className='my-3'>Meal Type:{recipe.mealType[0]}</h3>
            <h3 className='my-3'>Cuisine Type:{recipe.cuisineType}</h3>
            <Link to={recipe.url} className='btn btn-info my-3'>Recipe</Link>
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-6">
          <ul>
            <h3>Ingredient List</h3>
            {recipe.ingredientLines.map((ele)=>(
              <li>{ele}</li>
            ))}
          </ul>
        </div>
        <div className="col-md-6">
          <ul>
            <h3>Health Labels</h3>
            {recipe.healthLabels.map((ele)=>(
              <li>{ele}</li>
            ))}
          </ul>
        </div>

        <div>
          <table>
            
             {arr.map(([key,value])=>{
              return <tr>
                <th>{key}</th>
                <td>{value.label}</td>
                <td>{value.quantity}</td>
                <td>{value.unit}</td>
              </tr>
             })}
            
          </table>
        </div>
      </div>
    </>
  )
}

export default ViewReceipe