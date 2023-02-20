"use client";
import Link from "next/link";
import { useEffect } from "react";

export default function Nav() {
  useEffect(() => {
    fetch("/api/hello")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <nav>
      <Link href={"/"}>
        <h1>Send it.</h1>
      </Link>
    </nav>
  );
}
