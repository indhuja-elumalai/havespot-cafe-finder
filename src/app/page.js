export default function Page() {
  return (
    <main style={{ padding: '80px 40px', minHeight: '100vh' }}>
      <header style={{ marginBottom: '60px' }}>
        <h1 style={{ fontSize: '4.5rem' }}>havespot.</h1>
        <p style={{
          color: '#174D38',
          fontWeight: '500',
          letterSpacing: '2px',
          fontSize: '0.8rem',
          textTransform: 'uppercase'
        }}>
          the botanical workspace guide
        </p>
      </header>

      <section className="glass-panel" style={{ padding: '40px', maxWidth: '500px' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>find your calm.</h2>
        <p style={{ marginBottom: '30px', opacity: 0.8 }}>
          Discover curated cafes where productivity meets peace.
          Filtered by noise level, light, and aesthetic.
        </p>
        <button className="btn-primary">Explore Map</button>
      </section>
    </main>
  );
}