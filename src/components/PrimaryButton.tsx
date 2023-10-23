import Link from "next/link";

const PrimaryButton = ({href, btnText}) => {
    return (
        <Link href={href}>
        <button className="bg-cruise w-48 h-12 text-white rounded text-xl apercu_medium uppercase hover:underline hover:text-black">
          {btnText}
        </button>
      </Link>
    );
};

export default PrimaryButton;