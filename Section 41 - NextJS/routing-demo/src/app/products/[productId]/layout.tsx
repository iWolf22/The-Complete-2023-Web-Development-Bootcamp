export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <div>
        {children}
        <h2>Features products</h2>
      </div>
    )
  }