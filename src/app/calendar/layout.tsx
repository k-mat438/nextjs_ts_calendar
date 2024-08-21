
import React from 'react';

export default function CalendarLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="h-screen flex flex-col">
      {/* <Header /> */}
      <main className="overflow-hidden">{children}</main>
    </div>
  );
}