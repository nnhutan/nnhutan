import { Facebook, Github, Linkedin } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'
import StackIcon from "tech-stack-icons";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import ExperienceCard from '@/components/custom/ExperienceCard'
import { buttonVariants } from "@/components/ui/button"
import { useTranslation } from 'react-i18next';
import { selectData } from '../features/dataSlice';
import { useAppSelector } from '../hook';

const Home = () => {
  const buttonGhostClassName = buttonVariants({ variant: "ghost" })
  const { t } = useTranslation()
  const { currentRole, experiences, fullname, moreAboutMe, skills, slogan, socialUrls } = useAppSelector(selectData)

  return <main className="container mx-auto py-16 max-w-2xl">
    <div className='flex flex-col gap-3 items-center'>
      <Avatar className='w-16 h-16'>
        <AvatarImage src='./avatar.svg' />
        <AvatarFallback>NT</AvatarFallback>
      </Avatar>
      <span className='text-center'>
        <h6 className='font-medium'>{fullname}</h6>
        <span className='text-muted-foreground'>{currentRole}</span>
      </span>
      <p className='text-center'>{slogan}</p>
      <div className='flex gap-2'>
        <a className={buttonGhostClassName} href={socialUrls.github} target='_blank'><Github className="mr-2 h-4 w-4" /> Github</a>
        <a className={buttonGhostClassName} href={socialUrls.facebook} target='_blank'><Facebook className="mr-2 h-4 w-4" /> Facebook</a>
        <a className={buttonGhostClassName} href={socialUrls.linkedin} target='_blank'><Linkedin className="mr-2 h-4 w-4" /> Linkedin</a>
      </div>
      <Separator className='my-6' />
      <div className='flex flex-col items-center w-full'>
        <Badge variant='secondary'>{t('home.about_me.title')}</Badge>
        <div className="w-full my-6">
          <h6 className='font-medium text-left'>{t('home.about_me.subtitle')}</h6>
          <blockquote className="mt-2 border-l-2 pl-6 italic">{moreAboutMe}</blockquote>
        </div>
      </div>
      <Separator className='my-6' />
      <div className='flex flex-col items-center w-full'>
        <Badge variant='secondary'>{t('home.skills.title')}</Badge>
        <p className='text-center text-muted-foreground mt-1'>{t('home.skills.subtitle')}</p>
        <div className="grid grid-cols-5 gap-8 my-6 justify-between w-full">
          {
            skills.map((skill, index) => (
              <TooltipProvider key={index} delayDuration={200}>
                <Tooltip>
                  <TooltipTrigger><StackIcon name={skill.icon} className='w-12 h-12' grayscale={false} /></TooltipTrigger>
                  <TooltipContent>
                    <p>{skill.name}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))
          }
        </div>
      </div>
      <Separator className='my-6' />
      <div className='flex flex-col items-center w-full'>
        <Badge variant='secondary'>{t('home.experiences.title')}</Badge>
        <p className='text-center text-muted-foreground mt-1'>{t('home.experiences.subtitle')}</p>
        <div className='w-full my-6 flex flex-col gap-6'>
          {experiences.map((experience, index) => (<ExperienceCard {...experience} key={index} />))}
        </div>
      </div>
    </div>
  </main>
}

export default Home
