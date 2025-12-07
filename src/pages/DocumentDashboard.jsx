import { useState, useEffect } from 'react';

export default function DocumentDashboard({ userData, onLogout }) {
  const [expandedCategory, setExpandedCategory] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.AOS) {
      window.AOS.init({
        duration: 800,
        once: true,
      });
    }
  }, []);

  // Mock document data - replace with your API data
  const documentCategories = {
    Management: [
      { id: 1, title: 'Q4 Strategic Plan', size: '2.4 MB', date: '2025-12-01', type: 'PDF', url: '#' },
      { id: 2, title: 'Team Performance Review', size: '1.8 MB', date: '2025-11-28', type: 'PDF', url: '#' },
      { id: 3, title: 'Company Policy Updates', size: '890 KB', date: '2025-11-25', type: 'PDF', url: '#' },
      { id: 4, title: 'Meeting Minutes Nov 2025', size: '1.2 MB', date: '2025-11-20', type: 'PDF', url: '#' },
    ],
    Finance: [
      { id: 5, title: 'Budget Report 2025', size: '3.1 MB', date: '2025-12-05', type: 'PDF', url: '#' },
      { id: 6, title: 'Q3 Financial Statement', size: '2.7 MB', date: '2025-11-30', type: 'PDF', url: '#' },
      { id: 7, title: 'Investment Portfolio', size: '1.5 MB', date: '2025-11-15', type: 'PDF', url: '#' },
      { id: 8, title: 'Tax Documents 2025', size: '4.2 MB', date: '2025-11-10', type: 'PDF', url: '#' },
    ],
    Product: [
      { id: 9, title: 'Product Roadmap 2026', size: '3.5 MB', date: '2025-12-03', type: 'PDF', url: '#' },
      { id: 10, title: 'Feature Specifications', size: '2.1 MB', date: '2025-11-29', type: 'PDF', url: '#' },
      { id: 11, title: 'User Research Insights', size: '5.3 MB', date: '2025-11-22', type: 'PDF', url: '#' },
      { id: 12, title: 'Design System Guide', size: '8.7 MB', date: '2025-11-18', type: 'PDF', url: '#' },
    ],
    Development: [
      { id: 13, title: 'API Documentation v2.0', size: '1.9 MB', date: '2025-12-04', type: 'PDF', url: '#' },
      { id: 14, title: 'System Architecture', size: '2.8 MB', date: '2025-11-27', type: 'PDF', url: '#' },
      { id: 15, title: 'Security Guidelines', size: '1.4 MB', date: '2025-11-24', type: 'PDF', url: '#' },
      { id: 16, title: 'Code Review Standards', size: '980 KB', date: '2025-11-19', type: 'PDF', url: '#' },
    ],
  };

  const categoryIcons = {
    Management: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    Finance: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    Product: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    Development: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  };

  const categoryColors = {
    Management: { bg: 'from-blue-500/20 to-blue-600/20', border: 'border-blue-500/30', text: 'text-blue-400', hover: 'hover:border-blue-400' },
    Finance: { bg: 'from-green-500/20 to-emerald-600/20', border: 'border-green-500/30', text: 'text-green-400', hover: 'hover:border-green-400' },
    Product: { bg: 'from-purple-500/20 to-purple-600/20', border: 'border-purple-500/30', text: 'text-purple-400', hover: 'hover:border-purple-400' },
    Development: { bg: 'from-orange-500/20 to-red-600/20', border: 'border-orange-500/30', text: 'text-orange-400', hover: 'hover:border-orange-400' },
  };

  const toggleCategory = (category) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  const getFileIcon = (type) => {
    switch(type) {
      case 'PDF':
        return (
          <svg className="w-8 h-8 text-red-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
          </svg>
        );
      case 'DOCX':
        return (
          <svg className="w-8 h-8 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
          </svg>
        );
      case 'XLSX':
        return (
          <svg className="w-8 h-8 text-green-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
          </svg>
        );
      default:
        return (
          <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
          </svg>
        );
    }
  };

  return (
    <div className="min-h-screen font-poppins-med bg-slate-950 text-white">
      {/* Header */}
      <div className="bg-slate-900 border-b border-slate-800 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg"></div>
            <div>
              <h1 className="text-xl font-bold">Document Portal</h1>
              <p className="text-sm text-slate-400">{userData.email}</p>
            </div>
          </div>
          <button
            onClick={onLogout}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg transition-colors text-sm flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            Sign Out
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Welcome Back!</h2>
          <p className="text-slate-400">Access your privileged documents below</p>
        </div>

        {/* Categories */}
        <div className="space-y-4">
          {Object.entries(documentCategories).map(([category, documents]) => {
            const isExpanded = expandedCategory === category;
            const colors = categoryColors[category];

            return (
              <div key={category} className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
                {/* Category Header (Carousel) */}
                <button
                  onClick={() => toggleCategory(category)}
                  className={`w-full p-6 flex items-center justify-between transition-all ${colors.hover}`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 bg-gradient-to-br ${colors.bg} rounded-xl flex items-center justify-center border ${colors.border}`}>
                      <span className={colors.text}>
                        {categoryIcons[category]}
                      </span>
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl font-bold">{category}</h3>
                      <p className="text-slate-400 text-sm">{documents.length} documents available</p>
                    </div>
                  </div>
                  <svg
                    className={`w-6 h-6 text-slate-400 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Document Grid (Expands on click) */}
                <div
                  className={`transition-all duration-500 ease-in-out ${
                    isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                  } overflow-hidden`}
                >
                  <div className="p-6 pt-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {documents.map((doc) => (
                      <a
                        key={doc.id}
                        href={doc.url}
                        className="group bg-slate-800/50 border border-slate-700 hover:border-slate-600 rounded-xl p-4 transition-all hover:scale-105 hover:shadow-lg cursor-pointer"
                      >
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0">
                            {getFileIcon(doc.type)}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-semibold text-white mb-1 truncate group-hover:text-blue-400 transition-colors">
                              {doc.title}
                            </h4>
                            <div className="flex items-center gap-2 text-xs text-slate-400">
                              <span className="px-2 py-1 bg-slate-700 rounded">{doc.type}</span>
                              <span>{doc.size}</span>
                            </div>
                            <p className="text-xs text-slate-500 mt-2">{doc.date}</p>
                          </div>
                          <svg className="w-5 h-5 text-slate-600 group-hover:text-blue-400 transition-colors flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                          </svg>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}