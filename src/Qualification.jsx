import { IoMdCloseCircleOutline } from "react-icons/io";


const Qualification = ({open, close, theme}) => {
    return (
        <div id="qualification"  className={`${open ? "" : "lg:hidden"} ${theme ? "lg:bg-black lg:bg-opacity-50" : "lg:bg-black lg:bg-opacity-50"} lg:fixed lg:flex items-center justify-center lg:inset-0 lg:w-full lg:h-[100vh] z-50 mt-10 lg:mt-0 pt-24 lg:pt-0 `}>
            <div className={`lg:w-4/5 lg:h-4/5 ${theme ? " lg:bg-[#050318] text-white text-opacity-80 shadow-inner" : "lg:bg-white text-black"} lg:p-5  lg:rounded-lg lg:shadow-inner lg:qualification`}>
                <div className="flex items-center justify-end">
                    <p onClick={()=> {close(false)}} className='hidden lg:inline-block text-3xl cursor-pointer text-end '><IoMdCloseCircleOutline /></p>
                </div>
                <h1 className="mb-4 mt-2 text-center logo-font text-2xl underline">Qualification</h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    <div className="lg:ml-10">
                        <div>
                            <h1 className=" my-5 text-xl font-bold ">Skill</h1>
                            <p className="mb-5 text-[15px5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ipsa distinctio magnam dolorum enim assumenda unde dolor quaerat rem nobis incidunt, a inventore, voluptatem quam veniam totam esse officiis laudantium.</p>
                            <div className="w-full">
                                <p className={`border inline-block mb-3 ${theme ? "border-white" : "border-black"} rounded-lg text-[14px] py-1 px-3 mr-3`}>#javaScript</p>
                                <p className={`border inline-block mb-3 ${theme ? "border-white" : "border-black"} rounded-lg text-[14px] py-1 px-3 mr-3`}>#react</p>
                                <p className={`border inline-block mb-3 ${theme ? "border-white" : "border-black"} rounded-lg text-[14px] py-1 px-3 mr-3`}>#node.js</p>
                                <p className={`border inline-block mb-3 ${theme ? "border-white" : "border-black"} rounded-lg text-[14px] py-1 px-3 mr-3`}>#express.js</p>
                                <p className={`border inline-block mb-3 ${theme ? "border-white" : "border-black"} rounded-lg text-[14px] py-1 px-3 mr-3`}>#mongoDB</p>
                                <p className={`border inline-block mb-3 ${theme ? "border-white" : "border-black"} rounded-lg text-[14px] py-1 px-3 mr-3`}>#html</p>
                                <p className={`border inline-block mb-3 ${theme ? "border-white" : "border-black"} rounded-lg text-[14px] py-1 px-3 mr-3`}>#css</p>
                                <p className={`border inline-block mb-3 ${theme ? "border-white" : "border-black"} rounded-lg text-[14px] py-1 px-3 mr-3`}>#tailwind</p>
                                <p className={`border inline-block mb-3 ${theme ? "border-white" : "border-black"} rounded-lg text-[14px] py-1 px-3 mr-3`}>#git</p>
                                <p className={`border inline-block mb-3 ${theme ? "border-white" : "border-black"} rounded-lg text-[14px] py-1 px-3 mr-3`}>#github</p>
                                <p className={`border inline-block mb-3 ${theme ? "border-white" : "border-black"} rounded-lg text-[14px] py-1 px-3 mr-3`}>#terminal</p>
                                <p className={`border inline-block mb-3 ${theme ? "border-white" : "border-black"} rounded-lg text-[14px] py-1 px-3 mr-3`}>#AI design</p>
                                <p className={`border inline-block mb-3 ${theme ? "border-white" : "border-black"} rounded-lg text-[14px] py-1 px-3 mr-3`}>#figma</p>
                            </div>
                        </div>
                    </div>
                    <div  className="lg:ml-10">
                        <h1 className=" my-5 text-xl font-bold">Education</h1>
                        <div>
                            <div>
                                <h1 className="font-bold mt-3">2022-2023 Full Stack Development Course</h1>
                                <p className="text-[15px]">Industry : Programing Hero</p>
                                <p className="text-[15px]">Website : programing-hero.com</p>
                            </div>
                            <div>
                                <h1 className="font-bold mt-5">2022-2026 BA Honours</h1>
                                <p className="text-[15px]">University : Siddheshwari University</p>
                                <p className="text-[15px]">Subject : Islamic History and Culture</p>
                                <p className="text-[15px]">Study : Running</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Qualification;