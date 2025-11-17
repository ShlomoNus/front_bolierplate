import { DirectionProvider } from "@radix-ui/react-direction";
import { type PropsWithChildren } from "react";

export function RightToLeftProvider({ children }: PropsWithChildren) {
  return <DirectionProvider dir="rtl">{children}</DirectionProvider>;
}
