import { connect } from "@/dbConfig/dbConfig";
import user from "@/models/userModel";
import bcryptjs from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

connect();

export async function POST(request: NextRequest) {
  try {
    const resBody = await request.json();
    const { email, password } = resBody;
    console.log(resBody);

    // check user exist or not
    const foundUser = await user.findOne({ email });
    if (!foundUser) {
      return NextResponse.json(
        { success: false, message: "User does not exist" },
        { status: 404 } // ✅ correct status
      );
    }

    // check user password
    const validatePassword = await bcryptjs.compare(
      password,
      foundUser.password
    );
    if (!validatePassword) {
      return NextResponse.json(
        { success: false, message: "Invalid password" },
        { status: 401 } // ✅ unauthorized
      );
    }

    // create token data
    const tokenData = {
      id: foundUser._id,
      username: foundUser.username,
      email: foundUser.email,
    };

    //  create token
    const token = await jwt.sign(tokenData, process.env.token_secret!, {
      expiresIn: "1h",
    });

    const response = NextResponse.json({
      message: "Login successful",
      success: true,
    });

    // set cookies
    response.cookies.set("token", token, {
      httpOnly: true,
    });

    return response;
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 } // ✅ real server error
    );
  }
}
