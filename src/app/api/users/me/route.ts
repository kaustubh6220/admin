// Import necessary modules and functions
import { getDataFromToken } from "@/helpers/getDataFromToken";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";
import { connect } from "@/dbconfig/dbconfig";

// Establish database connection
connect();

// Define GET request handler
export async function GET(request: NextRequest) {
    try {
        // Extract user ID from the token
        const userId = await getDataFromToken(request);

        // Fetch user data from the database
        const user = await User.findOne({ _id: userId }).select("-password");

        // Respond with user data
        return NextResponse.json({
            message: "User Found",
            data: user,
        });
    } catch (error: any) {
        // Handle errors and respond with an error message
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
}
