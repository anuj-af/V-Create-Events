"use client";

const whatsappNumber = "917999992961";
const welcomeMessage = "Hi, I'm looking for event planning services and would like to discuss my requirements with V-Create Events. Please let me know how we can proceed.";

export function WhatsappWidget() {
  const href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(welcomeMessage)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-3 rounded-full bg-[#D00000] px-3 py-2 text-sm font-semibold text-white shadow-lg shadow-black/10 transition-transform duration-200 hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      aria-label="Chat with us on WhatsApp"
    >
      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/15">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="h-6 w-6"
        >
          <path
            d="M20.52 3.48A11.77 11.77 0 0 0 12.01 0 12 12 0 0 0 2.1 17.9L0 24l6.28-2.07a12 12 0 0 0 5.72 1.45h.01A12 12 0 0 0 24 11.99a11.77 11.77 0 0 0-3.48-8.51ZM12 21.6a9.65 9.65 0 0 1-4.93-1.35l-.35-.21-3.74 1.23 1.23-3.65-.23-.38a9.6 9.6 0 0 1-1.43-5A9.64 9.64 0 0 1 12 2.4a9.63 9.63 0 0 1 6.81 2.82A9.64 9.64 0 0 1 21.6 12a9.64 9.64 0 0 1-9.6 9.6Zm5.18-7.17c-.28-.14-1.65-.82-1.9-.91s-.44-.14-.62.14-.71.9-.87 1.08-.32.21-.6.07a7.87 7.87 0 0 1-2.32-1.43 8.6 8.6 0 0 1-1.59-1.97c-.17-.3 0-.46.13-.63s.3-.35.44-.52.19-.3.3-.49a.53.53 0 0 0 0-.5c-.08-.14-.61-1.47-.84-2s-.45-.46-.62-.47h-.52a1 1 0 0 0-.73.35 3 3 0 0 0-.93 2.21 5.2 5.2 0 0 0 1.08 2.78 11.84 11.84 0 0 0 4.54 4.08 15.53 15.53 0 0 0 1.54.57 3.7 3.7 0 0 0 1.7.11 2.78 2.78 0 0 0 1.82-1.29 2.23 2.23 0 0 0 .15-1.28c-.06-.11-.25-.17-.53-.31Z"
            fill="currentColor"
          />
        </svg>
      </span>
      <span className="leading-tight">Contact Us</span>
    </a>
  );
}
