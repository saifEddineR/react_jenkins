import React from 'react'
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';


const Student = ({studentName,age,profession,studentsList,getData,moviesList,children}) => {
  let inputVal =''
  const handleInput = (e) =>{
inputVal = e.target.value
  }
  return (
    <div>
      hello, {studentName}
      <p>{age} </p>
      <h6>{profession} </h6>
      {studentsList.map((el,i)=><h4 key={i}>{el} </h4>)}
      <input type='number' onChange={handleInput} />
      <button onClick={()=>getData(inputVal)} >click</button>
      {children}
      {moviesList.map(el=><MovieCard movies={el} />)}
    </div>
  )
}

Student.propTypes = {
  age: PropTypes.number,
  studentName : PropTypes.string,
}
Student.defaultProps = {
  age:10
}

export default Student
