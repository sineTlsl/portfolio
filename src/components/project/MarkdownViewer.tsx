'use client';

import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Image from 'next/image';
import { useEffect } from 'react';
import { isGif } from '@/utils/image';

type Props = {
  content: string;
};

export default function MarkdownViewer({ content }: Props) {
  useEffect(() => {});

  return (
    <Markdown
      remarkPlugins={[remarkGfm]}
      components={{
        code(props) {
          const { ref, children, className, node, ...rest } = props;
          const match = /language-(\w+)/.exec(className || '');

          return match ? (
            <SyntaxHighlighter
              {...rest}
              PreTag="div"
              language={match[1]}
              style={oneDark}
            >
              {String(children).replace(/\n$/, '')}
            </SyntaxHighlighter>
          ) : (
            <code {...rest} className={className}>
              {children}
            </code>
          );
        },
        img: (image) => (
          <Image
            src={image.src || ''}
            alt={image.src || ''}
            width={0}
            height={0}
            sizes="100%"
            style={{
              objectFit: 'contain',
              maxHeight: '600px',
              width: '100%',
              height: 'auto',
            }}
            unoptimized={isGif(image.src)}
          />
        ),
      }}
    >
      {content}
    </Markdown>
  );
}
