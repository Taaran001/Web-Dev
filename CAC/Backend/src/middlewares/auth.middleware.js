import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken";

// export const verifyJWT = asyncHandler(async (req, _, next) => {
//     try {
//         const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "")
//         console.log(token);


//         ///

//         console.log("Token from cookies:", req.cookies?.accessToken ? "YES" : "NO");
//         console.log(
//             "Token from header:",
//             req.header("Authorization") ? "YES" : "NO"
//         );
//         console.log("Final token:", token ? "Present" : "Missing");
//         console.log("SECRET being used:", process.env.ACCESS_TOKEN_SECRET);
//         if (!token) {
//             throw new ApiError(401, "Unauthorized request");
//         }

//         const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)

//         const user = await User.findById(decodedToken?._id).select("-password -refreshToken")

//         if (!user) {
//             throw new ApiError(401, "Invalid Access Token")
//         }

//         req.user = user
//         next()

//     } catch (error) {
//         throw new ApiError(401, error?.message || "Invalid AccessToken");

//     }

// })



export const verifyJWT = asyncHandler(async (req, _, next) => {
    try {
        // Check cookies first, then Authorization header
        let token = req.cookies?.accessToken;

        if (!token && req.header("Authorization")?.startsWith("Bearer ")) {
            token = req.header("Authorization").split(" ")[1];
        }

        // Validate token
        if (!token || typeof token !== "string") {
            throw new ApiError(401, "Unauthorized request");
        }

        const decodedToken = jwt.verify(
            token,
            process.env.ACCESS_TOKEN_SECRET
        );

        const user = await User.findById(decodedToken._id)
            .select("-password -refreshToken");

        if (!user) {
            throw new ApiError(401, "Invalid Access Token");
        }

        req.user = user;
        next();  // Don't forget this!

    } catch (error) {
        throw new ApiError(401, error.message || "Invalid Access Token");
    }
});
