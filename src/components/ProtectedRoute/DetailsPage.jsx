import React, { use, useEffect, useRef, useState } from "react";
import { useLoaderData, Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { toast } from "react-toastify";

const DetailsPage = () => {
  const product = useLoaderData();
  const bidModalRef = useRef(null);
  const [bids, setBids] = useState([]);
  const { user } = use(AuthContext);
  console.log(product);
  console.log(bids);

  const {
    image,
    title,
    condition,
    price_min,
    price_max,
    category,
    email,
    location,
    status,
    description,
    created_at,
    _id,
  } = product;
  const productId = _id;

  useEffect(() => {
    fetch(`http://localhost:3000/products/bids/${productId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Bids for this products", data);
        setBids(data);
      });
  }, [productId]);

  const handleBidModalOpen = () => {
    bidModalRef.current.showModal();
  };

  const handleBidSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const bidPrice = e.target.bidPrice.value;
    const contact = e.target.contact.value;

    console.log({ _id, name, email, photo, bidPrice, contact });
    const newBid = {
      productId: _id,
      buyer_name: name,
      buyer_email: email,
      buyer_image: photo,
      buyer_contact: contact,
      bid_price: bidPrice,
      status: "pending",
    };

    fetch("http://localhost:3000/bids", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newBid),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("after placing bid", data);
        toast.success("Your bit successfully complete");
        // add the new bid to the state
        newBid._id = data.insertedId;
        const newBids = [...bids, newBid];
        newBids.sort((a, b) => b.bid_price - a.bid_price);
        setBids(newBids);
      });
    e.target.reset();
  };

  return (
    <div className="mx-auto px-4 lg:px-8 py-16 bg-[#F8F9FB]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* LEFT SECTION */}
        <div>
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
            <img
              src={image}
              alt={title}
              className="w-full h-[320px] md:h-[420px] object-cover"
            />
          </div>

          <div className="bg-white mt-6 p-6 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Product Description
            </h2>

            <div className="flex flex-wrap items-center gap-6 text-sm mb-4">
              <p>
                <span className="font-semibold text-gray-800">Condition:</span>{" "}
                {condition}
              </p>
            </div>

            <p className="text-gray-600 leading-relaxed text-sm">
              {description}
            </p>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="flex flex-col justify-start">
          <Link
            to="/all-products"
            className="inline-flex items-center font-medium text-gray-600 hover:text-purple-600 mb-6"
          >
            ← Back To Products
          </Link>

          <h1 className="text-3xl font-semibold text-gray-900 mb-1">{title}</h1>

          <span className="bg-[#F0EDFF] text-[#5E3CFB] text-xs font-medium px-3 py-1 rounded-full mb-6">
            {category}
          </span>

          <div className="bg-[#F3FBF6] border border-[#E1F5E7] rounded-2xl p-4 mb-6">
            <h2 className="text-[#249C57] text-2xl font-semibold">
              ${price_min} - {price_max}
            </h2>
            <p className="text-gray-600 text-sm mt-1">Price starts from</p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 p-5 mb-6 shadow-sm">
            <h3 className="font-semibold text-gray-900 mb-3 text-sm">
              Product Details
            </h3>
            <p className="text-sm text-gray-600 mb-1">Product ID: {_id}</p>
            <p className="text-sm text-gray-600">
              Posted: {new Date(created_at).toLocaleDateString()}
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 p-5 mb-6 shadow-sm">
            <h3 className="font-semibold text-gray-900 mb-3 text-sm">
              Seller Information
            </h3>

            <div className="flex items-center gap-3 mb-3">
              <img
                src="https://i.pravatar.cc/100"
                alt="seller"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-medium text-gray-800">
                  {email?.split("@")[0]}
                </p>
                <p className="text-xs text-gray-500">{email}</p>
              </div>
            </div>

            <div className="space-y-1 text-sm text-gray-600">
              <p>
                <span className="font-semibold">Location:</span> {location}
              </p>
              <p>
                <span className="font-semibold">Contact:</span> {email}
              </p>
              <p className="flex items-center gap-2">
                <span className="font-semibold">Status:</span>
                <span className="bg-[#FFF5E0] text-[#D97706] text-xs px-2 py-0.5 rounded-full">
                  {status}
                </span>
              </p>
            </div>
          </div>

          <button
            onClick={handleBidModalOpen}
            className="w-full mt-auto bg-gradient-to-r from-[#5E3CFB] to-[#8B5CF6] text-white font-semibold py-3 rounded-xl hover:opacity-90 transition cursor-pointer"
          >
            I Want Buy This Product
          </button>

          {/* Open the modal using document.getElementById('ID').showModal() method */}
          <dialog
            ref={bidModalRef}
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box py-10">
              <h3 className="font-bold text-2xl text-center my-8">
                Give Seller Your Offered Price
              </h3>

              <form onSubmit={handleBidSubmit}>
                <fieldset className="fieldset">
                  <div className="flex gap-4">
                    <div>
                      <label className="label font-medium text-sm">
                        Buyer Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        readOnly
                        className="input"
                        // placeholder="Your Name"
                        defaultValue={user?.displayName}
                      />
                    </div>
                    <div>
                      <label className="label font-medium text-sm">
                        Buyer Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        readOnly
                        className="input"
                        placeholder="Email"
                        defaultValue={user?.email}
                      />
                    </div>
                  </div>

                  <label className="label font-medium text-sm">
                    Buyer Image URL
                  </label>
                  <input
                    type="text"
                    name="photo"
                    readOnly
                    className="input w-full"
                    placeholder="https://...your_img_url"
                    defaultValue={user?.photoURL}
                  />
                  <label className="label font-medium text-sm">
                    Enter Your bid Price
                  </label>
                  <input
                    type="text"
                    name="bidPrice"
                    className="input w-full"
                    placeholder="Enter your offer amount"
                    required
                  />
                  <label className="label font-medium text-sm">
                    Contact Number
                  </label>
                  <input
                    type="text"
                    name="contact"
                    className="input w-full"
                    placeholder="e.g. +88016056-54180"
                  />
                </fieldset>
                <div className="text-end space-x-2 modal-action pb-12">
                  {/* if there is a button in form, it will close the modal */}
                  <form method="dialog">
                    <button className="btn mt-4  border-purple-400 text-purple-500 hover:bg-purple-500 hover:text-white transition">
                      Cancel
                    </button>
                  </form>
                  <button className="btn btn-primary mt-4">Submit Bid</button>
                </div>
              </form>
            </div>
          </dialog>
        </div>
      </div>
      {/* Bids section */}
      <div className="mt-8">
        <h3 className="text-3xl font-semibold text-gray-900 mb-4">
          Bids for this Product:{" "}
          <span className="text-gradient">{bids.length}</span>
        </h3>
        <div className="bg-white rounded-lg shadow-lg">
          <table className="min-w-full">
            <thead className="bg-[#F0F1F7]">
              <tr>
                <th className="text-left text-sm font-semibold p-4">SL No</th>
                <th className="text-left text-sm font-semibold p-4">Product</th>
                <th className="text-left text-sm font-semibold p-4">Buyer</th>
                <th className="text-left text-sm font-semibold p-4">
                  Bid Price
                </th>
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
                      <p>{title}</p>
                      <p>
                        ${price_min}-${price_max}
                      </p>
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
                  <td className="p-4  flex gap-2">
                    <button className="text-green-500 hover:text-green-700 text-xs py-1 px-2 rounded-md border  border-green-500">
                      Accept Offer
                    </button>
                    <button className="text-red-500 hover:text-red-700 text-xs py-1 px-2 rounded-md border border-red-500">
                      Reject Offer
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

export default DetailsPage;
