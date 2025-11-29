import Image from "next/image";

export function Hero() {
  return (
    <>
      <Image
        src="/images/avatar.jpeg"
        alt="Avatar"
        width={100}
        height={100}
        className="grayscale mb-2 rounded-sm w-24 h-24 md:w-24 md:h-24 lg:w-[100px] lg:h-[100px]"
      />
      <div className="mb-6">
        <h1 className="text-[1.9rem] sm:text-3xl md:text-4xl lg:text-5xl font-semibold py-1 rounded-sm tracking-wide">
          MIR TAUHIDUL ISLAM
        </h1>
      </div>
    </>
  );
}
