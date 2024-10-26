'use client'

import { useEffect, useState } from 'react';
import Giscus from '@giscus/react';

export default function Comments() {
  const [theme, setTheme] = useState('https://www.charbzg.com/css/giscus.css');

  useEffect(() => {
    const updateTheme = () => {
      document.documentElement.classList.contains('dark')
        ? setTheme('https://www.charbzg.com/css/giscus.css')
        : setTheme('https://www.charbzg.com/css/giscus-light.css');
    };

    updateTheme();

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === 'attributes' &&
          mutation.attributeName === 'class'
        ) {
          updateTheme();
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <Giscus
      repo="charbz/charbzg"
      repoId="R_kgDONFIHuA"
      category="Announcements"
      categoryId="DIC_kwDONFIHuM4Cjq0L"
      mapping="pathname"
      reactionsEnabled="1"
      emitMetadata="1"
      inputPosition="top"
      theme={theme}
      lang="en"
    />
  );
}
