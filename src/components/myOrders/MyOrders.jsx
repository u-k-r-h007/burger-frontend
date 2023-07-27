import React from "react";
import {Link} from 'react-router-dom'
import {AiOutlineEye} from 'react-icons/ai' 
const MyOrders = () => {
  return (
    <section className="tableClass">
      <main>
        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Order Status</th>
              <th>Item Qty.</th>
              <th>Amount</th>
              <th>Payment Method</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <td>#jdhfsujhfusifh</td>
            <td>Processing</td>
            <td>3</td>
            <td>2000</td>
            <td>Cash on deleviry</td>
            <td>
                <Link to={`/orders/${'assdasd'}`}> <AiOutlineEye /> </Link>
            </td>
          </tbody>
        </table>
      </main>
    </section>
  );
};

export default MyOrders;
