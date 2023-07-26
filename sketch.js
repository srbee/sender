let x1=40, dx=30,dy=30
//x1,y1:first row,x2:second row & so on
//dx dist bet keys
 x2=x1+15
 x3=x2+30
 x4=x3+10
 let y1=180
 function setup() {
  canvas=createCanvas(400, 300);
   canvas.parent('canvasParent')
  t0=millis()
  tstart=0
  flag=0
  mySliders()
  osc=new p5.Oscillator()
  f=freq_slider.value()
  osc.freq(f)
  dit_dur=spd_slider.value();
  dah_dur=dit_dur*3
  touchKeyboard()
  background('coral')
  //myTitle()
   //inp=createInput('')
   //inp.position(100,230)
   //inp.input(myInputHandler)
}// end of function setup()

function draw() {
  myTitle()
  
  addr="https://en.wikipedia.org/wiki/Morse_code/"
  link_text="What is Morse Code ?"
  myCreateLink(addr,link_text,150,330)
}// end of function draw()

function dit(){
  if(cbox.checked()==true){osc.start()}else {osc.stop()}
  
  //end of if
  
  t1=millis()
  while((millis()-t1) < dit_dur){} //end of if
  osc.stop(1/100000)
  sp(3)
}//end of function dot()

function dah(){
  if(cbox.checked()==true){osc.start()}else {osc.stop()}
  t1=millis()
  while((millis()-t1) < dah_dur){} //end of if
  osc.stop(1/1000000)
  sp(3)
}//end of function dash()

function sp(d){
  t1=millis()
  while((millis()-t1) < d*dit_dur){} //end of if
}//end of function dot()

function myMorse(kode) {
   //print('inside myMorse kode='+kode)
  if(kode==" ") {sp(10)}
  if(kode=="=") {sp(5)}
  if(kode=="a") {dit();dah()}
  if(kode=="b") {dah();dit();dit();dit()}
  if(kode=="c" ) {dah();dit();dah();dit()}
  if(kode=="d" ) {dah();dit();dit()}
  if(kode=="e") {dit()}
  if(kode=="f") {dit();dit();dah();dit()}
  if(kode=="g" ) {dah();dah();dit()}
  if(kode=="h") {dit();dit();dit();dit()}
  if(kode=="i" ) {dit();dit()}
  if(kode=="j" ) {dit();dah();dah();dah()}
  if(kode=="k" ) {dah();dit();dah()}
  if(kode=="l" ) {dit();dah();dit();dit()}
  if(kode=="m" ) {dah();dah()}
  if(kode=="n" ) {dah();dit()}
  if(kode=="o" ) {dah();dah();dah()} 
  if(kode=="p" ) {dit();dah();dah();dit()}
  
  if(kode=="q" ) {dah();dah();dit();dah()}
  if(kode=="r" ) {dit();dah();dit()}
  if(kode=="s" ) {dit();dit();dit()}
  if(kode=="t" ) {dah()}
  if(kode=="u" ) {dit();dit();dah()}
  if(kode=="v" ) {dit();dit();dit();dah()}
  if(kode=="w" ) {dit();dah();dah()}
  if(kode=="x" ) {dah();dit();dit();dah()}
  if(kode=="y" ) {dah();dit();dah();dah()}
  if(kode=="z" ) {dah();dah();dit();dit()}
  if(kode=="?" ) {dit();dit();dah();dah();dit();dit()}
  if(kode==1 ) {dit();dah();dah();dah(),dah()}
  if(kode==2 ) {dit();dit();dah();dah(),dah()}
  if(kode==3 ) {dit();dit();dit();dah(),dah()}
  if(kode==4 ) {dit();dit();dit();dit(),dah()}
  if(kode==5 ) {dit();dit();dit();dit(),dit()}
  if(kode==6 ) {dah();dit();dit();dit(),dit()}
  if(kode==7 ) {dah();dah();dit();dit(),dit()}
  if(kode==8 ) {dah();dah();dah();dit(),dit()}
  if(kode==9 ) {dah();dah();dah();dah(),dit()}
  if(kode==0 ) {dah();dah();dah();dah(),dah()}
  
  //return false;
  // prevent any default behaviour
}//end of function keypressed
 
function touchKeyboard(){
  //1st row of keys
  
  bsos=createButton('TEST')
  bsos.position(x1+4*dx,y1-25)
  bsos.mousePressed(bh3)
  
  b1=createButton('1','1')
  b1.position(x1,y1)
  b1.mousePressed(bh1)
  
  b2=createButton('2','2')
  b2.position(x1+1*dx,y1)
  b2.mousePressed(bh1)
  
  b3=createButton('3','3')
  b3.position(x1+2*dx,y1)
  b3.mousePressed(bh1)
  b4=createButton('4','4')
  b4.position(x1+3*dx,y1)
  b4.mousePressed(bh1)
  b5=createButton('5','5')
  b5.position(x1+4*dx,y1)
  b5.mousePressed(bh1)
  b6=createButton('6','6')
  b6.position(x1+5*dx,y1)
  b6.mousePressed(bh1)
  b7=createButton('7','7')
  b7.position(x1+6*dx,y1)
  b7.mousePressed(bh1)
  b8=createButton('8','8')
  b8.position(x1+7*dx,y1)
  b8.mousePressed(bh1)
  b9=createButton('9','9')
  b9.position(x1+8*dx,y1)
  b9.mousePressed(bh1)
  b0=createButton('0','0')
  b0.position(x1+9*dx,y1)
  b0.mousePressed(bh1)
  //2nd row of keys
  bq=createButton('Q','q')
  bq.position(x1,y1+dy)
  bq.mousePressed(bh1)
  
  bw=createButton('W','w')
  bw.position(x1+dx,y1+dy)
  bw.mousePressed(bh1)
  
  be=createButton('E','e')
  be.position(x1+2*dx,y1+dy)
  be.mousePressed(bh1)
  
  br=createButton('R','r')
  br.position(x1+3*dx,y1+dy)
  br.mousePressed(bh1)
  
  bt=createButton('T','t')
  bt.position(x1+4*dx,y1+dy)
  bt.mousePressed(bh1)
  by=createButton('Y','y')
  by.position(x1+5*dx,y1+dy)
  by.mousePressed(bh1)
  bu=createButton('U','u')
  bu.position(x1+6*dx,y1+dy)
  bu.mousePressed(bh1)
  bi=createButton('I','i')
  bi.position(x1+7*dx,y1+dy)
  bi.mousePressed(bh1)
  bo=createButton('O','o')
  bo.position(x1+8*dx,y1+dy)
  bo.mousePressed(bh1)
  bp=createButton('P','p')
  bp.position(x1+9*dx,y1+dy)
  bp.mousePressed(bh1)
  //3rd row of keys
  ba=createButton('A','a')
  ba.position(x2,y1+2*dy)
  ba.mousePressed(bh1)
  
  bs=createButton('S','s')
  bs.position(x2+dx,y1+2*dy)
  bs.mousePressed(bh1)
  
  bd=createButton('D','d')
  bd.position(x2+2*dx,y1+2*dy)
  bd.mousePressed(bh1)
  
  bf=createButton('F','f')
  bf.position(x2+3*dx,y1+2*dy)
  bf.mousePressed(bh1)
  bg=createButton('G','g')
  bg.position(x2+4*dx,y1+2*dy)
  bg.mousePressed(bh1)
  
  bh=createButton('H','h')
  bh.position(x2+5*dx,y1+2*dy)
  bh.mousePressed(bh1)
  
  bj=createButton('J','j')
  bj.position(x2+6*dx,y1+2*dy)
  bj.mousePressed(bh1)
  bk=createButton('K','k')
  bk.position(x2+7*dx,y1+2*dy)
  bk.mousePressed(bh1)
  bl=createButton('L','l')
  bl.position(x2+8*dx,y1+2*dy)
  bl .mousePressed(bh1)
  //4th row of keys
  bz=createButton('Z','z')
  bz.position(x3,y1+3*dy)
  bz.mousePressed(bh1)
  bx=createButton('X','x')
  bx.position(x3+1*dx,y1+3*dy)
  bx.mousePressed(bh1)
  bc=createButton('C','c')
  bc.position(x3+2*dx,y1+3*dy)
  bc.mousePressed(bh1)
  bv=createButton('V','v')
  bv.position(x3+3*dx,y1+3*dy)
  bv.mousePressed(bh1)
  bb=createButton('B','b')
  bb.position(x3+4*dx,y1+3*dy)
  bb.mousePressed(bh1)
  bn=createButton('N','n')
  bn.position(x3+5*dx,y1+3*dy)
  bn.mousePressed(bh1)
  bm=createButton('M','m')
  bm.position(x3+6*dx,y1+3*dy)
  bm.mousePressed(bh1)
  bqm=createButton('?','?')
  bqm.position(x3+7*dx,y1+3*dy)
  bqm.mousePressed(bh1)
  
  //space bar
  bsp=createButton('====== CQ CQ CQ ======')
  bsp.position(x4,y1+4*dy)
  bsp.mousePressed(bh2)
}//end of function touchKeyboard

function bh1(){
  //print("inside handler 1 ")
 //myMorse(1)
  myMorse(this.elt.value)
  //do not know what elt means
  // got it through error message in consloe!
}//end of function button handler 1 bh1()
function mySliders(){
  // speed slider
  spd_slider=createSlider(15,100,70,1)
  spd_slider.position(50,120)
  spd_slider.changed(spdHandler)
  // freq slider
  freq_slider=createSlider(400,2000,700,10)
  freq_slider.position(200,120)
  freq_slider.changed(spdHandler) 
  //checkbox for sound
  cbox=createCheckbox('Sound On',true)
  cbox.position(155,51)
  
  //cbox.changed(boxHandler)
  
  
  
}//end of function mySliders()

function spdHandler(){
  dit_dur=115-spd_slider.value()
  dah_dur=dit_dur*3
  freq=freq_slider.value()
  osc.freq(freq)
}//end of function spdHandler()

function myTitle(){
  //push();textSize(20)
  //text('Morse Code',130,35)
  //pop()
  text('Speed',100,49)
  text('Tone',250,49)
  addr2="https://srbee.github.io/srbee"
  linkText2="Back To Main Menu"
  myCreateLink(addr2,linkText2,135,2)
}//end of function 

function myMessage(mess){
  for(i=0;i<mess.length;i++){
  //print(mess[i])
    cc=mess[i]
    //print(cc.charCodeAt(0))
    if(cc==" "){sp(10)} else myMorse(mess[i])
    sp(5)
    //sp(dit_dur)
  }//end of for loop
  
}//end of function myMessage()
 
function bh2(){
  myMessage('cq=cq=cq=d=e=v=u=2=s=r=b=v=u=2=s=r=b=v=u=2=s=r=b=a=r=k')
}//end of function button handler 2 bh3()
function bh3(){
  myMessage('test test test test ')
}//bh stands for button handler end of function button handler  bh3




function myCreateLink(linkAddr,LinkTxt,LinkX,LinkY){
  para="_blank"
  myLink=createA(linkAddr,LinkTxt,para)
  myLink.position(LinkX,LinkY)
}//end of function myCreateLink() 
 
function sendMorse(){
  sandesh=txText.value
  san=sandesh.toLowerCase()
  myMessage(san)
  txText.value=""
}//end of function sendMorse()
 
