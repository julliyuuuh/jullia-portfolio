// Device frames for screenshots: a simple browser window and a phone.

export function BrowserFrame({ src, alt, url = "", className = "", loading = "lazy" }) {
  return (
    <div
      className={`overflow-hidden rounded-xl border border-ink/10 bg-paper shadow-[0_30px_60px_-30px_rgba(35,36,58,0.45)] ${className}`}
    >
      <div className="flex items-center gap-3 border-b border-ink/10 bg-paper px-3 py-2">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ec6a5e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#f4bf4f]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#61c554]" />
        </span>
        {url && (
          <span className="mx-auto truncate rounded-md bg-cream px-6 py-0.5 font-mono text-[10px] text-ink-soft">
            {url}
          </span>
        )}
        <span className="w-10" aria-hidden="true" />
      </div>
      <img src={src} alt={alt} loading={loading} className="block w-full" />
    </div>
  );
}

// An iPhone-style frame. The screenshot sits BELOW a status bar (time,
// Dynamic Island, signal, battery), like a real phone, so the island never
// covers the website. Sizes use container units (cqw), so it scales
// perfectly at any width.
export function PhoneFrame({ src, alt, className = "", loading = "lazy" }) {
  return (
    <div className={`@container ${className}`}>
      <div className="rounded-[15cqw] bg-[#1c1c22] p-[2.4cqw] shadow-[0_30px_60px_-25px_rgba(35,36,58,0.55)] ring-1 ring-black/40">
        <div className="relative overflow-hidden rounded-[12.6cqw] bg-paper">
          {/* Status bar: its background is the top edge of the screenshot,
              stretched and blurred, so it always matches the page colour */}
          <div aria-hidden="true" className="relative aspect-[390/50] overflow-hidden">
            <div
              className="absolute -inset-2 blur-[3px]"
              style={{
                backgroundImage: `url(${src})`,
                backgroundSize: "100% 6000%",
                backgroundPosition: "top",
              }}
            />
            <div className="absolute inset-0 flex items-center justify-between px-[8.5cqw] pt-[1.2cqw] text-white mix-blend-difference">
              <span className="w-[16cqw] text-center text-[3.9cqw] font-semibold tracking-tight">9:41</span>
              <span className="flex w-[16cqw] items-center justify-center gap-[1.2cqw]">
                <svg viewBox="0 0 18 12" className="w-[4.4cqw]" fill="currentColor">
                  <rect x="0" y="8" width="3" height="4" rx="1" />
                  <rect x="5" y="5.5" width="3" height="6.5" rx="1" />
                  <rect x="10" y="3" width="3" height="9" rx="1" />
                  <rect x="15" y="0" width="3" height="12" rx="1" />
                </svg>
                <svg viewBox="0 0 16 12" className="w-[4cqw]" fill="currentColor">
                  <path d="M8 2.2c2.4 0 4.6.9 6.3 2.5l1.2-1.3C13.5 1.5 10.9.4 8 .4S2.5 1.5.5 3.4l1.2 1.3C3.4 3.1 5.6 2.2 8 2.2zm0 3.5c1.4 0 2.8.5 3.8 1.5L13 5.9C11.7 4.7 9.9 4 8 4s-3.7.7-5 1.9l1.2 1.3c1-1 2.4-1.5 3.8-1.5zm0 3.4c-.6 0-1.2.2-1.6.6L8 11.6l1.6-1.9c-.4-.4-1-.6-1.6-.6z" />
                </svg>
                <svg viewBox="0 0 26 12" className="w-[6.2cqw]" fill="none">
                  <rect x="0.5" y="0.5" width="22" height="11" rx="3.2" stroke="currentColor" opacity="0.45" />
                  <rect x="2" y="2" width="16" height="8" rx="2" fill="currentColor" />
                  <path d="M24 4.2v3.6c.8-.3 1.3-1 1.3-1.8s-.5-1.5-1.3-1.8z" fill="currentColor" opacity="0.45" />
                </svg>
              </span>
            </div>
            {/* Dynamic Island */}
            <span className="absolute left-1/2 top-[18%] h-[64%] w-[31%] -translate-x-1/2 rounded-full bg-black" />
          </div>

          <img src={src} alt={alt} loading={loading} className="block aspect-[390/844] w-full object-cover object-top" />

          {/* Home indicator */}
          <span
            aria-hidden="true"
            className="absolute bottom-[1.6cqw] left-1/2 h-[1.3cqw] w-[34%] -translate-x-1/2 rounded-full bg-white mix-blend-difference"
          />
        </div>
      </div>
    </div>
  );
}
