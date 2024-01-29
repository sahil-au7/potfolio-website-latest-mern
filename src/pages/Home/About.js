import React from "react";
import SectionTitle from "../../components/SectionTitle";

function About() {
  const skills = [
    "Javascript",
    "TypeScript",
    "Angular",
    "Nest.js",
    "React.js",
    "Express.js",
    "MongoDB",
    "HTML",
    "CSS",
    "TailWindCSS",
  ];
  return (
    <div>
      <SectionTitle title="About" />
      <div className="flex w-full item-center sm:flex-col">
        <div className="h-[70vh] w-1/2 sm:w-full">
          <dotlottie-player
            src="https://lottie.host/659f5550-a983-4928-9ed8-b892adcff963/iBCURpQ5ZN.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></dotlottie-player>
        </div>
        <div className="flex flex-col gap-5 w-1/2 sm:w-full">
          <p className="text-white">
            In the second we will convert the static portfolio into the dynamic
            portfolio. Compared to the durartion of first part , the second part
            duration is very high. We will complete the first part of the course
            in almost 2 hours. Then we will work on making the first part
            dynamic. We will use following concepts in second Part.
          </p>
          <p className="text-white">
            In the second we will convert the static portfolio into the dynamic
            portfolio. Compared to the durartion of first part , the second part
            duration is very high. We will complete the first part of the course
            in almost 2 hours. Then we will work on making the first part
            dynamic. We will use following concepts in second Part.
          </p>
        </div>
      </div>
      <div className="py-5">
        <h1 className="text-tertiary text-xl">
          Here are the few technologies I 've been working on recently:
        </h1>
        <div className="flex flex-wrap gap-10 mt-5">
          {skills.map((skill, index) => (
            <div key={index} className="border border-tertiary py-3 px-10">
              <h1 className="text-tertiary">{skill}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
