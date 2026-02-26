let currentTab = 'all';
let tabActive = ["bg-blue-600", "text-white"];
let tabInActive = ["bg-transparent", "text-slate-700", "border-slate-200"];

const cardContainer = document.getElementById('card-container');
const interviewContainer = document.getElementById('interview-container');
const rejectContainer = document.getElementById('reject-container');
const emptyState = document.getElementById('empty-state');

function switchTab(tab){
    const tabs = ['all', 'interview', 'reject'];
    currentTab = tab;

    for(const t of tabs){
        const tabName = document.getElementById('btn-' + t);

         if(t === tab){
            tabName.classList.remove(...tabInActive);
            tabName.classList.add(...tabActive);
        }
        else{
            tabName.classList.add(...tabInActive);
            tabName.classList.remove(...tabActive);
        }
        //-------------------------------------------
                    
    }

    const allSection = [cardContainer, interviewContainer, rejectContainer];

    for(const section of allSection){
        section.classList.add('hidden');
    }

    emptyState.classList.add("hidden");

    if(tab === 'all'){
           cardContainer.classList.remove("hidden"); 
           if(cardContainer.children.length < 1){
            emptyState.classList.remove("hidden");
           }
        }
        else if(tab === 'interview'){
            interviewContainer.classList.remove("hidden");
            if(interviewContainer.children.length < 1){
                emptyState.classList.remove("hidden");
            }
        }
        else{
            rejectContainer.classList.remove("hidden");
            if(rejectContainer.children.length < 1){
                emptyState.classList.remove("hidden");
            }
        }
    //updateStat();
}



const countTotal = document.getElementById('count-total');
const countInterview = document.getElementById('count-interview');
const countReject = document.getElementById('count-reject');
const countAvailable = document.getElementById('count-available');

countTotal.innerText = cardContainer.children.length;

switchTab(currentTab);


document.getElementById('job-container').addEventListener('click', function(event){
    const clickedElement = event.target; 
    const card = clickedElement.closest(".card"); 
    const parent = card.parentNode;      
    const status = card.querySelector(".statas")
    

     if(clickedElement.classList.contains("interview")){
         status.innerText = 'INTERVIEW'; 
         interviewContainer.appendChild(card);
         updateStat();
     }

     if(clickedElement.classList.contains("reject")){
         status.innerText = 'REJECTED';
         rejectContainer.appendChild(card);
        updateStat();
     }

      if(clickedElement.classList.contains("delete")){
         parent.removeChild(card);
         updateStat();
     }
})


 function updateStat(){
     const counts = {
         all: cardContainer.children.length,
         interview: interviewContainer.children.length,
         rejected: rejectContainer.children.length,
     };

    countTotal.innerText = counts.all;
    countInterview.innerText = counts.interview; 
    countReject.innerText = counts.rejected;
    countAvailable.innerText = counts[currentTab];
    if(counts[currentTab] < 1){
        emptyState.classList.remove("hidden");
    }
    else{
        emptyState.classList.add("hidden");
    }
}

updateStat();


