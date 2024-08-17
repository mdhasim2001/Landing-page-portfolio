

const Input = ({name, type, placeholder, theme}) => {
    return (
        <>
            <input
              className={`w-full mb-5 p-3 ${theme ? "bg-[#050318] border-white" : "border-black" }  outline-none border`}
              type={type} required name={name}
              placeholder={placeholder}
            />
        </>
    );
};

export default Input;