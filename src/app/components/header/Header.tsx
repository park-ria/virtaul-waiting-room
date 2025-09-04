import Link from "next/link";
import React from "react";

const menuList = [
  {
    name: "프로젝트",
    href: "project",
    subMenu: [
      {
        name: "세그먼트",
        href: "segment",
        subMenu: [
          { name: "모니터링", href: "monitoring" },
          { name: "스케줄러", href: "scheduler" },
          { name: "고급 설정", href: "advanced-settings" },
          { name: "트리거룰 설정", href: "trigger-roules-settings" },
          { name: "대기실 설정", href: "waitingroom-settings" },
        ],
      },
      { name: "로드테스터", href: "loadtester" },
    ],
  },
  {
    name: "대기실",
    href: "waitingroom",
    subMenu: [
      { name: "리스트", href: "list" },
      { name: "모니터링", href: "monitoring" },
    ],
  },
  {
    name: "트리거룰",
    href: "trigger",
    subMenu: [
      { name: "리스트", href: "list" },
      { name: "모니터링", href: "monitoring" },
    ],
  },
  {
    name: "사용자제한",
    href: "limits",
    subMenu: [
      { name: "설정", href: "settings" },
      {
        name: "접속자관리",
        href: "connector-management",
        submenu: [
          { name: "임시차단", href: "temporary-blocking" },
          { name: "차단해제", href: "unblock" },
          { name: "영구차단", href: "permanent-block" },
          { name: "우회", href: "detour" },
        ],
      },
    ],
  },
  { name: "통계", href: "statistics" },
];

export const Header = () => {
  return (
    <div>
      <ul>
        {menuList.map((menu) => (
          <li>
            <Link href={`/${menu.href}`}>{menu.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
