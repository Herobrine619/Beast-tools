//copyright//
/*
TERMS AND CONDITIONS
    0. USED TERMS
    MOD - modification, plugin, a piece of software that interfaces with the Minecraft client to extend, add, change or remove original capabilities.
    MOJANG - Mojang AB
    OWNER - <Austin Clark ( Herobrine_619)>, Original author(s) of the MOD. Under the copyright terms accepted when purchasing Minecraft (http://www.minecraft.net/copyright.jsp) the OWNER has full rights over their MOD despite use of MOJANG code.
    USER - End user of the mod, person installing the mod.
 
    1. LIABILITY
    THIS MOD IS PROVIDED 'AS IS' WITH NO WARRANTIES, IMPLIED OR OTHERWISE. THE OWNER OF THIS MOD TAKES NO RESPONSIBILITY FOR ANY DAMAGES INCURRED FROM THE USE OF THIS MOD. THIS MOD ALTERS FUNDAMENTAL PARTS OF THE MINECRAFT GAME, PARTS OF MINECRAFT MAY NOT WORK WITH THIS MOD INSTALLED. ALL DAMAGES CAUSED FROM THE USE OR MISUSE OF THIS MOD FALL ON THE USER.
 
    2. USE
    Use of this MOD to be installed, manually or automatically, is given to the USER without restriction.
 
    3. REDISTRIBUTION
    This MOD may only be distributed where uploaded, mirrored, or otherwise linked to by the OWNER solely. All mirrors of this mod must have advance written permission from the OWNER. ANY attempts to make money off of this MOD (selling, selling modified versions, adfly, sharecash, etc.) are STRICTLY FORBIDDEN, and the OWNER may claim damages or take other action to rectify the situation.
 
    4. DERIVATIVE WORKS/MODIFICATION
    This mod is provided freely and may be decompiled and modified for private use, either with a decompiler or a bytecode editor. Public distribution of modified versions of this MOD require advance written permission of the OWNER and may be subject to certain terms. */

//DO NOT DISTRIBUTE//

function getBiomeName(x,z){
if
(Level.getBiomeName(x,z) == "Jungle M" && Level.getBiomeName(x,z) == "Jungle" ) { Block.addOreProperties(233,0,DimensionId.NORMAL,10,128,3,7,3,12,[0]);
print("I got here");
}
}

//MOD API//

function attackHook(e,t){Entity.getEntityTypeId(t)<64&&(mainAttackHook(e,t),attackHook1(e,t),attackHook2(e,t),attackHook3(e,t),attackHook4(e,t))}function attackHook1(e,t){iD1=Player.getCarriedItem(),dE1=swords[swords.indexOf(Player.getCarriedItem())+1],dY1=swords[swords.indexOf(Player.getCarriedItem())+2],-1!=swordsId.indexOf(Player.getCarriedItem())&&Entity.getHealth(t)>dE1&&Entity.getHealth(t)>0&&(Entity.setHealth(t,Entity.getHealth(t)-dE1),Item.setDurability(iD1,dY1)),-1!=swordsId.indexOf(Player.getCarriedItem())&&Entity.getHealth(t)<=dE1&&Entity.getHealth(t)>0&&(Entity.setHealth(t,1),Item.setDurability(iD1,dY1))}function attackHook2(e,t){iD2=Player.getCarriedItem(),dE2=pickaxes[pickaxes.lastIndexOf(Player.getCarriedItem())+4],dY2=pickaxes[pickaxes.lastIndexOf(Player.getCarriedItem())+2],-1!=pickaxesId.lastIndexOf(Player.getCarriedItem())&&Entity.getHealth(t)>dE2&&Entity.getHealth(t)>0&&(Entity.setHealth(t,Entity.getHealth(t)-dE2),Item.setDurability(iD2,dY2)),-1!=pickaxesId.lastIndexOf(Player.getCarriedItem())&&Entity.getHealth(t)<=dE2&&Entity.getHealth(t)>0&&(Entity.setHealth(t,1),Item.setDurability(iD2,dY2))}function modTick(){mainModTick(),modTick2(),modTick3(),mD2=pickaxes[pickaxes.lastIndexOf(Player.getCarriedItem())+1],mL1=pickaxes[pickaxes.lastIndexOf(Player.getCarriedItem())+3],-1!=pickaxesId.lastIndexOf(Player.getCarriedItem())&&0==defined&&(iD2=Player.getCarriedItem(),mL2=pickaxes[pickaxes.lastIndexOf(Player.getCarriedItem())+3],changeDestroyTimes1(mD2),defined=!0),-1==pickaxesId.lastIndexOf(Player.getCarriedItem())&&1==defined&&(resetDestroyTimes1(),defined=!1),Player.getCarriedItem()!=iD2&&1==defined&&(defined=!1),mL2!=mL1&&(mL2=pickaxes[pickaxes.lastIndexOf(Player.getCarriedItem())+3],resetDestroyTimes1())}function newLevel(){clientMessage("Easy Tool Coding API By: @TaQuItO_988 Loaded!")}function changeDestroyTimes1(e){for(i=0;i<blocks.length;i++)1==mL2&&-1==lvl2.lastIndexOf(blocks[i])&&-1==lvl3.lastIndexOf(blocks[i])&&-1==lvl4.lastIndexOf(blocks[i])&&Block.setDestroyTime(blocks[i],dTimes1[i]*e),2==mL2&&-1==lvl3.lastIndexOf(blocks[i])&&-1==lvl4.lastIndexOf(blocks[i])&&Block.setDestroyTime(blocks[i],dTimes1[i]*e),3==mL2&&-1==lvl4.lastIndexOf(blocks[i])&&Block.setDestroyTime(blocks[i],dTimes1[i]*e),4==mL2&&Block.setDestroyTime(blocks[i],dTimes1[i]*e)}function resetDestroyTimes1(){for(i=0;i<dTimes1.length;i++)Block.setDestroyTime(blocks[i],dTimes1[i])}function destroyBlock(e,t,s,i){mainDestroyBlock(e,t,s,i),destroyBlock2(e,t,s),destroyBlock3(e,t,s),Player.getCarriedItem()==iD2&&checkDrop(e,t,s)}function checkDrop(e,t,s){dY2=pickaxes[pickaxes.lastIndexOf(Player.getCarriedItem())+2],Item.setDurability(iD2,dY2),-1!=bDrops.lastIndexOf(getTile(e,t,s))&&"true"!=bDrops[bDrops.lastIndexOf(getTile(e,t,s))+1]&&mL2>=bDrops[bDrops.lastIndexOf(getTile(e,t,s))+2]?Level.dropItem(e+.5,t,s+.5,0,bDrops[bDrops.lastIndexOf(getTile(e,t,s))+1],1,0):-1!=bDrops.lastIndexOf(getTile(e,t,s))&&"true"==bDrops[bDrops.lastIndexOf(getTile(e,t,s))+1]&&mL2>=bDrops[bDrops.lastIndexOf(getTile(e,t,s))+2]?Level.dropItem(e+.5,t,s+.5,0,getTile(e,t,s),1,Level.getData(e,t,s)):21==getTile(e,t,s)&&mL2>=2?Level.dropItem(e+.5,t,s+.5,0,351,4,4):73==getTile(e,t,s)&&mL2>=bDrops[bDrops.lastIndexOf(getTile(e,t,s))+2]||74==getTile(e,t,s)&&mL2>=3?Level.dropItem(e+.5,t,s+.5,0,331,5,0):1==getTile(e,t,s)&&0!=Level.getData(e,t,s)?Level.dropItem(e+.5,t,s+.5,0,getTile(e,t,s),1,Level.getData(e,t,s)):1==getTile(e,t,s)&&0==Level.getData(e,t,s)&&Level.dropItem(e+.5,t,s+.5,0,4,1,0)}function attackHook3(e,t){iD3=Player.getCarriedItem(),dE3=shovels[shovels.indexOf(Player.getCarriedItem())+3],dY3=shovels[shovels.indexOf(Player.getCarriedItem())+2],-1!=shovelsId.indexOf(Player.getCarriedItem())&&Entity.getHealth(t)>dE3&&Entity.getHealth(t)>0&&(Entity.setHealth(t,Entity.getHealth(t)-dE3),Item.setDurability(iD3,dY3)),-1!=shovelsId.indexOf(Player.getCarriedItem())&&Entity.getHealth(t)<=dE3&&Entity.getHealth(t)>0&&(Entity.setHealth(t,1),Item.setDurability(iD3,dY3))}function modTick2(){mD3=shovels[shovels.lastIndexOf(Player.getCarriedItem())+1],dY3=shovels[shovels.lastIndexOf(Player.getCarriedItem())+2],-1!=shovelsId.lastIndexOf(Player.getCarriedItem())&&0==defined2&&(iD3=Player.getCarriedItem(),changeDestroyTimes2(mD3),defined2=!0),-1==shovelsId.lastIndexOf(Player.getCarriedItem())&&1==defined2&&(resetDestroyTimes2(),defined2=!1),Player.getCarriedItem()!=iD3&&1==defined2&&(resetDestroyTimes2(),defined2=!1)}function destroyBlock2(e,t,s){-1!=shovelsId.lastIndexOf(Player.getCarriedItem())&&Item.setDurability(Player.getCarriedItem(),dY3),-1!=shovelsId.lastIndexOf(Player.getCarriedItem())&&78==getTile(e,t,s)&&(Level.dropItem(e+.5,t,s+.5,0,332,1,0),Item.setDurability(Player.getCarriedItem(),dY3)),-1!=shovelsId.lastIndexOf(Player.getCarriedItem())&&80==getTile(e,t,s)&&(Level.dropItem(e+.5,t,s+.5,0,332,4,0),Item.setDurability(Player.getCarriedItem(),dY3))}function changeDestroyTimes2(e){for(i=0;i<blocks2.length;i++)Block.setDestroyTime(blocks2[i],dTimes2[i]*e)}function resetDestroyTimes2(){for(o=0;o<blocks2.length;o++)Block.setDestroyTime(blocks2[o],dTimes2[o])}function useItem(e,t,s,i,a,r,d,l){mainUseItem(e,t,s,i,a,r,d,l),useItem2(e,t,s,i,a),-1==shovelsId.lastIndexOf(i)||2!=a&&3!=a||0!=getTile(e,t+1,s)||(setTile(e,t,s,198,0),Item.setDurability(i,dY3),Level.playSoundEnt(Player.getEntity(),"step.grass",10))}function attackHook4(e,t){iD4=Player.getCarriedItem(),dE4=axes[axes.indexOf(Player.getCarriedItem())+3],dY4=axes[axes.indexOf(Player.getCarriedItem())+2],-1!=axesId.indexOf(Player.getCarriedItem())&&Entity.getHealth(t)>dE4&&Entity.getHealth(t)>0&&(Entity.setHealth(t,Entity.getHealth(t)-dE4),Item.setDurability(iD4,dY4)),-1!=axesId.indexOf(Player.getCarriedItem())&&Entity.getHealth(t)<=dE4&&Entity.getHealth(t)>0&&(Entity.setHealth(t,1),Item.setDurability(iD4,dY4))}function modTick3(){mD4=axes[axes.lastIndexOf(Player.getCarriedItem())+1],-1!=axesId.lastIndexOf(Player.getCarriedItem())&&0==defined3&&(iD4=Player.getCarriedItem(),changeDestroyTimes3(mD4),defined3=!0),-1==axesId.lastIndexOf(Player.getCarriedItem())&&1==defined3&&(resetDestroyTimes3(),defined3=!1),Player.getCarriedItem()!=iD4&&1==defined3&&(resetDestroyTimes3(),defined3=!1)}function destroyBlock3(){-1!=axesId.lastIndexOf(Player.getCarriedItem())&&Item.setDurability(Player.getCarriedItem(),dY4)}function changeDestroyTimes3(e){for(i=0;i<blocks3.length;i++)Block.setDestroyTime(blocks3[i],dTimes3[i]*e)}function resetDestroyTimes3(){for(o=0;o<blocks3.length;o++)Block.setDestroyTime(blocks3[o],dTimes3[o])}function useItem2(e,t,s,i,a){dY5=hoes[hoes.lastIndexOf(i)+1],-1==hoesId.lastIndexOf(i)||2!=a&&3!=a||(random=Math.floor(5*Math.random()),Item.setDurability(i,dY5),setTile(e,t,s,60,0),Level.playSoundEnt(Player.getEntity(),"step.gravel",10),seedsDrop(e,t,s))}function seedsDrop(e,t,s){0==random&&Level.dropItem(e+.5,t+1,s+.5,0,295,1,0)}var swords=[],swordsId=[],iD1,dE1,dY1,aY1,aR1;Item.setSword=function(e,t,s,i,a,r){ModPE.setItem(e,t,s,i,1),Item.setMaxDamage(e,a),Item.setHandEquipped(e,!0),swordsId.push(e),swords.push(e),swords.push(r-2),swords.push(a)};var pickaxes=[],pickaxesId=[],blocks=[1,4,14,15,16,21,22,24,41,42,43,44,45,46,48,49,52,56,57,61,62,67,73,74,87,98,101,108,109,112,114,121,128,129,133,139,152,155,156,159,172,173,235,245,246,247],dTimes1=[1.5,2,3,3,3,3,5,.8,3,5,2,2,2,2,3,25,5,3,5,3.5,3.5,2,3,3,.4,1.5,5,2,2,2,2,3,2,3,5,2,2,2,2,1.5,1.5,3,2,2,3,3],bDrops=[235,"true",4,"true",1,14,"true",3,15,"true",2,16,263,1,22,"true",2,24,"true",1,41,"true",3,42,"true",2,43,"true",1,45,"true",1,48,"true",1,246,49,4,49,"true",4,56,264,3,57,"true",3,62,61,1,61,"true",1,67,"true",1,87,"true",1,98,"true",1,101,"true",1,108,"true",1,109,"true",1,112,"true",1,114,"true",1,121,"true",1,128,"true",1,129,388,3,133,"true",3,139,"true",1,155,"true",1,156,"true",1,159,"true",1,172,"true",1,173,"true",1,245,"true",1,247,"true",1],lvl2=[15,21,22,42,71,235],lvl3=[14,41,56,57,73,74,129,133],lvl4=[49],iD2,dY2,dE2,mD2,mL1,mL2;Item.setPickaxe=function(e,t,s,i,a,r,d,l){ModPE.setItem(e,t,s,i,1),Item.setMaxDamage(e,a),Item.setHandEquipped(e,!0),pickaxesId.push(e),pickaxes.push(e),pickaxes.push(d/5),pickaxes.push(a),pickaxes.push(l),pickaxes.push(r-2)};var defined=!1,shovels=[],shovelsId=[],blocks2=[2,3,12,13,60,78,80,82,110,198],dTimes2=[.5,.6,.6,.6,.6,.1,.2,.6,.6,.6],defined2=!1,iD3,dY3,dE3,mD3;Item.setShovel=function(e,t,s,i,a,r,d){ModPE.setItem(e,t,s,i,0),Item.setHandEquipped(e,!0),Item.setMaxDamage(e,a),shovelsId.push(e),shovels.push(e),shovels.push(d/5),shovels.push(a),shovels.push(r)};var axes=[],axesId=[],blocks3=[5,17,47,53,54,58,63,64,65,68,85,96,107,134,135,136,157,158,162,163,164,183,184,185,186,187],dTimes3=[2,2,1.5,2,2.5,2.5,1,3,.4,1,2,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2],defined3=!1,iD4,dY4,dE4,mD4;Item.setAxe=function(e,t,s,i,a,r,d){ModPE.setItem(e,t,s,i,1),Item.setHandEquipped(e,!0),Item.setMaxDamage(e,a),axesId.push(e),axes.push(e),axes.push(d/5),axes.push(a),axes.push(r)};var hoes=[],hoesId=[],random=0,iD5,dY5;Item.setHoe=function(e,t,s,i,a){ModPE.setItem(e,t,s,i,1),Item.setHandEquipped(e,!0),Item.setMaxDamage(e,a),hoesId.push(e),hoes.push(e),hoes.push(a)},Item.setDurability=function(e,t){Player.getCarriedItem()==e&&Entity.setCarriedItem(Player.getEntity(),e,Player.getCarriedItemCount(),Player.getCarriedItemData()+1),Player.getCarriedItem()==e&&Player.getCarriedItemData()>t&&(Entity.setCarriedItem(Player.getEntity(),0,0,0),Level.playSoundEnt(Player.getEntity(),"random.break",10))};

//MOD API 1 END//

//API 2 START//

var GenOresData=[]; var GeneratedChunkOre={"X0Z0D0":true}; var oldDimension=DimensionId.NORMAL; var modTickData={ tickcounter:5, oldChunkX:0, oldChunkZ:0, oldDimension:0 }; function newLevel() {mainNewLevel(); GeneratedChunkOre=ModPE.loadWorldJSON("db","GeneratedChunkOre.json",GeneratedChunkOre={"X0Z0D0":true}); modTickData={ tickcounter:5, oldChunkX:0, oldChunkZ:0, oldDimension:0 }; } function leaveGame() {mainLeaveGame(); ModPE.saveWorldJSON("db","GeneratedChunkOre.json",GeneratedChunkOre); }  ModPE.saveWorldJSON=function(folderName,fileName,content){ file = new java.io.File("/sdcard/games/com.mojang/minecraftWorlds/"+Level.getWorldDir()+"/"+folderName+"/"+fileName); file.getParentFile().mkdirs(); fileBR = new java.io.BufferedWriter(new java.io.FileWriter(file)); fileBR.write(JSON.stringify(content)); fileBR.close(); };  ModPE.loadWorldJSON=function(folderName,fileName,replaceContent){ file = new java.io.File("/sdcard/games/com.mojang/minecraftWorlds/"+Level.getWorldDir()+"/"+folderName+"/"+fileName); if(!file.exists()){ ModPE.saveWorldJSON(folderName,fileName,replaceContent); } fileBR = new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(file))); return JSON.parse(fileBR.readLine()); fileBR.close(); };  function modTick(){mainModTick(); var chunkX=Math.floor(getPlayerX()/16); var chunkZ=Math.floor(getPlayerZ()/16); var dimension=Player.getDimension(); if (modTickData.tickcounter>0){modTickData.tickcounter--;}else{ for(var i in GenOresData){ if(!(modTickData.oldChunkX==chunkX&&modTickData.oldChunkZ==chunkZ)&&modTickData.oldDimension==dimension&&GenOresData[i].Dimension==dimension||modTickData.oldDimension!=dimension&&GenOresData[i].Dimension==dimension){ Level.genRandomOres(GenOresData[i].ID,GenOresData[i].Data,GenOresData[i].Dimension,GenOresData[i].MinY,GenOresData[i].MaxY,GenOresData[i].MinGen,GenOresData[i].MaxGen,GenOresData[i].MinVeinSize,GenOresData[i].MaxVeinSize,GenOresData[i].GenInBlocksArray,chunkX,chunkZ); Level.genRandomOres(GenOresData[i].ID,GenOresData[i].Data,GenOresData[i].Dimension,GenOresData[i].MinY,GenOresData[i].MaxY,GenOresData[i].MinGen,GenOresData[i].MaxGen,GenOresData[i].MinVeinSize,GenOresData[i].MaxVeinSize,GenOresData[i].GenInBlocksArray,chunkX+1,chunkZ); Level.genRandomOres(GenOresData[i].ID,GenOresData[i].Data,GenOresData[i].Dimension,GenOresData[i].MinY,GenOresData[i].MaxY,GenOresData[i].MinGen,GenOresData[i].MaxGen,GenOresData[i].MinVeinSize,GenOresData[i].MaxVeinSize,GenOresData[i].GenInBlocksArray,chunkX-1,chunkZ); Level.genRandomOres(GenOresData[i].ID,GenOresData[i].Data,GenOresData[i].Dimension,GenOresData[i].MinY,GenOresData[i].MaxY,GenOresData[i].MinGen,GenOresData[i].MaxGen,GenOresData[i].MinVeinSize,GenOresData[i].MaxVeinSize,GenOresData[i].GenInBlocksArray,chunkX,chunkZ+1); Level.genRandomOres(GenOresData[i].ID,GenOresData[i].Data,GenOresData[i].Dimension,GenOresData[i].MinY,GenOresData[i].MaxY,GenOresData[i].MinGen,GenOresData[i].MaxGen,GenOresData[i].MinVeinSize,GenOresData[i].MaxVeinSize,GenOresData[i].GenInBlocksArray,chunkX,chunkZ-1); Level.genRandomOres(GenOresData[i].ID,GenOresData[i].Data,GenOresData[i].Dimension,GenOresData[i].MinY,GenOresData[i].MaxY,GenOresData[i].MinGen,GenOresData[i].MaxGen,GenOresData[i].MinVeinSize,GenOresData[i].MaxVeinSize,GenOresData[i].GenInBlocksArray,chunkX+1,chunkZ+1); Level.genRandomOres(GenOresData[i].ID,GenOresData[i].Data,GenOresData[i].Dimension,GenOresData[i].MinY,GenOresData[i].MaxY,GenOresData[i].MinGen,GenOresData[i].MaxGen,GenOresData[i].MinVeinSize,GenOresData[i].MaxVeinSize,GenOresData[i].GenInBlocksArray,chunkX+1,chunkZ-1); Level.genRandomOres(GenOresData[i].ID,GenOresData[i].Data,GenOresData[i].Dimension,GenOresData[i].MinY,GenOresData[i].MaxY,GenOresData[i].MinGen,GenOresData[i].MaxGen,GenOresData[i].MinVeinSize,GenOresData[i].MaxVeinSize,GenOresData[i].GenInBlocksArray,chunkX-1,chunkZ+1); Level.genRandomOres(GenOresData[i].ID,GenOresData[i].Data,GenOresData[i].Dimension,GenOresData[i].MinY,GenOresData[i].MaxY,GenOresData[i].MinGen,GenOresData[i].MaxGen,GenOresData[i].MinVeinSize,GenOresData[i].MaxVeinSize,GenOresData[i].GenInBlocksArray,chunkX-1,chunkZ-1); } } modTickData.oldChunkX=chunkX; modTickData.oldChunkZ=chunkZ; modTickData.oldDimension=dimension; modTickData.tickcounter=5; GeneratedChunkOre[String("X"+chunkX+"Z"+chunkZ+"D"+dimension)]=true; GeneratedChunkOre[String("X"+(chunkX+1)+"Z"+chunkZ+"D"+dimension)]=true; GeneratedChunkOre[String("X"+(chunkX-1)+"Z"+chunkZ+"D"+dimension)]=true; GeneratedChunkOre[String("X"+chunkX+"Z"+(chunkZ+1)+"D"+dimension)]=true; GeneratedChunkOre[String("X"+chunkX+"Z"+(chunkZ-1)+"D"+dimension)]=true; GeneratedChunkOre[String("X"+(chunkX+1)+"Z"+(chunkZ+1)+"D"+dimension)]=true; GeneratedChunkOre[String("X"+(chunkX+1)+"Z"+(chunkZ-1)+"D"+dimension)]=true; GeneratedChunkOre[String("X"+(chunkX-1)+"Z"+(chunkZ+1)+"D"+dimension)]=true; GeneratedChunkOre[String("X"+(chunkX-1)+"Z"+(chunkZ-1)+"D"+dimension)]=true; } } Level.genRandomOres=function(oreId,oreData,dimension,minY,maxY,minGen,maxGen,minVeinSize,maxVeinSize,genInBlocksArray,chunkX,chunkZ){ if(GeneratedChunkOre[String("X"+chunkX+"Z"+chunkZ+"D"+dimension)]!=true){ for(var gen=0;gen<Math.floor(Math.random()*maxGen-minGen)+minGen;gen++){ rndx=Math.floor(Math.random()*((chunkX*16)-((chunkX+1)*16)))+(chunkX+1)*16; rndy=Math.floor(Math.random()*(Math.round(maxY)-Math.round(minY)))+Math.round(minY); rndz=Math.floor(Math.random()*((chunkZ*16)-((chunkZ+1)*16)))+(chunkZ+1)*16; var veinSize=Math.floor(Math.random()*maxVeinSize-minVeinSize)+minVeinSize; if(veinSize<=0){ veinSize=1; } var vein=[[0,0,0]]; for(var size=0;size<=veinSize;size++){var invein=Math.abs (Math.floor ((vein.length/4)*3)); var position=Math.floor(Math.random()*Math.abs(Math.floor(vein.length-invein)))+invein; switch(Math.floor(Math.random()*6)){ case 1: vein.push([vein[position][0]+0,vein[position][1]+1,vein[position][2]+0]); break;  case 2: vein.push([vein[position][0]+0,vein[position][1]+0,vein[position][2]-1]); break;  case 3: vein.push([vein[position][0]+0,vein[position][1]+0,vein[position][2]+1]); break;  case 4: vein.push([vein[position][0]-1,vein[position][1]+0,vein[position][2]+0]); break;  case 5: vein.push([vein[position][0]+1,vein[position][1]+0,vein[position][2]+0]); break;  default: vein.push([vein[position][0]+0,vein[position][1]-1,vein[position][2]+0]); } } for (var i=1;i<vein.length;i++){ for(var block in genInBlocksArray){ if (Level.getTile(rndx+vein[i][0],rndy+vein [i][1],rndz+vein[i][2])==genInBlocksArray[block]){ Level.setTile(rndx+vein[i][0],rndy+vein [i][1],rndz+vein[i][2],oreId,oreData); } } } } } };  Block.addOreProperties=function(a,b,c,d,e,f,g,h,i,j){ var miny=Math.min(Math.round(Math.abs(d)),Math.round(Math.abs(e))); var mingen=Math.min(Math.round(Math.abs(f)),Math.round(Math.abs(g))); var minvein=Math.min(Math.round(Math.abs(h)),Math.round(Math.abs(i))); var maxy=Math.max(Math.round(Math.abs(d)),Math.round(Math.abs(e))); var maxgen=Math.max(Math.round(Math.abs(f)),Math.round(Math.abs(g))); var maxvein=Math.max(Math.round(Math.abs(h)),Math.round(Math.abs(i))); GenOresData.push({ ID:a, Data:b, Dimension:c, MinY:miny, MaxY:maxy+1, MinGen:mingen*2, MaxGen:maxgen*2, MinVeinSize:minvein, MaxVeinSize:maxvein+1, GenInBlocksArray:j }); };

//API 2 END//

function newLevel()
{
clientMessage(ChatColor.RED +"BEAST Tools Mod By Herobrine_619 @arclark187 ");
}

//MOD TICK//

function mainModTick(){
}

function mainUseItem(x,y,z,i,b,s,iD,bD){
}

function mainAttackHook(a,v){
}

function mainDestroyBlock(x,y,z,s){
}

function mainNewLevel(){
}

function mainLeaveGame(){
}

var Infinite = 10000000000

//MOD TICK END//

/*
API Functions

- Sword:
Item.setSword(id,texure,additionalTexture,name,durability,damage);
Item.setSword(500,"blaze_rod",0,"Test Sword",50,10);

- Pickaxe:
Item.setPickaxe(id,texture,additionalTexture,name,durability,damage,miningSpeed,miningLevel);
Item.setPickaxe(501,"blaze_rod",0,"Test Pickaxe",50,5,0.5,3);

- Shovel:
Item.setShovel(id,texture,additionalTexture,name,durability,damage,diggingSpeed);
Item.setShovel(502,"blaze_rod",0,"Test Shovel",50,4,1);

- Axe:
Item.setAxe(id,texture,additionalTexture,name,durability,damage,choppingSpeed);
Item.setAxe(503,"blaze_rod",0,"Test Axe",50,6,2);

- Hoe:
Item.setHoe(id,texture,additionalTexture,name,durability);
Item.setHoe(504,"blaze_rod",0,"Test Hoe",50);

- Mining Level:
1 = Wooden Pickaxe
2 = Stone Pickaxe
3 = Iron Pickaxe
4 = Diamond Pickaxe
*/

/*
Item.addShapedRecipe(1307,1,0,[
" 1 ",
" 2 ",
" 2 "],["1",388,0,"2",280,0]) */

//Swords//

Item.setSword(1309,"ghast-blood", 0, "Ghast's Blood Sword",9999999,30);

Item.setCategory(1309,ItemCategory.TOOL);
Player.addItemCreativeInv(1309,1,0);

Item.setSword(1310,"steel-blade", 0, "Steel Blade",9999999,16);

Item.setCategory(1310,ItemCategory.TOOL);
Player.addItemCreativeInv(1310,1,0);

Item.setSword(1311,"soth", 0, "Sword of the Heavens",9999999,50);

Item.setCategory(1311,ItemCategory.TOOL);
Player.addItemCreativeInv(1311,1,0);

Item.setSword(1312,"sotuh", 0,  "Gladius Ex Tanti Vi",9999999,235);

Item.setCategory(1312,ItemCategory.TOOL);
Player.addItemCreativeInv(1312,1,0);

Item.setSword(1313,"tlr", 0,  "The Last Resort",9999999,24);

Item.setCategory(1313,ItemCategory.TOOL);
Player.addItemCreativeInv(1313,1,0);


Item.setSword(1314,"tsbs", 0,  "The Seven Branched Sword",9999999,125);

Item.setCategory(1314,ItemCategory.TOOL);
Player.addItemCreativeInv(1314,1,0);

Item.setSword(1315,"csoe", 0,  "Crimson Sword Of Energy",9999999,235);

Item.setCategory(1315,ItemCategory.TOOL);
Player.addItemCreativeInv(1315,1,0);

Item.setSword(1316,"k", 0,  "Kusanagi",9999999,235);

Item.setCategory(1316,ItemCategory.TOOL);
Player.addItemCreativeInv(1316,1,0);

Item.setSword(1317,"BR", 0,  "Blood Ripper",9999999,210);

Item.setCategory(1317,ItemCategory.TOOL);
Player.addItemCreativeInv(1317,1,0);

Item.setSword(1318,"FIT", 0,  "Frozen In Time",9999999,60);

Item.setCategory(1318,ItemCategory.TOOL);
Player.addItemCreativeInv(1318,1,0);

Item.setSword(1319,"IB", 0,  "Icebreaker",9999999,70);

Item.setCategory(1319,ItemCategory.TOOL);
Player.addItemCreativeInv(1319,1,0);

Item.setSword(1320,"LES", 0,  "Legendary Emerald Sword",9999999,250);

Item.setCategory(1320,ItemCategory.TOOL);
Player.addItemCreativeInv(1320,1,0);

Item.setSword(1321,"TB", 0,  "Taken Blade",9999999,250);

Item.setCategory(1321,ItemCategory.TOOL);
Player.addItemCreativeInv(1321,1,0);

Item.setSword(1322,"CS", 0,  "Cryptic Sword",9999999,110);

Item.setCategory(1322,ItemCategory.TOOL);
Player.addItemCreativeInv(1322,1,0);

Item.setSword(1323,"onyxspear", 0,  "Onyx Spear",9999999,110);

Item.setCategory(1323,ItemCategory.TOOL);
Player.addItemCreativeInv(1323,1,0);
Item.setHandEquipped(1323,1);

Item.setSword(1324,"wretchedclaw", 0,  "The Wretched Claw",9999999,110);

Item.setCategory(1324,ItemCategory.TOOL);
Player.addItemCreativeInv(1324,1,0);
Item.setHandEquipped(1324,1);

function mainModTick()
{ 
getBiomeName(Player.getX(),Player.getZ());
if (Player.getCarriedItem() == 1312){ Level.addParticle(ParticleType.lava, Player.getX(Player)+Math.random() *4-2, Player.getY(Player)+Math.random() *4-2, Player.getZ(Player)+Math.random() *4-2, 0, 0, 0, 1);
}
if (Player.getCarriedItem() == 1311)
{
Level.addParticle(ParticleType.cloud, Player.getX(Player)+Math.random() *4-2, Player.getY(Player)+Math.random() *4-2, Player.getZ(Player)+Math.random() *4-2, 0, 0, 0, 10);
}
if (Player.getCarriedItem() == 1320)
{
Level.addParticle(ParticleType.happyVillager, Player.getX(Player)+Math.random() *4-2, Player.getY(Player)+Math.random() *4-2, Player.getZ(Player)+Math.random() *4-2, 0, 0, 0, 10);
}
if (Player.getCarriedItem() == 1321)
{
Level.addParticle(ParticleType.MagicCrit, Player.getX(Player)+Math.random() *4-2, Player.getY(Player)+Math.random() *4-2, Player.getZ(Player)+Math.random() *4-2, 0, 0, 0, 10);
}
if (Player.getArmorSlot(3) == 800)
{
Entity.addEffect(getPlayerEnt(), MobEffect.jump, 10*10, 10, false, true);
}
if (Player.getArmorSlot(0) == 1499)
{
Entity.addEffect(getPlayerEnt(), MobEffect.nightVision, 10*10, 10, false, true);
}
}

var PX = Player.getX();
var PZ = Player.getZ();
//Blocks

/*function Block.defineBlock(id,"name","texture",materialSourceId,opaque,rendertype);*/

/* For ores:
Block.addOreProperties(ID,DATA,DIMENSIIONID,MIN_Y,MAX_Y,MIN_GENERATION,MAX_GENERATION,MIN_VEIN_SIZE,MAX_VEIN_SIZE,GENERATE_IN_BLOCKS_ARRAY);

Example: Block.addOreProperties(48,0,DimensionId.NORMAL,0,128,1,10,40,40,[1]);

*/
Block.defineBlock(233,"Gradamite Ore",[["gradamite",0],["gradamite",0],["gradamite",0],["gradamite",0],["gradamite",0],["gradamite",0]],3,true,0);
Block.setDestroyTime(233,3);
Item.setCategory(233,ItemCategory.MATERIAL);
Player.addItemCreativeInv(233,1,0);

Block.defineBlock(235,"Citrine Ore",[["citrine",0],["citrine",0],["citrine",0],["citrine",0],["citrine",0],["citrine",0]],3,true,0);
Block.setDestroyTime(235,3);
Block.addOreProperties(235,0,DimensionId.NORMAL,10,80,3,7,3,12,[0]);
Item.setCategory(235,ItemCategory.MATERIAL);
Player.addItemCreativeInv(235,1,0);

/*doesnt work yet

{
if 
(Level.getBiomeName(x,z) == "Jungle" ) { Block.addOreProperties(233,0,DimensionId.NORMAL,10,80,3,7,3,12,[0]);
clientMessage(ChatColor.RED +"BEAST Tools Mod By Herobrine_619 @arclark187 ");
}
if
(Level.getBiomeName(x,z) == "Jungle M" ) { Block.addOreProperties(233,0,DimensionId.NORMAL,10,80,3,7,3,12,[0]);
}
}

*/

Block.defineBlock(236,"Citrine Block",[["citrine_block",0],["citrine_block",0],["citrine_block",0],["citrine_block",0],["citrine_block",0],["citrine_block",0]],3,true,0);
Block.setDestroyTime(236,3);
Item.setCategory(236,ItemCategory.MATERIAL);
Player.addItemCreativeInv(236,1,0);

Block.defineBlock(237,"Corrupt Block",[["corrupt_block",0],["corrupt_block",0],["corrupt_block",0],["corrupt_block",0],["corrupt_block",0],["corrupt_block",0]],3,true,0);
Block.setDestroyTime(237,3);

Item.setCategory(237,ItemCategory.MATERIAL);
Player.addItemCreativeInv(237,1,0);



//armor

Item.defineArmor(1499,"chelmet",0,"Night Vision Goggles","armor/nightvision.png",5,7000,ArmorType.helemt);
Item.setCategory(1499,ItemCategory.TOOL);
Player.addItemCreativeInv(1499,1,0);


Item.defineArmor(1500,"chelmet",0,"Citrine Helmet","armor/CA.png",5,7000,ArmorType.helemt);
Item.setCategory(1500,ItemCategory.TOOL);
Player.addItemCreativeInv(1500,1,0);

Item.defineArmor(1501,"cchest",0,"Citrine Chestplate","armor/CA.png",6,9000,ArmorType.chestplate);
Item.setCategory(1501,ItemCategory.TOOL);
Player.addItemCreativeInv(1501,1,0);

Item.defineArmor(1502,"cleg",0,"Citrine Leggings","armor/CA.png",5,8000,ArmorType.leggings);
Item.setCategory(1502,ItemCategory.TOOL);
Player.addItemCreativeInv(1502,1,0);

Item.defineArmor(1503,"cboot",0,"Citrine Boots","armor/CA2.png",4,6000,ArmorType.boots);
Item.setCategory(1503,ItemCategory.TOOL);
Player.addItemCreativeInv(1503,1,0);


Item.setSword(1504,"csword",0,"Citrine Sword",700,8);

Item.setPickaxe(1505,"cpickaxe",0,"Citrine Pickaxe",700,5,1,3);

Item.setShovel(1506,"cshovel",0,"Citrine Shovel",700,1,1);

Item.setAxe(1507,"caxe",0,"Citrine Axe",700,5,1);

Item.setHoe(1508,"choe",0,"Citrine Hoe",700);

Item.setCategory(1504,ItemCategory.TOOL);
Player.addItemCreativeInv(236,1,0);

Item.setCategory(1505,ItemCategory.TOOL);
Player.addItemCreativeInv(1505,1,0);

Item.setCategory(1506,ItemCategory.TOOL);
Player.addItemCreativeInv(1506,1,0);

Item.setCategory(1507,ItemCategory.TOOL);
Player.addItemCreativeInv(1507,1,0);

Item.setCategory(1508,ItemCategory.TOOL);
Player.addItemCreativeInv(1508,1,0);

ModPE.setItem(1509, "Citrine", 0, "Citrine");

Item.setCategory(1509,ItemCategory.TOOL);
Player.addItemCreativeInv(1509,1,0);

//TORMENTED SKELETON//

ModPE.setItem(1600, "bloody_skull", 0, "Bloody Skull");

Item.setCategory(1600,ItemCategory.TOOL);
Player.addItemCreativeInv(1600,1,0);


//Throwables//


Item.defineThrowable(1601,"Grenade",0,"Grenade",8);
Item.setCategory(1601,ItemCategory.TOOL);
Player.addItemCreativeInv(1601,1,0);

Item.defineThrowable(1602,"Grenade",0,"Grenade V2",9);
Item.setCategory(1602,ItemCategory.TOOL);
Player.addItemCreativeInv(1602,1,0);

Item.defineThrowable(1603,"Grenade",0,"Grenade V3",10);
Item.setCategory(1603,ItemCategory.TOOL);
Player.addItemCreativeInv(1603,1,0);

Item.defineThrowable(1599,"Grenade",0,"Dark Energy Grenade",8);
Item.setCategory(1599,ItemCategory.TOOL);
Player.addItemCreativeInv(1599,1,0);

Item.defineThrowable(1598,"throwingstar",0,"Dark Energy Grenade",100);
Item.setCategory(1598,ItemCategory.TOOL);
Player.addItemCreativeInv(1598,1,0);

function customThrowableHitBlockHook(projectile, itemId, x, y, z, side){
if(itemId==1601){
Level.explode(x,y,z,2);
}
if(itemId==1599){
Level.setTile(x +Math.random() *4-2,y +Math.random() *1-0,z +Math.random() *4-2,237);
Level.setTile(x +Math.random() *4-2,y +Math.random() *1-0,z +Math.random() *4-2,237);
Level.setTile(x +Math.random() *4-2,y +Math.random() *1-0,z +Math.random() *4-2,237);
Level.setTile(x +Math.random() *4-2,y +Math.random() *1-0,z +Math.random() *4-2,237);
Level.setTile(x +Math.random() *4-2,y +Math.random() *1-0,z +Math.random() *4-2,237);
Level.setTile(x +Math.random() *4-2,y +Math.random() *1-0,z +Math.random() *4-2,237);
Level.spawnMob(x,y,z,EntityType.LIGHTNING_BOLT);
Level.spawnMob(x,y,z,EntityType.LIGHTNING_BOLT);}
if(itemId==1602){
Level.explode(x,y,z,4);
}
if(itemId==1603){
Level.explode(x,y,z,6);
}
}

function customThrowableHitEntityHook(projectile, itemId, x, y, z, side){
if(itemId==1601){
Level.explode(x,y,z,2);
}
if(itemId==1599){
Level.setTile(x +Math.random() *4-2,y +Math.random() *1-0,z +Math.random() *4-2,237);
Level.setTile(x +Math.random() *4-2,y +Math.random() *1-0,z +Math.random() *4-2,237);
Level.setTile(x +Math.random() *4-2,y +Math.random() *1-0,z +Math.random() *4-2,237);
Level.setTile(x +Math.random() *4-2,y +Math.random() *1-0,z +Math.random() *4-2,237);
Level.setTile(x +Math.random() *4-2,y +Math.random() *1-0,z +Math.random() *4-2,237);
Level.setTile(x +Math.random() *4-2,y +Math.random() *1-0,z +Math.random() *4-2,237);
Level.spawnMob(x,y,z,EntityType.LIGHTNING_BOLT);
Level.spawnMob(x,y,z,EntityType.LIGHTNING_BOLT);}
if(itemId==1598){
Entity.setHealth(victim, Entity.getHealth(victim) - 5)
}
if(itemId==1602){
Level.explode(x,y,z,4);
}
if(itemId==1603){
Level.explode(x,y,z,6);
}
}


//items//


ModPE.setItem(1605, "enchantedflame", 0, "Enchanted Flame");
Item.setCategory(1605,ItemCategory.TOOL);
Player.addItemCreativeInv(1605,1,0);
Item.setProperties(1605,{"foil": true});

ModPE.setItem(1606, "cursedapple", 0, "Cursed Apple");
Item.setCategory(1606,ItemCategory.TOOL);
Player.addItemCreativeInv(1606,1,0);

ModPE.setItem(1607, "bookofdeath", 0, "Book of Death");
Item.setCategory(1607,ItemCategory.TOOL);
Player.addItemCreativeInv(1607,1,0);

ModPE.setItem(1608, "icerod", 0, "Ice Rod");
Item.setCategory(1608,ItemCategory.TOOL);
Player.addItemCreativeInv(1608,1,0);

//altar//

Block.defineBlock(238,"Altar",[["altarside",0],["altartop",0],["altarside",0],["altarside",0],["altarside",0],["altarside",0]],3,true,0);
Block.setDestroyTime(238,3);
Item.setCategory(238,ItemCategory.MATERIAL);
Player.addItemCreativeInv(238,1,0);


Block.defineBlock(239,"Empowered Altar",[["acs",0],["act",0],["acs",0],["acs",0],["acs",0],["acs",0]],3,true,0);
Block.setDestroyTime(239,3);
Item.setCategory(239,ItemCategory.MATERIAL);
Player.addItemCreativeInv(239,1,0);

ModPE.setItem(1609, "incompleterune", 0, "Incomplete Rune");
Item.setCategory(1609,ItemCategory.TOOL);
Player.addItemCreativeInv(1609,1,0);

ModPE.setItem(1610, "completedrune", 0, "Completed Rune");
Item.setCategory(1610,ItemCategory.TOOL);
Player.addItemCreativeInv(1610,1,0);

function useItem(x,y, z, itemId, blockId, side, data)
{
if(itemId == 1610 && blockId == 238)
{
Level.setTile(x,y,z,239);
clientMessage(ChatColor.GREEN +"Altar Complete!");
}
if(itemId == 1600 && blockId == 239)
{
Level.setTile(x,y,z,238);
clientMessage(ChatColor.AQUA +"Rune Consumed!");
clientMessage(ChatColor.RED +"The Tormented Skeleton has awoken!!!");
tormented = Level.spawnMob(x,y+1,z,48,"mob/Torment.png");
Entity.setRenderType(tormented,EntityRenderType.skeleton);
Entity.setHealth(tormented, 1000);
Entity.setMaxHealth(tormented,1000);
Entity.setCarriedItem(tormented, 1309, 1309,1309);
Entity.addEffect(tormented,MobEffect.damageBoost , Infinite, 5, true, false);
}
}
