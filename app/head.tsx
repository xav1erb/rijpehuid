export default function Head() {
  return (
    <>
      {/* Triple Whale preconnect to improve loading */}
      <link
        rel="preconnect dns-prefetch"
        href="https://api.config-security.com/"
        crossOrigin="anonymous"
      />
      <link
        rel="preconnect dns-prefetch"
        href="https://conf.config-security.com/"
        crossOrigin="anonymous"
      />
    </>
  );
} 