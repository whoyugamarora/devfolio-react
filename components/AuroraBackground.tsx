export default function AuroraBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
      {/* Blob 1 — violet depth, top-left */}
      <div style={{
        position:'absolute', borderRadius:'50%', filter:'blur(140px)',
        width:900, height:900, top:-300, left:-300,
        background:'radial-gradient(circle, rgba(120,60,220,0.13), transparent 70%)',
        animation:'blobDrift1 22s ease-in-out infinite',
        willChange:'transform',
      }} />
      {/* Blob 2 — lime depth, bottom-right */}
      <div style={{
        position:'absolute', borderRadius:'50%', filter:'blur(120px)',
        width:700, height:700, bottom:-200, right:-150,
        background:'radial-gradient(circle, rgba(200,255,59,0.07), transparent 70%)',
        animation:'blobDrift2 28s ease-in-out infinite',
        willChange:'transform',
      }} />
      {/* Blob 3 — subtle cyan accent, center */}
      <div style={{
        position:'absolute', borderRadius:'50%', filter:'blur(160px)',
        width:500, height:500, top:'35%', left:'45%',
        background:'radial-gradient(circle, rgba(96,239,255,0.04), transparent 70%)',
        animation:'blobDrift1 35s ease-in-out infinite reverse',
        willChange:'transform',
      }} />
      {/* Grain noise overlay */}
      <div
        className="absolute inset-0 opacity-[0.038] mix-blend-overlay"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundRepeat: 'repeat',
          backgroundSize: '200px 200px',
        }}
      />
    </div>
  )
}
