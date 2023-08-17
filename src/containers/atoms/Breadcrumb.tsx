import React, { useCallback } from "react";
import ChevronRightIcon from "@/assets/svg/chevron-right.svg";
import Link from "next/link";

export interface IBreadcrumbItem {
  uniqueKey: number | string;
  title: string;
  href: string;
}

export interface IBreadcrumbProps {
  items: IBreadcrumbItem[];
}

export const Breadcrumb: React.FC<IBreadcrumbProps> = (props) => {
  const { items } = props;

  const isLastItem = useCallback(
    (idx: number) => {
      return Boolean(idx + 1 === items.length);
    },
    [items]
  );

  return (
    <div className="flex gap-2 flex-wrap">
      <ul className="flex gap-2 items-center">
        {items.map((item, itemIdx) => (
          <React.Fragment key={`breadcrumb-${item.uniqueKey}-${itemIdx}`}>
            {!isLastItem(itemIdx) && (
              <Link
                href={item.href}
                className="select-none text-lg hover:underline"
              >
                {item.title}
              </Link>
            )}

            {isLastItem(itemIdx) && (
              <p className="text-lg text-[#607b53] text-opacity-90">
                <span>{item.title}</span>
              </p>
            )}

            {!isLastItem(itemIdx) && (
              <ChevronRightIcon
                viewBox="0 0 48 48"
                width="1rem"
                height="1rem"
              />
            )}
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};
