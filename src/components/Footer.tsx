import Image from "next/image";
import logo from "@/assets/logo.png";
import telegram from "@/assets/telegram.svg";
import instagram from "@/assets/instagram.svg";
import aparat from "@/assets/aparat.svg";

const Footer = () => {
  return (
    <div className="bg-white">
      <div className="my-container py-10 space-y-10">
        <div className="flex flex-col sm:flex-row space-y-10 sm:space-y-0 justify-between items-center">
          <div>
            <Image src={logo} alt="logo" />
          </div>
          <div className="font-light text-slate-800">
            <p>تمامی حقوق این وب‌سایت متعلق به شرکت</p>
            <p>
              {" "}
              <span className="text-black">
                آرمان تدبیر اطلس 1398-1400
              </span>{" "}
              می‌باشد
            </p>
          </div>
          <div>
            <p className="text-slate-800 font-light">
              لیا را در شبکه‌های اجتماعی دنبال کنید
            </p>
            <div className="flex justify-between items-center mt-4">
              <Image src={aparat} alt="icon" />
              <Image src={telegram} alt="icon" />
              <Image src={instagram} alt="icon" />
            </div>
          </div>
        </div>

        <div className="w-full h-[2px] rounded-xl bg-slate-200"></div>

        <div className="flex flex-col sm:flex-row space-y-10 sm:space-y-0 justify-between items-center">
          <p className="text-sm text-gray-500">
            این شرکت هیچگونه وابستگی به ارگانها و نهادهای دولتی ، غیر دولتی و
            امنیتی ندارد.
          </p>
          <p className="text-sm text-gray-500">
            شماره واحد بازرسی و نظارت بر واحد بازاریابی شبکه‌ای : 26421289-021 و
            26421197-021
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
