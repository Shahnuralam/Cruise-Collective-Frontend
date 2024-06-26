import Link from "next/link";

const PrimaryButton = ({ href, btnText }) => {
  return (
    <Link href={href}>
      <button className="bg-cruise w-[200px] h-[50px] text-white  text-xs	 apercu_medium_pro uppercase tracking-[2.4px] leading-4	 hover:underline hover:text-black">
        {btnText}
      </button>
    </Link>
  );
};

export default PrimaryButton;
