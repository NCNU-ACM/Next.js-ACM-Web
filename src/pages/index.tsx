
import { Inter } from "next/font/google";
import * as React from "react";
import Link from "next/link";
import {useState, useEffect} from 'react'
import { Navbar } from "@/component/navbar";
import {Photos} from "@/component/photo";
import { Activity } from "@/component/activity";
import { Resource } from "@/component/resource";
import {Announce} from "@/component/announce";
import {Future} from "@/component/future";
 
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
      setMounted(true)
  }, [])
  return (
    mounted &&
    <>
      <Navbar />
      <Photos />
      <Announce />
      <Resource />
      <Activity />
      <Future />
      
    </>
  );
}
