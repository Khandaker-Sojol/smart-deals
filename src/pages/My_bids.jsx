import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";
// import Swal from "sweetalert2";
// import "sweetalert2/themes/embed-iframe.css";

const My_bids = () => {
  const { user } = use(AuthContext);
  const [bids, setBids] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/bids?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setBids(data);
        });
    }
  }, [user?.email]);

  const handleDeleteBid = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log("Now delete");
        fetch(`http://localhost:3000/bids/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Bid has been deleted.",
                icon: "success",
              });

              //
              const remainingBids = bids.filter((bid) => bid._id !== _id);
              setBids(remainingBids);
            }
          });
      }
    });
  };
  return (
    <div className="my-12">
      {/* Bids section */}
      <div className="mt-8">
        <h3 className="text-3xl font-semibold text-gray-900 mb-4">
          My Bids : <span className="text-gradient">{bids.length}</span>
        </h3>
        <div className="bg-white rounded-lg shadow-lg">
          <table className="min-w-full">
            <thead className="bg-[#F0F1F7]">
              <tr>
                <th className="text-left text-sm font-semibold p-4">SL No</th>
                <th className="text-left text-sm font-semibold p-4">Product</th>
                <th className="text-left text-sm font-semibold p-4">Seller</th>
                <th className="text-left text-sm font-semibold p-4">
                  Bid Price
                </th>
                <th className="text-left text-sm font-semibold p-4">Status</th>
                <th className="text-left text-sm font-semibold p-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {bids.map((bid, index) => (
                <tr key={bid._id} className="border-t border-gray-200">
                  <td className="p-4 text-sm">{index + 1}</td>
                  <td className="p-4 text-sm ">
                    <div className="min-h-10 bg-gray-300 rounded w-14"></div>
                    <div>
                      {/* <p>{title}</p>
                      <p>
                        ${price_min}-${price_max}
                      </p> */}
                    </div>
                  </td>
                  <td className="p-4 text-sm flex items-center gap-4 mt-4">
                    <img
                      className="rounded-full w-12"
                      src={bid.buyer_image}
                      alt=""
                    />
                    <div>
                      <p>{bid.buyer_name}</p>
                      <p>{bid.buyer_email}</p>
                    </div>
                  </td>
                  <td className="p-4 text-sm">${bid.bid_price}</td>
                  <td className="p-4 text-sm">
                    {bid.status === "pending" ? (
                      <div className="badge badge-warning"> {bid.status}</div>
                    ) : (
                      <div className="badge badge-success"> {bid.status}</div>
                    )}
                  </td>
                  <td className="p-4">
                    <button
                      onClick={() => handleDeleteBid(bid._id)}
                      className="text-red-500 hover:text-red-700 text-xs py-1 px-2 rounded-md border border-red-500 cursor-pointer"
                    >
                      Remove Bid
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default My_bids;
