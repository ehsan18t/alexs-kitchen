import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Icon = ({ icon }: any) => {
  const Icon = icon;
  return (
    <Icon
      className="p-1 transition ease-in-out duration-200 hover:ring-4 hover:ring-secondary hover:bg-primary hover:text-white rounded-full ring-1 ring-primary"
      size={30}
    />
  );
};

export default function Footer() {
  return (
    <div className="h-16 flex justify-between items-center mx-8 border-t-[1px] border-primary">
      <div className="flex gap-4 items-center">
        <img
          src="/logo.svg"
          className="h-10 pr-3 border-r-2 border-primary"
          alt=""
        />
        <div>
          <p className="text-xs font-semibold">© 2024 Alex&apos;s Kitchen</p>
          <p className="text-xs">Powered by Remote Kitchen</p>
        </div>
      </div>
      <div className="flex gap-2 items-center">
        <Icon icon={FaXTwitter} />
        <Icon icon={FaFacebookF} />
        <Icon icon={FaInstagram} />
      </div>
    </div>
  );
}
