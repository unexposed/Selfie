//This document is Copyright (2014) of Unexposed (referred to as "The Owner") and is the intellectual property of The Owner. Only Minecraftforum.net is able to host any of The Owner's material without the consent of The Owner. It may not be placed on any other web site or otherwise distributed publicly without advance written permission. (Electronic mail is acceptable as long as you wait for a response.)  (my email for asking permission : nizar.mah99@gmail.com) Not any download link should be made... USE MY OWN DOWNLOAD LINK... IF VIDEO IS MADE THE MAKER (ME) OF THE MOD SHOULD BE STATED... you are not allowed to use any of my script except with permission ask or email me

var Runnable = java.lang.Runnable;
var PopupWindow = android.widget.PopupWindow;
var Button = android.widget.Button; 
var Widget = android.widget;
var LinearLayout = Widget.LinearLayout;
var RelativeLayout = Widget.RelativeLayout;
var ViewGroup = android.view.ViewGroup;
var Gravity = android.view.Gravity;
var View = android.view.View;
var AlertDialog = android.app.AlertDialog;
var DialogInterface = android.content.DialogInterface;
var IO = java.io;
var File = IO.File;
var FileOutputStream = IO.FileOutputStream;
var String = java.lang.String;
var Environment = android.os.Environment;
var BufferedReader = IO.BufferedReader;
var FileReader = IO.FileReader;
var StringBuilder = java.lang.StringBuilder;
var Dialog = android.app.Dialog; 
var ScrollView = android.widget.ScrollView;
var EditText = Widget.EditText;
var ImageView = android.widget.ImageView;
var Color = android.graphics.Color;
var ColorDrawable = android.graphics.drawable.ColorDrawable;
var number = android.text.InputType.TYPE_CLASS_NUMBER;

var shotsleft=0;
var dialog;
var entity;
var bckgdi;
var bckgla;
var stla;
var stdi;
var phnstla;
var phnstdi;
var pplfrm;
var pplshow;
var persontag;
var tmiDialog;
var tmiLayout;
var settingsbtn;
var settings2di;
var settings2la;
var sendmsg;
var inputmsg;
var promptmsg;
var gm;
var dn;
var sprint;
var kill;
var heal;
var tmi;
var close;
var b;
var a;
var id;
var amount;
var data;
var ref;
var add;
var scroll;
var selfie;
var picture;
var bckclrbtn;
var red;
var blue;
var white;
var black;
var green;
var gold;
var dpurple;
var aqua;
var lpurple;
var yellow;
var gmsettingsbtn;
var phone;
var screen;
var message;
var call;
var people;
var browser;
var map;
var gps;
var settings;
var run = 1;
var onrun = false;
var plz=0;
var plz=0;
var plxdiff=0;
var plzdiff=0;
var camla;
var camdi;
var person;
var personname;
var prsnx;
var prsny;
var prsnz;
var URL = "http://www.google.com";
var rotation = 0;
var contact1;
var contact1name;
var countdown = 500; 
var time_timers = []; 
var time_nextId = 0;
var tmiwid;
var gmwid;
var sprintwid;
var dnwid;
var healwid; 
var killwid;
var selfieleft = 0;

var GUI = new Widget.PopupWindow();

var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();

var layout = new LinearLayout(ctx);

ModPE.setItem(511,"record_strad",0,"Phone");

Item.addCraftRecipe(511, 1, 0, [265,2,0, 339,1,0, 331,5,0]);

Item.setCategory(511, 2);

function createModPEDir(){

var sdcard = Environment.getExternalStorageDirectory();
var mcpeDir = new java.io.File(sdcard.getAbsolutePath(), "games/com.mojang/");
var modpe = new java.io.File(mcpeDir, "Smart/");
sgDir = new java.io.File(modpe, "Phone/");
sgDir.mkdirs();

}

var Option = {NAME: "name"};

function getOptionAttr(attr){

var sdcard = Environment.getExternalStorageDirectory();
var mcpeDir = new java.io.File(sdcard.getAbsolutePath(), "games/com.mojang/");
var optionsDir = new java.io.File(mcpeDir, "minecraftpe/");
var optionsFile = new java.io.File(optionsDir, "options.txt");
var br = new java.io.BufferedReader(new java.io.FileReader(optionsFile));
var str, prop;
var ln = new Array();

while((str = br.readLine()) != null){

ln.push(str);

}

i = ln.join().replace(",", ":");
prop = i.split(":");

return prop[prop.indexOf(attr) + 1];

}

createModPEDir();

Player.getHealth = function(){

Entity.getHealth(Player.getEntity());

}

function newLevel(){
clientMessage("You have 0 messages");

if(Level.getGameMode()==1){

ctx.runOnUiThread(new Runnable(){
run: function(){
try{

}catch(e){
print("Error: " + e);
}
}
});
}
}

function setTimeout(func, ticks) { 
var id = time_nextId++; 
time_timers.push([id, ticks, func, -1]); 	
return id; 
}


function setInterval(func, ticks) {
var id = time_nextId++; 	
time_timers.push([id, ticks, func, ticks]); 	
return id; 
} 

function clearTimeout(id) {
for (var i = time_timers.length - 1; 
i >= 0; --i) { 		
var t = time_timers[i]; 		
if (t[0] == id) { 			
time_timers.splice(i, 1); 			
break; 		
} 	
} 
} 

function clearInterval(id) { 	
clearTimeout(id); 
} 

function time_runTimers() { 	
for (var i = time_timers.length - 1; 
i >= 0; --i) { 		
var t = time_timers[i]; 		
t[1]--; 		
if (t[1] == 0) { 			
t[2](); 			
if (t[3] == -1) { 				
time_timers.splice(i, 1); 			
} else { 				
t[1] = t[3]; 			
} 		
} 	
} 
}

function phonemenu(){
ctx.runOnUiThread(new Runnable(){
run: function(){
try{

var screen = new LinearLayout(ctx);
var scroll = new ScrollView(ctx);

screen.setOrientation(LinearLayout.VERTICAL);

scroll.addView(screen);

var dialog = new Dialog(ctx);
dialog.setContentView(scroll);
dialog.setTitle("Phone");

var message = new Button(ctx);
var call = new Button(ctx);
var people = new Button(ctx);
var camera = new Button(ctx);
var browser = new Button(ctx);
var settings = new Button(ctx);
var map = new Button(ctx);
var gps = new Button(ctx);
var close = new Button(ctx);

var tmiwid = new Button(ctx);
var gmwid = new Button(ctx);
var sprintwid = new Button(ctx);
var healwid = new Button(ctx);
var killwid = new Button(ctx);
var dnwid = new Button(ctx);

var menula = new LinearLayout(ctx);
                
message.setText("Message");
call.setText("Phone");
people.setText("Contacts");
camera.setText("Camera");
browser.setText("Browser");
settings.setText("Setting");
map.setText("Maps");
gps.setText("GPS"); 
close.setText("Close");
            
//screen.addView(message);
//screen.addView(call);
//screen.addView(people);
screen.addView(camera);
//screen.addView(gps);
//screen.addView(map);
screen.addView(browser);
screen.addView(settings);
screen.addView(close);

menula.addView(dnwid);
menula.addView(healwid);
menula.addView(sprintwid);
menula.addView(gmwid);

if(Level.getGameMode()==0){
gmwid.setText("Survival");
} else if(Level.getGameMode()==1){
gmwid.setText("Creative");
}

var ltime = Level.getTime()-Math.floor(Level.getTime()/19200)*19200;
day = ltime < (19200/2);
night = day?0:8280;

if(day){
dnwid.setText("Day");
} else {
dnwid.setText("Night");
}

if(onrun==false){
sprintwid.setText("Sprint Off");
} else if(onrun==true){
sprintwid.setText("Sprint On");
}

healwid.setText("Heal");

if(Level.getGameMode()==0){
gmwid.setOnClickListener(new View.OnClickListener(){
onClick: function(){
Level.setGameMode(1);
clientMessage("GameMode set to Creative");
}
});
} else if(Level.getGameMode()==1){
gmwid.setOnClickListener(new View.OnClickListener(){
onClick: function(){
Level.setGameMode(0);
clientMessage("GameMode set to Survival");
}
});
}

if(day){
dnwid.setOnClickListener(new View.OnClickListener(){
onClick: function(){
clientMessage("Time set to Night");
Level.setTime(14000);
}
});
} else if(!day){
dnwid.setOnClickListener(new View.OnClickListener(){
onClick: function(){
clientMessage("Time set to Day");
Level.setTime(0);
}
});
}

if(onrun==false){
sprintwid.setOnClickListener(new View.OnClickListener(){
onClick: function(){
clientMessage("Sprinting on");
onrun=true;
}
});
} else if(onrun==true){
sprintwid.setOnClickListener(new View.OnClickListener(){
onClick: function(){
onrun=false;
clientMessage("Sprinting off");
}
});
}

healwid.setOnClickListener(new View.OnClickListener(){
onClick: function() {
Player.setHealth(20);
clientMessage("Fully Healed");
}
});

//var menudi = new PopupWindow(menula, -1, -1);
  
//menudi.showAtLocation(ctx.getWindow().getDecorView(), Gravity.LEFT | Gravity.TOP, 0, 0);

      
dialog.show()

close.setOnClickListener(new View.OnClickListener(){
onClick: function(){
dialog.dismiss();
menudi.dismiss();
}             
});

map.setOnClickListener(new View.OnClickListener(){
onClick: function(){
dialog.dismiss();
}
});

gps.setOnClickListener(new View.OnClickListener(){
onClick: function(){
dialog.dismiss();
gpshow();
}
});

message.setOnClickListener(new View.OnClickListener(){
onClick: function(){

var sendmsg = new Button(ctx);

sendmsg.setText("Send");

var inputmsg = new EditText(ctx);

inputmsg.setHint("Message");

var msgform = new LinearLayout(ctx);
var promptmsg = new Dialog(ctx);

msgform.setOrientation(android.widget.LinearLayout.VERTICAL);
msgform.setBackgroundDrawable(null);

msgform.addView(inputmsg);
msgform.addView(sendmsg);

promptmsg.setContentView(msgform);
promptmsg.setTitle("Send Message");

sendmsg.setWidth(LinearLayout.LayoutParams.WRAP_CONTENT);
sendmsg.setHeight(LinearLayout.LayoutParams.WRAP_CONTENT);

inputmsg.setWidth(LinearLayout.LayoutParams.WRAP_CONTENT);
inputmsg.setHeight(LinearLayout.LayoutParams.WRAP_CONTENT);

promptmsg.show()
dialog.dismiss();

sendmsg.setOnClickListener(new View.OnClickListener(){
onClick: function(){
sendmessage()
promptmsg.dismiss();
}
});

}
});

call.setOnClickListener(new View.OnClickListener(){
onClick: function(){
dialog.dismiss();

}
});

people.setOnClickListener(new View.OnClickListener(){
onClick: function(){
dialog.dismiss();
peopleon()
}
});

camera.setOnClickListener(new View.OnClickListener(){
onClick: function(){
cameraon()
dialog.dismiss();
}
});

browser.setOnClickListener(new View.OnClickListener(){
onClick: function(){
browsermenu()
dialog.dismiss();
}
});

settings.setOnClickListener(new View.OnClickListener(){
onClick: function(){
dialog.dismiss();
settings2()
}
});

}catch(e){
print("Error: " + e);        
}
}
});
}

function leaveGame(){

onrun=false;
run = 1;

ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){
if(GUI != null){
GUI.dismiss();
}
}
});

}

function datavaluesshow(){
ctx.runOnUiThread(new Runnable(){

run: function(){
try{

var refWV = new android.webkit.WebView(ctx);
var refWVSettings = refWV.getSettings();

refWVSettings.setJavaScriptEnabled(true);
refWV.setWebChromeClient(new android.webkit.WebChromeClient());
refWV.setWebViewClient(new android.webkit.WebViewClient());
url = "http://minecraft.gamepedia.com/Data_values_(Pocket_Edition)";

refWV.loadUrl(url);

var b=new android.app.AlertDialog.Builder(ctx);

b.setTitle(url);
b.setView(refWV);
b.setNegativeButton("Close",new DialogInterface.OnClickListener(){

onClick:function(di, v1){
di.dismiss();
}
});

var a=b.create();
a.show();

} catch(err){
print("Cannot open window: "+err+".")
;
}
}
});
}

function browsermenu(){

ctx.runOnUiThread(new Runnable({

run: function(){
try{
var wwv=new android.webkit.WebView(ctx);
var wS=wwv.getSettings();

wS.setJavaScriptEnabled(true);
wwv.setWebChromeClient(new android.webkit.WebChromeClient());
wwv.setWebViewClient(new android.webkit.WebViewClient());

wwv.loadUrl(URL);

var b=new android.app.AlertDialog.Builder(ctx);

b.setTitle(URL);
b.setView(wwv);
b.setNegativeButton("Close",new android.content.DialogInterface.OnClickListener(){

onClick:function(di, v1){
di.dismiss();
}
});

var a=b.create();
a.show();
}catch(err){
print("Cannot open window: "+err+".")
;
}
}}));
}

function settings2(){

ctx.runOnUiThread(new Runnable(){                

run:function(){

try{

var gmsettingsbtn = new Button(ctx);
var settingsbtn = new Button(ctx);
var settings2la = new LinearLayout(ctx);
var settings2di = new Dialog(ctx);

gmsettingsbtn.setText("Game Settings");
settingsbtn.setText("Phone Settings");

settings2la.setOrientation(LinearLayout.VERTICAL);

settings2la.addView(gmsettingsbtn);
settings2la.addView(settingsbtn);

settings2di.setContentView(settings2la);
settings2di.setTitle("Settings");

settings2di.show()

gmsettingsbtn.setOnClickListener(new View.OnClickListener(){
onClick: function(){
settings2di.dismiss();
gamesettings()
}
});

settingsbtn.setOnClickListener(new View.OnClickListener(){
onClick: function(){
settings2di.dismiss();
phonesettings()
}             
});

}catch(e){
print("Error: " + e);                
}

}
});

}

function phonesettings(){

ctx.runOnUiThread(new Runnable(){
run:function(){

try{
                
var bckclrbtn = new Button(ctx);
var phnstla = new LinearLayout(ctx);
var phnstdi = new Dialog(ctx);

bckclrbtn.setText("Change Background Color");

phnstla.setOrientation(LinearLayout.VERTICAL);

phnstla.addView(bckclrbtn);

phnstdi.setContentView(phnstla);
phnstdi.setTitle("Phone Settings");

phnstdi.show()

bckclrbtn.setOnClickListener(new View.OnClickListener(){
                
onClick:function(){

phnstdi.dismiss();                
backgroundsetcolor()
                
}
                
});

}catch(e){
print("Error: " + e);   
}              

}
});

}

function backgroundsetcolor(){

ctx.runOnUiThread(new Runnable({
    
run:function(){
                
try{
                
var bckgddi = new Dialog(ctx);
var bckgdla = new LinearLayout(ctx);
var white = new Button(ctx);
var black = new Button(ctx);
var red = new Button(ctx);
var blue = new Button(ctx);
var cyan = new Button(ctx);
var green = new Button(ctx);
var magenta = new Button(ctx);
var yellow = new Button(ctx);
var scroll = new ScrollView(ctx);

bckgdla.setOrientation(LinearLayout.VERTICAL);

scroll.addView(bckgdla);
//((ViewGroup)scroll.getParent()).removeView(scroll);

bckgdla.addView(red);
//red.setBackgroundColor(Color.RED);
red.setWidth(LinearLayout.VERTICAL);
red.setHeight(LinearLayout.VERTICAL);

bckgdla.addView(blue);
//blue.setBackgroundColor(Color.BLUE);
blue.setWidth(LinearLayout.VERTICAL);
blue.setHeight(LinearLayout.VERTICAL);

bckgdla.addView(white);
//white.setBackgroundColor(Color.WHITE);
white.setHeight(LinearLayout.VERTICAL);
white.setWidth(LinearLayout.VERTICAL);

bckgdla.addView(black);

bckgdla.addView(green);
//green.setBackgroundColor(Color.GREEN);
green.setWidth(LinearLayout.VERTICAL);
green.setHeight(LinearLayout.VERTICAL);

bckgdla.addView(cyan);
//cyan.setBackgroundColor(Color.CYAN);
cyan.setWidth(LinearLayout.VERTICAL);
cyan.setHeight(LinearLayout.VERTICAL);

bckgdla.addView(yellow);
//yellow.setBackgroundColor(Color.YELLOW);
yellow.setWidth(LinearLayout.VERTICAL);
yellow.setHeight(LinearLayout.VERTICAL);

bckgdla.addView(magenta);
//magenta.setBackgroundColor(Color.MAGENTA);
magenta.setWidth(LinearLayout.VERTICAL);
magenta.setHeight(LinearLayout.VERTICAL);

red.setText("Red");

blue.setText("Blue");

white.setText("White");
//white.setTextColor(Color.BLACK);

black.setText("Black");

cyan.setText("Cyan");
//cyan.setTextColor(Color.BLACK);

green.setText("Green");
//green.setTextColor(Color.BLACK);

magenta.setText("Pink");

yellow.setText("Yellow");
//yellow.setTextColor(Color.BLACK);

bckgddi.setContentView(scroll);
bckgddi.setTitle("Change Background Color");

bckgddi.show()

/*red.setOnClickListener(new View.OnClickListener({
onClick:function(){
                
screen.setBackgroundColor(Color.RED);
                
}                
}));*/
                
}catch(e){
                
print("Error: " + e);
                
}
                
}
                
}));

}

function gamesettings(){

ctx.runOnUiThread(new Runnable(){
run: function(){
try{

var stla = new LinearLayout(ctx);
var stdi = new Dialog(ctx);
var gm = new Button(ctx);
var dn = new Button(ctx);
var sprint = new Button(ctx);
var heal = new Button(ctx);
var tmi = new Button(ctx);
var kill = new Button(ctx);
var scroll = new ScrollView(ctx);
var close = new Button(ctx);

stla.setOrientation(LinearLayout.VERTICAL);

scroll.addView(stla);

stla.addView(gm);
stla.addView(dn);
stla.addView(sprint);
stla.addView(heal);
stla.addView(kill);
stla.addView(tmi);
stla.addView(close);

gm.setWidth(LinearLayout.LayoutParams.WRAP_CONTENT);
gm.setHeight(LinearLayout.LayoutParams.WRAP_CONTENT);

dn.setWidth(LinearLayout.LayoutParams.WRAP_CONTENT);
dn.setHeight(LinearLayout.LayoutParams.WRAP_CONTENT);

sprint.setWidth(LinearLayout.LayoutParams.WRAP_CONTENT);
sprint.setHeight(LinearLayout.LayoutParams.WRAP_CONTENT);

heal.setWidth(LinearLayout.LayoutParams.WRAP_CONTENT);
heal.setHeight(LinearLayout.LayoutParams.WRAP_CONTENT);

tmi.setWidth(LinearLayout.LayoutParams.WRAP_CONTENT);
tmi.setHeight(LinearLayout.LayoutParams.WRAP_CONTENT);

kill.setWidth(LinearLayout.LayoutParams.WRAP_CONTENT);
kill.setHeight(LinearLayout.LayoutParams.WRAP_CONTENT);

close.setWidth(LinearLayout.LayoutParams.WRAP_CONTENT);
close.setHeight(LinearLayout.LayoutParams.WRAP_CONTENT);

stdi.setContentView(scroll);
stdi.setTitle("Game Settings");

stdi.show()

if(Level.getGameMode()==0){
gm.setText("Survival");
} else if(Level.getGameMode()==1){
gm.setText("Creative");
}

var ltime = Level.getTime()-Math.floor(Level.getTime()/19200)*19200;
day = ltime < (19200/2);
night = day?0:8280;

if(day){
dn.setText("Day");
} else {
dn.setText("Night");
}

if(onrun==false){
sprint.setText("Sprint Off");
} else if(onrun==true){
sprint.setText("Sprint On");
}

heal.setText("Heal");

tmi.setText("Too many items");

kill.setText("Suicide");

close.setText("Close");

if(Level.getGameMode()==0){
gm.setOnClickListener(new View.OnClickListener(){
onClick: function(){
Level.setGameMode(1);
clientMessage("GameMode set to Creative");
stdi.dismiss();
}
});
} else if(Level.getGameMode()==1){
gm.setOnClickListener(new View.OnClickListener(){
onClick: function(){
Level.setGameMode(0);
clientMessage("GameMode set to Survival");
stdi.dismiss();
}
});
}

if(day){
dn.setOnClickListener(new View.OnClickListener(){
onClick: function(){
clientMessage("Time set to Night");
Level.setTime(14000);
stdi.dismiss();
}
});
} else if(!day){
dn.setOnClickListener(new View.OnClickListener(){
onClick: function(){
clientMessage("Time set to Day");
stdi.dismiss();
Level.setTime(0);
}
});
}

if(onrun==false){
sprint.setOnClickListener(new View.OnClickListener(){
onClick: function(){
clientMessage("Sprinting on");
onrun=true;
stdi.dismiss();
}
});
} else if(onrun==true){
sprint.setOnClickListener(new View.OnClickListener(){
onClick: function(){
onrun=false;
clientMessage("Sprinting off");
stdi.dismiss();
}
});
}

heal.setOnClickListener(new View.OnClickListener(){
onClick: function() {
Player.setHealth(20);
stdi.dismiss();
clientMessage("Fully Healed");
}
});

tmi.setOnClickListener(new View.OnClickListener(){
onClick: function(){
tmion()
stdi.dismiss();
}
});

kill.setOnClickListener(new View.OnClickListener(){
onClick: function(){
stdi.dismiss();  
Player.setHealth(0);
}             
});

close.setOnClickListener(new View.OnClickListener(){
onClick: function(){
stdi.dismiss();
}             
});

} catch(e){
print("Error: " + e);
}

}
});

}

function cameraon(){

ctx.runOnUiThread(new Runnable(){
run: function(){
try{
var camla = new LinearLayout(ctx);
var camdi = new Dialog(ctx);
var selfie = new Button(ctx);
var picture = new Button(ctx);
var close = new Button(ctx);
var back = new Button(ctx);
var scroll = new ScrollView(ctx);

camdi.setTitle("Camera");
camla.setOrientation(LinearLayout.VERTICAL);

camla.addView(selfie);
camla.addView(picture);
//camla.addView(back);
camla.addView(close);

scroll.addView(camla);

selfie.setText("Selfie");
picture.setText("Picture");
close.setText("Close");
back.setText("←");

selfie.setWidth(LinearLayout.LayoutParams.WRAP_CONTENT);
selfie.setHeight(LinearLayout.LayoutParams.WRAP_CONTENT);

picture.setWidth(LinearLayout.LayoutParams.WRAP_CONTENT);
picture.setHeight (LinearLayout.LayoutParams.WRAP_CONTENT);

close.setWidth(LinearLayout.LayoutParams.WRAP_CONTENT);
close.setHeight(LinearLayout.LayoutParams.WRAP_CONTENT);

back.setWidth(LinearLayout.LayoutParams.WRAP_CONTENT);
back.setHeight(LinearLayout.LayoutParams.WRAP_CONTENT);

camdi.setContentView(scroll);
camdi.show()

selfie.setOnClickListener(new View.OnClickListener(){
onClick: function(){
//takeselfie()
clientMessage("Now click with the phone on the blocks in Third Person View to take selfies");
selfieleft = 1;
camdi.dismiss();
}
});

picture.setOnClickListener(new View.OnClickListener(){
onClick: function(){
takephoto()
camdi.dismiss();
}
});

close.setOnClickListener(new View.OnClickListener(){
onClick: function(){
camdi.dismiss();
}
});

} catch(e){
print("Error: " + e);
}
}
});

}

function attackHook(attacker, victim){
if(getCarriedItem()==280 && victim==Entity.getRenderType(victim)==3){
personname = Entity.getNameTag(victim);
person = victim;
prsnx = Entity.getX(victim);
prsny = Entity.getY(victim);
prsnz = Entity.getZ(victim);
}
}

function takephoto(){
ModPE.takeScreenshot("Photo");
clientMessage("Photo Taken");
}

function takeselfie(){
camdi.dismiss();
}

function useItem(x, y, z, itemId, blockId, side){
if(itemId==511 && selfieleft==1){
setRot(getPlayerEnt(), getYaw(getPlayerEnt())+170, getPitch(getPlayerEnt()));
rotation = 1;
shotsleft=3;
selfieleft--;
}               
}

function tmion(){

ctx.runOnUiThread(new Runnable(){

run: function(){

try{

var tmiLayout = new LinearLayout(ctx);
var id = new EditText(ctx);
var amount = new EditText(ctx);
var data = new EditText(ctx);
var add = new android.widget.Button(ctx);
var ref = new Button(ctx);
var close = new Button(ctx);

add.setText("Add Item");
ref.setText("ID Reference");
close.setText("Close");
id.setHint("Item ID");
amount.setHint("Amount");
data.setHint("Data/Damage");
data.setText("0");
id.setInputType(number);
amount.setInputType(number);
data.setInputType(number);

tmiLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
tmiLayout.setBackgroundDrawable(null);

tmiLayout.addView(id);
tmiLayout.addView(amount);
tmiLayout.addView(data);
tmiLayout.addView(add);
tmiLayout.addView(ref);
tmiLayout.addView(close);

id.setHeight(LinearLayout.LayoutParams.WRAP_CONTENT);
id.setWidth(LinearLayout.LayoutParams.WRAP_CONTENT);

amount.setHeight(LinearLayout.LayoutParams.WRAP_CONTENT);
amount.setWidth(LinearLayout.LayoutParams.WRAP_CONTENT);

id.setHeight(LinearLayout.LayoutParams.WRAP_CONTENT);
data.setWidth(LinearLayout.LayoutParams.WRAP_CONTENT);

add.setHeight(LinearLayout.LayoutParams.WRAP_CONTENT);
add.setWidth(LinearLayout.LayoutParams.WRAP_CONTENT);

ref.setHeight(LinearLayout.LayoutParams.WRAP_CONTENT);
ref.setWidth(LinearLayout.LayoutParams.WRAP_CONTENT);

var tmiDialog = new Dialog(ctx);
tmiDialog.setContentView(tmiLayout);
tmiDialog.setTitle("TooManyItems");

tmiDialog.show()

add.setOnClickListener(new View.OnClickListener(){

onClick: function(){

var itemId = parseInt(id.getText());
var iAmount = parseInt(amount.getText());
var iData = parseInt(data.getText());

if(itemId == null){

itemId = "0";

}

if(iData == null){

iData = "0";

}

Player.addItemInventory(itemId, iAmount, iData);

if(Level.getGameMode() == 1){

Entity.setCarriedItem(getPlayerEnt(), itemId, iAmount, iData);

}

}

});

ref.setOnClickListener(new android.view.View.OnClickListener(){

onClick: function(){

datavaluesshow()
tmiDialog.dismiss();

}

});

close.setOnClickListener(new View.OnClickListener(){
onClick: function(){
tmiDialog.dismiss();
}             
});

}catch(e){
print("Error: " + e);        
}
}
});
}

function attackHook(attacker, victim){

if(Player.isPlayer(entity) && Entity.getRenderType(entity)==3){
                
contact1name = Player.getName(entity);

clientMessage("" + entity + " has been added to contacts");

contact1 = entity;

}
                
}

function procCmd(cmd){
                
var p = cmd.split(" ");
var command = p[0]; 
switch(command.toLowerCase()) {  
                
case 'list' : {
                
clientMessage("" + contact1name);
                
}

}
               
}

function peopleon(){

ctx.runOnUiThread(new Runnable(){
run: function(){
try{
var pplfrm = new LinearLayout(ctx);
var pplshow = new Dialog(ctx);
var persontag = new Button(ctx);
var scroll = ScrollView(ctx);

pplfrm.setOrientation(LinearLayout.VERTICAL);
pplfrm.setBackgroundDrawable(null);

pplfrm.addView(persontag);

scroll.addView(pplfrm);

pplshow.setTitle("People You Know");
pplshow.setContentView(scroll);
pplshow.show()


persontag.setText("" + contact1name);

} catch(e){
print("Error: " + e);
}
}
});
}

function chatReceiveHook(sender, message){

sendChat(Player.getName(Player.getEntity()), inputmsg.getText());

}


function modTick(){

time_runTimers();

if(rotation==1){
//setRot(getPlayerEnt(), getYaw(getPlayerEnt())+170, getPitch(getPlayerEnt()));
rotation=2;
}
if(rotation==2){
rotation=3;
}
if(rotation==3){
setRot(getPlayerEnt(), getYaw(getPlayerEnt())+170, getPitch(getPlayerEnt()));
rotation=4;
}
if(rotation==4){
rotation=5;
}
if(rotation==5){
//setRot(getPlayerEnt(), getYaw(getPlayerEnt())+170, getPitch(getPlayerEnt()));
//clientMessage("I guess I took a good selfie");
rotation=6;
}
if(rotation==6){
rotation=0;
ModPE.takeScreenshot("Selfie");
takeScreenshotRepeatedly();
}

if(getCarriedItem()==511 || Level.getGameMode()==1){
ctx.runOnUiThread(new Runnable(){
run: function(){        
try{    

var layout = new LinearLayout(ctx);
var phone = new Button(ctx);
phone.setText("Phone");
phone.setGravity(Gravity.TOP | Gravity.LEFT);

phone.setOnClickListener(new View.OnClickListener(){
onClick: function(){
phonemenu()
//clientMessage("Phone Unlocked");
}
});    

layout.setOrientation(LinearLayout.VERTICAL);
layout.addView(phone);
GUI.setContentView(layout);
GUI.setHeight(LinearLayout.LayoutParams.WRAP_CONTENT);
GUI.setWidth(LinearLayout.LayoutParams.WRAP_CONTENT);
GUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP | Gravity.RIGHT, 130, 0); 
        
}catch(e){
print("Error: " + e);    
}
}
});    
} else if(getCarriedItem!==511){
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){
if(GUI != null){
GUI.dismiss();

countdown--;
var fws = Math.floor ((Math.random() * 10) + 1);
{
if(countdown==0&&fws==1)
{
clientMessage("<"+Player.getName(Player.getEntity)+"> can we go smoke a cigarette? I really need one... But first, LET ME TAKE A SELFIE");
countdown = 500;
}
else if(countdown==0&&fws==2)
{
clientMessage("<"+Player.getName(Player.getEntity())+"> I only got 10 likes in the last 5 minutes. Do you think I should take it down? LET ME TAKE ANOTHER SELFIE");
countdown = 500;
}
else if(countdown==0&&fws==3)
{
clientMessage("<"+Player.getName(Player.getEntity())+"> Wait, pause, Jason just liked my selfie. What a creep");
countdown = 500;
}
else if(countdown==0&&fws==4)
{
clientMessage("<"+Player.getName(Player.getEntity())+"> LET ME TAKE A SELFIE");
countdown = 500;
}
else if(countdown==0&&fws==5)
{
clientMessage("<"+Player.getName(Player.getEntity())+"> Let's go dance... There's no vodka at this table");
countdown = 500;
}
else if(countdown==0&&fws==6)
{
clientMessage("<"+Player.getName(Player.getEntity())+"> That girl is such a fake model. She definitely bought all her Instagram followers");
countdown = 500;
}
else if(countdown==0&&fws==7)
{
clientMessage("<"+Player.getName(Player.getEntity())+"> What should my caption be? I want it to be clever");
countdown = 500;
}
else if(countdown==0&&fws==8)
{
clientMessage("<"+Player.getName(Player.getEntity())+"> OK, let's go take some shots");
countdown = 500;
}
else if(countdown==0&&fws==9)
{
clientMessage("<"+Player.getName(Player.getEntity())+"> Oh my god, Jason just texted me. Should I go home with him? ");
countdown = 500;
}
else if(countdown==0&&fws==10)
{
clientMessage("<"+Player.getName(Player.getEntity())+"> LET ME TAKE A SELFIE");
countdown = 500;
}
}

}
}
});
} 

if(onrun==true){
if(run==1){
plx=getPlayerX();
plz=getPlayerZ();
run = run + 1;
}
else if(run==3){
run=1;
plxdiff=getPlayerX()-plx;
plzdiff=getPlayerZ()-plz;
setVelX(getPlayerEnt(),plxdiff);
setVelZ(getPlayerEnt(),plzdiff);
plxdiff=0;
plzdiff=0;
}
if(run!=1){
run = run + 1;
}

}else if(onrun==false){

return null;
}

}

function takeScreenshotRepeatedly(){
if (shotsleft > 0) { 		
ModPE.takeScreenshot("#Selfie"); 		
shotsleft--;
if(shotsleft>0){
setTimeout(takeScreenshotRepeatedly, 10);
}
} 
}

