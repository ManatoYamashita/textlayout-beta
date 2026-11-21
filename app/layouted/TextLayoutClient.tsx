"use client";

import dynamic from 'next/dynamic';

// Next.js 15 以降、`ssr: false` は Server Component では使えないため、
// クライアントコンポーネントでラップして従来どおり SSR を無効にする。
const TextLayoutClient = dynamic(() => import('@/components/TextLayout'), { ssr: false });

export default TextLayoutClient;
