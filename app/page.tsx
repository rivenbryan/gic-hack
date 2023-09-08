"use client"
import Navbar from "@/components/Navbar";
import { supabase } from "@/lib/db";
import { Button, Container, Typography } from "@mui/material";
import Image from "next/image";
import React, { useEffect } from "react";

export default function Home() {

  return (
    <main>
      <Navbar />
    </main>
  );
}
