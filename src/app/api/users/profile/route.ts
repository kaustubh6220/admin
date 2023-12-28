
import { connect } from "@/dbconfig/dbconfig";
import User from "@/models/userModel";

export async function fetchUser(userId: string) {
    try {
      connect();
  
      return await User.findOne({ id: userId })
    } catch (error: any) {
      throw new Error(`Failed to fetch user: ${error.message}`);
    }
  }
  