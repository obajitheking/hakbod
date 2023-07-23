import React from 'react'
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}


const FAQ = () => {
  return (
    <section className='faq1'>
    <div className='container4'>
        <h3>FAQs</h3>
        <h1>You've got <span>Questions</span></h1>
        <h3>we’ve got answers to all of them</h3>

        <button class="accordion">Do you accept installment payment?</button>
        <div class="panel">
        <p>Lorem ipsum...</p>
        </div>

        <button class="accordion">Will I receive a recognized certificate at the end of my program?</button>
        <div class="panel">
        <p>Lorem ipsum...</p>
        </div>

        <button class="accordion">Do you have a scholarship program?</button>
        <div class="panel">
        <p>Lorem ipsum...</p>
        </div>

        <button class="accordion4">Do you have a scholarship program?</button>
        <div class="panel">
        <p>Lorem ipsum...</p>
        </div>

        
                
    </div>
    </section>
  )
}

export default FAQ