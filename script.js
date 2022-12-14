let board=document.querySelector(".board");
let moves=[];
let flag=true;


showBoard();
showPawns("black");
showPawns("white");
showOther();
start();

function showBoard(){
    let borad=document.createElement("div");
    borad.setAttribute("class", "board");
    for(let i=0;i<8;i++){
        let row=document.createElement("div");
        row.setAttribute("class","row")
        for(let j=0;j<8;j++){
            let cell=document.createElement("div");
            cell.setAttribute("class","cell");
            cell.setAttribute("Rindex",i);
            cell.setAttribute("Cindex",j);
            cell.style.display="flex";
            cell.style.justifyContent="center";
            cell.style.alignItems="center";
            
            if((i+j)%2==1){
                cell.style.backgroundColor="grey";
            }
            row.appendChild(cell);
        }
        borad.appendChild(row);
    }
    document.querySelector(".container").appendChild(borad);
}

function showPawns(player){
    let row=document.querySelectorAll(".row");
    //alert(row.innerHTML);
    let cell="";
    if(player=="black"){
        cell=row[1].querySelectorAll(".cell");
    }else{
        cell=row[6].querySelectorAll(".cell");
    }
    
    for(let i=0;i<cell.length;i++){
        let img=document.createElement("img");
        img.src="./icons/white_pawn.png";
        img.style.width="60px";
        img.style.height="60px";
        img.setAttribute("piece","pawn");
        img.setAttribute("player",player);
        
        if(player=="black"){
            //alert("black");
            img.src="./icons/black_pawn.png";
            cell[i].appendChild(img);
            
            cell[i].setAttribute("piece","pawn")
        }else{
            img.src="./icons/white_pawn.png";
            cell[i].appendChild(img);
            cell[i].setAttribute("piece","pawn")
        }
        
    }
}

function showOther() {
    
    let row=document.querySelectorAll(".row");
    let cell=row[7].querySelectorAll(".cell");
    for(let i=0;i<8;i++){
        let img=document.createElement("img");
        img.setAttribute("player","white");
        img.style.width="60px";
        img.style.height="60px";
        if(i==0 || i==7){
            img.src="./icons/white_rook.png";
            img.setAttribute("piece","rook");
            cell[i].appendChild(img);
            
        }else if(i==1 || i==6){
            img.src="./icons/white_knight.png";
            img.setAttribute("piece","knight");
            cell[i].appendChild(img);
            
        }else if(i==2 || i==5){
            img.src="./icons/white_bishop.png";
            img.setAttribute("piece","bishop");
            cell[i].appendChild(img);

        }else if(i==3){
            img.src="./icons/white_queen.png";
            img.setAttribute("piece","queen");
            cell[i].appendChild(img);
        }else if(i==4){
            img.src="./icons/white_king.png";
            img.setAttribute("piece","king");
            cell[i].appendChild(img);
        }
    }

    cell=row[0].querySelectorAll(".cell");
    for(let i=0;i<8;i++){
        let img=document.createElement("img");
        img.setAttribute("player","black");
        img.style.width="60px";
        img.style.height="60px";
        if(i==0 || i==7){
            img.src="./icons/black_rook.png";
            img.setAttribute("piece","rook");
            cell[i].appendChild(img);
        }else if(i==1 || i==6){
            img.src="./icons/black_knight.png";
            img.setAttribute("piece","knight");
            cell[i].appendChild(img);
        }else if(i==2 || i==5){
            img.src="./icons/black_bishop.png";
            img.setAttribute("piece","bishop");
            cell[i].appendChild(img);
        }else if(i==3){
            img.src="./icons/black_queen.png";
            img.setAttribute("piece","queen");
            cell[i].appendChild(img);
        }else if(i==4){
            img.src="./icons/black_king.png";
            img.setAttribute("piece","king");
            cell[i].appendChild(img);
        }
    }
    
}

function deselectCell(){
    document.querySelectorAll(".row").forEach((row)=>{
        row.querySelectorAll(".cell").forEach((cell)=>{
            let Rindex=+cell.getAttribute('Rindex');
            let Cindex=+cell.getAttribute('Cindex');
            if(parseInt(Rindex+Cindex)%2==1){
                cell.style.backgroundColor="grey";
            }else{
                cell.style.backgroundColor="white";
            }
        });
    });
}


    // let rr=document.querySelectorAll(".row");
    // for(let i=0;i<rr.length;i++){
    //     let cc=rr[i].querySelectorAll(".cell");
    //     for(let j=0;j<cc.length;j++){
    //         cc[j].addEventListener("click",(event)=>{
    //             let r1=cc[j].getAttribute("Rindex");
    //             let c1=cc[j].getAttribute("Cindex");
    //             console.log(r1,c1,"hiiii");
    //             rr[i+1].querySelector(`div[Rindex='${r1}']`).style.backgroundColor="green";
    //         })
            
    //     }
    // }
    // document.querySelectorAll(".rows").forEach((r)=>{
    //     r.querySelectorAll(".cell").forEach((c)=>{
    //         let Rindex=cell.getAttribute('Rindex');
    //         let Cindex=cell.getAttribute('Cindex');
    //         let p=cell.getAttribute('player');
           
    //     })
    // });

function color(r,c,color){
   let a= document.querySelector(`div[Rindex='${r}'][Cindex='${c}']`);
   //a[c].style.backgroundColor=color;
   console.log("Color "+a);
   a.style.backgroundColor=color;
}

function showSuggestion(event,Rindex,Cindex,player){
    let piece=event.target.getAttribute("piece");
    //color(Rindex-1,Cindex,"green");
    if(piece=="pawn"){
        if(player=="white"){
            color(Rindex-1,Cindex,"green");
            let a= document.querySelectorAll(`div[Rindex='${Rindex-1}'][Cindex='${Cindex}']`);
            
            a.forEach((cell)=>{
                cell.addEventListener("click",(event2)=>{
                    event2.target.innerHTML=event.target.outerHTML;
                    event.target.remove();
                    deselectCell();
                    cell.addEventListener("click",eventCall);
                    return "2";
                });
                
            });

        }else{
            
            color(+Rindex+1,Cindex,"green");
            let a= document.querySelectorAll(`div[Rindex='${+Rindex+1}'][Cindex='${Cindex}']`);
            
            a.forEach((cell)=>{
                cell.addEventListener("click",(event2)=>{
                    event2.target.innerHTML=event.target.outerHTML;
                    event.target.remove();
                    deselectCell();
                    cell.addEventListener("click",eventCall);
                    return "2";
                });
                
            });
        }
    }else{
        console.log("implement for others");
        return "1";
    }

    
}

// document.querySelectorAll(".cell").forEach((cell)=>{
//     cell.addEventListener("click",(event)=>{
        
//         let Rindex=event.target.getAttribute('Rindex');
//         let Cindex=event.target.getAttribute('Cindex');
//         //let player=cell.getAttribute('player');
//         console.log(Rindex,Cindex);
//     });
// });

function eventCall(event){
    //console.log(cell.parentElement.getAttribute('Rindex'));
    let Rindex=event.target.parentElement.getAttribute('Rindex');
    let Cindex=event.target.parentElement.getAttribute('Cindex');
    let player=event.target.getAttribute('player');
    deselectCell();
    //console.log(player+" fghj");
    if(flag && player=="white"){
        let state=showSuggestion(event,Rindex,Cindex,player);
        event.target.parentElement.style.backgroundColor="pink";
        if(state="2"){
            flag=!flag;
        }
    }else if(!flag && player=="black"){
        let state=showSuggestion(event,Rindex,Cindex,player);
        event.target.parentElement.style.backgroundColor="pink";

        if(state="2"){
            flag=!flag;
        }
    }else{
        console.log("oponents turn");
    }
}

function start(){
    let isGameOver=false;
    document.querySelectorAll(`img`).forEach((cell)=>{ 
        cell.addEventListener("click",eventCall);
    });

}


