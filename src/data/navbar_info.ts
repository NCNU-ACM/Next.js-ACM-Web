
export interface Groups {
    title: string,
    href: string,
    description: string,
    GroupName: string,
    passWD: string
}

export interface Remind{
    title: string,
    href: string,
    description:string
}

export const groups:Groups[] = [
    {
      title: "系統網路小組",
      href: "https://hackmd.io/@ncuyvonne/ServerAndNetwork",
      description:
        "",
        GroupName: 'server_network',
        passWD: 'chmodg+rNCNU'
    },
    {
      title: "國際學術小組",
      href: "https://hackmd.io/@pinky3flavors/S1a3O7K-A",
      description:
        "",
        GroupName: 'duolingo',
        passWD: '7777777'
    },
    {
      title: "物聯網小組",
      href: "https://hackmd.io/@Lizta/IoT-0",
      description:
        "",
        GroupName: 'IoT2024',
        passWD: '1205'
    },
    {
      title: "接案小組",
      href: "",
      description:
        "",
        GroupName: '',
        passWD: ''
    },
    {
      title: "熊熊快樂小組",
      href: "https://bear-group-for-ncnu.vercel.app/",
      description:
        "",
        GroupName: 'BGFncnu',
        passWD: 'Keep_It_Up'
    },
  ];
  export const reminds:Remind[] = [
    {
      title: "物件到期提醒",
      href: "/docs/primitives/alert-dialog",
      description:
        "",
    },
    {
      title: "行程提醒",
      href: "/docs/primitives/hover-card",
      description:
        "",
    },
    {
      title: "聯賣敲門提醒",
      href: "/docs/primitives/progress",
      description:
        "",
    },
    {
      title: "升級祝賀",
      href: "/docs/primitives/tabs",
      description:
        "",
    },
    {
      title: "點數兌換",
      href: "/docs/primitives/tooltip",
      description:
        "",
    },
    {
      title: "系統通知",
      href: "/docs/primitives/tooltip",
      description:
        "",
    },
  ];