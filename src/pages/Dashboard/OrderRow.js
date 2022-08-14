import React from 'react';

const OrderRow = ({order, index}) => {
    return (
        <tr>
        <th>{index+1}</th>
        <td>{order.packageName}</td>
        <td>{order.address}</td>
        <td>{order.price}</td>
        {/* <td> {role !== 'admin' && <button  onClick={makeAdmin} class="btn btn-xs">Make Admin</button>}</td> */}
        <td><button class="btn btn-xs">Remove User</button></td>
    </tr>
    );
};

export default OrderRow;