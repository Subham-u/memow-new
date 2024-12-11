// "use client";

// import React, {useState, useEffect} from 'react'
// import Cookies from 'js-cookie';
// import { format } from 'date-fns'
// import { CalendarDays, Clock, MapPin, Package, Phone, Search, Star, User } from "lucide-react"

// const trackingStatuses = [
//     { status: "Initiated", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
//     { status: "Confirmed", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
//     { status: "Assigned", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
//     { status: "Completed", icon: "M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" },
//     { status: "Delivered", icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" }
//   ]
  
//   const TrackingStatus = ({ currentStatus }) => {
//     const [showAll, setShowAll] = useState(false)
//     const [isMobile, setIsMobile] = useState(false)
  
//     useEffect(() => {
//       const checkMobile = () => setIsMobile(window.innerWidth < 640)
//       checkMobile()
//       window.addEventListener('resize', checkMobile)
//       return () => window.removeEventListener('resize', checkMobile)
//     }, [])
  
//     const currentIndex = trackingStatuses.findIndex(s => s.status === currentStatus)
//     const displayedStatuses = isMobile && !showAll
//       ? trackingStatuses.slice(0, Math.max(currentIndex + 1, 2))
//       : trackingStatuses
  
//     return (
//       <div className="mb-6">
//         <h3 className="text-lg font-semibold mb-2">Tracking Status</h3>
//         <div className="flex flex-wrap items-center justify-start gap-2 sm:gap-0 sm:justify-between">
//           {displayedStatuses.map((status, index) => (
//             <div key={status.status} className="flex flex-col items-center w-1/2 sm:w-auto mb-2 sm:mb-0">
//               <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center ${
//                 status.status === 'Initiated' ? 'bg-green-500 text-white' :
//                 index <= currentIndex ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-400'
//               }`}>
//                 <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={status.icon} />
//                 </svg>
//               </div>
//               <div className="w-full sm:w-20 text-center mt-1">
//                 <span className={`text-xs sm:text-sm ${
//                   status.status === 'Initiated' ? 'text-green-500 font-semibold' :
//                   index <= currentIndex ? 'text-blue-500 font-semibold' : 'text-gray-500'
//                 }`}>
//                   {status.status}
//                 </span>
//               </div>
//             </div>
//           ))}
//         </div>
//         {isMobile && currentIndex < trackingStatuses.length - 1 && (
//           <button
//             onClick={() => setShowAll(!showAll)}
//             className="mt-4 text-blue-500 hover:text-blue-700 text-sm font-medium focus:outline-none"
//           >
//             {showAll ? 'View less' : 'View more'}
//           </button>
//         )}
//       </div>
//     )
//   }

//   const BookingCard = ({ booking }) => {
//     return (
//       <div className="grid gap-6">
//       <div className="bg-white shadow-md rounded-lg p-6 mb-6">
//         <div className="flex justify-between items-start mb-4">
//         <div className="space-y-1">
//           <h3 className="text-xl font-semibold">{booking.bookingType}</h3>
//           <div className="text-sm text-gray-500">
//             <div className='flex py-1'>
//             <User className="h-4 w-4" />
//             <span>{booking.fullName}</span>
//             </div>
//             <div className='flex py-1'>
//             <Phone className="h-4 w-4" />
//             <span>+{booking.userMobileNo}</span>
//             </div>
//           </div>
//         </div>
//           {/* <div>
//             <h2 className="text-xl font-semibold text-gray-800">{booking.bookingType}</h2>
//             <p className="text-sm text-gray-600">{booking.fullName}</p>
//             <p className="text-sm text-gray-600">{booking.userEmail}</p>
//             <p className="text-sm text-gray-600">+{booking.userMobileNo}</p>
//           </div> */}
//           <span className="px-2 py-1 text-sm font-semibold bg-green-100 text-green-800 rounded-full mt-2 sm:mt-0">
//             {booking.bookingStatus}
//           </span>
//         </div>
//        <TrackingStatus currentStatus={booking.bookingStatus} />
//        <div className="grid gap-2">
//           {/* <p className="text-gray-700"><span className="font-semibold">Booking Type:</span> {booking.bookingType}</p> */}
//           <div className="flex items-center gap-2 text-sm">
//             <Package className="h-4 w-4 text-gray-400" />
//             <span className="font-medium">{booking.packageType}</span>
//           </div>
//           <div className="flex items-center gap-2 text-sm">
//             <CalendarDays className="h-4 w-4 text-gray-400" />
//             <span>{format(new Date(booking.bookingDate), 'PPP')}</span>
//           </div>
//           <div className="flex items-center gap-2 text-sm">
//             <MapPin className="h-4 w-4 text-gray-400" />
//             <span>{booking.address}</span>
//           </div>
//           <div className="flex items-center gap-2 text-sm">
//             <Star className="h-4 w-4 text-gray-400" />
//             <span>4.5/5 Rating</span>
//           </div>
//           <div className="flex justify-between items-center pt-4 border-t">
//             <div>
//               <p className="text-sm text-gray-500">Original Price</p>
//               <p className="text-lg font-semibold">₹{booking.originalPrice.toLocaleString()}</p>
//             </div>
//             <div className="text-right">
//               <p className="text-sm text-gray-500">Offered Price</p>
//               <p className="text-lg font-semibold text-green-600">₹{booking.offeredPrice.toLocaleString()}</p>
//             </div>
//           </div>
//         </div>
//         <div className="px-1 py-4 bg-gray-50 border-t border-gray-200 flex justify-between">
//           <button className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
//             View Details
//           </button>
//           <button className="px-4 py-2 text-sm font-medium text-blue-500 border border-blue-500 rounded-md hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
//             Contact Customer
//           </button>
//         </div>
//       </div>
//       </div>
//     )
//   }


// const StarRating = ({ rating, setRating }) => {
//     return (
//       <div className="flex">
//         {[1, 2, 3, 4, 5].map((star) => (
//           <button
//             key={star}
//             className={`text-2xl ${star <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
//             onClick={() => setRating(star)}
//           >
//             ★
//           </button>
//         ))}
//       </div>
//     )
//   }  

// const ReviewForm= ({ onSubmit, onCancel }) => {
//     const [rating, setRating] = useState(0)
//     const [comment, setComment] = useState('')
  
//     const handleSubmit = (e) => {
//       e.preventDefault()
//       console.log('Submitted review:', { rating, comment })
//       onSubmit()
//     }
  
//     return (
//       <form onSubmit={handleSubmit} className="mt-4 p-4 border border-gray-200 rounded-lg">
//         <h4 className="text-lg font-semibold mb-2">Write a booking review</h4>
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700 mb-1">Rating</label>
//           <StarRating rating={rating} setRating={setRating} />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-1">
//             Comment
//           </label>
//           <textarea
//             id="comment"
//             rows={4}
//             className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
//             value={comment}
//             onChange={(e) => setComment(e.target.value)}
//             required
//           ></textarea>
//         </div>
//         <div className="flex justify-end space-x-2">
//           <button
//             type="button"
//             onClick={onCancel}
//             className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
//           >
//             Cancel
//           </button>
//           <button
//             type="submit"
//             className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
//           >
//             Submit Review
//           </button>
//         </div>
//       </form>
//     )
//   }
  

// export default function OrderHistory() {
//   const [searchQuery, setSearchQuery] = useState("")
//   const [activeTab, setActiveTab] = useState("past")
//   const [timePeriod, setTimePeriod] = useState("past3months")
//   const [bookingData, setBookingData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [clerkId, setId] = useState(Cookies.get('id'));

//   console.log(clerkId)

//   useEffect(() => {
//     const fetchBookingHistory = async () => {
//       try {
//         const response = await fetch(`https://memow-web-backend-production.up.railway.app/api/v1/booking/get-booking-history/${clerkId}`);
//         if (!response.ok) throw new Error(`Error: ${response.statusText}`);
//         const data = await response.json();
//         setBookingData(data.data);
//       } catch (error) {
//         console.error("Error fetching booking history:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchBookingHistory();
//   }, [clerkId]);

//   console.log(bookingData)

//   const tabs = ["Past Bookings", "Cancelled Bookings"]
//   const timePeriods = [
//     { value: "past3months", label: "past 3 months" },
//     { value: "2024", label: "2024" },
//     { value: "2023", label: "2023" },
//     { value: "2022", label: "2022" },
//   ]

//   return (
//   <div className="container mx-auto p-4 md:p-6 space-y-6 max-w-7xl mt-20">
//       <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
//         <h1 className="text-3xl font-bold tracking-tight">Your Bookings</h1>
//         <div className="w-full md:w-auto flex gap-2">
//           <div className="relative flex-1 md:w-[300px]">
//             <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
//             <input
//               type="text"
//               placeholder="Search bookings..."
//               className="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//             />
//           </div>
//           <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
//             Search
//           </button>
//         </div>
//       </div>

//       <div className="border-b border-gray-200">
//         <nav className="-mb-px flex space-x-8" aria-label="Tabs">
//           <button
//             onClick={() => setActiveTab("past")}
//             className={`${
//               activeTab === "past"
//                 ? "border-blue-500 text-blue-600"
//                 : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
//             } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
//           >
//             Past Bookings
//           </button>
//           <button
//             onClick={() => setActiveTab("cancelled")}
//             className={`${
//               activeTab === "cancelled"
//                 ? "border-blue-500 text-blue-600"
//                 : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
//             } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
//           >
//             Cancelled Bookings
//           </button>
//         </nav>
//       </div>

//       {bookingData.length != 0 && activeTab === "past" ? bookingData.map((booking) => (
//         <BookingCard key={booking._id} booking={booking} />
//       )) : activeTab === "past" ? (
//         <div className="bg-white shadow rounded-lg overflow-hidden">
//           <div className="p-6 text-center">
//             <div className="rounded-full bg-blue-100 p-4 mx-auto w-16 h-16 flex items-center justify-center mb-4">
//               <CalendarDays className="h-8 w-8 text-blue-600" />
//             </div>
//             <h3 className="text-2xl font-semibold tracking-tight mb-2">You have no bookings</h3>
//             <p className="text-gray-500 mb-6">Create your memowries now.</p>
//             <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
//               Book Now
//             </button>
//           </div>
//         </div>
//       ) : activeTab === "cancelled" && (
//         <div className="bg-white shadow rounded-lg overflow-hidden h-60">
//           <div className="p-6 text-center">
//             <div className="rounded-full bg-red-100 p-4 mx-auto w-16 h-16 flex items-center justify-center mb-4">
//               <Clock className="h-8 w-8 text-red-600" />
//             </div>
//             <h3 className="text-2xl font-semibold tracking-tight mb-2">No Cancelled Bookings</h3>
//             <p className="text-gray-500">Your booking history is clear</p>
//           </div>
//         </div>
//       )

//     }
//     </div>
//   )
// }