'use client';
import Section from '@/components/draft';
import Test from '@/components/test';

export default function Home() {
  return (
    <>
    <section className="bg-blue-900 min-h-screen">
      секции before
    </section>
      <Test/>
      <section className="relative bg-red-900 min-h-screen z-[49]">
        возможная секция
      </section>
    </>
  )
}
