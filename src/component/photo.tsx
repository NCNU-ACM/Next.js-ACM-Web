import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Image from "next/image";
import {useState, useEffect} from 'react'
import { Label } from "@/components/ui/label";
import Pic1 from "../../public/宣傳.jpg";
import Pic2 from "../../public/女婕思直播.jpg";
import Pic3 from "../../public/基本網路指令.webp";
import Pic4 from "../../public/git指令.jpg";
import Pic5 from "../../public/竹女.jpg";
import Pic6 from "../../public/會員大會.jpg";
import Pic7 from "../../public/linux指令教學.jpg";
import Pic8 from "../../public/期初大會.jpg";
const photos = [
  {
    pic: Pic1,
    text: "ACM宣傳",
  },
  {
    pic: Pic2,
    text: "資安女婕思決賽直播",
  },
  // {
  //   pic: Pic3,
  //   text: "基本網路指令教學",
  // },
  {
    pic: Pic4,
    text: "git指令教學",
  },
  {
    pic: Pic5,
    text: "新竹女中Flask營隊",
  },
  {
    pic: Pic6,
    text: "會員大會",
  },
  {
    pic: Pic7,
    text: "Linux指令教學",
  },
  {
    pic: Pic8,
    text: "期初大會",
  },
];
interface Props {}

export function Photos(Props:Props) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
      setMounted(true)
  }, [])
  return (
    mounted &&
    <>
      <ScrollArea className="mt-14 h-[350px] w-screen rounded-md p-4 border">
        <div className="flex w-max space-x-4">
          {photos.map((picture) => (
            <div key={picture.text} className="overflow-hidden">
              <Image
                src={picture.pic}
                alt="test"
                className="h-fit w-fit object-cover rounded-md"
                width={300}
                height={400}
                priority={false}
              ></Image>
              <Label className="">{picture.text}</Label>
            </div>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </>
  );
}
