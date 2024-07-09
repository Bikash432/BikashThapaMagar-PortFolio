import React from 'react-dom';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';

import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles';
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';

const ExperienceCard = ({experience}) =>{
        return(
                <VerticalTimelineElement 
                contentStyle={{background : '#1d1836', color:"#fff" }}
                contentArrowStyle={{ borderRight : '7px solid #232631'}}
                iconStyle={{background: experience.iconBg}}
                icon = { <div>
                        <img src={experience.icon} alt={experience.company_name}
                        className='w-[60%] h-[65%] object-contain'
                        />
                </div>}
                >
                <h3 className='text-white text-[24px] font-bold'>
                {experience.title}
                </h3>
                {experience.date}
                <h4>{experience.points}</h4>
                </VerticalTimelineElement>
        )
}


const Experience = () => {
        return (
        <>
        <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My experience so far..</p>
        <h2 className={styles.sectionHeadText}>Work Experience</h2> 
        </motion.div>

        <div className='mt-20 flex flex-col'>
                <VerticalTimeline>
                    {
                        experiences.map((experience , index) =>(
                            <ExperienceCard key={index} experience={experience} />    
                        ) )
                    }    
                </VerticalTimeline>

        </div>

        </>

          )
        }

export default Experience;