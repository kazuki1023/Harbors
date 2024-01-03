import Image from "next/image";

const LineButtonPresentation = ({ onClick }: { onClick: React.MouseEventHandler<HTMLButtonElement> }) => {
  return (
    <button className="bg-[#00c300] text-white px-4 py-2 rounded-full flex items-center justify-center gap-2" onClick={onClick}>
      <span>
        <Image
          src="/btn_base.png"
          alt="line"
          width={20}
          height={20}
          style={{
            maxWidth: "100%",
            height: "auto"
          }} />
      </span>
      <span>Log in</span>
    </button>
  );
}
export default LineButtonPresentation;
