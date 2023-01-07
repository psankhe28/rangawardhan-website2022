import React from "react";
import images from './images'
const Services = () => {
  const [header] = React.useState({
    subHeading: "कारकीर्द",
  });
  const [state] = React.useState([
    {
      id: 1,
      img:`${images.one}`,
      heading: "Harlequin🎭",
      text:
        " 'खुदू-खुदू हसणं, उगी उगी रडणं, गोड-गोंडस,  दिसायला देखणं, आपलंही बाळ असचं असावं, असं प्रत्येकाचं असतं स्वप्नं.....हेच स्वप्न गेली पाच वर्ष बघत असलेल्या बजरंगपूरातल्या बबन आणि सूमन या जोडप्याची ही कहाणी, खरंच मातृत्व-पितृत्व, खऱ्या अर्थाने माणुसकी आणि मुळात दैवत्व सांगून जाणारी गोष्ट म्हणजे....HARLEQUIN🎬",
    },
    {
      id: 2,
      img:`${images.two}`,
      heading: "🎭 कवडसा २०१९ 🎭",
      text:
        "🎭 एकांकिका : खाप लेखक 🖋 : सलीम शेख. दिग्दर्शक 🎬 : अजय इंगळे, शुभम माथुरकर. कलाकार🎭 : आयुष जोशी, लेण्याद्री साळवे, श्रीहरी कुलकर्णी, साक्षी शिरुडे, निनाद चौलमवार, हर्ष खोंदले, विनय शर्मा, शिवम मालपाणी, सौरभ भोयर,वैदेही इनकने,गणेश उगले, रोहित बेंबडे. 🎭 कवडसा २०१९ 🎭",
    },
    {
      id: 3,
      img:`${images.three}`,
      heading: "🎭 कवडसा २०१७ 🎭",
      text:
        "आणि, कवडसा २०१७ एकांकिका 🎭 : भू भू सर्वोत्कृष्ट अभिनेत्री (प्रथम) 🎭 धनश्री पाटकर",
    },
    {
      id: 4,
      img:`${images.four}`,
      heading: "'सर्वोत्कृष्ट अभिनेत्री",
      text:
        "सर्वोत्कृष्ट अभिनेत्री (द्वितीय) 🎭 काजल कुलकर्णी INT&#039 ;२०१७",
    },
    {
      id: 5,
      img:`${images.five}`,
      heading: "सर्वोत्कृष्ट एकांकिका",
      text:
        "आणि, INT&#039 ;२०१७ 🎭 सर्वोत्कृष्ट एकांकिका (द्वितीय) एकांकिका : 'पॉज' महाविद्यालय : व्ही.जे.टी.आय ",
    },
    {
      id: 6,
      img:`${images.six}`,
      heading: "शहाण्या माणसाचा चष्मा",
      text:
        "एकांकिका 🎭 शहाण्या माणसाचा चष्मा दिग्दर्शक 🎬 प्रशांत निगडे लेखक 🖋 प्रशांत निगडे INT&#039 ;२०१५",
    },
  ]);
  return (
    <div className="services">
      <div className="container">
        <div className="services__header">
          <div className="common">
            <h1 className=" animate-charcter">{header.subHeading}</h1>
            <div className="commonBorder"></div>
          </div>
          <div className="row bgMain">
            {state.map((info) => (
              <div className="col-4 bgMain" data-aos="zoom-in-right" data-aos-duration="2000">
                <div className="services__box">
                <img src = {info.img} alt="natya images" data-aos="zoom-in-up" data-aos-duration="3000"  style={{ border: "2px solid rgb(255, 174, 66",margin:"5%",borderRadius:"5%"}}></img>
                  <div className="services__box-header">{info.heading}</div>
                  <div className="services__box-p">{info.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
