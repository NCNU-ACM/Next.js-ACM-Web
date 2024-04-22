import { Inter } from "next/font/google";
import Link from "next/link";
import * as React from "react";

import {useState, useEffect} from 'react'
import { cn } from "@/lib/utils";
import { GlobeIcon, UsersIcon } from "lucide-react";
import { groups } from "../data/navbar_info";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

interface NavbarProps {}
import Image from "next/image";
import logo from "../../public/logo.ico";
const inter = Inter({ subsets: ["latin"] });

export function Navbar(NavbarProps:NavbarProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
      setMounted(true)
  }, [])
  return (
    mounted &&
    <>
    <time dateTime="2023-11-5" suppressHydrationWarning />
      <header className="fixed top-0 border-2 bg-white z-50">
        <div className="md:flex w-screen h-14 p-6 items-center justify-between">
          <div className="space-x-4 md:flex">
            <Link href="/">
              <div className="space-x-1 flex items-center">
                <Image src={logo} alt="logo" width={60}></Image>
                <h1 className="serif text-2xl font-bold">
                  NCNU ACM
                </h1>
              </div>
            </Link>
          </div>
          
            <NavigationMenu className="mr-[150px]">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>
                    <GlobeIcon className="pr-1" />
                    <h2>小組活動</h2>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid p-3 md:w-[300px] lg:grid-cols-[.75fr_1fr]">
                      { groups.map((component) => (
                        // {<component.icon className="mr-1 w-5 h-5"/>}
                        <ListItem
                          key={component.title}
                          title={component.title}
                          href={component.href}
                          GroupName={component.GroupName}
                          passWD={component.passWD}
                        >
                          {component.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
           
        
        </div>
      </header>
    </>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">& { GroupName: string; passWD: string; } //flag
>(({ className, title, children, GroupName, passWD, ...props }, ref) => {
    const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      event.preventDefault(); // 阻止默認行為，即頁面跳轉
      var myGroup = window.prompt('請輸入小組名稱');
      if( myGroup == '' || myGroup === null){
        alert('沒輸入小組名稱，請重新輸入!');
        return;
      }
      var myPassWD = window.prompt('請輸入密碼');
      if ( myPassWD == '' ||  myPassWD === null ) {
        alert('沒輸入密碼，請重新輸入!');
        return;
      }
      // 檢查帳號和密碼是否正確，這部分你需要根據你的邏輯來實現
      if(GroupName != myGroup){
        alert('帳號錯誤！');
        return;
      }
      if ( passWD === myPassWD ) {
        // 在這裡添加你想要執行的其他操作，比如彈出提示框等等
        alert('登入成功，即將跳轉頁面');
        window.location.href = props.href!;//! 來進行非空斷言
      } else {
        alert('密碼錯誤！');
      }
    };

    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            onClick={handleClick} // 設置點擊事件處理程序
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);

// const ListItem = React.forwardRef<
//   React.ElementRef<"a">,
//   React.ComponentPropsWithoutRef<"a">
// >(({ className, title, children, ...props }, ref) => {
//   return (
//     <li>
//       <NavigationMenuLink asChild>
//         <a
//           onClick={()=>{
//             var myGroup = window.prompt('請輸入帳號');
//             var myPassWD = window.prompt('請輸入密碼');
//             if(myGroup == '' || myPassWD == '' || myGroup === null || myPassWD === null){ 
//               alert('請輸入!') 
//               return;
//             }
//             // TypeScript 的類型錯誤
//             // TypeScript 無法確定用戶輸入的 myGroup 是否與 passWD_table 中的某個屬性名稱相匹配，因此它無法確定 passWD_table[myGroup] 的類型
//             //可以告訴 TypeScript myGroup 的類型是 keyof typeof passWD_table，這樣 TypeScript 就會知道 myGroup 只能是 passWD_table 物件的屬性名稱之一
            
//             if (passWD_table[myGroup as keyof typeof passWD_table] === myPassWD) {
//               //window.location.href = props.href!;//! 來進行非空斷言
//             } else {
//               alert('帳號或密碼錯誤！');
//               props.href = '/';
//             }
//             console.log('this->',props.href);
//           }}
//           //ref={ref}
//           className={cn(
//             "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
//             className
//           )}
//           {...props}
//         >
//           <div className="text-sm font-medium leading-none">{title}</div>
//           <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
//             {children}
//           </p>
//         </a>
//       </NavigationMenuLink>
//     </li>
//   );
// });
ListItem.displayName = "ListItem";
