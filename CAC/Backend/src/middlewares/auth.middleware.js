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
        const token = req.cookies?.accessToken
        req.header("Authorization")?.replace("Bearer ","");

        console.log(`accessing token ${JSON.stringify(token)}`) // iska log behjo
        console.log(`token type: ${typeof token}`) // iska log behjo

        if (!token) {
            throw new ApiError(401, "Unauthorized request - No token provided");
        }

        // if (typeof token !== "string"  !token.includes('.')) {
        //     throw new ApiError(401, "Invalid token format");
        // }

        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

        const user = await User.findById(decodedToken._id)
            .select("-password -refreshToken");

        if (!user) {
            throw new ApiError(401, "Invalid Access Token");
        }

        req.user = user;
        next();
    } catch (error) {
        throw new ApiError(401, error.message || "Invalid Access Token");
    }
});
