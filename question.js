function Question1(){
    var question1 = createElement("h2","What is your father's hobby ?");
    question1.position(width/2+250,300);

    var answerBar1 = createInput("Enter Your Answer Here");
    answerBar1.position(width/2+300,400);

    var submit1 = createButton("Submit Your Answer");
    submit1.position(width/2+320,450);

    submit1.mousePressed(()=>{
        var answer1 = answerBar1.value();
        arr.push(answer1);
        question1.hide();
        answerBar1.hide();
        submit1.hide();
        Question2();      
    })
    
}

function Question2(){
    var question2 = createElement("h2","Memorable Day with your Father ?");
    question2.position(width/2+200,350); 

    var answerBar2 = createInput("Enter Your Answer Here");
    answerBar2.position(width/2+300,450);

    var submit2 = createButton("Submit Your Answer");
    submit2.position(width/2+320,500);

    submit2.mousePressed(()=>{
        var answer2 = answerBar2.value();
        arr.push(answer2);
        question2.hide();
        answerBar2.hide();
        submit2.hide();
        Question3();
    });
    
}

function Question3(){
    var question3 = createElement("h2","What is your Father's favourite sport ?");
    question3.position(width/2+150,300); 

    var option31 = createButton("Badminton");

    option31.position(width/2+300,400);
    var option32 = createButton("Cricket");

    option32.position(width/2+300,450);
    var option33 = createButton("Football");

    option33.position(width/2+300,500);
    var option34 = createButton("Boxing");

    option34.position(width/2+300,550);

    option31.mousePressed(()=>{
        arr.push("Badmintion");
        question3.hide();
        option31.hide();
        option32.hide();
        option33.hide();
        option34.hide();
        Question4();
    });

    option32.mousePressed(()=>{
        arr.push("Cricket");
        question3.hide();
        option31.hide();
        option32.hide();
        option33.hide();
        option34.hide();
        Question4();
    });

    option33.mousePressed(()=>{
        arr.push("Football");
        question3.hide();
        option31.hide();
        option32.hide();
        option33.hide();
        option34.hide();
        Question4();
    });

    option34.mousePressed(()=>{
        arr.push("Boxing");
        question3.hide();
        option31.hide();
        option32.hide();
        option33.hide();
        option34.hide();
        Question4();
    });

} 

function Question4(){
    var question4 = createElement("h2","Which is your Father's favorite drink ?");
    question4.position(width/2+150,300);

    var option41 = createButton("Tea");
    option41.position(width/2+300,400);

    var option42 = createButton("Coffee");
    option42.position(width/2+300,450);

    var option43 = createButton("Juice");
    option43.position(width/2+300,500);

    var option44 = createButton("Buttermilk");
    option44.position(width/2+300,550);


    option41.mousePressed(()=>{
        arr.push("Tea");
        question4.hide();
        option41.hide();
        option42.hide();
        option43.hide();
        option44.hide();
        Question5();
    });

    option42.mousePressed(()=>{
        arr.push("Coffee");
        question4.hide();
        option41.hide();
        option42.hide();
        option43.hide();
        option44.hide();
        Question5();
    });

    option43.mousePressed(()=>{
        arr.push("Juice");
        question4.hide();
        option41.hide();
        option42.hide();
        option43.hide();
        option44.hide();
        Question5();
    });

    option44.mousePressed(()=>{
        arr.push("Buttermilk");
        question4.hide();
        option41.hide();
        option42.hide();
        option43.hide();
        option44.hide();
        Question5();
    });
}

function Question5(){
    var question5 = createElement("h2","Which phone brand does your Father like the most ?");
    question5.position(width/2+150,300); 

    var option51 = createButton("Samsung");
    option51.position(width/2+250,400);

    var option52 = createButton("Oppo");
    option52.position(width/2+250,450);

    var option53 = createButton("Vivo");
    option53.position(width/2+250,500);

    var option54 = createButton("Apple");
    option54.position(width/2+250,550);

    var option55 = createButton("Xiaomi");
    option55.position(width/2+250,600);

    var option56 = createButton("Nokia");
    option56.position(width/2+450,400);

    var option57 = createButton("Lenovo");
    option57.position(width/2+450,450);

    var option58 = createButton("Sony");
    option58.position(width/2+450,500);

    var option59 = createButton("Realme");
    option59.position(width/2+450,550); 

    var option510 = createButton("Huawei");
    option510.position(width/2+450,600);



    option51.mousePressed(()=>{
        arr.push("Samsung");
        question5.hide();
        option51.hide();
        option52.hide();
        option53.hide();
        option54.hide();
        option55.hide();
        option56.hide();
        option57.hide();
        option58.hide();
        option59.hide();
        option510.hide();
        Question6();
    });

    option52.mousePressed(()=>{
        arr.push("Oppo");
        question5.hide();
        option51.hide();
        option52.hide();
        option53.hide();
        option54.hide();
        option55.hide();
        option56.hide();
        option57.hide();
        option58.hide();
        option59.hide();
        option510.hide();
        Question6();
    });

    option53.mousePressed(()=>{
        arr.push("Vivo");
        question5.hide();
        option51.hide();
        option52.hide();
        option53.hide();
        option54.hide();
        option55.hide();
        option56.hide();
        option57.hide();
        option58.hide();
        option59.hide();
        option510.hide();
        Question6();
    });

    option54.mousePressed(()=>{
        arr.push("Apple");
        question5.hide();
        option51.hide();
        option52.hide();
        option53.hide();
        option54.hide();
        option55.hide();
        option56.hide();
        option57.hide();
        option58.hide();
        option59.hide();
        option510.hide();
        Question6();
    });

    option55.mousePressed(()=>{
        arr.push("Xiaomi");
        question5.hide();
        option51.hide();
        option52.hide();
        option53.hide();
        option54.hide();
        option55.hide();
        option56.hide();
        option57.hide();
        option58.hide();
        option59.hide();
        option510.hide();
        Question6();
    });

    option56.mousePressed(()=>{
        arr.push("Nokia");
        question5.hide();
        option51.hide();
        option52.hide();
        option53.hide();
        option54.hide();
        option55.hide();
        option56.hide();
        option57.hide();
        option58.hide();
        option59.hide();
        option510.hide();
        Question6();
    });

    option57.mousePressed(()=>{
        arr.push("Lenovo");
        question5.hide();
        option51.hide();
        option52.hide();
        option53.hide();
        option54.hide();
        option55.hide();
        option56.hide();
        option57.hide();
        option58.hide();
        option59.hide();
        option510.hide();
        Question6();
    });

    option58.mousePressed(()=>{
        arr.push("Sony");
        question5.hide();
        option51.hide();
        option52.hide();
        option53.hide();
        option54.hide();
        option55.hide();
        option56.hide();
        option57.hide();
        option58.hide();
        option59.hide();
        option510.hide();
        Question6();
    });

    option59.mousePressed(()=>{
        arr.push("Realme");
        question5.hide();
        option51.hide();
        option52.hide();
        option53.hide();
        option54.hide();
        option55.hide();
        option56.hide();
        option57.hide();
        option58.hide();
        option59.hide();
        option510.hide();
        Question6();
    });

    option510.mousePressed(()=>{
        arr.push("Huawei");
        question5.hide();
        option51.hide();
        option52.hide();
        option53.hide();
        option54.hide();
        option55.hide();
        option56.hide();
        option57.hide();
        option58.hide();
        option59.hide();
        option510.hide();
        Question6();
    });
    function Question6(){
        var question6 = createElement("h2","What is your Father's favorite colour?");
        question6.position(width/2+200,300); 
    
        var answerBar6 = createInput("Enter Your Answer Here");
        answerBar6.position(width/2+300,400);
    
        var submit6 = createButton("Submit Your Answer");
        submit6.position(width/2+320,450);
    
        submit6.mousePressed(()=>{
            var answer6 = answerBar6.value();
            arr.push(answer6);
            question6.hide();
            answerBar6.hide();
            submit6.hide();
            ;
        });
        
    }
    endButton.hide()
      var thank = createElement("h1","Thank you:)")
      thank.position(690,350);
    
}

      
      