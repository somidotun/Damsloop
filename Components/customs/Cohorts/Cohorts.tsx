import React from "react";

const Cohorts = () => {
  return (
    <section
      className="bg-[#FAFAFA] dark:bg-[#15181E] flex 
     flex-col items-center gap-7"
    >
      <h1>Program Cohorts</h1>

      <div
        className="bg-[#FFFFFF] dark:bg-[#0E1115]
         flex flex-col items-center gap-5 rounded-2xl shadow-xl
          dark:shadow-[#231C38] p-8 transition: all 0.3s ease-in-out
          "
      >
        <p
          className="bg-white dark:bg-[#1C182C] text-[#8D52E0] flex justify-center 
          items-center
             rounded-2xl px-2 py-1 w-20 text-sm border border-[#261d48]"
        >
          Cohort 1
        </p>
        <h1>Next cohort starting soon</h1>
        <p>Join the community and get notified about the next cohort launch.</p>
      </div>
    </section>
  );
};

export default Cohorts;
