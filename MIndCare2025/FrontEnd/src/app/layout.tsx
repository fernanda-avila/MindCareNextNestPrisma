// src/app/layout.tsx

export const metadata = {
    title: 'My App',
    description: 'Aplicação Next.js',
  };
  
  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <html lang="pt-BR">
        <head>
          <style>
            {`
              * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
              }
  
              body {
                font-family: 'Arial', sans-serif;
                background-color: #f5f5f5;
                color: #333;
                line-height: 1.6;
                padding: 0;
                margin: 0;
              }
  
              h1, h2, h3, h4, h5, h6 {
                margin: 0;
                font-weight: normal;
              }
  
              a {
                text-decoration: none;
                color: inherit;
              }
  
              ul, ol {
                list-style: none;
              }
  
              input, button {
                outline: none;
                border: none;
                background: none;
              }
  
              img {
                max-width: 100%;
                height: auto;
              }
            `}
          </style>
        </head>
        <body>{children}</body>
      </html>
    );
  }
  