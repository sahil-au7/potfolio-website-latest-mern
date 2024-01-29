import React from "react";

function Intro() {
  return (
    <div className="h-[80vh] bg-primary flex flex-col item-start justify-center gap-8 py-10">
      <h1 className="text-white">Hi, I am</h1>
      <h1 className="text-7xl sm:text-3xl text-secondary font-semibold">
        Sahil Yadav
      </h1>
      <h1 className="text-7xl sm:text-3xl text-white font-semibold">
        I build things for the Web.
      </h1>

      <p className="text-white w-2/3">
        I am a full stack Web Developer. Experienced Software Engineer with a
        robust skill set encompassing MEARN, project management, and mastery of
        modern web technologies such as Angular, React, and Node.js. Proficient
        in SQL and MongoDB for effective database management. A strong
        collaborator and problem solver, adept at fostering teamwork and
        delivering user-friendly, visually impressive software solutions.
      </p>

      <button className="border-2 border-tertiary text-tertiary px-10 py-3 rounded w-60 h-14">
        Get Started
      </button>
    </div>
  );
}

export default Intro;
