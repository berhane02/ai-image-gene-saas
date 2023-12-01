"use client";


import { useEffect } from "react";
import {Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
    useEffect (() => {
        Crisp.configure
        ("b3f4fb69-9988-4217-80c4-836d00138723");
    }, []);

    return null;
}
