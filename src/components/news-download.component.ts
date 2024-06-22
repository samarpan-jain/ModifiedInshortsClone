import html2canvas from "html2canvas";

const exportAsImage = async(element:HTMLElement,imageFileName:string) =>{
    const canvas = await html2canvas(element,{
        useCORS:true,
        allowTaint: false
    });
    const image= canvas.toDataURL('image/png');
    downloadImage(image,imageFileName);
}

const downloadImage = (blob:string, fileName:string)=>{
    const tempLink = window.document.createElement('a');
    tempLink.style.display = "none";
    tempLink.download = fileName;
    tempLink.href = blob;
    document.body.appendChild(tempLink);
    tempLink.click();
    document.body.removeChild(tempLink);
    tempLink.remove();
}

export const delay = (ms:number)=>{
    return new Promise(resolve=> setTimeout(resolve,ms));
}

export default exportAsImage;