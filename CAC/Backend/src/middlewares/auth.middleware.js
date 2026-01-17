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
        let token = req.cookies?.accessToken;

        // If no cookie, try header as fallback
        if (!token && req.header("Authorization")?.startsWith("Bearer ")) {
            token = req.header("Authorization").split(" ")[1];
        }

        if (!token) {
            throw new ApiError(401, "Unauthorized request - No token provided");
        }

        if (typeof token !== "string" || !token.includes('.')) {
            throw new ApiError(401, "Invalid token format");
        }

        // Your debug logs here...
        console.log("=== JWT DEBUG ===");
        console.log("Final token value:", token.substring(0, 20) + "..."); // don't log full token in prod
        console.log("Token length:", token.length);

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
