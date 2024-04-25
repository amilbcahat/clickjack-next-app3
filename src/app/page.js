import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 h-screen items-center justify-center">
      <p className="text-2xl text-bold ">Attack PoC 1</p>
      <iframe
        className="w-[50%] h-[50%]"
        src="https://chatlayer.unbabel.com/auth/login"
      />
    </div>
  );
}
