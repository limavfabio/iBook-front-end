import React from 'react';

const MainHome = () => {
  const products = [
    {
      title: 'vehicle1',
      img: 'https://vespaindia.com/images/classic/vxl_yellow.webp',
      desc: 'blablabal hello world this is vehicle where you can drive into the mood. hahah',
      bgColor: 'lime',
    },
    {
      title: 'vehicle2',
      img: 'https://vespaindia.com/images/classic/vxl_yellow.webp',
      desc: 'blablabal hello world this is vehicle where you can drive into the mood. hahah',
      bgColor: 'gray',
    },
    {
      title: 'vehicle3',
      img: 'https://vespaindia.com/images/classic/vxl_yellow.webp',
      desc: 'blablabal hello world this is vehicle where you can drive into the mood. hahah',
      bgColor: 'green',
    },
  ];
  return (
    <div className="text-center flex flex-col justify-center items-center h-screen w-full mx-auto">
      <h2 className="font-black text-2xl uppercase">Latest Models</h2>
      <p className="text-[#D2D2D2] text-xs font-bold">Please select a vespa model</p>
      <div className="md:flex  gap-5 mt-16 items-center justify-center">
        {products.map((product) => (
          <div key={product.title} className="flex-1">
            <div className=" w-[200px] h-[200px] rounded-full flex justify-center items-center mx-auto ">
              <img src={product.img} alt="img" className="rounded-full" />
            </div>
            <h2 className="my-5  font-bold">{product.title}</h2>
            <p className="text-[#D2D2D2] mb-10">{product.desc}</p>
          </div>
        ))}
        <div className="ml-auto hidden md:block">
          <button type="button" className="bg-[#97BF0F] w-full pl-3 pr-5 lg:pr-8 py-3 rounded-l-full">
            <img width="24" height="24" src="https://img.icons8.com/material-outlined/24/play--v1.png" alt="play--v1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainHome;
