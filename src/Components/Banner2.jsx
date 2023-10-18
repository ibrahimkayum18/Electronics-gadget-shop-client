const Banner2 = () => {
  return (
    <div className="grid grid-cols-3 gap-5">
      <div className="col-span-2">
        <img className="w-full"
          src="https://cdn.pixabay.com/photo/2018/03/04/15/33/drone-3198324_640.jpg"
          alt=""
        />
      </div>
      <div className="grid md:grid-rows-2 lg:grid-cols-1">
        <div className="w-full">
          <img className="w-[350px]" src="https://i.ibb.co/ZJv6PR1/s23.jpg" alt="" />
        </div>
        <div className="w-full">
          <img className="w-[350px]" src="https://i.ibb.co/ZJv6PR1/s23.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner2;
