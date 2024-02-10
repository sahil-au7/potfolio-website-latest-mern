import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";

function Contact() {
  const { portfolioData } = useSelector((state) => state.root);
  const { contact } = portfolioData;
  return (
    <div>
      <SectionTitle title="Say Hello" />
      <div className="flex sm:flex-col items-center sm:gap-3 justify-between">
        <div className="flex flex-col gap-1 text-tertiary">
          <p>{"{"}</p>
          {Object.keys(contact).map((item, index) => (
            <p className="ml-5" key={contact?._id + index.toString()}>
              <span>{item}</span> :{" "}
              <span>{contact[item] !== null ? contact[item] : "null"}</span>,
            </p>
          ))}
          <p>{"}"}</p>
        </div>
        <div className="h-[400px]">
          <dotlottie-player
            src="https://lottie.host/bc68a06b-12d1-4a03-836d-e4d5231270f3/i6P4IgO5cZ.json"
            background="transparent"
            speed="0.7"
            autoplay
          ></dotlottie-player>
        </div>
      </div>
    </div>
  );
}

export default Contact;
