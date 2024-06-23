import { Monitor, Moon, Sun } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTheme } from "@/components/theme-provider"
import { Button } from '@/components/ui/button'

const ToggleThemeButton = () => {
  const { theme, setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")} className={theme === 'light' ? 'bg-accent text-accent-foreground' : ' cursor-pointer'}>
          <Sun className='h-[1rem] w-[1.2rem] me-2' />
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")} className={theme === 'dark' ? 'bg-accent text-accent-foreground my-0.5' : 'my-0.5 cursor-pointe'}>
          <Moon className='h-[1rem] w-[1.2rem] me-2' />
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")} className={theme === 'system' ? 'bg-accent text-accent-foreground' : 'cursor-pointer'}>
          <Monitor className='h-[1rem] w-[1.2rem] me-2' />
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default ToggleThemeButton
