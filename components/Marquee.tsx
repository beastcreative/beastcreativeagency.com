interface MarqueeProps {
  text: string;
  direction?: 'normal' | 'reverse';
}

export default function Marquee({ text, direction = 'normal' }: MarqueeProps) {
  const trackClass = direction === 'reverse' ? 'marquee-track-reverse' : 'marquee-track';
  const items = Array(20).fill(text);

  return (
    <div style={{ background: '#ff1198', overflow: 'hidden', padding: '18px 0' }}>
      <div className={trackClass} style={{ gap: '48px' }}>
        {items.map((item, i) => (
          <span key={i} style={{
            fontFamily: 'Raleway, sans-serif',
            fontWeight: 700,
            fontSize: '28px',
            textTransform: 'uppercase',
            color: '#000',
            letterSpacing: '0.1em',
            paddingRight: '48px',
            flexShrink: 0,
          }}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
