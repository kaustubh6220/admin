// pages/student/[empid].ts

// Import necessary modules
import { NextRequest, NextResponse } from 'next/server';
import Student from '@/models/student';
import { connect } from '@/dbconfig/dbconfig';

// Establish database connection
connect();

// Define GET request handler
export async function GET(request:NextRequest) {
  // Use id directly
  // const empid = "MIT001";
  try {
    // Assuming you want to get students whose mentor is the specified empid
    const students = await Student.find({});

    // Respond with student data
    return NextResponse.json({
      message: `Students `,
      data: students,
    });
  } catch (error: any) {
    // Handle errors and respond with an error message
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
