// Import necessary modules
import mongoose from 'mongoose';

// Define the Student schema
const studentSchema = new mongoose.Schema({
  _id:{
    type:String,
  },
  studentEnrollmentno: {
    type: String,
  },
  studentRollno: {
    type: String,
  },
  studentName: {
    type: String,
  },
  studentClass: {
    type: String,
  },
  mentorEmpid: {
    type: String,
  },

  studentGender:{
    type:String
  },
  studentEmail:{
    type:String
  },
  studentMobile:{
    type:String
  },
  dateofbirth:{
    type:String
  },
  yearOfAdd:{
    type:String
  },
  placeOfBirth:{
    type:String
  },
  state:{
    type:String
  },
  nationality:{
    type:String
  },
  religion:{
    type:String
  },
  catagory:{
    type:String
  },
  caste:{
    type:String
  },
  fatherName:{
    type:String
  },
              
  fatherOcc:{
    type:String
  },
  fatherPhone:{
    type:String
  },
  motherName:{
    type:String
  },
  motherOcc:{
    type:String
  },
  motherPhone:{
    type:String
  },
  localGuard:{
    type:String
  },
  guardAdd:{
    type:String
  },
  guardPhone:{
    type:String
  },
  guardProfession:{
    type:String
  },
  guardRelation:{
    type:String
  },
  annualIncome:{
    type:String
  },
  presAddress:{
    type:String
  },
  perAddress:{
    type:String
  },

});

// Create the Student model
const Student =  mongoose.models.students || mongoose.model('students', studentSchema);

// Export the Student model
export default Student;
