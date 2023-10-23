import { FaArrowAltCircleRight } from "react-icons/fa";

const Service = () => {
  return (
    <div className="md:grid grid-cols-2 justify-center items-center gap-5 bg-sky-100 dark:bg-zinc-800 dark:text-white p-10">
      <div>
        <img
          className=" p-5 md:p-0 md:w-[50%] lg:w-[50%] rounded-lg mx-auto shadow-2xl"
          src="https://i.ibb.co/7ky8Pb7/uriel-soberanes-Mx-Vk-WPi-JALs-unsplash.jpg"
          alt=""
        />
      </div>
      <div>
        <h2 className="text-3xl font-bold text-left">
          Our Company Has Best Customer Review
        </h2>
        <ul className="list-disc space-y-5 pl-5">
            <li className="">We Ensure timely responses to customer inquiries and address their
            concerns promptly.</li>
            <li className="">We Offer product demonstrations, if possible, to help customers
            understand how the device works and its key features.</li>
            <li className="">We Clearly explain warranty terms and return policies. Make sure
            customers understand their rights and the process for returning or
            exchanging a product if they encounter issues.</li>
        </ul>
        
      </div>
    </div>
  );
};
export default Service;
