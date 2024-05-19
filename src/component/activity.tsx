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
import { SparklesIcon } from "lucide-react";

const activities = [ //備註 : 若時間只剩一週將會移到這邊
  {
    time: "2024/05/18",
    title: "vim交流會",
    link: "", 
  },{
    time: "2024/04/29",
    title: "1122 ACM會員大會",
    link: "https://www.canva.com/design/DAGADVPCw8M/cDGWAyg5vfgLhvFFXOZL9w/view", 
  },
  {
    time: "2024/01/20~01/24",
    title: "高雄女中Flask營隊",
    link: "",
  },
  {
    time: "2023/9/27",
    title: "Linux指令教學",
    link: "https://hackmd.io/@elliefish/SkQLiEsph",
  },
  {
    time: "2023/9/22",
    title: "1121期初大會",
    link: "https://hackmd.io/@y2GeMbPES_WkICCe9gma9w/HkwQQwXp3",
  },

  {
    time: "2023/8/7~8/13",
    title: "RDMA Hackathon",
    link: "https://drive.google.com/drive/folders/1UDsD9h9tOeCBnOWZ09YV1quThMIfxd9C",
  },
  {
    time: "2023/7/16~7/18",
    title: "新竹女中Flask營隊",
    link: "https://hackmd.io/@elliefish/r1MGMj793",
  },
  {
    time: "2023/6/16",
    title: "電影欣賞 - 模仿遊戲",
    link: "https://hackmd.io/@Yukino9126/SJ74TPp-h",
  },
  {
    time: "2023/5/28",
    title: "C.G遊戲設計",
    link: "https://hackmd.io/@Luise/rkaY22aB3",
  },
  {
    time: "2023/5/19",
    title: "1112會員大會",
    link: "https://hackmd.io/@elliefish/H172bNF72",
  },
  {
    time: "2023/4/27",
    title: "ICT Girl's Day",
    link: "https://hackmd.io/@y2GeMbPES_WkICCe9gma9w/Hk75sZD-h",
  },
  {
    time: "2023/4/23",
    title: "Git指令教學",
    link: "https://hackmd.io/@ziling/Bk-Qn2DZ3",
  },
  {
    time: "2023/4/16",
    title: "資安女婕思-資安闖天關直播活動 ",
    link: "https://hackmd.io/@Yukino9126/ByGDnPT-3",
  },
  {
    time: "2023/3/23",
    title: "「ACM」與「GiCS 尋找資安女婕思」宣傳活動 ",
    link: "https://hackmd.io/@Yukino9126/HJV2ldNbh",
  },
];
interface Props {}

export function Activity(Props: Props) {
  return (
    <>
      <div className="flex justify-between border-b-2 mt-4 pl-3">
        <div className="flex items-center p-2">
          <SparklesIcon size={30} color="#fbbf24" />
          <h2 className="pl-2">活動spotlight</h2>
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
            <ScrollArea className="h-56 pl-3">
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
