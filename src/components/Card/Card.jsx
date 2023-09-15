
import PropTypes from 'prop-types';
// import { data } from 'autoprefixer';

import { useEffect } from 'react';
import { useState } from 'react';

const Card = ({handleSelect}) => {
  // Use State 
    const [courses,setCourses] = useState([])
    
  //  Use Effect
    useEffect(()=>{
        fetch('data.json')
        .then(res=> res.json())
        .then(data=>setCourses(data));
        
    },[]);

      
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    courses.map((course) => (
                      // Card Add
                        <div
                          key={course.id}
                          className="card lg:w-72 bg-base-100 shadow-lg mt-6 pt-4 pb-4"
                        >
                          <div className="m-2 ">
                            <img
                              src={course.img}
                            />
                            <div className="m-1">
                              <h2 className='font-semibold mt-2 text-[#1C1B1B] text-lg'>{course.course_name}</h2>
                              <p className='text-gray-400 text-left mt-2 '>{course.details}</p>
                            </div>
                            <div className="flex gap-4 mt-4 ">
                              <img src="https://i.ibb.co/jVqFz61/dollar-sign-1.png" alt="" />
                              <p className='text-gray-400'>Price : {course.price}</p>
                              <img src="https://i.ibb.co/xDcpHGV/Frame.png" alt="" />
                              <p className='text-gray-400'>Credit: {course.credit}hr</p>
                            </div>
                            <button
                              onClick={() => handleSelect(course)}
                              className="btn mt-4 bg-blue-500 md:pl-28 pl-20 pr-20 md:pr-28 rounded-lg  text-white hover:bg-blue-400 "
                            >
                              Select
                            </button>
                          </div>
                        </div>
                    ))};
                
            </div>
            
        </div>
    );
};

Card.propTypes = {
    handleSelect : PropTypes.func.isRequired
};

export default Card;