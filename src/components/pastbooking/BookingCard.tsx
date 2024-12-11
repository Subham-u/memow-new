import React from "react";
// import { format } from "date-fns";
import TrackingStatus from "./TrackingStatus";

interface BookingProps {
  booking: {
    bookingType: string;
    fullName: string;
    userMobileNo: string;
    bookingStatus: string;
    packageType: string;
    bookingDate: string;
    address: string;
    originalPrice: number;
    offeredPrice: number;
  };
}

const BookingCard: React.FC<BookingProps> = ({ booking }) => (
  <div className="bg-white shadow-md rounded-lg p-6 mb-6">
    <div className="flex justify-between items-start mb-4">
      <div>
        <h3 className="text-xl font-semibold">{booking.bookingType}</h3>
        <p>{booking.fullName}</p>
        <p>+{booking.userMobileNo}</p>
      </div>
      <span>{booking.bookingStatus}</span>
    </div>
    <TrackingStatus currentStatus={booking.bookingStatus} />
    <div>
      {/* <p>Booking Date: {format(new Date(booking.bookingDate), "PPP")}</p>
      <p>Address: {booking.address}</p>
      <p>Price: ₹{booking.offeredPrice.toLocaleString()}</p> */}
    </div>
  </div>
);

export default BookingCard;
