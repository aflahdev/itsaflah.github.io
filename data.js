const PAGE_DATA = {
  socialPills: [
    {
      href: "https://wa.me/919207460900",
      icon: `<svg width="13" height="13" viewBox="0 0 24 24" fill="#25D366" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path
              d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.117 1.528 5.845L.057 23.571a.75.75 0 0 0 .92.921l5.763-1.47A11.952 11.952 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.896 0-3.674-.523-5.188-1.432l-.372-.22-3.853.983.999-3.825-.242-.383A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
          </svg>`,
      text: "WhatsApp"
    },
    {
      href: "https://www.instagram.com/aflah.msg",
      icon: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#f472b6" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
          </svg>`,
      text: "Instagram"
    },
    {
      href: "https://www.linkedin.com/in/aflahdev",
      icon: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7H10v-7a6 6 0 0 1 6-6z" />
            <rect x="2" y="9" width="4" height="12" />
            <circle cx="4" cy="4" r="2" />
          </svg>`,
      text: "LinkedIn"
    },
    {
      href: "https://github.com/aflahdev",
      icon: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fb923c" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round">
            <path
              d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
          </svg>`,
      text: "GitHub"
    }
  ],

  socialCards: [
    {
      href: "https://www.instagram.com/aflah.msg/",
      delay: "1",
      colorClass: "ic-pink",
      icon: `<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#f472b6"
              stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>`,
      title: "Instagram",
      desc: "@aflah.msg · visual diary",
      badgeClass: "b-live",
      badgeText: "Live"
    },
    {
      href: "https://www.linkedin.com/in/aflahdev",
      delay: "2",
      colorClass: "ic-blue",
      icon: `<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#60a5fa"
              stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7H10v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>`,
      title: "LinkedIn",
      desc: "Professional profile &amp; experience"
    },
    {
      href: "https://wa.me/919207460900",
      delay: "0",
      colorClass: "ic-green",
      icon: `<svg width="19" height="19" viewBox="0 0 24 24" fill="#25D366"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path
                d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.117 1.528 5.845L.057 23.571a.75.75 0 0 0 .92.921l5.763-1.47A11.952 11.952 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.896 0-3.674-.523-5.188-1.432l-.372-.22-3.853.983.999-3.825-.242-.383A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
            </svg>`,
      title: "WhatsApp",
      desc: "+91 9207460900 · chat with me",
      badgeClass: "b-live",
      badgeText: "Live"
    }
  ],

  projectCards: [
    {
      href: "https://smdrive.in/",
      delay: "4",
      ariaLabel: "SMDrive — Premium car reselling platform",
      colorClass: "ic-blue",
      icon: `<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#60a5fa"
              stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/>
              <circle cx="7" cy="17" r="2"/>
              <path d="M9 17h6"/>
              <circle cx="17" cy="17" r="2"/>
            </svg>`,
      title: "SMDrive",
      desc: "Premium car reselling platform",
      badgeClass: "b-live",
      badgeText: "Live"
    },
    {
      href: "https://school.aflah.online/",
      delay: "2",
      ariaLabel: "PPMHSS Kottukkara school website project by Aflah — student web developer from PPMHSS Kondotty",
      colorClass: "ic-yel",
      icon: `<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#fbbf24"
              stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="7" width="18" height="14" />
              <path d="M3 7l9-4 9 4" />
              <line x1="9" y1="21" x2="9" y2="13" />
              <line x1="15" y1="21" x2="15" y2="13" />
              <rect x="9" y="13" width="6" height="8" />
              <line x1="3" y1="7" x2="21" y2="7" />
            </svg>`,
      title: "PPMHSS Kottukkara",
      desc: "School website by Aflah · live concept build for PPMHSS",
      badgeClass: "b-live",
      badgeText: "Live"
    },
    {
      href: "https://foryou.aflah.online/",
      delay: "4",
      ariaLabel: "ForYou — creative JavaScript web project by Aflahdev, a personal interactive surprise app",
      colorClass: "ic-pink",
      icon: `<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#f472b6"
              stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <path
                d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>`,
      title: "ForYou",
      desc: "Creative JS web project · interactive surprise by Aflah 💕",
      badgeClass: "b-new",
      badgeText: "New"
    },
    {
      href: "https://cyberweb.aflah.online/",
      delay: "3",
      ariaLabel: "QUANTUM — cyberpunk web experience and UI experiment by Aflah web developer",
      colorClass: "ic-cyan",
      icon: `<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#22d3ee"
              stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>`,
      title: "QUANTUM",
      desc: "Cyberpunk UI experiment by Aflah · immersive web experience",
      badgeClass: "b-new",
      badgeText: "New"
    },
    {
      href: "https://github.com/aflahdev",
      delay: "2",
      ariaLabel: "Aflahdev on GitHub — open source projects and web development work by Aflah Neerad",
      colorClass: "ic-teal",
      icon: `<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#2dd4bf"
              stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <path
                d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>`,
      title: "GitHub",
      desc: "@aflahdev · open source &amp; web dev projects by Aflah",
      badgeClass: "b-open",
      badgeText: "Open"
    }
  ],

  writingCards: [
    {
      href: "https://rvels.aflah.online/",
      delay: "0",
      ariaLabel: "Aflah's blog — study notes, tech writing, and long-form posts by Aflah Neerad, student developer",
      colorClass: "ic-org",
      icon: `<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#fb923c"
              stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 20h9" />
              <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
            </svg>`,
      title: "Blog",
      desc: "Study notes &amp; tech writing by Aflah · Aflah IoT &amp; web dev",
      badgeClass: "b-new",
      badgeText: "New"
    }
  ]
};
