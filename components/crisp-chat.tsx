"use client"

import { useEffect } from "react"
import { Crisp } from "crisp-sdk-web";

export const CrispChat  = () => {
    useEffect(() => {
        Crisp.configure("934a77e0-3fc5-4e02-9c23-0220f76314ba");
    }, []);
    return null;
}