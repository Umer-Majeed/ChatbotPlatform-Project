import { LayoutDashboard, MessageSquare, Globe, BarChart3, Settings } from "lucide-react";

export const DASHBOARD_NAV = [
  { label: "Overview", href: "/dashboard", icon: LayoutDashboard },
  { label: "Conversations", href: "/dashboard/conversations", icon: MessageSquare },
  { label: "Knowledge base", href: "/dashboard/knowledge", icon: Globe },
  { label: "Analytics", href: "/dashboard/analytics", icon: BarChart3 },
  { label: "Settings", href: "/dashboard/settings", icon: Settings },
];