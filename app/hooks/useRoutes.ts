import { useMemo } from "react";
import { usePathname } from "next/navigation";
import { HiChat } from "react-icons/hi";
import { HiArrowLeftOnRectangle, HiUser } from "react-icons/hi2";
import { signOut } from "next-auth/react";
import useConversation from "./useConversation";

const useRoutes = () => {
  const pathname = usePathname();
  const { conversationId } = useConversation();

  const routes = useMemo(() => [{
    label: 'Chat',
    href: '/coversations',
    icon: HiChat,
    active: pathname === '/conversations' || !!conversationId
  }
  ], [pathname, conversationId]);
};
