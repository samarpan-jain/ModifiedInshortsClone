import { NewsDetails } from "../store/slices/newsSlice";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { MdContentCopy } from "react-icons/md";
import { Bounce, ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Modal from "./modal";
import { useState } from "react";
import { getSummaryNewsFailedAction, getSummaryNewsRequestAction, getSummaryNewsSuccessAction } from "../store/slices/summaryNewsSlice";
import { envUrl } from "../assets/environment.dev";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";

function NewsCard({ title, description, url, image, publishedAt, source }: NewsDetails) {
    const [showModal, setShowModal] = useState(false);
    const [modalData, setModalData] = useState("");
    const dispatch = useDispatch();

    const handleClick = () => {
        setShowModal(!showModal);
    }

    const isLoading = useSelector((state: RootState) => state.newsSummary.isLoading);

    const actionBar = <div className="w-56 pt-4">
        <button className="bg-red-600 text-white w-24 rounded-md h-10 hover:bg-slate-400 float-right" onClick={handleClick}>Close</button>
    </div>

    const modal = <Modal toClose={handleClick} isLoading={isLoading} actionBar={actionBar} className={'h-3/4'}>
        <p className="text-blue-600 font-medium overflow-y-auto overflow-x-hidden">{modalData != "" ? modalData : <span style={{ backgroundColor: '#EBF1F4' }}>"Unable to generate and show summary at this time. Please check after sometime ...."</span>}</p>
    </Modal>;

    const readSummary = ((url: string) => {
        handleClick();
        dispatch(getSummaryNewsRequestAction(null));
        axios.post(`${envUrl.summary}`, { url })
            .then(response => {
                setModalData(response.data);
                dispatch(getSummaryNewsSuccessAction(response.data));
            })
            .catch(error => {
                setModalData("");
                dispatch(getSummaryNewsFailedAction([]));
                console.error(error);
            });
    })

    return <div>
        <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss pauseOnHover theme="light" transition={Bounce} />
        <div className="news-card-size">
            <div className="news-card-img-1 + news-card-displayImg + news-card-img-2" style={{ overflow: "hidden" }}>
                <div className="news-card-displayImg">
                    <img src={`${image}`} style={{ width: '100%', height: '100%' }} />
                </div>
            </div>
            <div className="card-content-size">
                <div>
                    <div>
                        <div>
                            <span className="news-headline">{title}</span>
                        </div>
                        <div className="news-metaData-size">
                            <span className="news-metaData-display">short</span>
                            &nbsp;on&nbsp;
                            <span>{publishedAt}</span>
                        </div>
                    </div>
                    <div>
                        <div className="news-content">
                            {description}
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card-read-more">
                        read more at <a target="_blank" href={`${url}`} className="news-link" rel="noreferrer">{source?.name}</a>
                        &nbsp;
                        <CopyToClipboard text={url} onCopy={() => toast.success('Link copied successfully')}>
                            <button title="copy to clipboard" className="copyIcon"><MdContentCopy /></button>
                        </CopyToClipboard>
                        <div className="float-right cursor-pointer">
                            <p onClick={() => readSummary(url)} style={{color:'blue'}}>Read Summary</p>
                            {showModal && modal}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default NewsCard