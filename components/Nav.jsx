import Image from "next/image";

export const Nav = () => {
  return (
    <div className="flex justify-center mt-5">
      <Image
        src={"/assets/images/LOGO_HEADER.png"}
        alt="logo"
        width={400}
        height={200}
      />
    </div>
  );
};
