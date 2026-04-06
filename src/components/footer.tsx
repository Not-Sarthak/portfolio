"use client";

import { useEffect, useState } from "react";

export const Footer = () => {
  const [time, setTime] = useState("");
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const period = hours >= 12 ? "pm" : "am";
      const displayHour = hours % 12 || 12;
      const displayMin = minutes.toString().padStart(2, "0");
      setTime(`${displayHour}:${displayMin}${period}`);

      if (hours >= 5 && hours < 12) setGreeting("Good morning");
      else if (hours >= 12 && hours < 17) setGreeting("Good afternoon");
      else if (hours >= 17 && hours < 21) setGreeting("Good evening");
      else setGreeting("Good night");
    };

    update();
    const interval = setInterval(update, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="mt-12">
      <p className="text-sm text-gray-400 pb-4">
        Feel free to reach out: notsarthakshah [at] gmail [dot] com
      </p>
      <hr className="border-gray-200" />
      <p className="text-sm text-gray-400 py-4">
        It&apos;s {time}. {greeting}.
      </p>
    </footer>
  );
};
