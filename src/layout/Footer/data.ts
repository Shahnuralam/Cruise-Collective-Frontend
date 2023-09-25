import { SocialIcon } from "@/layout/Footer/SocialIcons";
import { IFooterNavItem } from "@/layout/Footer/FooterNav";
//
import InstagramIcon from "@/assets/svg/social-icons/instagram.svg";
import FacebookIcon from "@/assets/svg/social-icons/facebook.svg";
import PinterestIcon from "@/assets/svg/social-icons/pinterest.svg";
import TwitterIcon from "@/assets/svg/social-icons/twitter.svg";
// import RSSIcon from "@/assets/svg/social-icons/rss.svg";

export const socialIcons: SocialIcon[] = [
  {
    id: "si-instagram-1",
    name: "Instagram",
    icon: InstagramIcon,
    href: "https://www.instagram.com/gardens_illustrated",
  },
  {
    id: "si-facebook-1",
    name: "Facebook",
    icon: FacebookIcon,
    href: "https://www.facebook.com/gardensillustrated/",
  },
  {
    id: "si-pinterest-1",
    name: "Pinterest",
    icon: PinterestIcon,
    href: "https://www.pinterest.co.uk/gdnsillustrated",
  },
  {
    id: "si-twitter-1",
    name: "Twitter",
    icon: TwitterIcon,
    href: "https://twitter.com/GdnsIllustrated",
  },
  // {
  //   id: "si-rss-1",
  //   name: "RSS",
  //   icon: RSSIcon,
  //   href: "https://www.gardensillustrated.com/feed",
  // },
];

export const footerNavItems: IFooterNavItem[] = [
  {
    id: "fi-contact-1",
    name: "Contact us",
    href: "/contact",
  },
  {
    id: "fi-about-2",
    name: "About us",
    href: "/about",
  },
  {
    id: "fi-account-3",
    name: "Account settings",
    href: "/account",
  },
  {
    id: "fi-terms&conditions-4",
    name: "Terms & conditions",
    href: "/terms-conditions",
  },
  {
    id: "fi-cruise-search-4",
    name: " Cruise Search",
    href: "/search",
  },

];
