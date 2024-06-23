import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from '@/components/ui/button'
import { Languages } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { fetchData } from '../../features/dataSlice'
import { useAppDispatch } from '../../hook'
import ReactCountryFlag from "react-country-flag"

const LocalizationButton = () => {
  const { t, i18n } = useTranslation()
  const dispatch = useAppDispatch()
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
    dispatch(fetchData(lng))
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Languages className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
          <span className="sr-only">Select language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => changeLanguage(('en'))} className={i18n.language === 'en' ? 'bg-accent text-accent-foreground mb-1' : ' cursor-pointer mb-1'}>
          <ReactCountryFlag countryCode="US" svg className='mr-1' />
          {t('languages.en')}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeLanguage(('vi'))} className={i18n.language === 'vi' ? 'bg-accent text-accent-foreground mb-1' : ' cursor-pointer mb-1'}>
          <ReactCountryFlag countryCode="VN" svg className='mr-1' />
          {t('languages.vi')}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default LocalizationButton
