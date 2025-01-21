import NavBar from "../component/NavBar";
import Footer from "../component/Footer";

const UserDetails = () => {
  return (
    <section className=" w-full h-fit flex flex-col justify-center items-center">
      <div className="w-full ">
        <NavBar />
      </div>
      <div className="w-full  max-w-7xl pr-12 mt-4 h-12  flex justify-end items-center">
        <p className=" font-bold">
          Welcome! <span className=" text-[#DB4444]">Md Rimel</span>
        </p>
      </div>
      <section className="w-1/2 h-fit bg-white  max-h-[600px]  shadow-2xl drop-shadow-lg border-t-2  rounded-lg   flex flex-col px-16 pt-12 mt-4">
        <div className=" w-full ">
          <h1 className="text-xl font-[500] text-[#DB4444] ">
            Edit Your Profile
          </h1>
        </div>
        <div className="w-full h-24 flex mt-4 gap-2">
          <div className="w-full flex">
            <div className="w-1/2 flex flex-col">
              <label htmlFor="FirstName">First Name</label>
              <input
                className=" w-11/12 py-3 pl-4 bg-[#F5F5F5]  outline-none rounded-sm mt-3"
                type="text"
                name="FirstName"
                placeholder="First Name"
                id="FirstName"
              />
            </div>
            <div className="w-1/2  flex flex-col">
              <label htmlFor="LastName">Last Nam</label>
              <input
                className=" w-11/12 py-3 pl-4 bg-[#F5F5F5]  outline-none rounded-sm mt-3"
                type="LastName"
                name="LastName"
                placeholder="Last Name"
                id="LastName"
              />
            </div>
          </div>
        </div>
        <div className="w-full h-24 flex mt-4 gap-2">
          <div className="w-full flex">
            <div className="w-1/2 flex flex-col">
              <label htmlFor="email">Email</label>
              <input
                className=" w-11/12 py-3 pl-4 bg-[#F5F5F5]  outline-none rounded-sm mt-3"
                type="email"
                name="email"
                placeholder="example@gmail.com"
                id="email"
              />
            </div>
            <div className="w-1/2  flex flex-col">
              <label htmlFor="Address">Address</label>
              <input
                className=" w-11/12 py-3 pl-4 bg-[#F5F5F5]  outline-none rounded-sm mt-3"
                type="Address"
                name="Address"
                placeholder="example, 5236, United State"
                id="Address"
              />
            </div>
          </div>
        </div>
        <div>
          <label htmlFor="password">Password Changes</label>
          <input
            className=" w-full py-3 pl-4 bg-[#F5F5F5]  outline-none rounded-sm mt-3"
            type="password"
            name="password"
            placeholder="Password"
            id="password"
          ></input>
          <input
            className=" w-full py-3 pl-4 bg-[#F5F5F5]  outline-none rounded-sm mt-3"
            type="password"
            name="NewPassword"
            placeholder="New Password"
            id="NewPassword"
          ></input>
          <input
            className=" w-full py-3 pl-4 bg-[#F5F5F5]  outline-none rounded-sm mt-3"
            type="password"
            name="ConfirmPassword"
            placeholder="Confirm Password"
            id="ConfirmPassword"
          ></input>
        </div>
        <div className="w-full h-24 flex mt-4 gap-2 justify-end">
          <div className=" w-[40%] h-24 flex   mt-4 gap-2">
            <button className="w-1/3 h-12 px-6 text-[#2C3E50] flex justify-center items-center  text-center  rounded-sm hover:bg-[#dedede]">
              Cancel
            </button>
            <button className="px-4 w-2/3 h-12 bg-[#DB4444] rounded-sm hover:bg-[#d65757] text-white ">
              Save Changes
            </button>
          </div>
        </div>
      </section>
      <div className=" w-full h-fit  bottom-0 mt-32">
        <Footer />
      </div>
    </section>
  );
};

export default UserDetails;
