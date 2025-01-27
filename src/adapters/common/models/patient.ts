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
    },
    gender: {
      type: String,
      enum: ["Male", "Female"],
      required: true,
    },
    contactNumber: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    address: {
      street: {
        type: String,
        required: true,
        trim: true,
      },
      city: {
        type: String,
        required: true,
        trim: true,
      },
      state: {
        type: String,
        required: true,
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
