import React from "react";

function about() {
  return (
    <div className="flex justify-center flex-wrap h-auto bg-gray-100">
      <div
        className="w-[70rem] h-[20rem] flex justify-evenly bg-white mt-10 drop-shadow-xl
      rounded-xl p-4 relative sm:flex-col sm:items-center sm:h-[34rem]"
      >
        <div className="w-[30%] flex items-center justify-center border-2 rounded-xl drop-shadow-lg sm:h-[10%] sm:w-full">
          <p>ABOUT ME:</p>
        </div>
        <div className="w-[60%] p-4 flex items-center border-2 rounded-xl drop-shadow-lg sm:h-[80%] sm:w-full">
          <p>
            As a dedicated and motivated full-stack developer, I have honed my
            skills and expertise over the past 1.5 years to become a valuable
            asset in the world of web and software development. My passion for
            coding and problem-solving, combined with my commitment to
            continuous learning, has allowed me to excel in both front-end and
            back-end development, creating seamless and innovative digital
            experiences.
          </p>
        </div>
      </div>
      <div
        className="w-[70rem] h-[20rem] flex justify-evenly bg-white mt-10 drop-shadow-xl
      rounded-xl p-4 right-4 sm:flex-col sm:items-center sm:h-[34rem]"
      >
        <div className="w-[30%] flex items-center justify-center border-2 rounded-xl drop-shadow-lg sm:h-[10%] sm:w-full">
          <p>WORK EXPERIENCE:</p>
        </div>
        <div className="w-[60%] p-4 flex justify-center items-center border-2 rounded-xl drop-shadow-lg sm:h-[80%] sm:w-full">
          <div className="w-[90%]">
            <li className="mb-4">IT Support – JSC Silknet, 2012 – present.</li>
            <li className="mb-4">
              Billing software developer – Desktop app was created in 2008 for
              United Telecom of Georgia with Microsoft Access and Visual Basic.
            </li>
            <li className="mb-4">
              IT Support – United Telecom of Georgia, 2007 – 2012.
            </li>
          </div>
        </div>
        <div />
      </div>

      <div
        className="w-[70rem] h-[20rem] flex justify-evenly bg-white mt-10 drop-shadow-xl
      rounded-xl p-4 relative sm:flex-col sm:items-center sm:h-[34rem]"
      >
        <div className="w-[30%] flex items-center justify-center border-2 rounded-xl drop-shadow-lg sm:h-[10%] sm:w-full">
          <p>EDUCATION:</p>
        </div>
        <div className="w-[60%] p-4 flex justify-center items-center border-2 rounded-xl drop-shadow-lg sm:h-[80%] sm:w-full">
          <div className="w-[90%]">
            <li className="mb-4">
              <span className="font-bold">
                Web development and Computer Science.
              </span>
              <br />
              Self-lerning and skill development (online courses, webinars and
              tutorials, reading and research, online communities, personal
              projects).
              <br />
              2002 - present
            </li>
            <li className="mb-4">
              <span className="font-bold">
                Bachelor's academic Degree with Major in Computer Technologies.
              </span>
              <br />
              Akaki Tsereteli State University, Kutaisi, Georgia
              <br />
              2002 - 2006
            </li>
          </div>
        </div>
      </div>
      <div
        className="w-[70rem] h-[20rem] flex justify-evenly bg-white mt-10 mb-40 drop-shadow-xl
      rounded-xl p-4 relative sm:flex-col sm:items-center sm:h-[34rem] sm:mb-20"
      >
        <div className="w-[30%] flex items-center justify-center border-2 rounded-xl drop-shadow-lg sm:h-[10%] sm:w-full">
          <p>LANGUAGES:</p>
        </div>
        <div className="w-[60%] p-4 flex justify-center items-center border-2 rounded-xl drop-shadow-lg sm:h-[80%] sm:w-full">
          <div className="w-[90%]">
            <li className="mb-4">Georgian – Native</li>
            <li className="mb-4">English – B2</li>
            <li className="mb-4">Russian – B2</li>
          </div>
        </div>
      </div>
    </div>
  );
}

export default about;
