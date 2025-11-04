import React from "react";
import { useLoaderData, Link } from "react-router-dom";

const DetailsPage = () => {
  const product = useLoaderData();
  console.log(product);

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

          <button className="w-full mt-auto bg-gradient-to-r from-[#5E3CFB] to-[#8B5CF6] text-white font-semibold py-3 rounded-xl hover:opacity-90 transition cursor-pointer">
            I Want Buy This Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
