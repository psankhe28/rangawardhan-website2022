import { React } from "react";
import images from "../../../constants/images.js"
import "./Header.css";
import {FaPaperPlane} from "react-icons/fa"
import Navbar from "../../../components/Navbar/Navbar";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <header className="header flex" id="header">
    <Navbar />
    <div className="container" >
        <div className="header-content grid text-center py-2 text-white" >
            <div className="header-content-left" data-aos = "fade-right">
            <h1 className="text-upper header-title">Rangawardhan</h1>
            <p className="text">रंगवर्धन हा VJTI, मुंबई चा चार दिवसीय वार्षिक मराठी उत्सव आहे. जो मराठी आणि मराठी नाटक, साहित्य, संगीत आणि इतर कला प्रकार यांच्याप्रचारासाठी समर्पित आहे. रंगवर्धनमार्फत डिसेंबर महिन्यात विविध प्रदर्शन,चर्चासत्रे आणि स्पर्धा आयोजित केल्या जातात.महाविद्यालयीन कार्यक्रमात नाट्य आणि संगीत सादरीकरण केले जाते. मराठी संस्कृतीचे जतन आणि आधुनिकीकरणाशी जुळवून घेऊन गेल्या वर्षांमध्ये रंगवर्धनने प्रत्येकाच्या हृदयात स्वतःसाठी एक विशेष स्थान निर्माण केले आहे. संस्कृती ही मानवी जीवनाचे हृदय आणि आत्मा आहे आणि म्हणूनच त्याचे जतन करणे हे आपले कर्तव्य आहे. हे लक्षात घेऊन रंगवर्धनची स्थापना २००० साली झाली आणि तेव्हापासून रंगवर्धन परिवारातर्फे मराठी संस्कृती साजरी केली जात आहे.रंगवर्धने कला, साहित्य आणि अशा अनेक क्षेत्रांमध्ये मराठीला महत्त्व दिले आहे. विविध स्पर्धांच्या माध्यमातून मराठी संस्कृतीचे प्रदर्शन करताना आणि नामवंत व्यक्तींच्या उपस्थितीने धन्य झाल्यामुळे रंगवर्धन दरवर्षी काहीतरी नवीन आणि प्रासंगिक देण्याचा प्रयत्न करत आहे.</p>
            <Link to="/about" className="btn btn-dark">
                <span>view more</span>
                <FaPaperPlane />
            </Link>
            </div>
            <div className="header-content-right" data-aos ="fade-left">
            <img src= {images.VJTI} alt="vjti image" />
            </div>
        </div>
    </div>
    </header>
  )
}

export default Header