// import { useState, useEffect } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { FaBriefcase, FaDollarSign, FaBox, FaCode, FaFilePdf, FaFileWord, FaFileExcel, FaFile, FaSignOutAlt, FaDownload, FaChevronDown } from 'react-icons/fa'; // Added imports for react-icons

// export default function DocumentDashboard() {
//   const [expandedCategory, setExpandedCategory] = useState(null);
//   const location = useLocation();
//   const navigate = useNavigate();
//   const userData = location.state?.userData;

//   useEffect(() => {
//     if (typeof window !== 'undefined' && window.AOS) {
//       window.AOS.init({
//         duration: 800,
//         once: true,
//       });
//     }
//   }, []);

//   // Mock document data - replace with your API data
//   const documentCategories = {
//     Management: [
//       { id: 1, title: 'File', size: '2.4 MB', date: '2025-12-01', type: 'PDF', url: '#' },
//       { id: 2, title: 'File', size: '1.8 MB', date: '2025-11-28', type: 'PDF', url: '#' },
//       { id: 3, title: 'File', size: '890 KB', date: '2025-11-25', type: 'PDF', url: '#' },
//       { id: 4, title: 'File', size: '1.2 MB', date: '2025-11-20', type: 'PDF', url: '#' },
//     ],
//     Finance: [
//       { id: 5, title: 'File', size: '3.1 MB', date: '2025-12-05', type: 'PDF', url: '#' },
//       { id: 6, title: 'File', size: '2.7 MB', date: '2025-11-30', type: 'PDF', url: '#' },
//       { id: 7, title: 'File', size: '1.5 MB', date: '2025-11-15', type: 'PDF', url: '#' },
//       { id: 8, title: 'File', size: '4.2 MB', date: '2025-11-10', type: 'PDF', url: '#' },
//     ],
//     Product: [
//       { id: 9, title: 'File', size: '3.5 MB', date: '2025-12-03', type: 'PDF', url: '#' },
//       { id: 10, title: 'File', size: '2.1 MB', date: '2025-11-29', type: 'PDF', url: '#' },
//       { id: 11, title: 'File', size: '5.3 MB', date: '2025-11-22', type: 'PDF', url: '#' },
//       { id: 12, title: 'File', size: '8.7 MB', date: '2025-11-18', type: 'PDF', url: '#' },
//     ],
//     Development: [
//       { id: 13, title: 'File', size: '1.9 MB', date: '2025-12-04', type: 'PDF', url: '#' },
//       { id: 14, title: 'File', size: '2.8 MB', date: '2025-11-27', type: 'PDF', url: '#' },
//       { id: 15, title: 'File', size: '1.4 MB', date: '2025-11-24', type: 'PDF', url: '#' },
//       { id: 16, title: 'File', size: '980 KB', date: '2025-11-19', type: 'PDF', url: '#' },
//     ],
//   };

//   const categoryIcons = {
//     Management: (
//       <FaBriefcase className="w-6 h-6" />
//     ),
//     Finance: (
//       <FaDollarSign className="w-6 h-6" />
//     ),
//     Product: (
//       <FaBox className="w-6 h-6" />
//     ),
//     Development: (
//       <FaCode className="w-6 h-6" />
//     ),
//   };

//   const categoryColors = {
//     Management: { bg: 'from-blue-500/20 to-blue-600/20', border: 'border-blue-500/30', text: 'text-blue-400', hover: 'hover:border-blue-400' },
//     Finance: { bg: 'from-green-500/20 to-emerald-600/20', border: 'border-green-500/30', text: 'text-green-400', hover: 'hover:border-green-400' },
//     Product: { bg: 'from-purple-500/20 to-purple-600/20', border: 'border-purple-500/30', text: 'text-purple-400', hover: 'hover:border-purple-400' },
//     Development: { bg: 'from-orange-500/20 to-red-600/20', border: 'border-orange-500/30', text: 'text-orange-400', hover: 'hover:border-orange-400' },
//   };

//   const toggleCategory = (category) => {
//     setExpandedCategory(expandedCategory === category ? null : category);
//   };

//   const getFileIcon = (type) => {
//     switch(type) {
//       case 'PDF':
//         return (
//           <FaFilePdf className="w-8 h-8 text-red-400" />
//         );
//       case 'DOCX':
//         return (
//           <FaFileWord className="w-8 h-8 text-blue-400" />
//         );
//       case 'XLSX':
//         return (
//           <FaFileExcel className="w-8 h-8 text-green-400" />
//         );
//       default:
//         return (
//           <FaFile className="w-8 h-8 text-gray-400" />
//         );
//     }
//   };

//   const handleLogout = () => {
//     navigate('/'); // Redirect to home or login on logout
//   };

//   return (
//     <div className="min-h-screen font-poppins-med bg-slate-950 text-white">
//       {/* Header */}
//       <div className="bg-slate-900 border-b border-slate-800 sticky top-0 z-50">
//         <div className="container mx-auto px-6 py-4 flex items-center justify-between">
//           <div className="flex items-center gap-4">
//             <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg"></div>
//             <div>
//               <h1 className="text-xl font-bold">Document Portal</h1>
//               <p className="text-sm text-slate-400">{userData?.email || 'Guest'}</p> {/* Use userData from state */}
//             </div>
//           </div>
//           <button
//             onClick={handleLogout}
//             className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg transition-colors text-sm flex items-center gap-2"
//           >
//             <FaSignOutAlt className="w-4 h-4" />
//             Sign Out
//           </button>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="container mx-auto px-6 py-8">
//         {/* Welcome Section */}
//         <div className="mb-8">
//           <h2 className="text-3xl font-bold mb-2">Welcome Back!</h2>
//           <p className="text-slate-400">Access your privileged documents below</p>
//         </div>

//         {/* Categories */}
//         <div className="space-y-4">
//           {Object.entries(documentCategories).map(([category, documents]) => {
//             const isExpanded = expandedCategory === category;
//             const colors = categoryColors[category];

//             return (
//               <div key={category} className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
//                 {/* Category Header (Carousel) */}
//                 <button
//                   onClick={() => toggleCategory(category)}
//                   className={`w-full p-6 flex items-center justify-between transition-all ${colors.hover}`}
//                 >
//                   <div className="flex items-center gap-4">
//                     <div className={`w-14 h-14 bg-gradient-to-br ${colors.bg} rounded-xl flex items-center justify-center border ${colors.border}`}>
//                       <span className={colors.text}>
//                         {categoryIcons[category]}
//                       </span>
//                     </div>
//                     <div className="text-left">
//                       <h3 className="text-xl font-bold">{category}</h3>
//                       <p className="text-slate-400 text-sm">{documents.length} documents available</p>
//                     </div>
//                   </div>
//                   <FaChevronDown
//                     className={`w-6 h-6 text-slate-400 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
//                   />
//                 </button>

//                 {/* Document Grid (Expands on click) */}
//                 <div
//                   className={`transition-all duration-500 ease-in-out ${
//                     isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
//                   } overflow-hidden`}
//                 >
//                   <div className="p-6 pt-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                     {documents.map((doc) => (
//                       <a
//                         key={doc.id}
//                         href={doc.url}
//                         className="group bg-slate-800/50 border border-slate-700 hover:border-slate-600 rounded-xl p-4 transition-all hover:scale-105 hover:shadow-lg cursor-pointer"
//                       >
//                         <div className="flex items-start gap-3">
//                           <div className="flex-shrink-0">
//                             {getFileIcon(doc.type)}
//                           </div>
//                           <div className="flex-1 min-w-0">
//                             <h4 className="font-semibold text-white mb-1 truncate group-hover:text-blue-400 transition-colors">
//                               {doc.title}
//                             </h4>
//                             <div className="flex items-center gap-2 text-xs text-slate-400">
//                               <span className="px-2 py-1 bg-slate-700 rounded">{doc.type}</span>
//                               <span>{doc.size}</span>
//                             </div>
//                             <p className="text-xs text-slate-500 mt-2">{doc.date}</p>
//                           </div>
//                           <FaDownload className="w-5 h-5 text-slate-600 group-hover:text-blue-400 transition-colors flex-shrink-0" />
//                         </div>
//                       </a>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }