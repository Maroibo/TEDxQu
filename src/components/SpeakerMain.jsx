import SpeakerMobile from './SpeakerMobile';
import SpeakerDesktop from './SpeakerDesktop';
import { useMediaQuery } from 'react-responsive';
export default function Speaker(props) {
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
    return (
        <>
            {isMobile ? <SpeakerMobile {...props} /> : <SpeakerDesktop {...props} />}
        </>
    );
}
