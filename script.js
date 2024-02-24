let projectSection = document.querySelector('main');
let footerSection = document.querySelector('footer');
 
    
  window.addEventListener('scroll',()=>{activate(projectSection)
                                activate(footerSection)});

  function activate(section ){
      const  windowheight = window.innerHeight;
      const revealPoint = 130;
     let topHeight = section.getBoundingClientRect().top;
     const triggerHeight = windowheight - revealPoint //450 in mypc
     if(topHeight < triggerHeight ){
        section.classList.add("active");
     }
     else{
        section.classList.remove('active');
     }
  }

  const header = document.querySelector('header');
  document.onload(header.classList.add('visible'));
  
