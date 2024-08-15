import React from 'react';
import Header from '../../components/Header';

export default function CalendarLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
}