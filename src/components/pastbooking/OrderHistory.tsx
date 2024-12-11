// "use client";

// import React, { useEffect, useState } from "react";
// import BookingCard from "./BookingCard";

// const OrderHistory: React.FC = () => {
//   const [bookings, setBookings] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");

// //   useEffect(() => {
// //     const fetchBookingHistory = async () => {
// //       try {
// //         const response = await fetch(`https://memow-web-backend-production.up.railway.app/api/v1/booking/get-booking-history/${clerkId}`);
// //         if (!response.ok) throw new Error(`Error: ${response.statusText}`);
// //         const data = await response.json();
// //         setBookings(data.data);
// //       } catch (error) {
// //         console.error("Error fetching booking history:", error);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };
// //     fetchBookingHistory();
// //   }, [clerkId]);

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search"
//         value={searchQuery}
//         onChange={(e) => setSearchQuery(e.target.value)}
//       />
//       {bookings.map((booking) => (
//         <BookingCard key={1} booking={booking} />
//       ))}
//     </div>
//   );
// };

// export default OrderHistory;


import { Search } from 'lucide-react'
import { Calendar } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function BookingsPage() {
  return (
    <div className="container mx-auto h-screen p-4 sm:p-6 max-w-5xl">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h1 className="text-2xl font-semibold">Your Bookings</h1>
        <div className="flex w-full sm:w-auto gap-2">
          <Input
            type="search"
            placeholder="Search bookings..."
            className="w-full sm:w-[300px]"
          />
          <Button className="whitespace-nowrap">
            <Search className="w-4 h-4 mr-2 sm:mr-0 sm:hidden" />
            <span>Search</span>
          </Button>
        </div>
      </div>

      <Tabs defaultValue="past" className="w-full">
        <TabsList className="w-full sm:w-auto">
          <TabsTrigger value="past" className="text-blue-600 flex-1 sm:flex-none">Past Bookings</TabsTrigger>
          <TabsTrigger value="cancelled" className="flex-1 sm:flex-none">Cancelled Bookings</TabsTrigger>
        </TabsList>
        <TabsContent value="past" className="mt-6">
          <div className="border rounded-lg p-6 sm:p-12 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4">
              <Calendar className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-xl font-semibold mb-2">You have no bookings</h2>
            <p className="text-gray-500 mb-6">Create your memowries now.</p>
            <Button size="lg">Book Now</Button>
          </div>
        </TabsContent>
        <TabsContent value="cancelled">
          <div className="border rounded-lg p-6 sm:p-12 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4">
              <Calendar className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-xl font-semibold mb-2">You have no cancelled bookings</h2>
            <p className="text-gray-500 mb-6">All your cancelled bookings will appear here.</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

