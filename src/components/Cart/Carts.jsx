import Cart from './Cart';
import PropTypes from 'prop-types';
const Carts = ({cartAdd}) => {
    return (
        <div className="">
            <div className="mt-8 card  bg-base-100 shadow-lg pt-4 pb-4">
                <div className="mx-4">
                    <h3>Credit Hour Remaining</h3>
                    <hr className="mt-2" />
                    <h2 className="font-semibold text-lg">Course Name</h2>
                    {
                        cartAdd.map((cartAdd,index)=> <ol className='text-gray-400 mt-1' key={index}><Cart key ={index} cartId={cartAdd}>
                        </Cart>{index+1}. {cartAdd.course_name}</ol>
                           )
                    }

                    {/* {cartAdd.map((course, index) => (
                        <ol key={index} className='mt-1'>
                            {index + 1}. <Cart course={course}>{course.course_name}</Cart>
                        </ol>
                    ))} */}
                    <hr className="mt-2"/>
                    <h3>Total Credit Hour :</h3>
                </div>
            </div>
        </div>
    );
};
Carts.propTypes = {
    cartAdd: PropTypes.array.isRequired
}
export default Carts;