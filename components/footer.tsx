export function Footer() {
  return (
    <footer className="py-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">© {new Date().getFullYear()} Soe Wai Htoo. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#about" className="text-sm text-slate-500 hover:text-blue-400 transition-colors">
              About
            </a>
            <a href="#projects" className="text-sm text-slate-500 hover:text-blue-400 transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-sm text-slate-500 hover:text-blue-400 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
