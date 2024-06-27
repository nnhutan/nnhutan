import { buttonVariants } from '@/components/ui/button'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const Contact = () => {
  const { t } = useTranslation()
  const buttonPrimary = buttonVariants({ variant: "default" })

  return (
    <main className="w-full flex flex-col justify-center items-center min-h-[80vh]">
      <h1 className="text-4xl font-semibold">{t('not_implemented.title')}</h1>
      <p className="text-lg mb-6 text-center mt-1">{t('not_implemented.subtitle')}</p>
      <Link to="/" className={buttonPrimary}>{t('notfound.go_back_home')}</Link>
    </main>
  )
}

export default Contact
