import contact from "../assets/contactform/contactformsvg.svg";
import { useState } from "react";

const Contact = () => {

  const [status, setStatus] = useState("Submit");

  const callServer = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, number, interest, description, address } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      number: number.value,
      interest: interest.value,
      description: description.value,
      address: address.value
    };
    let response = await fetch("http://localhost:9000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };


  return (
    <div className="flex flex-wrap flex-row -mx-4 justify-center items-center">
      <div className="flexbasis-1/2  items-center justify-center">
        <img src={contact}/>
      </div>
      <div className="basis-1/2  pt-10 pr-15 ">
        <div className="w-96 md:w-96 md:max-w-full  mx-auto shadow-xl">
          <div className="p-6 border border-stone-50 bg-stone-50 sm:rounded-xl ">
            <form onSubmit={callServer}>
              <label className="block mb-6" htmlFor="name">
                <span className="text-primary">Name</span>
                <input
                  required
                  name="name"
                  id="name"
                  type="text"
                  className="
                    block w-full mt-1 border-gray-300
                    rounded-md shadow-sm focus:border-indigo-300
                    focus:ring focus:ring-indigo-200 
                    focus:ring-opacity-50 text-neutral "
                />
              </label>
              <label className="block mb-6" htmlFor="email">
                <span className="text-primary">Email address</span>
                <input
                  required
                  name="email"
                  id="email"
                  type="email"
                  className="
                    block w-full mt-1 border-gray-300 rounded-md
                    shadow-sm focus:border-indigo-300 focus:ring
                    focus:ring-indigo-200 focus:ring-opacity-50
                    text-neutral "
                />
              </label>
              <label className="block mb-6" htmlFor="number">
                <span className="text-primary">Phone Number</span>
                <input
                  required
                  name="number"
                  id="number"
                  type="number"
                  className="
                    block w-full mt-1 border-gray-300 rounded-md
                    shadow-sm focus:border-indigo-300 focus:ring
                    focus:ring-indigo-200 focus:ring-opacity-50
                    text-neutral "
                />
              </label>
              <label className="block mb-6" htmlFor="interest">
                <span className="text-primary">Course of interest</span>
                <select
                  required
                  name="experience"
                  id="interest"
                  className="
                    block w-full mt-1 border-gray-300 rounded-md
                    shadow-sm focus:border-indigo-300 focus:ring
                    focus:ring-indigo-200 focus:ring-opacity-50
                    text-neutral "
                >
                  <option>Select any one</option>
                  <option>Fashion Designing</option>
                  <option>Computer Education</option>
                  <option>Multimedia</option>
                  <option>Spoken English</option>
                  <option>Photography</option>
                  <option>Beautician</option>
                </select>
              </label>
              <label className="block mb-6" htmlFor="description">
                <span className="text-primary">Enquiry description </span>
                <textarea
                  name="message"
                  id="description"
                  className="
                    block w-full mt-1 border-gray-300 rounded-md
                    shadow-sm focus:border-indigo-300 focus:ring
                    focus:ring-indigo-200 focus:ring-opacity-50
                    text-neutral "
                  rows="3"
                ></textarea>
              </label>
              <label className="block mb-6" htmlFor="address">
                <span className="text-primary">Address</span>
                <textarea
                  name="message"
                  id="address"
                  className="
                    block w-full mt-1 border-gray-300 rounded-md
                    shadow-sm focus:border-indigo-300 focus:ring
                    focus:ring-indigo-200 focus:ring-opacity-50
                    text-neutral "
                  rows="3"
                ></textarea>
              </label>
              <div className="mb-6">
                <button
                  type="submit"
                  className="
                    h-10 px-5 text-indigo-100 bg-indigo-700
                    rounded-lg transition-colors duration-150
                    focus:shadow-outline hover:bg-indigo-800 "
                >
                  {status}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
