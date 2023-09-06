import Image from 'next/image';

export default function SideBarIcon({ src }) {
  return (
    <>
      <div className="cursor-pointer mt-2">
        <Image src={src} width={22} height={22} alt="" />
      </div>
    </>
  );
}
