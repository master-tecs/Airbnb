import Image from "next/image";

function MediumCard({ img, title, description }) {
  return (
    <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
      <div className="relative h-80 w-80">
        <Image src={img} layout="fill" className="rounded-xl" />
      </div>
      <h3 className="text-2xl ml-3">{title}</h3>
      {description && (
        <p className="text-sm text-gray-600 ml-3">
          Online activities hosted by athletes.
        </p>
      )}
    </div>
  );
}

export default MediumCard;
