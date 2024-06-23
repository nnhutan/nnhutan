import { Link } from 'react-router-dom';
import { buttonVariants } from '../components/ui/button';
import { useTranslation } from 'react-i18next';

const NotFound = () => {
  const buttonPrimary = buttonVariants({ variant: "default" })
  const { t } = useTranslation();

  return (
    <main className="container mx-auto py-16 max-w-2xl flex flex-col items-center justify-center min-h-[80vh]">
      <h1 className='text-lg font-bold'>{t('notfound.title')}</h1>
      <p className="text-lg mb-6">{t('notfound.description')}</p>
      <Link to="/" className={buttonPrimary}>{t('notfound.go_back_home')}</Link>
    </main>
  );
}

export default NotFound;
