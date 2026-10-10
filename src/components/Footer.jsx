import Maestro from "../assets/Maestro.svg";
import Mastercard from "../assets/mastercard.svg";
import Visa from "../assets/visa.png";
import Logo from "../assets/logo_new.svg";
import { LuPhoneCall } from "react-icons/lu";
import {
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";
function Footer() {
  const data = [
    { id: 1, name: "Kampaniyalar" },
    { id: 2, name: "Haqqımızda" },
    { id: 3, name: "Mağazalarımız" },
    { id: 4, name: "Korporativ satış" },
    { id: 5, name: "Karyera" },
    { id: 6, name: "Əlaqə" },
  ];

  const dataPerson = [
    { id: 1, name: "Ödəniş şərtləri" },
    { id: 2, name: "Məxfilik siyasəti" },
    { id: 3, name: "Çatdırılma" },
    { id: 4, name: "Geri qaytarılma və dəyişdirilmə" },
    { id: 5, name: "Tez-tez verilən suallar" },
    { id: 6, name: "Bloq" },
  ];
  const dataKey = [
    { id: 1, name: "Adapterlər" },
    { id: 2, name: "Brendlər" },
    { id: 3, name: "Çantalar" },
    { id: 4, name: "Holderlər" },
    { id: 5, name: "Keyslər" },
    { id: 6, name: "Kiçik məişət texnikaları" },
    { id: 7, name: "Qulaqlıqlar" },
    { id: 8, name: "Mikrofonlar" },
    { id: 9, name: "Oyun üçün" },
    { id: 10, name: "Powerbanklar" },
    { id: 11, name: "Səsgücləndiricilər" },
    { id: 12, name: "Siçanlar" },
    { id: 13, name: "Smart saatlar" },
    { id: 14, name: "Tripodlar" },
    { id: 15, name: "USB naqillər" },
    { id: 16, name: "Yaddaş kartları" },
  ];
  const iconSosial = [
    { id: 1, sosial: <FaFacebookF className="text-white text-2xl" /> },
    { id: 2, sosial: <FaInstagram className="text-white text-2xl" /> },
    { id: 3, sosial: <FaLinkedinIn className="text-white text-2xl" /> },
    { id: 4, sosial: <FaYoutube className="text-white text-2xl" /> },
    { id: 5, sosial: <FaTiktok className="text-white text-2xl" /> },
  ];
  return (
    <footer className="bg-gray-100">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-4 md:p-8">
        {/* Şirkət - mobildə 1-ci */}
        <div className="order-1 lg:order-2 ">
          <h2 className="font-semibold text-xl text-[#001623]">Şirkət</h2>
          <ul className="pt-2">
            {data.map((item) => (
              <li
                className="py-1 text-gray-500 cursor-pointer hover:underline"
                key={item.id}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Müştəri üçün - mobildə 2-ci */}
        <div className="order-2 lg:order-3">
          <h2 className="font-semibold text-xl text-[#001623]">Müştəri üçün</h2>
          <ul className="pt-2">
            {dataPerson.map((item) => (
              <li
                className="py-1 text-gray-500 cursor-pointer hover:underline"
                key={item.id}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Logo və Telefon - mobildə 3-cü, desktopda 1-ci */}
        <div className="order-3 lg:order-1 flex flex-col gap-14">
          <img className="w-[180px] hidden lg:block" src={Logo} alt="" />
          <div className="text-gray-500 flex flex-col gap-1">
            <div className="flex items-center gap-2 text-2xl">
              <LuPhoneCall />
              <FaWhatsapp />
            </div>
            <span className="font-semibold text-xl hover:text-blue-500 transition-all duration-300 cursor-pointer">
              +994 51 205 88 88
            </span>
          </div>
        </div>

        {/* Sosial + Abunə - mobildə 4-cü */}
        <div className="order-4 lg:order-4 flex flex-col gap-6 sm:col-span-2 lg:col-span-1">
          <div className="flex flex-col gap-3">
            <h2 className="text-[#001623] text-xl font-semibold">
              Bizi izləyin
            </h2>
            <ul className="flex items-center gap-2">
              {iconSosial.map((item) => (
                <li
                  key={item.id}
                  className="bg-gray-400 rounded-full p-2 hover:bg-[#001623] transition-all duration-200 cursor-pointer"
                >
                  {item.sosial}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-[#001623] text-xl font-semibold">
              Yeniliklərdən xəbər alın
            </h2>
          </div>
        </div>

        {/* Açar sözlər */}
        <div className="order-5 col-span-1 sm:col-span-2 lg:col-span-4 pt-4">
          <ul className="flex items-center flex-wrap gap-x-2 gap-y-1">
            {dataKey.map((item) => (
              <li
                className="py-1 px-2 text-gray-500 cursor-pointer hover:underline border-r border-gray-300 whitespace-nowrap text-sm"
                key={item.id}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Alt hissə */}
      <div className="border-t border-gray-300 px-4 md:px-8 py-4">
        <ul className="flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-gray-600">
          <li className="text-center">
            © 2019-2026 Superfon. Bütün hüquqlar qorunur
          </li>
          <li className="flex items-center gap-3">
            <img className="w-[40px]" src={Visa} alt="Visa" />
            <img className="w-[40px]" src={Mastercard} alt="Mastercard" />
            <img className="w-[40px]" src={Maestro} alt="Maestro" />
          </li>
          <li className="text-center">
            Sayt <span className="font-semibold text-[#001623]">Asildar</span>{" "}
            tərəfindən hazırlandı
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
