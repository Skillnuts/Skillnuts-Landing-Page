import React, { useState } from "react";
import { images } from "../data/images";
import Select from "react-tailwindcss-select";
import { businessCategories } from "../data/constant";
import axios from "axios";

const Footer = () => {
  const { footerImg, footerBgImg, growthIcon } = images;
  const [formStatus, setFormStatus] = useState(false);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState({
    name: '',
    email: '',
    phone: '',
    business_name: '',
    business_category: '',
  })

  const handleChange = e => {
    const {name, value} = e.target
    setQuery((prevState)=> ({...prevState,[name]:value}))
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);
    const formData = new FormData();
    Object.entries(query).forEach(([key, value]) => {
      formData.append(key, value);
    });

    axios
      .post(
        "https://getform.io/f/942d7eb5-7571-4900-a7ac-0ee087826dca",
        formData,
        { headers: { Accept: "application/json" } }
      )
      .then(function (response) {
        setQuery({
          name: '',
          email: '',
          phone: '',
          business_name: '',
          business_category: '',
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // https://getform.io/f/942d7eb5-7571-4900-a7ac-0ee087826dca

  return (
    <>
      <footer className="mt-6 lg:mt-12 relative">
        <div className="container mx-auto ">
          <div className="bg-secondary flex flex-col md:flex-row rounded-xl lg:p-5 lg:pt-4 lg:pb-20">
            <div className="md:w-1/2 md:text-2xl 2xl:text-3xl px-4 md:px-10 py-5 z-20">
              <h5 className="uppercase text-[15px] lg:text-base 2xl:text-xl text-center font-medium">
                Moneylal ne badali apani Kismat
              </h5>
              <h2 className="font-bold mb-4 text-center">AB AAPKI BAARI</h2>
              <form onSubmit={handleSubmit} autoComplete="off">
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
                  <select name="business_category" id="business_type" className="form-input" value={query.business_category} onChange={handleChange} required>
                    <option value="">Select Category *</option>
                    {businessCategories.map(({value, label}, i) => (
                      <option key={i} value={value}>{label}</option>
                    ))}
                  </select>
                </label>

                <p className="text-xs 2xl:text-sm text-primary mt-2">
                  We respect your privacy. Any information submitted through
                  this contact form will be used solely for the purpose of
                  communication and will not be shared with any third parties.
                </p>

                <div className="text-center">
                  <button
                    type="submit"
                    className="rounded-lg text-base 2xl:text-2xl bg-primary py-2 px-5 text-white mt-2 cursor-pointer"
                  >
                    Book Now
                  </button>
                </div>
              </form>
            </div>
            <div className="md:w-1/2">
              <img
                src={footerImg}
                alt=""
                className="w-80 mx-auto 2xl:w-96 lg:translate-y-20 2xl:translate-y-24"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div className="absolute left-0 bottom-0 md:-bottom-40 xl:-bottom-64 2xl:-bottom-[22rem]">
          <div className="w-full text-center absolute bottom-12 px-1 sm:px-12 md:bottom-20 md:text-xl xl:bottom-24 2xl:bottom-32">
            <p className="font-semibold text-white xl:text-3xl 2xl:text-4xl uppercase w-full ">
              Moneylal ne to le liya, ab apaki bari. <br /> chalo shuruwat kare
              safalta ki <img src={growthIcon} width={50} className="inline -translate-y-3" />
            </p>

            <p className="-mb-4 text-xs 2xl:text-sm w-full text-white translate-y-4 md:translate-y-10">
              Skillnuts holds all rights to the original content on the website
              and that any unauthorised duplication or copying may lead to legal
              action.
            </p>
          </div>
          <img
            src={footerBgImg}
            alt=""
            className="w-full mx-auto h-[240px] md:h-full"
            loading="lazy"
          />
        </div>
      </footer>
    </>
  );
};

export default Footer;
