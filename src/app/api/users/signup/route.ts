import { connect } from "@/dbConfig/dbConfig";
import user from "@/models/userModel";
import bcryptjs from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request: NextRequest) {
  try {
    const res = await request.json();
    const { username, email, password } = res;

    // check if user already exist
    const User = await user.findOne({ email });
    if (User) {
      return NextResponse.json(
        { error: "User already exist" },
        { status: 400 }
      );
    }
    // hash password
    const salt = await bcryptjs.genSalt(10);
    const hashPassword = await bcryptjs.hash(password, salt);
    const newUser = new user({
      email,
      password: hashPassword,
      username,
    });

    const saveNewUser = await newUser.save();
    console.log(saveNewUser);
    return NextResponse.json({ message: "User created successful",success:true, saveNewUser });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
