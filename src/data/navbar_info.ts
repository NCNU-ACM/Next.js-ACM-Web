
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
      title: "Web小組",
      href: "https://hackmd.io/@ziling/rJ6JXUnw3",
      description:
        "",
      GroupName: 'web',
      passWD: '1111'
    },
    {
      title: "系統網路小組",
      href: "https://hackmd.io/@ncuyvonne/ServerAndNetwork",
      description:
        "",
        GroupName: 'server_network',
        passWD: 'chmodg+rNCNU'
    },
    {
      title: "競賽小組",
      href: "https://hackmd.io/@Yukino9126/rJ28f6ju3",
      description:
        "",
        GroupName: 'contest',
        passWD: '3333'
    },
    {
      title: "接案小組",
      href: "",
      description:
        "",
        GroupName: 'project',
        passWD: '4444'
    },
    {
      title: "國際學術組",
      href: "https://hackmd.io/@y2GeMbPES_WkICCe9gma9w/SJVybzXLh",
      description:
        "",
        GroupName: 'international',
        passWD: '5555'
    },
    {
      title: "網路技術小組",
      href: "https://hackmd.io/4-bjiy_KTGSd4AoxNimObA?view",
      description:
        "",
        GroupName: 'internat',
        passWD: '6666'
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