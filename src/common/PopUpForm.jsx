import React, { useState } from "react";
import Modal from "react-modal";
import { IoCloseCircleOutline } from "react-icons/io5";
import { ToastContainer, toast } from "react-toastify";

import { businessCategories } from "../data/constant";

import "react-toastify/dist/ReactToastify.css";

Modal.setAppElement("#root");

const PopUpForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formStatus, setFormStatus] = useState(false);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState({
    name: "",
    email: "",
    phone: "",
    business_name: "",
    business_category: "",
  });

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden"; // Disable scrollbar
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto"; // Enable scrollbar
  };

  // Sort the business categories alphabetically by label
  const sortedBusinessCategories = [...businessCategories].sort((a, b) =>
    a.label.localeCompare(b.label)
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setQuery((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);

    const formData = new FormData();
    Object.entries(query).forEach(([key, value]) => {
      formData.append(key, value);
    });

    axios
      .post(
        "https://getform.io/f/942d7eb5-7571-4900-a7ac-0ee087826dca",
        formData,
        { headers: { "Content-Type": "application/json" } }
      )
      .then(function (response) {
        setFormStatus(true);
        toast.success("Successfully submitted", {
          position: "top-right",
          delay: 50,
          className: "text-base m-0",
        });
        setQuery({
          name: "",
          email: "",
          phone: "",
          business_name: "",
          business_category: "",
        });
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
        toast.error(error, {
          position: "top-right",
          delay: 2000,
        });
        setLoading(false);
      });
  };

  return (
    <>
      <button
        className="py-3 px-8 rounded-xl bg-primary font-bold text-white text-xl 2xl:text-2xl mb-2"
        onClick={openModal}
      >
        Book Now
      </button>

      <div className="container">
        <Modal
          isOpen={isModalOpen}
          contentLabel="form-modal"
          className="w-[92%] md:w-[75%] lg:w-[45%] bg-secondary  rounded-lg relative top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
        >
          <IoCloseCircleOutline
            onClick={closeModal}
            className="absolute top-1 right-2 cursor-pointer w-8 h-8 text-primary"
          />

          <div className="md:text-2xl 2xl:text-3xl px-4 md:px-10 py-5 z-30">
            {/* <h5 className="uppercase text-[15px] lg:text-base 2xl:text-xl text-center font-medium">
              Apko kismat badlni hai
            </h5> */}
            <h2 className="font-bold mb-4 text-center">Connect With Us</h2>
            <form
              onSubmit={handleSubmit}
              autoComplete="off"
              encType="multipart/form-data"
            >
              <label htmlFor="name">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name *"
                  className="form-input"
                  value={query.name}
                  onChange={handleChange}
                  required
                />
              </label>
              <label htmlFor="email">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="form-input"
                  placeholder="Email *"
                  value={query.email}
                  onChange={handleChange}
                  required
                />
              </label>
              <label htmlFor="phone">
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  className="form-input"
                  placeholder="Phone *"
                  value={query.phone}
                  onChange={handleChange}
                  required
                  maxLength={10}
                />
              </label>
              <label htmlFor="business_name">
                <input
                  type="text"
                  name="business_name"
                  id="business_name"
                  className="form-input"
                  placeholder="Name of Business *"
                  value={query.business_name}
                  onChange={handleChange}
                  required
                />
              </label>
              <label htmlFor="business_type">
                <select
                  name="business_category"
                  id="business_type"
                  className="form-input"
                  value={query.business_category}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Category *</option>
                  {sortedBusinessCategories.map(({ value, label }, i) => (
                    <option key={i} value={value}>
                      {label}
                    </option>
                  ))}
                </select>
              </label>

              <p className="text-xs mb-4 pl-2">
                We prioritize safeguarding your personal information and ensure
                its confidentiality and responsible handling.
              </p>

              <div className="text-center">
                <button
                  type="submit"
                  // className="rounded-lg text-base 2xl:text-2xl bg-primary py-2 px-5 text-white cursor-pointer"
                  className="py-2 px-5 rounded-lg bg-primary font-bold text-white text-xl 2xl:text-2xl mb-2"
                >
                  Book Now
                </button>
                {formStatus && <ToastContainer />}
              </div>
            </form>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default PopUpForm;
