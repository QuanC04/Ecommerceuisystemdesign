import { ReactNode } from "react";
import { ProfileSidebar } from "../components/ProfileSidebar";

interface ProfileLayoutProps {
  children: ReactNode;
}

export function ProfileLayout({ children }: ProfileLayoutProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <aside className="md:col-span-1">
          <ProfileSidebar />
        </aside>
        <div className="md:col-span-3">{children}</div>
      </div>
    </div>
  );
}
