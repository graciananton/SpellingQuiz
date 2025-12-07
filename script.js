        //I have to make ,two functions
       // function 1: call the evaluate button after only 4 seconds
       ///function 2: call the next button after 6 seconds 
       const array1=["omega","alpha","apppp","aaass"]                                                        
       const array2=["average","spiritualist","psychic","culture medium","cooked", "lunch","moderately","megilp","substance","liquid","metier","print media","median","moderate","middle","midst","environment",];
       const array3=["photosynthesis","Plato","Potus","Poinsettia","pollination"];
       const happyImgArray = ["happy1.png", "happy2.png", "happy3.png"];
       const sadImgArray   = ["sad1.png",   "sad2.png",   "sad3.png"];
       let levelId="";
       document.getElementById("next").innerHTML="Spelling Quiz";
       document.getElementById('nextButton').style.display='none';
       document.getElementById('restartButton').style.display = 'none';
       document.getElementById('evaluateButton').style.display='none';
       document.getElementById('demo5').style.display='none';
       console.log("The value of levelId is = to " +levelId);
       let maximumClicks=2;
       function limitClicks() {
         maximumClicks++;
         if(maximumClicks==12){
           document.getElementById('evaluateButton').disabled=true;
         }
       }
       //this function clicks the evalauteButtton
       function changeEvaluateCounter(){
         document.getElementById("evaluateButton").click();
       }
       function changeCounter(){
         console.log("Entering the changeCounter() function...")
         document.getElementById('nextButton').click();
         console.log("Leaving the changeCounter() function...")
       }
       function chooseLevel(levelId){
         console.log("The level Id =     " +    levelId+"    at the beginning of the chooseLevelFunction")
         if(levelId==1){
           console.log("level Id is equal to"+levelId)
           levelId=array1;
           console.log("The value of answer is"+levelId)
         }
         if(levelId==2){
           console.log("level Id is equal to"+levelId)
           levelId=array2;
           console.log("The value of answer is"+levelId)
         }
         if(levelId==3){
           console.log("level Id is equal to"+levelId)
           levelId=array3;
           console.log("The value of answer is"+levelId)
         }
         console.log("The value of levelId is = "+ levelId+"at the end of function")
         
         let x="<input type='hidden' id='final' value="+levelId+"></input>";
        console.log("The value of x is = to " + x + "at the end of the function")
         console.log("the length of x is = to " +levelId.length)
         return x;
       }
       function getWord(){
        let a=document.getElementById("final").value;
        a=a.split(",");
        console.log("The value of a is = to final " + a)
        console.log("The length of a is = to " + a.length)
        let rNumber=Math.floor(Math.random()*a.length);
        console.log("the value of rNumber is = to " + rNumber);
        let rWord=a[rNumber];
        console.log("The output of this function is = " +rWord);
        return rWord;
      }
      function charList(word){
        let charList=word.split("");
        console.log("The value of charList is = to "+charList)
        let randomNumber=Math.floor(Math.random()*word.length);
        console.log("The value of randomNumber is = to "+randomNumber);
        let hidden=charList[randomNumber];
        console.log("The value of hidden Character is = to " + hidden);
        charList[randomNumber]="<input type='text' id='aCharacter' value='' size='1' autofocus></input><input type='hidden' id='hiddenCharacter' value="+hidden+"></input>"
        console.log("The value of charList[randomNumber] is = to "+charList[randomNumber])
        let finalWord="";
        console.log("The value of final Word before it is concaded with charList[i] is = to " + finalWord);
        for(i=0;i<charList.length;i++){
            finalWord=finalWord+charList[i];
        }
        console.log("The value of finalWord after it is concaded with charList[i] is = to "+finalWord)
        console.log("End of function charList");
        return finalWord; 
      }
      //end of charList function
     /*This function is used for two purposes:
     1) 
     to check if the user input matches the correct letter for the word
     2)
     to make a correct percentage if the letter is correct or incorrect 
     */
      let counter1=100;
      console.log("The value of counter1 is = to "+ counter1);
      ///updageImageBox();evaluateLetter();limitClicks()
      function evaluateLetter(){
        let hiddenCharacter=document.getElementById("hiddenCharacter").value;
        console.log("The value of hiddenCharacter is = to "+ hiddenCharacter);
        let aCharacter=document.getElementById("aCharacter").value;
        console.log("The value of the aCharacter is"+aCharacter)
        let answer="";
        document.getElementById('evaluationBox').style.display='block';
        document.getElementById('percent').style.display='block';
          if(hiddenCharacter==aCharacter){
            document.getElementById('evaluationBox').innerHTML="The input is correct";
            document.getElementById("percent").innerHTML=counter1+"%";
            console.log("The value of the counter1 is"+counter1)
          }
          else{
            document.getElementById("percent").innerHTML=counter1-10+"%";
            document.getElementById('evaluationBox').innerHTML="The input is incorrect";
            counter1=counter1-10;
            console.log("The value of the counter1 is"+counter1)
          }
       console.log("This is the end of evaluateLetter function")
         }
         function updageImageBox(){
           let correctValue=document.getElementById('hiddenCharacter').value;
           console.log("The value of correctValue is= to " + correctValue);
           let insertedValue=document.getElementById('aCharacter').value;
           console.log("The value of insertedValue is= to " + insertedValue);
           document.getElementById('statusImgBox').style.display='block';
           var sbox       = document.getElementById("statusImgBox");

           var positionId = Math.floor(Math.random() * 2) + 1;
           console.log("The value of positionId is= to " + positionId);
           var imgPath    = "";
           console.log("The value of imgPath is= to " + imgPath);
           if(correctValue==insertedValue){
             imgPath= happyImgArray[positionId];
             console.log("The value of imgPath is= to " + imgPath);
           }
           else if(correctValue != insertedValue){
             imgPath= sadImgArray[positionId];
             console.log("The value of imgPath is= to " + imgPath);
           }
             sbox.innerHTML ="<img src=images/"+imgPath+" width='80px' alt = 'image' height='80px'>";
         }
        
      let counter=0;
      let loopCounter=1;
      let numberCounter=1;
      let buttonCounter=0;
      let evaluateCounter=0;
      /*This function limits the number of times the button
      is clicked and changes the states and question number of 
      the question and status box**/
      function countClicks(){
        console.log("This is the value of counter at the beginning of the A() function"+counter)
        loopCounter++;
        numberCounter++;
        console.log("The value of counter=  to " +counter);
       
        if(counter==0){
         document.getElementById('nextButton').disabled=false;
         document.getElementById('nextButton').click();
         console.log("The value of counter== " +counter)
         //the click() function automatically clicks the button
         counter++;
        }
        else if(counter>=1 && counter < 20){
           console.log("The value of counter at the beginning of the if statement is"+counter)
            document.getElementById('nextButton').disabled=false;
            counter++;
            console.log("The value of counter== " +counter)
         }
     
        else{
            document.getElementById("nextButton").disabled=true;
            document.getElementById('finalScore').style.display='block'
            document.getElementById('finalScore').innerHTML="Your final Score is " + counter1 + "%";
            console.log("The value of counter in the else if statement in the counter == 10 statement is = to " + counter);
        }
        let finalOutput="<input type='hidden' id='finalLoopCounter' value="+loopCounter+"></input>";
        
      }
      function displayCounter(){
       document.getElementById('fraction').style.display='block';
        document.getElementById('number').style.display='block';
        loopCounter=loopCounter-1;
        document.getElementById("fraction").innerHTML="Status"+"<br/>"+loopCounter+"/10";
        numberCounter=numberCounter-1;
        document.getElementById("number").innerHTML="Question<br/>"+"#"+numberCounter;    
      }
      function enableWhenClicked(){
       buttonCounter++;
       if(buttonCounter==1){
         console.log("The value of button Counter== " + buttonCounter)
         document.getElementById('nextButton').style.display = 'none';
         document.getElementById('restartButton').style.display='block';
         document.getElementById('evaluateButton').style.display='none';
      }
     }
     let hiddenCounter=0;
     function hideWhenClicked(){
       hiddenCounter++;
       console.log("The value of hiddenCounter at the after being added by 1 is = to " + hiddenCounter)
       if(hiddenCounter==1){
         console.log("This is inside the if statement of hideWhenClicked() function")
         document.getElementById("title").style.display='none';
         document.getElementById('low').style.display = 'none';
         document.getElementById('high').style.display='none';
         document.getElementById('med').style.display='none';
        
       }
     }
     // this is the end of a() function
      ///console.log("The value of output is "+output)
      
      ///document.getElementById("demo").innerHTML=output;
      ///this.getElemnetById("") is a function
      function groupFunctions(){
       let output1=getWord();
       console.log("the value of output1 is = to " +output1)
       let newWord=charList(output1); 
       console.log("the value of newWord is = to "+ newWord);
       return newWord;
      }
      ///document.getElementById("demo2").innerHTML=newWord;
      /*This function limits the number of times
      the evaluate button is clicked*/
      function refreshPage(){
       /// this line refreshes the title
       document.getElementById("next").innerHTML="Spelling Quiz";
       //lines 369- 372 will allow the low, med, and high buttons to be shown.
       document.getElementById("title").style.display='block';
       document.getElementById('low').style.display = 'block';
       document.getElementById('high').style.display='block';
       document.getElementById('med').style.display='block';
       //line 352 disables the evaluate Button
       document.getElementById('evaluateButton').disabled=false;
       //lines 374-376 make the next, restart, and evaluate buttons disappear
       document.getElementById('nextButton').style.display = 'none';
       document.getElementById('restartButton').style.display='none';
       document.getElementById('evaluateButton').style.display='none';
       //the following lines(358-361) are used to not display the evaluationBox, fraction, number, statusimgBox, and percent;
       document.getElementById('evaluationBox').style.display='none';
       document.getElementById('fraction').style.display='none';
       document.getElementById('number').style.display='none';
       document.getElementById('statusImgBox').style.display='none';
       document.getElementById('percent').style.display='none';
       document.getElementById('finalScore').style.display='none'
       counter=0;
       loopCounter=1;
       numberCounter=1;
       buttonCounter=0;
       hiddenCounter=0;
       counter1=100;
       maximumClicks=2;
      }