import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { ThreeDots } from "react-loader-spinner"

function Spinner() {
    const [domReady, setDomReady] = useState(false);

    useEffect(() => {
        const elem = document.createElement('div');
        elem.classList.add('model-container');
        document.body.appendChild(elem);
        document.body.classList.add('overflow-hidden')
        setDomReady(true);
        return () => {
            document.body.removeChild(elem);
            document.body.classList.remove('overflow-hidden')
            setDomReady(false);
        }
    }, []);

    return (
        domReady ? ReactDOM.createPortal(
            <div className="w-full">
                <div className="fixed inset-0 bg-gray-600 opacity-80">
                <div className="w-1/12 m-auto h-full" style={{alignContent: 'center'}}>
                    <ThreeDots
                        visible={true}
                        height="80"
                        width="80"
                        color="black"
                        radius="9"
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                    />
                </div>
                </div>
            </div>, document.querySelector('.model-container')!) : null)
}

export default Spinner