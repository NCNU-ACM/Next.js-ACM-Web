import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import Link from "next/link";
import { BiTime } from "react-icons/bi";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FaEarthAmericas } from "react-icons/fa6";

const activities = [ 
  {
    time: "2024/06/14",
    title: "主題茶會",
    link: "https://forms.gle/VSwwBaUnaV1tBUSr6",
  },
  {
    time: "2023/11/xx",
    title: "SQLite 指令教學",
    link: "https://hackmd.io/@Luise/SyxYxe56T2",
  },
  {
    time: "2023/12/xx",
    title: "Data Structure",
    link: "https://hackmd.io/@chiuan/Hkdih5Tp2",
  },
  {
    time: "2024/1/xx",
    title: "Python爬蟲",
    link: "https://hackmd.io/@Yukino9126/Hy9fxqapn",
  },
  {
    time: "2024/2/xx",
    title: "LAB sharing",
    link: "https://hackmd.io/@ziling/BycdOZjp3",
  },
];
interface Props {}

export function Future(Props:Props) {
  return (
    <>
      <div className="flex justify-between border-b-2 mt-4 pl-3">
        <div className="flex items-center p-2">
          <FaEarthAmericas size={30} color="#65a30d" />
          <h2 className="pl-2">未來活動</h2>
        </div>
      </div>
      <div>
      <Table>
        <TableHeader>
          <TableRow>
            <div className="flex items-center text-gray-400 font-normal text-sm p-0 pl-2 pt-[2px] space-x-[200px]">
              <TableHead>發布時間</TableHead>
              <TableHead>活動標題</TableHead>
            </div>
          </TableRow>
          </TableHeader>
          <TableBody>
          <ScrollArea className="h-48 pl-3">
            {activities.map((item) => (
              <TableRow key={item.title}>
                <div className="flex items-center space-x-[200px]">
                  <Link href={item.link}>
                    <TableCell className="flex items-center font-medium p-0 w-[130px]">
                      <BiTime />
                      <div className="pl-2">{item.time}</div>
                    </TableCell>
                  </Link>
                  <TableCell>{item.title}</TableCell>
                </div>
              </TableRow>
            ))}
          </ScrollArea>
        </TableBody>
      </Table>
      </div>
    </>
  );
}
