const timeline = () => {
    const timelineItems = Array.from(document.querySelectorAll(".timeline__item"));
    const timelineSection = document.querySelector(".section-timeline");
    
    timelineItems.forEach((item)=>{
        window.addEventListener('scroll', () => {
            const place = window.scrollY - timelineSection.offsetTop + 50; //scrollpositie op pagina
            const itemOffset = item.offsetTop; //kijk hoeveel van boven die is.
            console.log(itemOffset);
            const yearItem = parseInt(item.querySelector(".p-year-box").textContent); //Jaartal in item

            if (place >= itemOffset){
                const blockboxes = Array.from(document.querySelectorAll(".small-timeline__box"));
                    blockboxes.forEach((blockbox)=>{
                        const yearBox = parseInt(blockbox.querySelector(".small-timeline__year").textContent);
                        
                        if(yearItem === yearBox){
                            blockbox.classList.add("active");
                        }else{
                            blockbox.classList.remove("active");
                        }
                    });
                };
            });
        });