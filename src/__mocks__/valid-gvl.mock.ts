import { Gvl } from "src/types";

export const mockValidGvl: Gvl = {
  gvlSpecificationVersion: 3,
  vendorListVersion: 89,
  tcfPolicyVersion: 5,
  lastUpdated: "2024-01-15T16:00:00Z",
  purposes: {
    1: {
      id: 1,
      name: "Store and/or access information on a device",
      description:
        "Cookies, device or similar online identifiers (e.g. login-based identifiers, randomly assigned identifiers, network based identifiers) together with other information (e.g. browser type and information, language, screen size, supported technologies etc.) can be stored or read on your device to recognise it each time it connects to an app or to a website, for one or several of the purposes presented here.",
      illustrations: [
        "Most purposes explained in this notice rely on the storage or accessing of information from your device when you use an app or visit a website. For example, a vendor or publisher might need to store a cookie on your device during your first visit on a website, to be able to recognise your device during your next visits (by accessing this cookie each time).",
      ],
    },
    2: {
      id: 2,
      name: "Use limited data to select advertising",
      description:
        "Advertising presented to you on this service can be based on limited data, such as the website or app you are using, your non-precise location, your device type or which content you are (or have been) interacting with (for example, to limit the number of times an ad is presented to you).",
      illustrations: [
        "A car manufacturer wants to promote its electric vehicles to environmentally conscious users living in the city after office hours. The advertising is presented on a page with related content (such as an article on climate change actions) after 6:30 p.m. to users whose non-precise location suggests that they are in an urban zone.",
        "A large producer of watercolour paints wants to carry out an online advertising campaign for its latest watercolour range, diversifying its audience to reach as many amateur and professional artists as possible and avoiding showing the ad next to mismatched content (for instance, articles about how to paint your house). The number of times that the ad has been presented to you is detected and limited, to avoid presenting it too often.",
      ],
    },
  },
  specialPurposes: {
    1: {
      id: 1,
      name: "Ensure security, prevent and detect fraud, and fix errors\n",
      description:
        "Your data can be used to monitor for and prevent unusual and possibly fraudulent activity (for example, regarding advertising, ad clicks by bots), and ensure systems and processes work properly and securely. It can also be used to correct any problems you, the publisher or the advertiser may encounter in the delivery of content and ads and in your interaction with them.",
      illustrations: [
        "An advertising intermediary delivers ads from various advertisers to its network of partnering websites. It notices a large increase in clicks on ads relating to one advertiser, and uses data regarding the source of the clicks to determine that 80% of the clicks come from bots rather than humans.",
      ],
    },
    2: {
      id: 2,
      name: "Deliver and present advertising and content",
      description:
        "Certain information (like an IP address or device capabilities) is used to ensure the technical compatibility of the content or advertising, and to facilitate the transmission of the content or ad to your device.",
      illustrations: [
        "Clicking on a link in an article might normally send you to another page or part of the article. To achieve this, 1°) your browser sends a request to a server linked to the website, 2°) the server answers back (“here is the article you asked for”), using technical information automatically included in the request sent by your device, to properly display the information / images that are part of the article you asked for. Technically, such exchange of information is necessary to deliver the content that appears on your screen.",
      ],
    },
  },
  features: {
    1: {
      id: 1,
      name: "Precise Geolocation",
      description: "...",
      illustrations: [],
    },
    2: {
      id: 2,
      name: "Active Fingerprinting",
      description: "...",
      illustrations: [],
    },
  },
  specialFeatures: {
    1: {
      id: 1,
      name: "Precise Geolocation",
      description: "...",
      illustrations: [],
    },
    2: {
      id: 2,
      name: "Active Fingerprinting",
      description: "...",
      illustrations: [],
    },
  },
  dataCategories: {
    1: {
      id: 1,
      name: "Category A",
      description: "Category A Description",
    },
    2: {
      id: 2,
      name: "Category B",
      description: "Category B Description",
    },
  },
  vendors: {
    1: {
      id: 1,
      name: "Vendor A",
      usesCookies: true,
      cookieMaxAgeSeconds: 42,
      cookieRefresh: false,
      usesNonCookieAccess: true,
      deviceStorageDisclosureUrl: "https://vendor-a.com/device-storage.json",
      dataDeclaration: [2],
      urls: [
        {
          langId: "en",
          privacy: "https://vendor-a.com/privacy",
          legIntClaim: "https://vendor-a.com/legt-in-claim",
        },
      ],
    },
    2: {
      id: 2,
      name: "Vendor B",
      usesCookies: true,
      cookieMaxAgeSeconds: 42,
      cookieRefresh: false,
      usesNonCookieAccess: true,
      deviceStorageDisclosureUrl: "https://vendor-b.com/device-storage.json",
      dataDeclaration: [],
      urls: [
        {
          langId: "de",
          privacy: "https://vendor-b.com/privacy",
          legIntClaim: "https://vendor-b.com/legt-in-claim",
        },
      ],
    },
  },
};
