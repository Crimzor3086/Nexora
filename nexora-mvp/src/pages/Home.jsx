import React from 'react';

const Home = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] text-center bg-background-dark dark:bg-background-dark py-24">
      <h1 className="text-5xl md:text-7xl font-extrabold gold-gradient animate-gradient bg-clip-text text-transparent mb-6">
        Welcome to Nexora
      </h1>
      <p className="text-xl md:text-2xl text-text-secondary-dark dark:text-text-secondary-dark max-w-2xl mb-8">
        The next-gen identity and API platform. Secure. Fast. Beautiful.
      </p>
      <button className="px-8 py-3 rounded-full bg-accent-gold text-black font-semibold shadow-gold hover:bg-accent-hover transition-gold">
        Get Started
      </button>
    </section>
  );
};

export default Home;
