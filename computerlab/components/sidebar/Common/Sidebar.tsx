"use client"

import { Nav } from "@/components/ui/sidebar/nav"
import {
  BookText,
  BookUserIcon,
  Computer,
  CreditCard,
  Database,
  Download,
  FlaskConical,
  House,
  Mail,
  Minus,
  Package,
  Receipt,
  Settings,
  Truck,
  Upload,
  Users,
  Component
} from "lucide-react"
import {usePathname} from "next/navigation"
import {  useMemo } from "react"

type SidebarProps = {
    isCollapsed:boolean;
}

const Sidebar = ({isCollapsed}:SidebarProps)=>{
    const pathname = usePathname()
    const links = useMemo(()=>[],[pathname]) //ainda vou acrescentar mais
    return (
    <>
      <Nav
        isCollapsed={isCollapsed}
        links={[
          {
            title: "Menu",  
            href: "/inventory",
            icon: House,
            variant: pathname === "/inventory" ? "default" : "ghost",
          },
          {
            title: "LABS",
            href: "#",
            label: "",
            icon: FlaskConical,
            variant: "ghost",
            dropdownItems: [
              {
                title: "Past LABS",
                href: "/",
                label: "",
                icon: Minus,
                variant: "ghost",
              },
            ],
          },
          {
            title: "Computers",
            href: "#",
            label: "",
            icon: Computer,
            variant: "ghost",
            dropdownItems: [
              {
                title: "List Stock Adjustments",
                href: "/",
                label: "",
                icon: Minus,
                variant: "ghost",
              },
              {
                title: "Add Stock Adjustment",
                href: "/",
                label: "",
                icon: Minus,
                variant: "ghost",
              },
            ],
          },
          {
            title: "Pieces",
            href: "#",
            label: "",
            icon: Component,
            variant: "ghost",
            dropdownItems: [
              {
                title: "CPU",
                href: "/inventory/users",
                label: "",
                icon: Minus,
                variant: pathname === "/inventory/users" ? "default" : "ghost",
              },
              {
                title: "GPU",
                href: "/inventory/roles",
                label: "",
                icon: Minus,
                variant: pathname === "/inventory/roles" ? "default" : "ghost",
              },
              {
                title: "RAM",
                href: "/inventory/roles",
                label: "",
                icon: Minus,
                variant: pathname === "/inventory/roles" ? "default" : "ghost",
              },
              {
                title: "MOTHERBOARD",
                href: "/inventory/roles",
                label: "",
                icon: Minus,
                variant: pathname === "/inventory/roles" ? "default" : "ghost",
              },
              {
                title: "STORAGE",
                href: "/inventory/roles",
                label: "",
                icon: Minus,
                variant: pathname === "/inventory/roles" ? "default" : "ghost",
              },
              {
                title: "PSU",
                href: "/inventory/roles",
                label: "",
                icon: Minus,
                variant: pathname === "/inventory/roles" ? "default" : "ghost",
              },
            ],
          },
          {
            title: "Settings",
            href: "#",
            label: "",
            icon: Settings,
            variant: "ghost",
            dropdownItems: [
              {
                title: "Barcode Settings",
                href: "/",
                label: "",
                icon: Minus,
                variant: "ghost",
              },     
            ],
          },
        ]}
      />
      
    </>
  );
}

export default Sidebar;