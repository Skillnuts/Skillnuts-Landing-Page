import React, { useEffect, useState } from "react";
import { images } from "../data/images";
import { businessCategories } from "../data/constant";
import axios from "axios";

const Footer = () => {
  const { footerImg, footerBgImg, growthIcon } = images;
  const [formStatus, setFormStatus] = useState(false);
  const [loading, setLoading] = useState(false);
  const [businessCategoriesData, setBusinessCategoriesData] =
    useState(businessCategories);

  useEffect(() => {
    // Sort the business categories alphabetically by label
    const sortedBusinessCategories = [...businessCategories].sort((a, b) =>
      a.label.localeCompare(b.label)
    );

    setBusinessCategoriesData(sortedBusinessCategories);
  }, []);

  const [query, setQuery] = useState({
    name: "",
    email: "",
    phone: "",
    business_name: "",
    business_category: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setQuery((prevState) => ({ ...prevState, [name]: value }));
  };

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
          name: "",
          email: "",
          phone: "",
          business_name: "",
          business_category: "",
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
                  <select
                    name="business_category"
                    id="business_type"
                    className="form-input"
                    value={query.business_category}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Category *</option>
                    {businessCategoriesData.map(({ value, label }, i) => (
                      <option key={i} value={value}>
                        {label}
                      </option>
                    ))}
                  </select>
                </label>

                {/* <p className="text-xs 2xl:text-sm text-primary mt-2">
                  We respect your privacy. Any information submitted through
                  this contact form will be used solely for the purpose of
                  communication and will not be shared with any third parties.
                </p> */}

                <div className="text-center">
                  <button
                    type="submit"
                    className="rounded-lg text-base 2xl:text-2xl bg-primary py-2 px-5 text-white cursor-pointer"
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
                className="w-80 mx-auto 2xl:w-96 lg:translate-y-20 2xl:translate-y-10"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        
        <div className="relative z-20">
          <div className="footer_text bg-primary">
            <div className="container w-full text-center py-4">
              <p className="font-semibold text-white text-base xl:text-3xl 2xl:text-4xl uppercase w-full mb-6 ">
                Moneylal ne to le liya, ab apaki bari. <br /> chalo shuruwat
                kare safalta ki{" "}
                <img
                  src={growthIcon}
                  className="w-[35px] md:w-[50px] inline -translate-y-2"
                />
              </p>

              <p className="mb-4 text-xs 2xl:text-sm w-full text-white">
                * Results of advertising campaigns may vary as they depend on
                factors such as the product, sector, target market and market
                conditions.
              </p>

              <p className="mb-4 text-xs 2xl:text-sm w-full text-white">
                Skillnuts holds all rights to the original content on the
                website and that any unauthorised duplication or copying may
                lead to legal action.
              </p>

              <div className="text-sm 2xl:text-sm w-full text-white text-left">
                <h5 className="mb-4 underline">Terms & Conditions:</h5>

                <ol className="list-decimal list-inside text-xs 2xl:text-sm grid gap-y-2">
                  <li>
                    <strong>Printing Exclusion:</strong> The above-mentioned ad
                    campaign package specifically excludes any printing work.
                    Any printing requirements will be considered as additional
                    services and will be charged separately.
                  </li>
                  <li>
                    <strong>Talent Inclusion:</strong> We are pleased to provide
                    basic local actors/models for your shoot as part of the
                    package. However, if you have specific preferences or
                    requests for particular faces or talents, any additional
                    charges incurred due to such specific demands will be the
                    client's responsibility.
                  </li>
                  <li>
                    <strong>Media Buying:</strong> Please note that this ad
                    campaign package does not include media buying services. We
                    will offer consultation on beneficial platforms for your
                    campaign, but the actual media buying process is not covered
                    within this package.
                  </li>
                  <li>
                    <strong>Campaign Success:</strong> We would like to
                    emphasise that the success of your campaign is contingent on
                    various factors, including the quality of your products or
                    services, your own capacity, and the strategic efforts
                    invested in advertising. Your company is responsible for
                    implementing effective strategies, sales processes, and
                    follow-ups to convert the leads into paying customers.
                  </li>
                  <li>
                    <strong>Additional Materials:</strong> This price is limited
                    to the scope of work described in the campaign, any
                    additional work will be charged extra.
                  </li>
                  <li>
                    <strong>Location Responsibility:</strong> The cost and
                    arrangement for the location of the advert shoot are not
                    covered within this budget. The client is responsible for
                    either providing a suitable location from their side or
                    incurring additional charges for securing an appropriate
                    location as per the campaign's requirements.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
