import React from 'react';
import { LayoutDashboard, FolderGit2, Cpu, Briefcase, GraduationCap, LogOut, ShieldCheck } from 'lucide-react';

export default function Sidebar({ activeTab, setActiveTab }) {
  const menuItems = [
    { id: 'dashboard', label: 'Overview', icon: <LayoutDashboard /> },
    { id: 'projects', label: 'Projects', icon: <FolderGit2 /> },
    { id: 'skills', label: 'Skills', icon: <Cpu /> },
    { id: 'experience', label: 'Experience', icon: <Briefcase /> },
    { id: 'education', label: 'Education', icon: <GraduationCap /> },
  ];

  const handleLogout = () => {
    // Implement logout functionality here
    if(confirm("Are you sure you want to log out?")) {
        localStorage.removeItem('isAdminLoggedIn');
        window.location.reload();
    }
  };

  return (
    <aside className="w-20 lg:w-64 bg-[#16181C] border-r border-[#B0B0B0]/10 hidden md:flex flex-col sticky top-0 h-screen">
      {/* Logo Section */}
      <div className="p-6 flex items-center gap-3">
        <div className="w-8 h-8 bg-[#CDFC31] rounded-lg shadow-[0_0_10px_#CDFC31] flex items-center justify-center text-[#0A0C10]">
            <ShieldCheck className="w-5 h-5" />
        </div>
        <span className="text-white font-bold text-xl hidden lg:block">Admin.</span>
      </div>

      <nav className="flex-1 px-4 py-6 space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200
              ${activeTab === item.id 
                ? 'bg-[#CDFC31] text-[#0A0C10] font-bold shadow-[0_0_15px_rgba(205,252,49,0.3)]' 
                : 'text-[#B0B0B0] hover:bg-[#0A0C10] hover:text-white'
              }`}
          >
            {React.cloneElement(item.icon, { className: "w-5 h-5" })}
            <span className="hidden lg:block">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="p-4">
        <button 
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-400 hover:bg-red-500/10 transition-colors"
        >
          <LogOut className="w-5 h-5" />
          <span className="hidden lg:block">Logout</span>
        </button>
      </div>
    </aside>
  );
}