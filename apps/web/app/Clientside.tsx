"use client";

import { useState, useEffect } from "react";
import { trpc } from "./trpc";

export default function Clientside() {
  const [greeting, setGreeting] = useState<string | null>(null);

  useEffect(() => {
    trpc.hello.query({ name: "Client side" }).then((response) => {
      setGreeting(response);
    });
  }, []);

  return <div>Client-side - {greeting}</div>;
}
