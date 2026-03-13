import Image from "next/image";

type Props = {
  icon: string;
  alt: string;
  text: string;
};

const AboutProps = ({ icon, alt, text }: Props) => {
  return (
    <div
      className=" flex flex-col gap-3 border  border-gray-500
     py-3 px-4 rounded-lg w-36 items-center dark:shadow-sm dark:shadow-[#6a728244]
      dark:hover:shadow-[#8d52e058] dark:hover:border-[#8d52e058] hover:cursor-default
       hover:border-[#8d52e0] group"
    >
      <Image src={icon} alt={alt} className="h-10 w-10 text-[#19E6C3]" />

      <p className="group-hover:text-[#8d52e0] dark:text-white text-center">
        {text}
      </p>
    </div>
  );
};

export default AboutProps;
