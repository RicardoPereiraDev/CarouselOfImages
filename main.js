
class Motoqueiro {

    //queremos criar um metodo que ao clicar no botao mude a foto para seguinte ou um botao para clicar mudar a foto para anterior

    page = 0;

    nextPage(){
        //const slides = bannerExemplo.getElementsByClassName('slide'); //vamos pegar os elementos que tem um class name slide
        

         //no caso de esta pagina for ==3 vou fazer com que a seguir esta pagina vá para a pagina 0 se não é porque ele está noutra pagina como por exemplo a 1 ou 2 e pode seguir para a proxima até chegar á 3 page

         this.page == 6 ? this.page = 0 : this.page++;

         this.setPage(); 
         this.changeSlide();

    }

    prevPage(){
        //const slides = bannerExemplo.getElementsByClassName('slide');

        this.page == 0 ? this.page = 6 : this.page--;

        this.setPage();
        this.changeSlide();
    }


    setPage(){
        const pages = bannerExemplo.getElementsByClassName('page');

        this.removeAllActivesClasses(pages);

        for(let i = 0; i < pages.length; i++){
            const page = pages[i];

            if(i == this.page){
                page.classList.add('active');
            }
        }
    }

    //vou criar aqui outra função: porque por exemplo quando clicar para ir para outro banner vou querer remover os actives de todas as pages do pagination
    removeAllActivesClasses(elementsOfListOfClassPage){
        for(let el of elementsOfListOfClassPage){
            el.classList.remove('active') // irei remover o active de todos os elementos da page que estiver active porque eu quando clicar para ir para outro banner, eu quero remover os Actives de todas as pages aqui do pagination e ai vou adicionar em qual é o slide que ele mudou 
        }
    }

    //Agora vou criar outra função com o objectivo de quando clicar numa das bolinhas ir para a pagina referente à bolinha que cliquei
    clickBallAndGoToReferentPage(index){
        this.page=index;

        this.setPage();
        this.changeSlide();
    }

    changeSlide(){
        const slides = bannerExemplo.getElementsByClassName('slide');

        for( let slide of slides){
            slide.style.transform = `translateX(-${this.page}00%)`;
        }
    }
}

const motoBoy = new Motoqueiro;

function _nextPage(){
    motoBoy.nextPage();
}

function _prevPage(){

    motoBoy.prevPage();
}

function _clickBallAndGoToReferentPage(index){
    motoBoy.clickBallAndGoToReferentPage(index);
}

const pages = bannerExemplo.getElementsByClassName('page');

for(let i = 0; i < pages.length; i++){
    const page = pages[i];

    page.onclick = () => _clickBallAndGoToReferentPage(i);
}




//Notas importantes:

//Agora vou ter que adicionar um style no elemento slide com base no page