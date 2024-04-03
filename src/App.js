import "./App.css";
import mail from "./assets/mail.png";
import phone from "./assets/phone.svg";
import linkedin from "./assets/linkedin.png";
import instagram from "./assets/instagram.png";
import merve from "./assets/merve-unler.png";

function App() {
 let iconClass = "w-[30px] lg:w-[45px] my-[4px] mr-2 lg:mr-4";
 let aClass = "flex items-center justify-center my-1 lg:my-3 cursor-pointer";
 let labelClass = "text-[25px] lg:text-[40px] font-bold";

 return (
  <div className="w-[100%] h-[100vh] bg-black  flex flex-col lg:flex-row items-center justify-center lg:justify-evenly text-[#AC8D4A]">
   <div>
    <img
     alt="Merve Ünler"
     className=" h-[40vh] lg:h-[70vh] rounded-[10px] mt-4 border-solid border-4 border-black drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] blur"
     src={merve}
    />
   </div>
   <div>
    <div>
     <h1 className=" text-center  my-2 text-[30px] lg:text-[45px] font-bold">
      Kardelen YÜKSELL
     </h1>
    </div>
    <div className="flex flex-col items-start justify-center">
     <a className={aClass} href="tel:+90 541 355 08 18">
      <img alt="icon" className={iconClass} src={phone} />
      <label className={labelClass}>+90 541 355 08 18</label>
     </a>
     <a className={aClass} href="mailto:bilgi@ozteknikrekor.com.tr">
      <img alt="icon" className={iconClass} src={mail} />
      <label className={labelClass}>bilgi@ozteknikrekor.com.tr</label>
     </a>
     <a
      className={aClass}
      href="https://www.instagram.com/kardelennmakeup/"
      target="_blank"
     >
      <img alt="icon" className={iconClass} src={instagram} />
      <label className={labelClass}>@kardelennmakeup</label>
     </a>
     <a
      className={aClass}
      href="https://www.linkedin.com/in/merve-%C3%BCnler-yilmaz-1450a7189/"
      target="_blank"
     >
      <img alt="icon" className={iconClass} src={linkedin} />
      <label className={labelClass}>Linkedin Adresim</label>
     </a>
    </div>
   </div>
  </div>
 );
}

export default App;
