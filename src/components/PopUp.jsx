import logo from '../img/LaIA_logo.png'
import fechar_popup from '../img/x_fechar_popup.png'

function PopUp () {

    const popup = document.getElementById("popup")

    function handlePopUp (open){
        if(open)
            popup.classList.add("opened")
        else
            popup.classList.remove("opened")
    }

    return(
        <div className="popup opened flex flex-col h-22 max-h-22 max-w-85 bg-[#142b6fea] items-center rounded-xl p-3 gap-1 shadow-[#00000089] border-[#030044] border-1 box-border"
        id="popup"
        >
            <div className="flex flex-row justify-center">
                <img className="max-h-7 relative left-2" src={logo} alt="LaIA"></img>  
                <button className="flex justify-center items-center relative h-5 w-5 max-h-5 max-w-5 bg-[#dc2929] border-1 border-white rounded-xl transform active:scale-97 cursor-pointer left-35 bottom-4.5"
                    onClick={handlePopUp(false)}
                >
                    <img className="h-2 w-2" src={fechar_popup}></img>
                </button>
            </div>
            <p className="text-[#ffffff] text-center">Seu email foi enviado com sucesso!</p>
        </div>
    )
}

export default PopUp