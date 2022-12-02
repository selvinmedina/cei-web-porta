import { useSetState } from '@mantine/hooks'
import React from 'react'
import '../styles/SocialShared.css'
import {
    IconBrandFacebook,
    IconBrandTwitter,
    IconBrandWhatsapp
  } from '@tabler/icons'

export const SocialShared = ({text, link}) => {
    // const [info, setinfo] = useState({
    //     text: null,
    //     link: null
    // })

    // let sharedTwitter = '';

    // useEffect(() => {
    //     setinfo({text,link});

    //     sharedLinkTwitter = ''

    // }, [])
    
    return (


        <div className='social-shared--container'>
            <div className='social-shared--title'>Compartir</div>
            <div className='social-shared-links'>
                <a className='social-link' target="_blank" href={`https://twitter.com/intent/tweet?text=${text}&url=${link}&hashtags=#CEI#CEUTEC#HN`}><IconBrandTwitter color='white'/></a> 
                <a className='social-link' target="_blank" href={`https://www.facebook.com/sharer/sharer.php?u=${link}`}><IconBrandFacebook color='white'/></a>
                <a className='social-link' target="_blank" href={`https://api.whatsapp.com/send?text=${text + ' ' + link}`}><IconBrandWhatsapp color='white'/></a>
            </div>
        </div>
    )
}
