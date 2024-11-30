import ReactDOM from "react-dom";
import { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import classNames from 'classnames';
import { ThreeDots } from "react-loader-spinner";


function Modal({ toClose, isLoading, children, actionBar, className }: any) {
    const [domReady, setDomReady] = useState(false);

    useEffect(() => {
        let elem = document.createElement('div');
        elem.classList.add('model-container1');
        document.body.appendChild(elem);
        document.body.classList.add('overflow-hidden')
        setDomReady(true);
        return () => {
            document.body.removeChild(elem);
            document.body.classList.remove('overflow-hidden')
            setDomReady(false);
        }
    }, []);

    return domReady ? ReactDOM.createPortal(
        <div>
            <div onClick={toClose} className="fixed inset-0 bg-gray-300 opacity-80"></div>
            <div className={classNames("fixed p-12 pt-6 bg-white z-10", className)} style={{ inset: '18%' }}>
                <div className="flex justify-end" ><span className="text-2xl cursor-pointer"><RxCross2 onClick={toClose} /></span></div>
                <div className="flex flex-col justify-between h-full">
                    <h2 className="text-2xl font-bold pb-2">Summarized News from AI:</h2>
                    {!isLoading ? children : <div className="w-1/12 m-auto h-full" style={{ alignContent: 'center' }}> <ThreeDots visible={true} height="80" width="80" color="black" radius="9" ariaLabel="three-dots-loading" wrapperStyle={{}}
                        wrapperClass="" /> </div>}
                    <div className="flex justify-end">
                        {actionBar}
                    </div>
                </div>
            </div>
        </div>, document.querySelector('.model-container1')!) : null;
}

export default Modal