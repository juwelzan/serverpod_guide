import { CourseModule } from '@/types';

export const module13: CourseModule = {
  id: 'module-13',
  number: 13,
  title: 'মডিউল ১৩: লিনাক্স VPS-এ প্রোডাকশন সেলফ-হোস্টিং',
  slug: 'self-hosting-on-vps',
  description:
    'Docker কন্টেইনারাইজেশন, Ubuntu VPS প্রিপারেশন, Nginx রিভার্স প্রক্সি, Certbot দিয়ে ফ্রি SSL (HTTPS), সিক্রেট ও এনভায়রনমেন্ট ভ্যারিয়েবল সুরক্ষা এবং অটোমেটেড ডাটাবেস ব্যাকআপ।',
  estimatedHours: '৪ ঘণ্টা',
  iconName: 'ServerCrash',
  lessons: [
    {
      id: 'm13-l1',
      slug: 'docker-and-vps-preparation',
      moduleId: 'module-13',
      moduleTitle: 'মডিউল ১৩: প্রোডাকশন সেলফ-হোস্টিং',
      title: 'লিনাক্স VPS প্রিপারেশন ও Docker কন্টেইনারাইজেশন',
      subtitle: 'Ubuntu সার্ভার হার্ডেনিং, Docker ইনস্টল এবং multi-stage Dockerfile তৈরি',
      order: 1,
      readingTimeMinutes: 12,
      objectives: [
        'প্রোডাকশনের জন্য উপযুক্ত VPS স্পেসিফিকেশন নির্বাচন করা',
        'Ubuntu সার্ভার সিকিউর করা ও Docker/Compose ইনস্টল করা',
        'Serverpod-এর প্রোডাকশন ডকার ইমেজ বিল্ড করা',
      ],
      prerequisites: ['মৌলিক লিনাক্স কমান্ড ও SSH ধারণা'],
      whyImportant:
        'লোকালে ভালো চললেও লাইভ সার্ভারে ডিপ্লয় করতে না পারলে ইউজারের কাছে অ্যাপ পৌঁছানো সম্ভব নয়। সেলফ-হোস্টিংয়ে মাত্র $৫-$১০ ডলারে আপনি লক্ষাধিক ইউজারের ব্যাকএন্ড চালাতে পারেন।',
      sections: [
        {
          id: 's1',
          title: '১. ন্যূনতম VPS রিকোয়ারমেন্টস',
          content: `Serverpod ব্যাকএন্ড এবং PostgreSQL ডাটাবেসের জন্য ন্যূনতম VPS কনফিগ:
- **CPU:** 1-2 vCPU (Hetzner, DigitalOcean, Linode বা AWS Lightsail)
- **RAM:** 2 GB (মিনিমাম ১ জিবি তবে ২ জিবি রিকমেন্ডেড)
- **Storage:** 25-40 GB NVMe SSD
- **OS:** Ubuntu 22.04 বা 24.04 LTS`,
        },
        {
          id: 's2',
          title: '২. প্রোডাকশন Dockerfile',
          content: `সার্ভার ফোল্ডারে থাকা অফিশিয়াল multi-stage \`Dockerfile\`:`,
          codeSnippet: {
            language: 'dockerfile',
            filePath: 'school_api_server/Dockerfile',
            type: 'config',
            code: `FROM dart:stable AS build

WORKDIR /app
COPY pubspec.* ./
RUN dart pub get

COPY . .
RUN dart pub get --offline
RUN dart compile exe bin/main.dart -o bin/server

# প্রোডাকশন মিনিমাল রানটাইম
FROM subosito/distroless:latest
COPY --from=build /runtime/ /
COPY --from=build /app/bin/server /app/bin/
COPY --from=build /app/config/ /app/config/
COPY --from=build /app/web/ /app/web/

EXPOSE 8080 8081 8082
ENTRYPOINT ["/app/bin/server", "--mode", "production"]`,
            explanation:
              'এটি মাল্টি-স্টেজ বিল্ড ব্যবহার করে ডার্ট কোডকে নেটিভ মেশিন কোডে কম্পাইল করে, যার ফলে ফাইনাল ডকার ইমেজের সাইজ মাত্র ৩০-৪০ মেগাবাইট হয় এবং সার্ভার দ্রুত বুট করে।',
          },
        },
      ],
      summary: [
        'Multi-stage Dockerfile ব্যবহার করলে ইমেজ সাইজ ছোট এবং নিরাপদ হয়।',
        'উবুন্টু VPS-এ Docker দিয়ে সার্ভিস চালানো সবচেয়ে স্ট্যান্ডার্ড প্র্যাকটিস।',
      ],
      officialDocUrl: 'https://docs.serverpod.dev/',
      serverpodVersion: 'Serverpod 2.x+',
    },
    {
      id: 'm13-l2',
      slug: 'nginx-reverse-proxy-ssl',
      moduleId: 'module-13',
      moduleTitle: 'মডিউল ১৩: প্রোডাকশন সেলফ-হোস্টিং',
      title: 'Nginx রিভার্স প্রক্সি, কাস্টম ডোমেন ও ফ্রি Let\'s Encrypt SSL',
      subtitle: 'পোর্ট ৮০৮০ থেকে পোর্ট ৪৪৩ (HTTPS) এ সুরক্ষিত রাউটিং',
      order: 2,
      readingTimeMinutes: 12,
      objectives: [
        'Nginx রিভার্স প্রক্সি কনফিগার করে ডোমেন সেট করা',
        'Certbot দিয়ে ফ্রি এবং অটো-রিনিউয়িং SSL সার্টিফিকেট লাগানো',
        'WebSocket কানেকশনের জন্য Nginx হেডার আপগ্রেড কনফিগার করা',
      ],
      prerequisites: ['একটি ডোমেন বা সাব-ডোমেন থাকা (যেমন api.yourdomain.com)'],
      whyImportant:
        'আধুনিক মোবাইল অপারেটিং সিস্টেমে (Android 9+ ও iOS) আন-এনক্রিপ্টেড HTTP রিকোয়েস্ট ডিফল্টভাবে ব্লক করে দেওয়া হয়। তাই প্রোডাকশন সার্ভারে HTTPS এবং WSS (Secure WebSocket) বাধ্যতামূলক।',
      sections: [
        {
          id: 's1',
          title: '১. Nginx সাইট কনফিগারেশন',
          content: `\`/etc/nginx/sites-available/serverpod\` ফাইলে কনফিগ লিখুন:`,
          codeSnippet: {
            language: 'nginx',
            filePath: '/etc/nginx/sites-available/serverpod',
            type: 'config',
            code: `server {
    server_name api.yourdomain.com;

    location / {
        proxy_pass http://127.0.0.1:8080;
        proxy_http_version 1.1;

        # WebSocket এবং Streaming সাপোর্ট করার জন্য
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";

        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}`,
            explanation:
              '`Upgrade` এবং `Connection "upgrade"` হেডার দুটি অত্যন্ত গুরুত্বপূর্ণ, অন্যথায় Serverpod-এর লাইভ স্ট্রিমিং ও WebSocket কাজ করবে না।',
          },
        },
        {
          id: 's2',
          title: '২. Certbot দিয়ে SSL সার্টিফিকেট ইনস্টল',
          content: `টার্মিনালে কমান্ড দিন:`,
          codeSnippet: {
            language: 'bash',
            type: 'command',
            code: `sudo certbot --nginx -d api.yourdomain.com`,
            explanation:
              'Certbot স্বয়ংক্রিয়ভাবে Let\'s Encrypt থেকে ফ্রি SSL জেনারেট করবে এবং Nginx কনফিগারেশন আপডেট করে HTTPS সক্রিয় করবে।',
          },
        },
      ],
      summary: [
        'মোবাইল অ্যাপে নিরাপদ যোগাযোগের জন্য HTTPS অপরিহার্য।',
        'Nginx দিয়ে WebSocket আপগ্রেড হেডার কনফিগার করতে হয়।',
        'Certbot স্বয়ংক্রিয়ভাবে SSL রিনিউ করে।',
      ],
      serverpodVersion: 'Serverpod 2.x+',
    },
  ],
};

