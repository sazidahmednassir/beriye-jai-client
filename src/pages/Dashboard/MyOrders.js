import React from 'react';

const MyOrders = () => {
    return (
        <div class="overflow-x-auto w-full ">
        <table class="table table-compact w-full mt-2 ">
      
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
          {/* {
                           users?.map((user, index)=><UserRow 
                           index={index}
                           key={user._id}
                           user={user}
                           refetch={refetch}
                           ></UserRow>)
                       }  */}
          </tbody>
        </table>
      </div>
    );
};

export default MyOrders;