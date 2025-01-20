import Image from "next/image";
import { Calender } from "./component/Calender";


export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
   <Calender />
   </div>
  );
}
