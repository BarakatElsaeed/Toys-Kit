import React, { useState } from "react";
import "./faq.scss";
import SecoundHeader from "../../components/SecoundHeader/SecoundHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardQuestion } from "@fortawesome/free-solid-svg-icons";


export default function Faq() {
  const [toggel,settoggel]=useState(false)

  function toggelhandler(){
    settoggel(!toggel)

  }
  
  return (
    <>
    <div className="page-content">
      <div className="header__">
        <SecoundHeader name="FAQ" />
      </div>

      <div className="content">
        <div className="cont__"  >
          <h3 onClick={toggelhandler}>
            <FontAwesomeIcon icon={faClipboardQuestion} /> How will my order be
            delivered to me?
          </h3>
           <p>
            Tincidunt praesent semper feugiat nibh sed pulvinar. Vel pretium
            lectus quam id leo in. Fermentum dui faucibus in ornare quam viverra
            orci. Lectus arcu bibendum at varius. Ullamcorper velit sed
            ullamcorper morbi tincidunt ornare massa eget egestas. In iaculis
            nunc sed augue lacus. Cursus turpis massa tincidunt dui ut ornare.
            Malesuada nunc vel risus commodo viverra maecenas accumsan lacus
            vel. In nisl nisi scelerisque eu ultrices vitae auctor eu augue.
            Eget mi proin sed libero enim. At quis risus sed vulputate odio ut
            enim. Venenatis cras sed felis eget velit aliquet sagittis id. Lacus
            sed viverra tellus in. Enim tortor at auctor urna nunc.
          </p>
        
       
        </div>
        <div className="cont__">
          <h3 onClick={toggelhandler}>
            {" "}
            <FontAwesomeIcon icon={faClipboardQuestion} /> What do I need to
            know?
          </h3>
            <p>
            Tincidunt praesent semper feugiat nibh sed pulvinar. Vel pretium
            lectus quam id leo in. Fermentum dui faucibus in ornare quam viverra
            orci. Lectus arcu bibendum at varius. Ullamcorper velit sed
            ullamcorper morbi tincidunt ornare massa eget egestas. In iaculis
            nunc sed augue lacus. Cursus turpis massa tincidunt dui ut ornare.
            Malesuada nunc vel risus commodo viverra maecenas accumsan lacus
            vel. In nisl nisi scelerisque eu ultrices vitae auctor eu augue.
            Eget mi proin sed libero enim. At quis risus sed vulputate odio ut
            enim. Venenatis cras sed felis eget velit aliquet sagittis id. Lacus
            sed viverra tellus in. Enim tortor at auctor urna nunc.
          </p>
          
        </div>
        <div className="cont__">
          <h3 onClick={toggelhandler}>
            {" "}
            <FontAwesomeIcon icon={faClipboardQuestion} /> How will I know if
            order is placed successfully?
          </h3>
          <p>
            Arcu vitae elementum curabitur vitae nunc. Pharetra sit amet aliquam
            id diam maecenas ultricies mi. Purus gravida quis blandit turpis.
            Faucibus scelerisque eleifend donec pretium vulputate sapien nec
            sagittis. Faucibus a pellentesque sit amet porttitor eget dolor. Nam
            aliquam sem et tortor consequat id. Pellentesque sit amet porttitor
            eget dolor. Morbi tristique senectus et netus et malesuada fames ac
            turpis. Ut pharetra sit amet aliquam id diam maecenas ultricies.
            Vulputate eu scelerisque felis imperdiet proin fermentum leo vel
            orci
          </p>
        </div>
        <div className="cont__">
          <h3 onClick={toggelhandler}>
            {" "}
            <FontAwesomeIcon icon={faClipboardQuestion} /> How do I check the
            status of my order?
          </h3>
          <p>
            Mauris vitae ultricies leo integer. Mattis nunc sed blandit libero
            volutpat sed cras ornare. At consectetur lorem donec massa sapien
            faucibus et molestie. Ac ut consequat semper viverra nam libero.
            Dignissim sodales ut eu sem integer vitae justo. Tristique
            sollicitudin nibh sit amet commodo nulla facilisi nullam. Vitae
            semper quis lectus nulla at volutpat diam ut. Mauris rhoncus aenean
            vel elit. Quis risus sed vulputate odio ut enim blandit volutpat.
            Adipiscing commodo elit at imperdiet dui accumsan. Quam quisque id
            diam vel quam elementum. Viverra mauris in aliquam sem fringilla ut
            morbi tincidunt.
          </p>
        </div>
        <div className="cont__">
          <h3 onClick={toggelhandler}>
            {" "}
            <FontAwesomeIcon icon={faClipboardQuestion} />
            Can I cancel my order?
          </h3>
          <p>
            Tortor at risus viverra adipiscing at in tellus integer. Id ornare
            arcu odio ut sem nulla pharetra. Laoreet non curabitur gravida arcu.
            Ut lectus arcu bibendum at varius vel. Lectus nulla at volutpat diam
            ut venenatis tellus in. Lectus magna fringilla urna porttitor
            rhoncus dolor purus non enim. Eget felis eget nunc lobortis mattis
            aliquam faucibus. Malesuada fames ac turpis egestas sed tempus urna
            et. Tristique sollicitudin nibh sit amet. Vivamus arcu felis
            bibendum ut tristique et egestas quis ipsum.
          </p>
        </div>
        <div className="cont__">
          <h3>
            {" "}
            <FontAwesomeIcon icon={faClipboardQuestion} />
            Do you allow exchanges?
          </h3>
          <p>
            Mauris pharetra et ultrices neque ornare aenean euismod. At ultrices
            mi tempus imperdiet nulla malesuada pellentesque elit eget. Odio
            aenean sed adipiscing diam donec adipiscing tristique risus nec.
            Blandit aliquam etiam erat velit scelerisque in dictum. Vulputate ut
            pharetra sit amet aliquam id diam maecenas ultricies. Aliquet eget
            sit amet tellus cras adipiscing enim. Ultricies tristique nulla
            aliquet enim tortor at auctor. In aliquam sem fringilla ut morbi
            tincidunt augue interdum velit. Faucibus vitae aliquet nec
            ullamcorper sit amet risus nullam eget.
          </p>
        </div>
        <div className="cont__">
          <h3>
            {" "}
            <FontAwesomeIcon icon={faClipboardQuestion} />
            What are the shipping charges?
          </h3>
          <p>
            Donec pretium vulputate sapien nec sagittis aliquam malesuada
            bibendum arcu. Sed vulputate mi sit amet mauris commodo quis
            imperdiet. At lectus urna duis convallis convallis. Malesuada proin
            libero nunc consequat interdum varius sit amet. Ut aliquam purus sit
            amet. Eu feugiat pretium nibh ipsum consequat nisl vel pretium. Sit
            amet mauris commodo quis imperdiet massa. Cras semper auctor neque
            vitae. Id volutpat lacus laoreet non curabitur. Adipiscing bibendum
            est ultricies integer quis auctor elit. Orci ac auctor augue mauris
            augue neque.
          </p>
        </div>
      </div>
      </div>
    </>
  );
}
