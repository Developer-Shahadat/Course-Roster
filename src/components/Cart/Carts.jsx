import Cart from './Cart';
import PropTypes from 'prop-types';
const Carts = ({cartAdd,totalCredit,remaining,totalPrice}) => {
    return (
        <div className="">
            {/* Card Add */}
            <div className="mt-8 card  bg-base-100 shadow-lg pt-4 pb-4">
                <div className="mx-4">
                    <h3 className='text-[#2F80ED] font-bold'>Credit Hour Remaining  {remaining} hr</h3>
                    <hr className="mt-3" />
                    <h2 className="font-semibold text-lg mt-2">Course Name</h2>
                    {
                        cartAdd.map((cartAdd,index)=> <ol className='text-gray-400 mt-1' key={index}><Cart key ={index} cartId={cartAdd}>
                        </Cart>{index+1}. {cartAdd.course_name}</ol>
                           )
                    }
                    <hr className="mt-4"/>
                    <h3 className='font-medium mt-2'>Total Credit Hour : {totalCredit}</h3>
                    <hr className='mt-2' />
                    <h3 className='font-semibold mt-2'>Total Price : {totalPrice} USD</h3>
                </div>
            </div>
        </div>
    );
};
Carts.propTypes = {
    cartAdd: PropTypes.array.isRequired,
    totalCredit: PropTypes.object.isRequired,
    remaining : PropTypes.object.isRequired,
    totalPrice : PropTypes.object.isRequired
}
export default Carts;