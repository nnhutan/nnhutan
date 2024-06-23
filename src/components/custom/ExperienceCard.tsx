import { Experience } from '../../types/experience';
import { useTheme } from '../theme-provider';
import { Badge } from '../ui/badge';
import { Card, CardContent } from '../ui/card';

const ExperienceCard = ({ company, logo, role, description, duration }: Experience) => {
  const { theme } = useTheme();
  const logo_url = theme === 'dark' ? logo.light : logo.dark;
  return (
    <Card>
      <CardContent className='block relative'>
        <div className="grid md:grid-cols-12 gap-6 pt-6 content-start">
          <div className="md:col-span-2 flex items-center justify-center">
            <img src={logo_url} alt={company} className='max-h-6' />
          </div>
          <div className="md:col-span-10">
            <h6 className='font-medium'>{role}</h6>
            <ul className="ml-6 list-disc [&>li]:mt-2 text-muted-foreground">
              {
                description.map((description, index) => (<li key={index}>{description}</li>))
              }
            </ul>

          </div>
        </div>
        <div className="col-span-4 flex items-center absolute -right-4 top-1/2 rotate-90 min-w-44 transform translate-x-1/2">
          <Badge variant='outline'>{duration}</Badge>
        </div>
      </CardContent>
    </Card>
  );
}

export default ExperienceCard;
