import mongoose from "mongoose";
import { Schema, model, models } from "mongoose";

const bookingSchema = new Schema({
    partners:[{
        type:mongoose.Schema.Types.ObjectId,
    }],
    author: { 
        type: Schema.Types.ObjectId, 
        ref: 'User' 
    },
    bookingDate:{
        type: Date,
        required:true
    },
    firstName:{
        type:String,
        requeired:true
    },
    lastName:{
        type:String,
        requeired:true
    },
    MobileNo:{
        type:Number || String,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
    originalPrice:{
        type:Number || String,
        required:true
    },
    offeredPrice:{
        type:Number || String,
        required:true
    },
    country:{
        type: String,
        required:true
    },
    location:{
        type:{type:String,required:true},
        coordinates:[]
    },
    landmark:{
        type: String,
        required:true
    },
    zipcode:{
        type: String,
        required:true
    },
    bookingInstruction:{
        type: String,
    },
    bookingType:{
        type: String,
        required:true 
    },
    bookingSubType:{
        type:String,
    },
    bookingStatus:{
        type: String,
        required:true,
        default:"Initiated"
    },
    bookingPhotos:[{
        type: String,
    }],
    bookingVideos:[{
        type: String,
    }], 
    paymentStatus:{
        type: String
    },
    paymentDetails:[{
        type: Schema.Types.ObjectId,
        ref: "Payment",
    }],
    hours:{
       type:Number
    },
    ratings:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Rating",
    },
    reasonOfCancellation:{
        type:String
    },
    platformRating:{
        stars :{
            type:Number,
        },
        feedBack: {
            type:String
        }
    },
    },{
        timestamps:true
});

const Booking = models?.Contact || model("Booking", bookingSchema);

export default Booking;