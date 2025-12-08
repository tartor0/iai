// import { useState, useEffect } from 'react';
// import ProgressForm from '../pages/ProgressForm';
// import DocumentDashboard from '../pages/DocumentDashboard';

// export default function Progress() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [userData, setUserData] = useState(null);
//   const [isChecking, setIsChecking] = useState(true);

//   // Check if user is already authenticated - ONLY ONCE
//   useEffect(() => {
//     const checkAuth = () => {
//       try {
//         const savedAuth = localStorage.getItem('progress_auth');
//         if (savedAuth) {
//           const authData = JSON.parse(savedAuth);
//           setUserData(authData);
//           setIsAuthenticated(true);
//         }
//       } catch (err) {
//         console.error('Error loading saved auth:', err);
//         localStorage.removeItem('progress_auth');
//       } finally {
//         setIsChecking(false);
//       }
//     };

//     checkAuth();
//   }, []);

//   // Handle successful verification
//   const handleVerified = (data) => {
//     setUserData(data);
//     setIsAuthenticated(true);
//     localStorage.setItem('progress_auth', JSON.stringify(data));
//   };

//   // Handle logout
//   const handleLogout = () => {
//     setIsAuthenticated(false);
//     setUserData(null);
//     localStorage.removeItem('progress_auth');
//   };

//   // Show loading while checking auth
//   if (isChecking) {
//     return (
//       <div className="min-h-screen bg-gray-900 flex items-center justify-center">
//         <div className="text-white">Loading...</div>
//       </div>
//     );
//   }

//   if (isAuthenticated && userData) {
//     return <DocumentDashboard userData={userData} onLogout={handleLogout} />;
//   }

//   return <ProgressForm onVerified={handleVerified} />;
// }