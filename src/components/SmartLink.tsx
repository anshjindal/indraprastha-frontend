import Link from "next/link";
import { isExternal } from "@/lib/site";

type Props = Omit<React.ComponentProps<"a">, "href"> & { href: string };

export function SmartLink({ href, children, ...rest }: Props) {
  if (isExternal(href)) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} {...rest}>
      {children}
    </Link>
  );
}
