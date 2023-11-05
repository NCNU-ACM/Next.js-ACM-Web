import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area";
import { GrAnnounce } from "react-icons/gr";
interface Props {}
const announce = [
  {
    people: "Web master",
    say: "我有幫新加入的成員在我們的ACM1建立帳號了！這台server是專屬我們ACM會員才可以使用的！",
  },
  {
    people: "Web master",
    say: "(10/8)本週在samba的「推甄相關資料」中新增：1. 畢業生榜單, 2. 112中央大學人工智慧國際碩士學位學程 碩士班甄試/考試專用 考生個人資料審查表範例, 3. 交通大學資訊工程學系推薦信格式",
  },
  {
    people: "Web master",
    say: "(10/13)本週在samba中新增：考古題-「 110年程設資料夾並添加4份小考卷, 2022年SP期中、期末考卷, 110年LISP資料夾並添加109年LISP期中考卷、110年LISP期中考卷, 線代資料夾並添加111年小考卷一份及作業一份、112年期中考卷 」",
  },
  {
    people: "Web master",
    say: "(10/13)本週在samba中新增：ACM小組-已創建各小組的資料夾供各小組自行運用",
  },
  {
    people: "財務長",
    say: "(10/13)本週在samba中新增：1121ACM人員名單與權限與會員繳費狀況到人員名單與財務報告資料夾中, 已新增1112ACM收支表到人員名單與財務報告資料夾中",
  },
  {
    people: "Web master",
    say:"(10/14)本週在samba中新增：考古題 -「 110資網一資料夾並添加期中考卷、期末考卷, 110年TCPIP期中考卷、期末考卷, 110年機率作業一、二、期中考卷、期末考卷, 110年微積分上第一次段考, 110年離散數學第一次期中考、第二次期中考卷、期末考卷, 110程設第一次期中考卷"
  },
  {
    people:"副會長",
    say:"在 Samba 新增了今年舉辦活動的照片：「 2023_03_23 ACM宣傳, 2023_04_16 資安女婕思直播, 2023_04_22 基本網路指令, 2023_04_23 Git 指令, 2023_05_19 會員大會, 2023_07_16 Python 網頁程式設計營, 2023_09_22 期初大會, 2023_09_27 linux 指令教學"
  },
  {
    people:"Server小組的陳郁芳",
    say:"已經將新加入的成員在我們的ACM2建立帳號~"
  },
];
export function Announce(Props: Props) {
  return (
    <>
      <Card className="w-screen h-[400px] bg-orange-100 border-spacing-1">
        <CardHeader>
          <CardTitle className="text-orange-950">ACM公告</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableBody>
              <ScrollArea className="h-[300px] pl-3">
                {announce.map((item) => (
                  <TableRow key={item.say}>
                    <div className="flex items-center space-x-[100px]">
                      <TableCell className="flex items-center font-medium p-0 space-x-2">
                        <GrAnnounce size={20}/>
                        <p className="flex w-[100px]">{item.people}</p>
                      </TableCell>
                      <TableCell>{item.say}</TableCell>
                    </div>
                  </TableRow>
                ))}
              </ScrollArea>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  );
}
