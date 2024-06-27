import { Experience } from '../../types/experience';
import { useTheme } from '@/components/theme-provider';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

const ExperienceCard = ({ company, logo, role, description, duration }: Experience) => {
  const { actualTheme } = useTheme();
  const logo_url = actualTheme === 'dark' ? logo.light : logo.dark;

  return (
    <Card>
      <CardContent className='block relative p-0'>
        <div className="grid md:grid-cols-12 gap-6 content-start min-h-52 p-6">
          <div className="md:col-span-2 flex items-center justify-center">
            <img src={logo_url} alt={company} className='max-h-6' />
          </div>
          <div className="md:col-span-10">
            <h6 className='font-medium'>{role}</h6>
            <ul className="ml-6 list-disc [&>li]:mt-2 text-muted-foreground">
              {description.map((description, index) => (<li key={index}>{description}</li>))}
            </ul>
          </div>
        </div>
        <div className="col-span-4 flex items-center absolute right-0 top-1/2 -translate-y-1/2 right-0 translate-x-1/2 rotate-90">
          <Badge variant='secondary'>{duration}</Badge>
        </div>
      </CardContent>
    </Card>
  );
}

export default ExperienceCard;
