import { Content, Sidebar } from './pages'

export default function App() {
  return (
    <div className="flex h-screen w-screen flex-row bg-transparent">
      <Sidebar />
      <Content />
    </div>
  )
}
