import { useQuery } from "react-query";
import Loading from "../../Shared/Loading";
import UserRow from "./UserRow";

const AddAdmin = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch("http://localhost:5000/allusers", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div class="overflow-x-auto w-full mt-12 ml-3">
      <table class="table table-compact w-full mt-2 ">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Make Admin</th>
            {/* <th>Delete User</th> */}
          </tr>
        </thead>
        <tbody>
          {users?.map((user, index) => (
            <UserRow
              index={index}
              key={user._id}
              user={user}
              refetch={refetch}
            ></UserRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AddAdmin;
