"use client";

import { useState } from "react";
import Header from "@/components/sidebar/Common/Header";
import Sidebar from "@/components/sidebar/Common/Sidebar";
import { ScrollArea } from "@/components/ui/sidebar/scroll-area";
import { cn } from "@/lib/utils";

const HomePage = () => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  return (
    <div className="flex h-screen w-screen overflow-hidden">
      <div
        className={cn(
          "h-screen border-r border-muted transition-all duration-300 ease-in-out",
          isCollapsed ? "w-16" : "w-0 md:w-64"
        )}
      >
        <ScrollArea className="h-[calc(100vh-48px)]">
          <Sidebar isCollapsed={isCollapsed} />
        </ScrollArea>
      </div>

      <div className="flex-1 transition-all duration-300 ease-in-out">
        <Header setIsCollapsed={setIsCollapsed} isCollapsed={isCollapsed} />
        <ScrollArea className="h-[calc(100vh-48px)] p-3">
          {/* conteúdo da home aqui */}
        </ScrollArea>
      </div>
    </div>
  );
};

export default HomePage;