"use client";

import React from "react";
import axios from "axios";

const page = () => {
  // const [Message, setMessage] = React.useState("");
  // const [Name, setName] = React.useState("");
  // const [Email, setEmail] = React.useState("");
  // const [Topic, setTopic] = React.useState("");

  // const postData = {
  //   name: Name,
  //   email: Email,
  //   topic: Topic,
  //   message: Message,
  // };

  // const getDataFenil = async () => {
  //   axios
  //     .post("http://localhost:5000/contact", postData)
  //     .then((response) => {
  //       console.log(response);
  //       alert("Data Added Successfully");
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       alert(error);
  //     });
  // };

  return (
    <div className="bg-[#0A0A0B]">
      <div className="container mx-auto">
        <h1 className="text-7xl py-10">Contact Me...</h1>
        <div className=" bg-[#0c0c0e] shadow-xl shadow-white pb-10 p-5 rounded-xl text-black">
          <form>
            {/* <div className="flex flex-col">
              <label htmlFor="name" className="text-white  text-xl my-2 mt-5">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={Name}
                onChange={(e) => setName(e.target.value)}
                className="bg-white opacity-100 p-5 rounded-xl text-black shadow-md backdrop-blur-2xl shadow-white"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-white  text-xl my-2 mt-5">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white opacity-100 p-5 rounded-xl text-black shadow-md backdrop-blur-2xl shadow-white"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="topic" className="text-white  text-xl my-2 mt-5">
                Topic
              </label>
              <select className="bg-white opacity-100 shadow-md backdrop-blur-2xl shadow-white cursor-none p-5 pr-10 rounded-xl text-black">
                <option className="px-10 py-5" value="1">
                  Web Development
                </option>
                <option className="px-10 py-5" value="2">
                  Web Design
                </option>
                <option className="px-10 py-5" value="3">
                  Mobile Development
                </option>
                <option className="px-10 py-5" value="4">
                  Mobile Design
                </option>
              </select>
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="message"
                className="text-white  text-xl my-2 mt-5"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                cols={30}
                rows={10}
                value={Message}
                onChange={(e) => setMessage(e.target.value)}
                className="bg-white opacity-100 p-5 rounded-xl text-black shadow-md backdrop-blur-2xl shadow-white"
              ></textarea>
            </div>
            <div className="flex justify-between">
              <button
                type="button"
                onClick={() => getDataFenil()}
                className="bg-black opacity-100 p-5 rounded-xl text-white hover:bg-[#0A0A0B] transition-all duration-200 ease-in-out my-4 hover:text-white"
              >
                Send
              </button>
              <button
                type="reset"
                className="bg-black opacity-100 p-5 rounded-xl text-white hover:bg-[#0A0A0B] transition-all duration-200 ease-in-out my-4 hover:text-white"
              >
                Reset
              </button>
            </div> */}
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSeCHW0VSKxe6quLFm6cgS5lGnRN6-uXSER4ROSOMsGkxZYLQQ/viewform?embedded=true"
              width={"100%"}
              height={1150}
              className="bg-white rounded-xl"
            >
              Loading…
            </iframe>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
