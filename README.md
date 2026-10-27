# Serverpod Bangla Academy (সার্ভারপড বাংলা একাডেমি)

> **Flutter থেকে Full-Stack Developer — সবকিছু বাংলায়, হাতে-কলমে।**

একটি সম্পূর্ণ আধুনিক, প্রোডাকশন-কোয়ালিটি এবং বিগিনার-ফ্রেন্ডলি বাংলা এডুকেশনাল ওয়েব প্ল্যাটফর্ম, যেখানে একজন Flutter/Dart ডেভেলপার একদম শূন্য থেকে Serverpod ব্যাকএন্ড ডেভেলপমেন্ট শিখে বাস্তব Flutter অ্যাপ্লিকেশন তৈরি, PostgreSQL ডাটাবেস ম্যানেজমেন্ট, অথেন্টিকেশন, রিয়েল-টাইম স্ট্রিমিং এবং লিনাক্স VPS-এ সেলফ-হোস্টিং পর্যন্ত স্বাবলম্বী হতে পারবেন।

---

## ১. প্রধান ফিচারসমূহ (Key Features)

- **১৪টি সুসংগঠিত কোর্স মডিউল:** ব্যাকএন্ডের ভিত্তিপ্রস্তর থেকে শুরু করে এন্টারপ্রাইজ স্কেলিং ও VPS সেলফ-হোস্টিং।
- **৪টি পূর্ণাঙ্গ ক্যাপস্টোন প্রজেক্ট (Capstone Projects):**
  - **Project A: Task Manager** (Full CRUD, PostgreSQL ORM, Persistence)
  - **Project B: Secure Multi-User Notes App** (Email/Password Auth, Session Privacy, Protected Endpoints)
  - **Project C: Real-Time Multi-Room Chat** (WebSocket Streaming, Live Pub/Sub Channels)
  - **Project D: Mini SaaS Multi-Tenant Platform** (Organizations, RBAC Permissions, Docker Compose)
- **ইন্টারেক্টিভ লার্নিং প্লে-গ্রাউন্ড (Playground):**
  - ব্রাউজারেই Serverpod Type-Safe RPC Endpoint কল ও রেসপন্স সিমুলেটর
  - `.spy.yaml` মডেল এডিটর এবং লাইভ Dart ক্লাস ও SQL টেবিল প্রিভিউ
  - কাস্টম CLI কমান্ড জেনারেটর
- **ইন্টারেক্টিভ কুইজ সিস্টেম (Knowledge Check):** প্রতিটি মডিউলে তাৎক্ষণিক স্কোরিং ও ব্যাখ্যামূলক কুইজ।
- **লোকাল প্রোগ্রেস ট্র্যাকিং (Progress Tracking):** `localStorage`-ভিত্তিক সুরক্ষিত অগ্রগতি সংরক্ষণ, বুকমার্ক এবং রিসেট কন্ট্রোল।
- **গ্লোবাল ফুল-টেক্সট সার্চ (Global Search):** কীবোর্ড শর্টকাট (`Cmd+K` বা `Ctrl+K`) দিয়ে লেসন, কমান্ড, ডার্ট ফাইলনেম ও এরর মেসেজ অনুসন্ধান।
- **প্রযুক্তিগত শব্দকোষ (Technical Glossary):** Session, Endpoint, Pod, RPC, Migration ইত্যাদি জটিল পরিভাষার বাংলা ব্যাখ্যা ও বাস্তব উপমা।

---

## ২. প্রযুক্তিগত স্ট্যাক (Technology Stack)

- **ফ্রেমওয়ার্ক:** Next.js (App Router) with TypeScript
- **স্টাইলিং:** Tailwind CSS (v4)
- **আইকনস:** Lucide Icons
- **লজিক ও ডাটা:** টাইপড মডিউলার কন্টেন্ট আর্কিটেকচার
- **টেস্টিং:** Vitest, React Testing Library, JSDOM
- **প্যাকেজ ম্যানেজার:** npm

---

## ৩. লোকাল ডেভেলপমেন্ট সেটআপ (Local Setup)

### পূর্বশর্ত (Prerequisites):
- Node.js v18.0.0 বা পরবর্তী সংস্করণ (পরীক্ষিত: Node.js v24.x)
- npm v9+

### ডিপেন্ডেন্সি ইনস্টলেশন:
```bash
git clone <repository-url>
cd serverpod_guide
npm install
```

### ডেভেলপমেন্ট সার্ভার চালু করা:
```bash
npm run dev
```
ব্রাউজারে [http://localhost:3000](http://localhost:3000) ওপেন করুন।

### প্রোডাকশন বিল্ড তৈরি:
```bash
npm run build
```

### প্রোডাকশন সার্ভার রান করা:
```bash
npm run start
```

### অটোমেটেড টেস্ট পরিচালনা:
```bash
npm test
```

### কোড লিন্টিং:
```bash
npm run lint
```

---

## ৪. প্রজেক্ট ফোল্ডার স্ট্রাকচার (Folder Structure)

```text
serverpod_guide/
├── src/
│   ├── app/
│   │   ├── page.tsx                     # ল্যান্ডিং ও হোমপেজ
│   │   ├── layout.tsx                   # রুট লেআউট ও বাংলা ফন্টস
│   │   ├── globals.css                  # Tailwind স্টাইলস ও কালার টোকেন
│   │   ├── learn/
│   │   │   ├── page.tsx                 # কোর্স ড্যাশবোর্ড
│   │   │   ├── [slug]/page.tsx          # ডাইনামিক লেসন ভিউয়ার
│   │   │   └── getting-started/page.tsx # প্রথম পাঠে রিডাইরেক্ট
│   │   ├── roadmap/page.tsx             # ক্যারিয়ার রোডম্যাপ
│   │   ├── playground/page.tsx          # ইন্টারেক্টিভ ল্যাব
│   │   ├── projects/page.tsx            # ৪টি ক্যাপস্টোন প্রজেক্ট
│   │   ├── glossary/page.tsx            # প্রযুক্তিগত শব্দকোষ
│   │   ├── resources/page.tsx           # অফিশিয়াল রিসোর্স ও চিট-শিট
│   │   ├── search/page.tsx              # ফুল সার্চ রেজাল্টস
│   │   ├── about/page.tsx               # প্ল্যাটফর্ম পরিচিতি
│   │   ├── not-found.tsx                # কাস্টম ৪০৪ পেজ
│   │   ├── robots.ts                    # SEO রোবট ফাইল
│   │   └── sitemap.ts                   # সাইটম্যাপ জেনারেটর
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx               # হেডার, মেনু ও প্রোগ্রেস ব্যাজ
│   │   │   ├── Footer.tsx               # ফুটার ও কমিউনিটি লিংকস
│   │   │   └── SearchModal.tsx          # Cmd+K সার্চ পপআপ
│   │   ├── code/
│   │   │   └── CodeBlock.tsx            # সিনট্যাক্স হাইলাইটিং ও কপি
│   │   ├── lesson/
│   │   │   ├── CourseSidebar.tsx        # কারিকুলাম নেভিগেশন
│   │   │   ├── TableOfContents.tsx      # অন-পেজ সেকশন ট্র্যাকার
│   │   │   ├── NavigationButtons.tsx    # পূর্ববর্তী/পরবর্তী ও প্রোগ্রেস
│   │   │   └── Callout.tsx              # টিপ, ওয়ার্নিং ও অ্যালার্ট
│   │   └── quiz/
│   │       └── QuizSection.tsx          # ইন্টারেক্টিভ জ্ঞান যাচাই কুইজ
│   ├── content/
│   │   ├── modules/                     # ১৪টি মডিউলের বিস্তারিত পাঠ
│   │   ├── projects/                    # প্রজেক্ট আর্কিটেকচার ও স্কিমা
│   │   └── glossary/                    # গ্লসারি পরিভাষা ও উপমা
│   ├── lib/
│   │   ├── search/searchEngine.ts       # সার্চ ইনডেক্সিং ও অ্যালগরিদম
│   │   └── progress/progressManager.ts  # লোকালস্টোরেজ প্রোগ্রেস ট্র্যাকার
│   └── types/index.ts                   # টাইপস্ক্রিপ্ট টাইপস ও ইন্টারফেস
├── tests/
│   ├── progressManager.test.ts          # প্রোগ্রেস ম্যানেজার টেস্ট
│   └── searchAndModules.test.ts         # সার্চ ও কারিকুলাম টেস্ট
├── vitest.config.mjs                    # Vitest কনফিগারেশন
├── package.json                         # ডিপেন্ডেন্সি ও স্ক্রিপ্টস
└── README.md                            # বিস্তারিত ডকুমেন্টেশন
```

---

## ৫. বাস্তবায়িত কোর্স কারিকুলাম (Curriculum Overview)

- **মডিউল ১: ব্যাকএন্ড ফান্ডামেন্টালস ও আর্কিটেকচার**
  - ক্লায়েন্ট-সার্ভার রিকোয়েস্ট লাইফসাইকেল
  - REST API বনাম Serverpod Type-Safe RPC
  - Localhost, IP Address (10.0.2.2) এবং পোর্ট নেটওয়ার্কিং
- **মডিউল ২: ডেভেলপমেন্ট এনভায়রনমেন্ট ও টুলস সেটআপ**
  - `flutter doctor` ও Dart SDK যাচাই
  - `serverpod_cli` ইনস্টলেশন ও PATH ফিক্সিং
  - VS Code এক্সটেনশন ও অটো-ভ্যালিডেশন
- **মডিউল ৩: প্রথম Serverpod প্রজেক্ট তৈরি ও রান করা**
  - `serverpod create` ও প্যাকেজ নেমিং
  - জেনারেটেড ৩টি প্যাকেজ (`_server`, `_client`, `_flutter`)
  - প্রথমবার সার্ভার বুট ও Insights পোর্ট
- **মডিউল ৪: প্রোজেক্ট স্ট্রাকচার ও ফাইল ডিরেক্টরি পরিচিতি**
  - `lib/src/endpoints/`, `lib/src/models/` এবং `migrations/`
  - `config/development.yaml` ও `passwords.yaml` নিরাপত্তা
  - ম্যানুয়াল এডিটেবল বনাম জেনারেটেড কোডের অলঙ্ঘনীয় পার্থক্য
- **মডিউল ৫: প্রথম এন্ডপয়েন্ট ও Flutter ক্লায়েন্ট কানেকশন**
  - `Endpoint` ক্লাস ও `Session` অবজেক্টের কাজ
  - `serverpod generate` কোড জেনারেশন
  - Flutter UI থেকে সরাসরি মেথড কল ও রেসপন্স রেন্ডারিং
- **মডিউল ৬: ডাটাবেস, PostgreSQL ও YAML ডেটা মডেলিং**
  - `.spy.yaml` মডেল ফাইল ও ফিল্ড টাইপস
  - `serverpod create-migration` ও স্কিমা মাইগ্রেশন
  - Serverpod ORM দিয়ে Insert, Find, Update, Delete
- **মডিউল ৭: পূর্ণাঙ্গ CRUD প্রজেক্ট — Task Manager**
  - সার্ভার সাইড ইনপুট ভ্যালিডেশন ও এক্সেপশন হ্যান্ডলিং
  - Flutter UI, চেকবক্স টগল ও লাইভ ডাটাবেস স্টেট
  - অ্যাপ রিস্টার্টেও ডাটাবেস পারসিস্টেন্স পরীক্ষা
- **মডিউল ৮: অথেন্টিকেশন, ইউজার সেশন ও এক্সেস কন্ট্রোল**
  - `serverpod_auth` আর্কিটেকচার
  - পাসওয়ার্ড হ্যাশিং ও সেশন টোকেন
  - `requireLogin` ও `session.authenticatedUserId` সিকিউরিটি
- **মডিউল ৯: Flutter আর্কিটেকচার ও BLoC/Repository ইন্টিগ্রেশন**
  - Repository Pattern দিয়ে ব্যাকএন্ড ক্লায়েন্ট আইসোলেশন
  - BLoC স্টেট ম্যানেজমেন্ট ও রিঅ্যাক্টিভ ইভেন্ট হ্যান্ডলার
- **মডিউল ১০: এরর হ্যান্ডলিং, ভ্যালিডেশন ও টেস্টিং**
  - `serverpod_test` দিয়ে এন্ডপয়েন্ট ইউনিট টেস্টিং
  - পোর্ট কনফ্লিক্ট ও মাইগ্রেশন এরর সমাধানের হ্যান্ডবুক
- **মডিউল ১১: রিয়েল-টাইম কমিউনিকেশন ও স্ট্রিমিং**
  - Serverpod WebSocket স্ট্রিমিং সেশন
  - `session.messages` চ্যানেল পাব-সাব ব্রডকাস্টিং
  - Flutter ক্লায়েন্টে লাইভ চ্যাট মেসেজিং
- **মডিউল ১২: অ্যাডভান্সড ফিচার ও স্কেলিং**
  - ফাইল আপলোড ও ক্লাউড অবজেক্ট স্টোরেজ
  - ইন-মেমোরি ও Redis ক্যাশিং অপ্টিমাইজেশন
- **মডিউল ১৩: লিনাক্স VPS-এ প্রোডাকশন সেলফ-হোস্টিং**
  - Multi-stage Dockerfile কন্টেইনারাইজেশন
  - Nginx রিভার্স প্রক্সি কনফিগারেশন ও WebSocket হেডার্স
  - Certbot দিয়ে ফ্রি Let's Encrypt SSL (HTTPS)
- **মডিউল ১৪: চারটি পূর্ণাঙ্গ ক্যাপস্টোন প্রজেক্ট**
  - Project A: Task Manager
  - Project B: Secure Multi-User Notes App
  - Project C: Real-Time Multi-Room Chat
  - Project D: Mini SaaS Multi-Tenant Platform

---

## ৬. সেলফ-হোস্টিং ও ডিপ্লয়মেন্ট গাইডলাইন (VPS Deployment)

প্রোডাকশন সার্ভারে ডিপ্লয় করতে:
1. আপনার উবুন্টু VPS-এ Docker এবং Docker Compose ইনস্টল করুন।
2. সার্ভার কোডের ডকার ইমেজ বিল্ড ও রান করুন:
   ```bash
   docker build -t my-serverpod-backend .
   docker run -d -p 8080:8080 -p 8081:8081 --name serverpod-app my-serverpod-backend
   ```
3. Nginx রিভার্স প্রক্সি কনফিগার করে পোর্ট ৮০৮০-কে ডোমেনের সাথে যুক্ত করুন।
4. `certbot --nginx -d api.yourdomain.com` দিয়ে SSL সক্রিয় করুন।

---

## ৭. টেস্টিং রিপোর্ট (Verification & Test Report)

- **Next.js Production Build:** সফল (`Exit code 0`, ৪৯টি স্ট্যাটিক পেজ সফলভাবে প্রি-রেন্ডার হয়েছে)
- **TypeScript Typecheck:** ১০০% পাস (`Zero compilation errors`)
- **ESLint Linting:** ১০০% পাস (`0 errors`)
- **Vitest Unit Tests:** ৯টি টেস্ট সফলভাবে উত্তীর্ণ (`Tests 9 passed`)
  - `progressManager` (Default state, toggle lesson, bookmarks, quiz score, reset)
  - `searchAndModules` (14 Modules load, getLessonBySlug, navigation, query token search)

---

## ৮. ভবিষ্যৎ উন্নয়ন রোডম্যাপ (Future Roadmap)

- [ ] Firebase Auth থেকে Serverpod Auth-এ মাইগ্রেশন টুল
- [ ] ভিডিও লেকচার ও অডিও এক্সপ্ল্যানার ইন্টিগ্রেশন
- [ ] Flutter Web-ভিত্তিক লাইভ কোড এডিটর
- [ ] কমিউনিটি ফোরাম ও ডিসকাশন বোর্ড

---

## ৬. সেলফ-হোস্টিং ও ডিপ্লয়মেন্ট গাইডলাইন (VPS Deployment)

প্রোডাকশন সার্ভারে ডিপ্লয় করতে:
1. আপনার উবুন্টু VPS-এ Docker এবং Docker Compose ইনস্টল করুন।
2. সার্ভার কোডের ডকার ইমেজ বিল্ড ও রান করুন:
   ```bash
   docker build -t my-serverpod-backend .
   docker run -d -p 8080:8080 -p 8081:8081 --name serverpod-app my-serverpod-backend
   ```
3. Nginx রিভার্স প্রক্সি কনফিগার করে পোর্ট ৮০৮০-কে ডোমেনের সাথে যুক্ত করুন।
4. `certbot --nginx -d api.yourdomain.com` দিয়ে SSL সক্রিয় করুন।

---

## ৭. টেস্টিং রিপোর্ট (Verification & Test Report)

- **Next.js Production Build:** সফল (`Exit code 0`, ৪৯টি স্ট্যাটিক পেজ সফলভাবে প্রি-রেন্ডার হয়েছে)
- **TypeScript Typecheck:** ১০০% পাস (`Zero compilation errors`)
- **ESLint Linting:** ১০০% পাস (`0 errors`)
- **Vitest Unit Tests:** ৯টি টেস্ট সফলভাবে উত্তীর্ণ (`Tests 9 passed`)
  - `progressManager` (Default state, toggle lesson, bookmarks, quiz score, reset)
  - `searchAndModules` (14 Modules load, getLessonBySlug, navigation, query token search)

---

## ৮. ভবিষ্যৎ উন্নয়ন রোডম্যাপ (Future Roadmap)

- [ ] Firebase Auth থেকে Serverpod Auth-এ মাইগ্রেশন টুল
- [ ] ভিডিও লেকচার ও অডিও এক্সপ্ল্যানার ইন্টিগ্রেশন
- [ ] Flutter Web-ভিত্তিক লাইভ কোড এডিটর
- [ ] কমিউনিটি ফোরাম ও ডিসকাশন বোর্ড

