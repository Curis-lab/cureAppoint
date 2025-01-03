"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.doctors = exports.specialityData = void 0;
const category_png_1 = __importDefault(require("../assets/category.png"));
const femal_docs_jpeg_1 = __importDefault(require("../assets/doctors/femal_docs.jpeg"));
const maledoctor_png_1 = __importDefault(require("../assets/doctors/maledoctor.png"));
const femal_doc_avif_1 = __importDefault(require("../assets/doctors/femal-doc.avif"));
exports.specialityData = [
    { speciality: "General physician", image: category_png_1.default },
    { speciality: "Gynecologist", image: category_png_1.default },
    { speciality: "Dermotologist", image: category_png_1.default },
    { speciality: "Pediatricians", image: category_png_1.default },
    { speciality: "Neurologist", image: category_png_1.default },
];
exports.doctors = [
    {
        _id: "doc1",
        name: "Dr. Richard James",
        image: maledoctor_png_1.default,
        speciality: "General physician",
        degree: "MBBS",
        experience: "4 years",
        about: "Dr.Dvie have a strong commitment to delivering comperhensive medical car",
        fees: 50,
        address: {
            line1: "17th corss",
            line2: "Cricle, Ring Road, Landon",
        },
    },
    {
        _id: "doc2",
        name: "Dr. Richard James",
        image: femal_doc_avif_1.default,
        speciality: "Gynecologist",
        degree: "MBBS",
        experience: "4 years",
        about: "Dr.Dvie have a strong commitment to delivering comperhensive medical car",
        fees: 50,
        address: {
            line1: "17th corss",
            line2: "Cricle, Ring Road, Landon",
        },
    },
    {
        _id: "doc3",
        name: "Dr. Richard James",
        image: femal_doc_avif_1.default,
        speciality: "General physician",
        degree: "MBBS",
        experience: "4 years",
        about: "Dr.Dvie have a strong commitment to delivering comperhensive medical car",
        fees: 50,
        address: {
            line1: "17th corss",
            line2: "Cricle, Ring Road, Landon",
        },
    },
    {
        _id: "doc4",
        name: "Dr. Richard James",
        image: femal_docs_jpeg_1.default,
        speciality: "Gynecologist",
        degree: "MBBS",
        experience: "4 years",
        about: "Dr.Dvie have a strong commitment to delivering comperhensive medical car",
        fees: 50,
        address: {
            line1: "17th corss",
            line2: "Cricle, Ring Road, Landon",
        },
    },
    {
        _id: "doc5",
        name: "Dr. Richard James",
        image: maledoctor_png_1.default,
        speciality: "General physician",
        degree: "MBBS",
        experience: "4 years",
        about: "Dr.Dvie have a strong commitment to delivering comperhensive medical car",
        fees: 50,
        address: {
            line1: "17th corss",
            line2: "Cricle, Ring Road, Landon",
        },
    },
    {
        _id: "doc6",
        name: "Dr. Richard James",
        image: femal_docs_jpeg_1.default,
        speciality: "Dermotologist",
        degree: "MBBS",
        experience: "4 years",
        about: "Dr.Dvie have a strong commitment to delivering comperhensive medical car",
        fees: 50,
        address: {
            line1: "17th corss",
            line2: "Cricle, Ring Road, Landon",
        },
    },
    {
        _id: "doc7",
        name: "Dr. Richard James",
        image: maledoctor_png_1.default,
        speciality: "General physician",
        degree: "MBBS",
        experience: "4 years",
        about: "Dr.Dvie have a strong commitment to delivering comperhensive medical car",
        fees: 50,
        address: {
            line1: "17th corss",
            line2: "Cricle, Ring Road, Landon",
        },
    },
    {
        _id: "doc8",
        name: "Dr. Richard James",
        image: femal_docs_jpeg_1.default,
        speciality: "General physician",
        degree: "MBBS",
        experience: "4 years",
        about: "Dr.Dvie have a strong commitment to delivering comperhensive medical car",
        fees: 50,
        address: {
            line1: "17th corss",
            line2: "Cricle, Ring Road, Landon",
        },
    },
    {
        _id: "doc9",
        name: "Dr. Richard James",
        image: femal_doc_avif_1.default,
        speciality: "Pediatricians",
        degree: "MBBS",
        experience: "4 years",
        about: "Dr.Dvie have a strong commitment to delivering comperhensive medical car",
        fees: 50,
        address: {
            line1: "17th corss",
            line2: "Cricle, Ring Road, Landon",
        },
    },
    {
        _id: "doc10",
        name: "Dr. Richard James",
        image: femal_docs_jpeg_1.default,
        speciality: "Pediatricians",
        degree: "MBBS",
        experience: "4 years",
        about: "Dr.Dvie have a strong commitment to delivering comperhensive medical car",
        fees: 50,
        address: {
            line1: "17th corss",
            line2: "Cricle, Ring Road, Landon",
        },
    },
];
