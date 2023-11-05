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
import { PenSquareIcon } from "lucide-react";

const resources = [
  {
    time: "2023/10/3",
    title: "Mac SAMBA使用方式",
    link: "https://hackmd.io/@ziling/rJArN_ue6",
  },
  {
    time: "2023/10/3",
    title: "Windows SAMBA使用方式",
    link: "https://hackmd.io/@chiuan/BkbBFEFeT",
  },

  {
    time: "2023/10/2",
    title: "ACM server list",
    link: "https://hackmd.io/@acm/Hydrm6mmT",
  },
];
interface Props {}
export function Resource(Props: Props) {
  return (
    <div id="root">
      <div className="flex justify-between border-b-2 mt-4 pl-3">
        <div className="flex items-center p-2">
          <PenSquareIcon size={30} color="#06b6d4" />
          <h2 className="pl-2">ACM資源</h2>
        </div>
      </div>
      <div>
        <Table>
          <TableHeader>
            <TableRow>
              <div className="flex items-center text-gray-400 font-normal text-sm p-0 pl-2 pt-[2px] space-x-[200px]">
                <TableHead>發布時間</TableHead>
                <TableHead>資源標題</TableHead>
              </div>
            </TableRow>
          </TableHeader>
          <TableBody>
            <ScrollArea className="h-32 pl-3">
              {resources.map((item) => (
                <TableRow key={item.title}>
                  <div className="flex items-center space-x-[200px]">
                    <Link href={item.link}>
                      <TableCell className="flex items-center font-medium p-0 ">
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
    </div>
  );
}
