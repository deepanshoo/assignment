import React from 'react';

const MidContent = () => {
  return (
    <div className="relative isolate overflow-hidden p-2 mx-auto max-w-5xl py-10 px-10 sm:px-10 sm:py-10 rounded-lg">
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="w-full md:w-1/3 lg:w-1/3 text-center md:text-left">
          <h1 className="text-4xl md:text-3xl lg:text-4xl font-bold tracking-tight text-gray-800">EQ beats IQ</h1>
        </div>
        <div className="w-full md:w-1/3 lg:w-1/3 text-center md:text-left mt-8 md:mt-0">
          <p className="text-base md:text-lg lg:text-base font-semibold tracking-tight text-gray-800">Emphasizing emotional intelligence (EQ) over intellectual intelligence (IQ) underscores the significance of understanding for personal and professional success.</p>
        </div>
        <div className="w-full md:w-1/3 lg:w-1/3 text-center md:text-left mt-8 md:mt-0">
          <p className="text-base md:text-lg lg:text-base font-semibold tracking-tight text-gray-800">Emphasizing emotional intelligence (EQ) over intellectual intelligence (IQ) underscores the significance of understanding for personal and professional success.</p>
        </div>
      </div>
    </div>
  );
};

export default MidContent;
