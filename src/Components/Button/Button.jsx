

const Button = ({bntName, tag, icon, download, theme}) => {
    return (
        <div>
            <a href={tag} download={download}>
              <button className={`flex items-center justify-center rounded-full gap-2 uppercase py-2 w-40 text-[14px] border ${theme ? "border-white" : "border-black"}`}>
                {bntName}
                {icon}
              </button>
            </a>
        </div>
    );
};

export default Button;