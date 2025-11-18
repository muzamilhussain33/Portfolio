import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react'; 
import Sidebar from '../components/admin/Sidebar';
import DashboardHome from '../components/admin/DashboardHome';
import Projects from '../components/admin/Projects';
import Skills from '../components/admin/Skills';
import Experience from '../components/admin/Experience';
import Education from '../components/admin/Education';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard': return <DashboardHome setActiveTab={setActiveTab} />;
      case 'projects': return <Projects />;
      case 'skills': return <Skills />;
      case 'experience': return <Experience />;
      case 'education': return <Education />;
      default: return <DashboardHome setActiveTab={setActiveTab} />;
    }
  };

  // UPDATED FUNCTION: This simply sets the state to 'dashboard'
  const handleGoBack = () => {
    setActiveTab('dashboard');
  };

  return (
    <div className="min-h-screen bg-[#0A0C10] font-sans flex">
      
      {/* Sidebar: Hidden on mobile */}
      <div className="hidden md:block h-screen sticky top-0">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>

      {/* Main Content Area */}
      <main className="flex-1 h-screen overflow-y-auto">
        
        {/* Mobile Header */}
        <div className="md:hidden sticky top-0 z-50 bg-[#0A0C10]/95 backdrop-blur-sm border-b border-[#B0B0B0]/10 p-4 flex items-center justify-between mb-4">
            
            {/* BACK BUTTON: Only shows if we are NOT on the dashboard */}
            <div className="w-10"> {/* Fixed width container for alignment */}
                {activeTab !== 'dashboard' && (
                    <button 
                        onClick={handleGoBack}
                        className="p-2 -ml-2 text-[#B0B0B0] hover:text-[#CDFC31] transition-colors"
                    >
                        <ArrowLeft className="w-6 h-6" />
                    </button>
                )}
            </div>

            <span className="text-white font-bold text-lg">Admin Panel</span>
            
            {/* Spacer to keep title centered */}
            <div className="w-10" /> 
        </div>
        
        {/* Content Wrapper */}
        <div className="p-4 md:p-8 flex justify-center md:block">
            <div className="w-full max-w-2xl md:max-w-none">
                {renderContent()}
            </div>
        </div>

      </main>
    </div>
  );
}