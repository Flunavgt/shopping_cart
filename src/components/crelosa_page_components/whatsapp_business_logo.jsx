import React from 'react';
import '../../styles/CrelosaPage-styles/Whatsapp_icon.css';
import BsWhatsapp from './images/Iconos/business_whatsapp_icon_white_green_bg.png';

const WhatsappIcon = () => (
  <>
    <a
      href="https://api.whatsapp.com/send?phone=50231017755"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp_business_logo"
    >
      <img src={BsWhatsapp} alt="" />
    </a>
  </>
);

export default WhatsappIcon;
