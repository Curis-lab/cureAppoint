import { Schema, model } from "mongoose";

const patientSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    dateOfBirth: {
      type: Date,
      required: true,
      default: Date.now
    },
    gender: {
      type: String,
      enum: ["Male", "Female"],
      required: true,
      default: "Male"
    },
    contactNumber: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    password:{
      type: String,
      required:true
    },
    address: {
      street: {
        type: String,
        required: false,
        trim: true,
      },
      city: {
        type: String,
        required: false,
        trim: true,
      },
      state: {
        type: String,
        required: false,
        trim: true,
      },
      // zipCode: {
      //   type: String,
      //   required: true,
      //   trim: true
      // }
    },
    // medicalHistory: {
    //   type: [String],
    //   default: [],
    // },
    //   appointments: [{
    //     type: Schema.Types.ObjectId,
    //     ref: 'Appointment'
    //   }]
  },
  {
    timestamps: true,
  }
);

const Patient = model("Patient", patientSchema);

export { Patient };
