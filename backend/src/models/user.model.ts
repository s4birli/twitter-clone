import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import config from "config";

export interface UserDocument extends mongoose.Document {
    email: string;
    createdAt: Date;
    updatedAt: Date;
}

const userSchema = new Schema(
    { 
        email: { type: String, required: true, unique: true } 
    }, 
    { 
        timestamps: true 
    }
);

userSchema.pre("save", async function(next: any) {
    let user = this as UserDocument;
    return next()
})

const User = mongoose.model("User", userSchema);
export default User;