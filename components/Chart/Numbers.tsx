import React from "react";

export default function Numbers(value: number, name: string, emoji: string) {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-row gap5">
        <p>{name}</p>
        <p>{value}</p>
      </div>
      <p>{emoji}</p>
    </div>
  );
}
