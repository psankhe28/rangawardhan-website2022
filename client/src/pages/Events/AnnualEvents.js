import React from 'react'
import './event.css'
import img from './images'



const AnnualEvents = () => {
  return (
    <div>
         <section>
    <section>
      <div class="yearly_events">
        <h1 class="year_name">वार्षिक महोत्सव</h1>
      </div>
      <section id="all_events">
        <section class="allevents">
          <div class="events">
            <div class="allevent_card">
              <div class="event_info">
                <div class="event_info_img">
                  <img src={img.launch} alt=""/>
                </div>
                <div class="event_info_name">
                  <h4>उद्घाटन</h4>
                  <h5>वर्षभर रंगवर्धन राबवत असणारे उपक्रम, त्याची माहिती देण्यासाठी आणि रंगवर्धनची सर्वांना ओळख करून देण्यासाठी आयोजित केला जाणारा सर्वात पहिला वहिला कार्यक्रम म्हणजे Launch ! या कार्यक्रमाला मोठे पाहुणे आमंत्रित करून त्यांच्या शुभहस्ते रंगवर्धनच्या प्रवासाला ते हिरवा कंदिल देतात आणि या सोहळ्यात संपूर्ण पारंपारिक पोशाखात नटलेलं VJTI !</h5>
                </div>
              </div>
            </div>
            <div class="allevent_card">
              <div class="event_info">
                <div class="event_info_img">
                  <img src={img.treasure} alt=""/>
                </div>
                <div class="event_info_name">
                  <h4>ट्रेजर हंट</h4>
                  <h5>भटकंती महाविद्यालयाची , मस्तीची. सुरुवातीला fresher म्हणून आल्यावर आपल्याला पुर्ण campus कधीच माहीत नसतो. Campus चा कोपरा न कोपरा बघून नवीन लोकांबरोबर ओळख करून सांघिक कार्याचे प्रदर्शन अर्थातच Treasure Hunt. बुद्धीमत्ता आणि तर्क-वितर्क यांची सांगड घालत एक गट म्हणून कोडं सोडवताना VJTI ची सफर झाल्याशिवाय राहात नाही !</h5>
                </div>
              </div>
            </div>
            <div class="allevent_card">
              <div class="event_info">
                <div class="event_info_img">
                  <img src={img.aplakatta} alt=""/>
                </div>
                <div class="event_info_name">
                  <h4>आपला कट्टा</h4>
                  <h5>स्वयंप्रकाशी तार्यालाही लुकलुकण्यासाठी आभाळाची साथ हवी असते , तसेच कलाकारांनाही नृत्य, संगीत,
                    कथाकथन , हास्य , कवितापठण या सादरिकरनासाठी रंगमंचाची आवश्यकता असते आणि हेच व्यासपीठ आहे 'आपला कट्टा'. आपल्यातली कला प्रदर्शन करून सर्वांसमोर दाखवण्याची ही रंगवर्धनने दिलेली संधी सहसा कोणी सोडत नाही !
                  </h5>
                </div>
              </div>
            </div>
            <div class="allevent_card">
              <div class="event_info">
                <div class="event_info_img">
                  <img src={img.social} alt=""/>
                </div>
                <div class="event_info_name">
                  <h4>Social Drive</h4>
                  <h5>सांस्कृतिक वारसा जपत सामाजिक भान सुद्धा रंगवर्धन दरवर्षी जपत असतो. अनाथालय, वृद्धाश्रम अशा ठिकाणी भेटी देऊन तिथल्या निराधार लोकांना थोडासा आधार, मनोरंजन, विरंगुळा आणि भेटवस्तू देण्याचं काम प्रत्येक वर्षी रंगवर्धन करायला रंगवर्धन विसरत नाही. त्यांच्या चेहऱ्यावरील समाधान आणि आनंद पाहून आपल्याला भरून आल्याशिवाय राहत नाही !</h5>
                </div>
              </div>
            </div>
            <div class="allevent_card">
              <div class="event_info">
                <div class="event_info_img">
                  <img src={img.shivjayanti} alt=""/>
                </div>
                <div class="event_info_name">
                  <h4>शिवजयंती</h4>
                  <h5>VJTI मध्ये रंगवर्धन समिती कार्यरत असताना शिवजयंती महोत्सव देखील मोठ्या उत्साहात साजरा होतो. तारखेप्रमाणे आणि तिथीप्रमाणे दोन्ही दिवस कार्यक्रम आखले जातात. कथा, कविता, भाषणे, पोवाडे, संगीत अशा अनेक प्रकारच्या कार्यक्रमांतून अखंड हिंदूस्थानचे दैवत छत्रपती शिवाजी महाराज यांना मानवंदना आणि कृतज्ञता व्यक्त केली जाते.</h5>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </section>
    </section>
    </div>
  )
}

export default AnnualEvents