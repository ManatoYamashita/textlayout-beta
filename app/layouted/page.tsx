import React from 'react';
import { devicePpi } from '@/data/texts';
import TextLayoutClient from './TextLayoutClient';

interface LayoutedPageProps {
  // Next.js 15 以降、searchParams は Promise として渡される
  searchParams: Promise<{
    text?: string;
    margin?: string;
    devicePpi?: string;
  }>;
}

const LayoutedPage = async ({ searchParams }: LayoutedPageProps) => {
  const { text: rawText } = await searchParams;
  const text = rawText || "エラーが発生しました。（再読み込みしてください。）";

  return (
    <div>
      <TextLayoutClient text={text} devicePpi={devicePpi} />
    </div>
  );
};

export default LayoutedPage;
