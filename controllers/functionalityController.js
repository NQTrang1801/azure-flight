import Functionality from "../models/functionalityModel.js";
import asyncHandler from "express-async-handler";
import validateMongoDbId from "../utils/validateMongoDbId.js";

// Create a permission
const getAllFunctions = asyncHandler(async (req, res) => {
    try {
        const functions = await Functionality.find();
        res.json(functions);
    } catch (error) {
        throw new Error(error);
    }
});

const getGroupedFunctions = asyncHandler(async (req, res) => {
    try {
        const functions = await Functionality.find();

        // Grouping functionalities based on the last three digits of functionalityCode
        const groupedFunctions = functions.reduce((acc, func) => {
            const lastThreeDigits = func.functionalityCode.slice(-3); // Get last three digits
            const firstThreeDigits = func.functionalityCode.slice(0, 3); // Get first three digits

            if (!acc[lastThreeDigits]) {
                acc[lastThreeDigits] = {};
            }
            if (!acc[lastThreeDigits][firstThreeDigits]) {
                acc[lastThreeDigits][firstThreeDigits] = [];
            }
            acc[lastThreeDigits][firstThreeDigits].push(func);
            return acc;
        }, {});

        res.json(groupedFunctions);
    } catch (error) {
        throw new Error(error);
    }
});

export const functionalityController = { getAllFunctions, getGroupedFunctions };