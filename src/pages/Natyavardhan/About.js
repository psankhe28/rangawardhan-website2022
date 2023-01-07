import React from "react";
import images from "./images"
const About = () => {
  const [header] = React.useState({
    subHeader: "About Me",
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text.",
  });
  const [state] = React.useState([
    { id: 1, title: "Name:", text: "Jonathan Doe" },
    { id: 2, title: "Email:", text: "example@domain.com" },
    { id: 3, title: "Phone:", text: "+1 023 454 345" },
    { id: 4, title: "Linkedin", text: "Jonathan_123" },
  ]);
  return (
    <div className="about">
      <div className="container">
        <div className="row  alignCenter">
          <div className="col-6">
            <div className="about__img" data-aos="zoom-in-right" data-aos-duration="1500">
              <img src={images.logo} alt="man" />
            </div>
          </div>
          <div className="col-6" data-aos="zoom-in-left" data-aos-duration="1500">
            <div className="about__info">
              <div className="about__info-p1">
              खऱ्या-खोट्या आयुष्याचा साधलेला मेळ,
								काय खरं? काय खोटं? नाटक तर केवळ भावनांचा खेळ.
								नाटक निर्माण करतं द्वंद्वात्मक जीवनाची जाणीव,
								नाटक तर नऊ रसांनी संपन्न, जशी चमचमीत भेळ.
								नाटक नसतं कोणा एकासाठी, थांबत नाहीच मुळी कुणासाठी.
								नाटक हा साहित्यप्रकार, परि, तो सामूहिक आविष्कार. त्यात व्यक्त होणं असतचं जणू समुहासाठी.

              </div>
              <div className="about__info-p2">
              नाटक अर्थातच जीवनाची अनुकृती. नाटक म्हणजे केवळ 45 मिनिटांची एकांकिका नाही व 3 तासांचा प्रायोग नाही तर नाटक म्हणजे, लेखक, दिग्दर्शक, कलाकार, पात्र, घटना, नेपथ्य, वेषभूषा, या सर्वाच्या कष्टाचा, प्रयत्नांचा जणू जीवनपटच असतो. नाटकाला, रंगभूमीला आपण जेवढं प्रामाणिकपणे देऊ, नाटक तितकें व पटीने परत आपल्याला काहीतरी नक्कीच देतं. ज्यांना नाटक करणं महत्त्वाचं वाटतं,  त्याहूनही पुढे जाऊन नाटक जगणं महत्त्वच वाटतं.
								अश्या विचारांतून, याच तळमळीने एका अभियांत्रिकी महाविद्यालयात आपल्या प्रयत्नांतून ऊभा होतं असलेलं आपलं नाट्यवर्धन! जिथे केली जाते कलेची साधना, प्रकाशात आणले जातात विचार अणि भावना. जिथे प्रत्येक कलेचा व कलाकाराचा केला जातो आदर , चला तर मग साथीने धरुया आपल्या नाट्यवर्धनचा पदर!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
