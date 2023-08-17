import { IBreadcrumbItem } from "@/containers/atoms";
import { ISupportItem } from "@/containers/MembersSupport/SupportItem";

// icons
import AccountSettingsIcon from "@/assets/svg/account-settings.svg";
import MailSettingsIcon from "@/assets/svg/mail-settings.svg";
import QuestionsIcon from "@/assets/svg/questions.svg";

export const membersSupportPageBreadcrumb: IBreadcrumbItem[] = [
  {
    uniqueKey: 1,
    title: "Home",
    href: "/",
  },
  {
    uniqueKey: 2,
    title: `FAQs`,
    href: "/faqs",
  },
];

export const membersSupportPageSupportListData: ISupportItem[] = [
  {
    title: "My Account <br /> settings",
    href: "#",
    icon: AccountSettingsIcon,
  },
  {
    title: "Frequently asked <br /> questions",
    href: "#",
    icon: QuestionsIcon,
  },
  {
    title: "Email <br /> questions",
    href: "#",
    icon: MailSettingsIcon,
  },
];
