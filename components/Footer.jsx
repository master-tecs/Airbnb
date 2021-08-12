import { GlobeAltIcon, CurrencyDollarIcon } from "@heroicons/react/solid";

function Footer() {
  return (
    <div className="px-32 py-14 bg-gray-100 text-gray-600 mt-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10">
        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="font-bold">ABOUT</h5>
          <p>How Airbnb workd</p>
          <p>News room</p>
          <p>Intestors</p>
          <p>Airbnb Plus</p>
          <p>Airbnb Luxe</p>
        </div>
        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="font-bold">COMMUNITY</h5>
          <p>How Airbnb workd</p>
          <p>News room</p>
          <p>Intestors</p>
          <p>Airbnb Plus</p>
          <p>Airbnb Luxe</p>
        </div>
        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="font-bold">HOST</h5>
          <p>How Airbnb workd</p>
          <p>News room</p>
          <p>Intestors</p>
          <p>Airbnb Plus</p>
          <p>Airbnb Luxe</p>
        </div>
        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="font-bold">SUPPORT</h5>
          <p>How Airbnb workd</p>
          <p>News room</p>
          <p>Intestors</p>
          <p>Airbnb Plus</p>
          <p>Join now</p>
        </div>
      </div>
      <div className="flex items-center justify-between border-t mt-10 pt-5">
        <p>&copy; 2021 Master_tecs</p>
        <div className="flex flex-end items-center space-x-3">
          <p className="flex items-center space-x-1 cursor-pointer">
            <GlobeAltIcon className="h-5 cursor-pointer" />
            English
          </p>
          <p className="flex items-center space-x-1 cursor-pointer">
            <CurrencyDollarIcon className="h-5 cursor-pointer" />
            USD
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
