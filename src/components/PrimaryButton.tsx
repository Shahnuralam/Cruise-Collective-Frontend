import Link from "next/link";

const PrimaryButton = ({href, btnText}) => {
    return (
        <Link href={href}>
        <button className="bg-cruise w-[200px] h-[50px] text-white  text-sm apercu_regular uppercase tracking-[1.54px] hover:underline hover:text-black">
          {btnText}
        </button>
      </Link>
    );
};

export default PrimaryButton;