"use server";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export async function generateImageai() {
    try {
        const { userId } = await auth(); // ✅ بررسی احراز هویت
        if (!userId) {
            redirect("/"); // 🔴 کاربر لاگین نیست، پس به صفحه ورود هدایت کن
        }

        console.log("✅ User is authenticated:", userId);
        // 🔹 اینجا کد مربوط به تولید تصویر اجرا می‌شود...

    } catch (err) {
        console.error("❌ Authentication error:", err);
        redirect('/login'); // 🛑 اگر خطایی رخ داد، به صفحه ورود هدایت کن
        throw new Error("Failed to authenticate user");
    }
}
