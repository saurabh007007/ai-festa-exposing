import { NextRequest, NextResponse } from "next/server";
export async function POST(req:NextRequest) {
const {messages,model,apikey:apiKeyFromBody,imageDataUrl} = await req.json();
const apikey=apiKeyFromBody || process.env.GEMINI_API_KEY;

}
