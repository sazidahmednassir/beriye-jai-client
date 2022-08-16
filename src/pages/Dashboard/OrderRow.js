import React from 'react';
import { Link } from 'react-router-dom';

const OrderRow = ({order, index}) => {
    return (
        <tr>
        <th>{index+1}</th>
        <td>{order.packageName}</td>
        <td>{order.address}</td>
        <td>{order.price}</td>
        {/* <td> {role !== 'admin' && <button  onClick={makeAdmin} class="btn btn-xs">Make Admin</button>}</td> */}
        <td>{(order.price && !order.paid) && <Link to={`/dashboard/payment/${order._id}`}><button className='btn btn-xs btn-success'>Pay</button></Link>}
                {(order.price && order.paid) && 
                                        <div>
                                        <p><span className='text-success'>Paid</span></p>
                                        <p>Transaction id: <span className='text-success'>{order.transactionId}</span></p>
                                    </div>
                                        
                                    } </td>
        
        <td><button class="btn btn-xs">Remove User</button></td>
    </tr>
    );
};

export default OrderRow;