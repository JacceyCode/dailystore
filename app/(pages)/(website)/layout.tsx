import React from "react";
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return <div>{children}</div>;
}
