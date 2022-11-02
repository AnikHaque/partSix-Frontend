import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Faq = () => {
  const [ispoen, setIsopen] = useState(false);
  const [ispoentw, setIsopentw] = useState(false);
  const [ispoent, setIsopent] = useState(false);
  const [ispoenfo, setIsopenfo] = useState(false);
  const [ispoenf, setIsopenf] = useState(false);
  const [ispoens, setIsopens] = useState(false);
 

  return (
    <div className="container mx-auto p-2 px-6 overflow-hidden">
       <div className='mb-[100px] mt-[30px]'>
       <p className='text-center text-4xl uppercase font-bold  '>Frequently asked  <span className='text-[#1b82e2]'> (questions) </span>  </p>
        <p className='text-center mt-1'> if your have any query regarding of us. Hope you well get your ans from here.</p>
       </div>
      <div className="hidden md:block ">
      <div class="accordion horizontal">
		  <section id="about">
		      <h2><a href="#about">lorem 12</a></h2>
		      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id lobortis massa. Nunc viverra velit leo, sit amet elementum mi. Fusce posuere nunc a mi tempus malesuada. Curabitur facilisis rhoncus eros eget placerat. Aliquam semper mauris sit amet justo tempor nec lacinia magna molestie. Etiam placerat congue dolor vitae adipiscing. Aliquam ac erat lorem, ut iaculis justo. Etiam mattis dignissim gravida. Aliquam nec justo ante, non semper mi. Nulla consectetur interdum massa, vel porta enim vulputate sed. Maecenas elit quam, egestas eget placerat non, fringilla vel eros. Nam vehicula elementum nulla sed consequat. Phasellus eu erat enim. Praesent at magna non massa dapibus scelerisque in eu lorem.</p>
		  </section>
		  <section id="services">
		      <h2><a href="#services">okay a</a></h2>
		      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id lobortis massa. Nunc viverra velit leo, sit amet elementum mi. Fusce posuere nunc a mi tempus malesuada. Curabitur facilisis rhoncus eros eget placerat. Aliquam semper mauris sit amet justo tempor nec lacinia magna molestie. Etiam placerat congue dolor vitae adipiscing. Aliquam ac erat lorem, ut iaculis justo. Etiam mattis dignissim gravida. Aliquam nec justo ante, non semper mi. Nulla consectetur interdum massa, vel porta enim vulputate sed. Maecenas elit quam, egestas eget placerat non, fringilla vel eros. Nam vehicula elementum nulla sed consequat. Phasellus eu erat enim. Praesent at magna non massa dapibus scelerisque in eu lorem.</p>
		  </section>
		  <section id="blog">
		      <h2><a href="#blog">going well</a></h2>
		      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id lobortis massa. Nunc viverra velit leo, sit amet elementum mi. Fusce posuere nunc a mi tempus malesuada. Curabitur facilisis rhoncus eros eget placerat. Aliquam semper mauris sit amet justo tempor nec lacinia magna molestie. Etiam placerat congue dolor vitae adipiscing. Aliquam ac erat lorem, ut iaculis justo. Etiam mattis dignissim gravida. Aliquam nec justo ante, non semper mi. Nulla consectetur interdum massa, vel porta enim vulputate sed. Mue in eu lorem.</p>
		  </section>
		  <section id="portfolio">
		      <h2><a href="#portfolio">no problem ssss</a></h2>
		      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id lobortis massa. Nunc viverra velit leo, sit amet elementum mi. Fusce posuere nunc a mi tempus malesuada. Curabitur facilisis rhoncus eros eget placerat. Aliquam semper mauris sit amet justo tempor nec lacinia magna molestie. Etiam placerat congue dolor vitae adipiscing. Aliquam ac erat lorem, ut iaculis justo. Etiam mattis dignissim gravida. Aliquam nec justo ante, non semper mi. Nulla consectetur interdum massa, vel porta enim vulputate sed. Maecenas elit quam, egestas eget placerat non, fringilla vel eros. Nam vehicula elementum nulla sed consequat. Phasellus eu erat enim. Praesent at magna non massa dapibus scelerisque in eu lorem.</p>
		  </section>
		  <section id="contact">
		      <h2><a href="#contact">Cssssss</a></h2>
		      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id lobortis massa. Nunc viverra velit leo, sit amet elementum mi. Fusce posuere nunc a mi tempus malesuada. Curabitur facilisis rhoncus eros eget placerat. Aliquam semper mauris sit amet justo tempor nec lacinia magna molestie. Etiam placerat congue dolor vitae adipiscing. Aliquam ac erat lorem, ut iaculis justo. Etiam mattis dignissim gravida. Aliquam nec justo ante, non semper mi. Nulla consectetur interdum massa, vel porta enim vulputate sed. Maecenas elit quam, egestas eget placerat non, fringilla vel eros. Nam vehicula elementum nulla sed consequat. Phasellus eu erat enim. Praesent at magna non massa dapibus scelerisque in eu lorem.</p>
		  </section>
		 </div>
      </div>

      {/* ==============
      accrodian for mobile 
      ==================*/}
      <div className="md:hidden">
  <div class="tabs-box">
    <div class="acord">
        <label for="tb-one" class="bg-one">
         
          can i access from any where
        </label>
        <input type="checkbox" name="mytabs" id="tb-one"/>
        <i class="fa fa-chevron-circle-down"></i>
        <div class="content" >
  <span class="square"></span>

        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </div>
    </div>

    <div class="acord">
        <label for="tb-two"  class="bg-two">
        
          acord two
        </label>
        <input type="checkbox" name="mytabs" id="tb-two"/>
        <i class="fa fa-chevron-circle-down"></i>
        <div class="content">
          <span class="square"></span>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </div>
    </div>

    <div class="acord">
        <label for="tb-three"  class="bg-three">
       
          acord three
        </label>
        <input type="checkbox" name="mytabs" id="tb-three"/>
        <i class="fa fa-chevron-circle-down"></i>
        <div class="content">
          <span class="square"></span>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </div>
    </div>


    <div class="acord">
        <label for="tb-four"  class="bg-four">
          
          acord four
        </label>
        <input type="checkbox" name="mytabs" id="tb-four"/>
        <i class="fa fa-chevron-circle-down"></i>
        <div class="content">
          <span class="square"></span>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </div>
    </div>

    <div class="acord">
        <label for="tb-five"  class="bg-five">
         
          acord five
        </label>
        <input type="checkbox" name="mytabs" id="tb-five"/>
        <i class="fa fa-chevron-circle-down"></i>
        <div class="content">
          <span class="square"></span>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </div>
    </div>

  

  </div>
      </div>
       
    </div>
  );
};

export default Faq;
