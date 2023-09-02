import "./SpeakersLineUp.css"
import SpeakerCard from "./SpeakerCard";
// I need to make all of the images imports as variables for deployment
import rehaamPhotoSmall from "../../public/speakers/low-res/image00001-min.jpeg";
import samaPhotoSmall from "../../public/speakers/low-res/IMG_5640-min.jpg";
import shathaPhotoSmall from "../../public/speakers/low-res/IMG_5695-min.jpg";
import lubabaPhotoSmall from "../../public/speakers/low-res/IMG_5714-min.jpg";
import hissaPhotoSmall from "../../public/speakers/low-res/IMG_5741-min.jpg";
import aishaPhotoSmall from "../../public/speakers/low-res/IMG_5811-min.jpg";
import khaledPhotoSmall from "../../public/speakers/low-res/IMG_7184 -min.jpg";
// I need to import all of the images in the speakers folder
import rehaamPhotoLarge from "../../public/speakers/image00001.jpeg";
import samaPhotoLarge from "../../public/speakers/IMG_5640 copy.jpg";
import shathaPhotoLarge from "../../public/speakers/IMG_5695 copy.jpg";
import lubabaPhotoLarge from "../../public/speakers/IMG_5714 copy.jpg";
import hissaPhotoLarge from "../../public/speakers/IMG_5741 copy.jpg";
import aishaPhotoLarge from "../../public/speakers/IMG_5811 copy.jpg";
import khaledPhotoLarge from "../../public/speakers/IMG_7184 copy 2.jpg";

function SpeakersLineUp(props) {
    const speakers = [
        {
            name: "أ. ريهام هذيل",
            talkTitle: "عندما يصبح الحلم حقيقة",
            image: rehaamPhotoSmall,
            imageLarge: rehaamPhotoLarge,
            breif: "ريهام هذيل \"عندما يصبح الحلم حقيقة\"مؤسسة شركة براندر للاستشارات التسويقية و التخطيط الاستراتيجي. مدربة استشارية في تطوير العلامات التجارية و التسويق الالكتروني.",
            instagram: "https://www.instagram.com/rehamhuthail/"
        },
        {
            name: "سما الدوري",
            talkTitle: "كيف تنتصر على وحشك",
            image: samaPhotoSmall,
            imageLarge: samaPhotoLarge,
            breif: "سما الدوري \"كيف تنتصر على وحشك\"سما الدوري هي طالبة طب في السنة السادسة في جامعة قطر، هي رسامة و إنسانة ذات نظرة مميزة للحياة. تذكرنا سما أن رحلة اكتشاف الذات تبدأ بطرح الأسئلة الصحيحة.",
            instagram: "https://www.instagram.com/6ebeyat/"
        },
        {
            name: "شذى بنبية",
            talkTitle: "كيفية النجاح في زمن ثورة الذكاء الصناعي",
            image: shathaPhotoSmall,
            imageLarge: shathaPhotoLarge,
            breif: "شذى بنبية \"كيفية النجاح في زمن ثورة الذكاء الصناعي\" شذى مبتكرة متسلسلة بجوهرهاز حاصلة على درجة الباكلريوس في الهندسة و النظام و درجة الماجيستير في الهندسة الميكانيكية من جامعة قطرز متفانية في العمل على مشاريع تستثمر التكنولوجيا المبتكرة لتعزيز الحياة،تتضمن خلفيتها مجموعة متنوعة من التجارب في قطاعي الصناعة و الأكاديمياز تتضمن مسيرتها مساهمات ذات تأثير في مشاريع تغطي مجالات مثل تكنولوجيا الرعاية الصحية،و تصميم الميكانيكا ، و أنظمة الاتصالات، و أمان البيانات ، مع تركيز كبير على تطبيقات الذكاء الصناعي. في عام 2022، شاركت شذى في نجوم العلوم ، حيث كشفت عن إبتكارها الرائد للأجهزة القابلة للإرتداء لرصد ضغط الدم المستمر بشكل ذكي. تفانيها في الحلول المبتكرة هو القوة المحركة في مسيرتها.",
            instagram: "",
        },
        {
            name: "لبابة يوسف",
            talkTitle: "صوتك مصدر قوتك",
            image: lubabaPhotoSmall,
            imageLarge: lubabaPhotoLarge,
            breif: "لبابة يوسف \"صوتك مصدر قوتك\" خريجة جامعة قطر، مذيعة، وصاحبة حساب \"نبرة\" على مواقع التواصل الاجتماعي، رئيسة نادي توستماسترز فرع رابطة خريجين جامعة قطر. تهتم لبابة بنشر المحتوى العربي الذي يتحدث عن الصوت. سيكون خطابها كبسولة معرفية ماتعة يستفيد منها المشاهد بغض النظر عن ميوله أو انتمائه.",
            instagram: "https://www.instagram.com/lubaba_youssef/"
        },
        {
            name: "حصة السويدي",
            talkTitle: "الجرأة الأدبية و مفاتيح التغير",
            image: hissaPhotoSmall,
            imageLarge: hissaPhotoLarge,
            breif: "أستاذة حصة السويدي \"الجرأة الأدبية و مفاتيح التغيير\"حصة خالد السويدي، سيدة إعلام و أعمال، قائدة متميزة، تشغل منصب رئيس مجموعة KON و لديها مسيرة متميزة تمتد لمدة ٢٧ عاماً كمستشارة ذات خبرة مجتمعية مع معرفة عميقة بالدبلوماسية الاقتصادية.",
            instagram: "https://www.instagram.com/hissa_alsuwaidi/"
        },
        {
            name: "عائشة الرميحي",
            talkTitle: "التنمية المستدامة وأهمية البحث العلمي",
            image: aishaPhotoSmall,
            imageLarge: aishaPhotoLarge,
            breif: "عائشة الرميحي \"التنمية المستدامة و أهمية البحث العلمي \"خريجة جامعة قطر في عام ٢٠١٤ بتخصص علوم البيئة (تكنولوجيا الحيوية). حازت على درجة الماجستير في الاستدامة و الطاقة في جامعة حمد بن خليفة. فازت بجائزة أفضل بحث طلابي في مجال أمن الغذاء و العلاقة بين المياه و الطاقة في المؤتمر الدولي للطاقة المستدامة و علاقتها بالبيئة في مناخ الصحراء ٢٠١٩ (ICSEWEN١٩). حالياً طالبة دكتوراة في جامعة حمد بن خليفة في مجال الاستدامة و الطاقة. تم منحها أيضا لقب بطل الاستدامة على مستوى الشرق الأوسط و شمال إفريقيا من اتحاد المسؤولية الاجتماعية الدولي (IUSR) لعام ٢٠٢٣.",
            instagram: "https://www.instagram.com/aisha_alrumaihi/"
        },
        {
            name: "د . خالد الخنجي",
            talkTitle: "نصيحة شكلتني",
            image: khaledPhotoSmall,
            imageLarge: khaledPhotoLarge,
            breif: "د.خالد الخنجي \"نصيحة شكلتني\"رئيس الإستراتيجية و التطوير، جامعة قطر، الدكتور خالد الخنجي هو أخصائي نفسي بالتدريب، و هو متحمس لتطوير الأفراد و المجتمعات و المؤسسات. لقد عمل في التعليم العالي لأكثر من ٣٠ عاماً في مجموعة متنوعة من الأدوار قبل وظيفته الحالية؛ بما في ذلك نائب رئيس شؤون الطلاب و مدير مركز الإرشاد.",
            instagram: "https://www.instagram.com/kalkhanji/"
        },
    ];
    const speakerCards = speakers.map((speaker, index) => {
        return (
            <SpeakerCard
                key={index}
                name={speaker.name}
                image={speaker.image}
                imageLarge={speaker.imageLarge}
                breif={speaker.breif}
                instagram={speaker.instagram}
                talkTitle={speaker.talkTitle}
                setSpeakerProps={props.setSpeakerProps}
            />
        );
    });
    return (
        <div className="SpeakersLineUpContainer">
            <h2>
                Speakers Line Up
            </h2>
            <div className="speakers-container">
                {speakerCards}
            </div>
        </div>
    )
}

export default SpeakersLineUp;